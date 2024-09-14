import requests

def analyze_with_ai(instagram_data):
    # Yapay zeka servisinin URL'si
    AI_SERVICE_URL = "https://your-ai-service-url.com/analyze"
    
    # Instagram verilerini AI servisine gönder
    response = requests.post(AI_SERVICE_URL, json=instagram_data)
    
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception("AI service request failed")