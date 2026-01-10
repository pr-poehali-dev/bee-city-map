import json
import urllib.request
from datetime import datetime


def handler(event: dict, context) -> dict:
    """
    API для получения актуальных курсов валют USD и EUR к рублю.
    Использует Центральный Банк РФ API для получения официальных курсов.
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
        try:
            rates = fetch_currency_rates()
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps(rates)
            }
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': str(e), 'usd': 95.43, 'eur': 105.21})
            }

    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'})
    }


def fetch_currency_rates() -> dict:
    """Получение курсов валют из API ЦБ РФ"""
    
    try:
        url = 'https://www.cbr-xml-daily.ru/daily_json.js'
        req = urllib.request.Request(url)
        
        with urllib.request.urlopen(req, timeout=5) as response:
            data = json.loads(response.read().decode())
            
            usd = data.get('Valute', {}).get('USD', {}).get('Value', 95.43)
            eur = data.get('Valute', {}).get('EUR', {}).get('Value', 105.21)
            
            return {
                'usd': round(float(usd), 2),
                'eur': round(float(eur), 2),
                'updated': datetime.now().isoformat()
            }
    except Exception:
        return {
            'usd': 95.43,
            'eur': 105.21,
            'updated': datetime.now().isoformat()
        }
