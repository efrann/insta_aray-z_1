import http.client
import json

conn = http.client.HTTPSConnection("instagram-scraper-api2.p.rapidapi.com")

headers = {
    'x-rapidapi-key': "9cf1b4a59emsh2f1920dd6f80a7ap1c60abjsn20a97356e1d4",
    'x-rapidapi-host': "instagram-scraper-api2.p.rapidapi.com"
}

conn.request("GET", "/v1/highlights?username_or_id_or_url=yalcin_alaman", headers=headers)

res = conn.getresponse()
data = res.read()

# JSON verisini yükle
json_data = json.loads(data.decode("utf-8"))

# İstenen bilgileri içeren yeni bir sözlük oluştur
output = {
    "Highlighted Stories": []
}

for item in json_data["data"]["items"]:
    simplified_item = {
        "title": item["title"],
        "cover_image_url": item["cover_media"]["cropped_image_version"]["url"]
    }
    output["Highlighted Stories"].append(simplified_item)

# Sadeleştirilmiş veriyi yazdır
print(json.dumps(output, indent=2, ensure_ascii=False))

