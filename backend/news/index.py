import json
import os
from datetime import datetime
from typing import Dict, List, Optional
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    """
    API для получения актуальных новостей городов России.
    Интегрирован с NewsAPI для получения свежих новостей в реальном времени.
    """
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method == 'GET':
        query_params = event.get('queryStringParameters') or {}
        city = query_params.get('city', '')
        
        try:
            news = fetch_city_news(city)
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'news': news, 'city': city})
            }
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': str(e)})
            }

    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'})
    }


def fetch_city_news(city: str) -> List[Dict]:
    """Получение новостей города через NewsAPI"""
    
    api_key = os.environ.get('NEWS_API_KEY')
    if not api_key:
        return get_fallback_news(city)
    
    # Поиск новостей по городу
    query = urllib.parse.quote(f'{city} Россия')
    url = f'https://newsapi.org/v2/everything?q={query}&language=ru&sortBy=publishedAt&pageSize=3&apiKey={api_key}'
    
    try:
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req, timeout=5) as response:
            data = json.loads(response.read().decode())
            
            if data.get('status') == 'ok' and data.get('articles'):
                news = []
                for article in data['articles'][:3]:
                    news.append({
                        'title': article.get('title', ''),
                        'date': format_date(article.get('publishedAt', '')),
                        'source': article.get('source', {}).get('name', 'Новости'),
                        'description': article.get('description', '')[:200]
                    })
                return news
            else:
                return get_fallback_news(city)
    except Exception:
        return get_fallback_news(city)


def format_date(date_str: str) -> str:
    """Форматирование даты из ISO в читаемый формат"""
    try:
        dt = datetime.fromisoformat(date_str.replace('Z', '+00:00'))
        months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
        return f'{dt.day} {months[dt.month - 1]} {dt.year}'
    except Exception:
        return datetime.now().strftime('%d.%m.%Y')


def get_fallback_news(city: str) -> List[Dict]:
    """Заглушка для новостей если API недоступен"""
    today = datetime.now()
    months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
              'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    date_str = f'{today.day} {months[today.month - 1]} {today.year}'
    
    return [
        {
            'title': f'Актуальные события в городе {city}',
            'date': date_str,
            'source': 'Местные новости',
            'description': 'Новости обновляются в реальном времени. Пожалуйста, обновите страницу через несколько минут.'
        }
    ]
