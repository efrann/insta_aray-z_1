import http.client
import json

def get_instagram_data(username, endpoint):
    conn = http.client.HTTPSConnection("instagram-scraper-api2.p.rapidapi.com")
    headers = {
        'x-rapidapi-key': "9cf1b4a59emsh2f1920dd6f80a7ap1c60abjsn20a97356e1d4",
        'x-rapidapi-host': "instagram-scraper-api2.p.rapidapi.com"
    }
    conn.request("GET", endpoint.format(username), headers=headers)
    res = conn.getresponse()
    data = res.read()
    return json.loads(data.decode("utf-8"))

def process_user_data(data):
    return {
        "data": {
            "about": {
                "country": data["data"]["about"]["country"],
                "date_joined": data["data"]["about"]["date_joined"],
                "date_verified": data["data"]["about"]["date_verified"],
                "is_verified": data["data"]["about"]["is_verified"],
                "username": data["data"]["about"]["username"]
            },
            "bio_links": data["data"]["bio_links"],
            "biography": data["data"]["biography"],
            "category": data["data"]["category"],
            "category_id": data["data"]["category_id"],
            "full_name": data["data"]["full_name"],
            "follower_count": data["data"]["follower_count"],
            "following_count": data["data"]["following_count"],
            "hd_profile_pic_versions": data["data"]["hd_profile_pic_versions"][0] if data["data"]["hd_profile_pic_versions"] else None,
            "location_data": {
                "city_name": data["data"]["location_data"]["city_name"]
            },
            "media_count": data["data"]["media_count"],
            "public_phone_number": data["data"]["public_phone_number"]
        }
    }

def process_posts_data(data):
    processed_posts = {
        "data": {
            "items": []
        }
    }
    
    for item in data.get("data", {}).get("items", []):
        processed_item = {
            "caption": {
                "created_at": item.get("caption", {}).get("created_at"),
                "created_at_utc": item.get("caption", {}).get("created_at_utc"),
                "text": item.get("caption", {}).get("text"),
            },
            "like_count": item.get("like_count", 0),
            "comment_count": item.get("comment_count", 0),
            "thumbnail_url": item.get("thumbnail_url"),
            "tagged_users": [
                {"user": {"username": user.get("user", {}).get("username")}}
                for user in item.get("tagged_users", [])
            ],
        }
        processed_posts["data"]["items"].append(processed_item)
    
    processed_posts["data"]["items"].sort(key=lambda x: x["like_count"], reverse=True)
    
    return processed_posts
