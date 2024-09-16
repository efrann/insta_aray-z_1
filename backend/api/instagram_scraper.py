import http.client
import json

def get_instagram_data(username, endpoint):
    conn = http.client.HTTPSConnection("instagram-scraper-api2.p.rapidapi.com")
    headers = {
        'x-rapidapi-key': "f22918d99dmsh71acada7ddbd749p127222jsna09892e6c54f",
        'x-rapidapi-host': "instagram-scraper-api2.p.rapidapi.com"
    }
    conn.request("GET", endpoint.format(username), headers=headers)
    res = conn.getresponse()
    data = res.read()
    return json.loads(data.decode("utf-8"))

def process_user_data(data):
    user_data = data["data"]
    is_private = user_data.get("is_private", False)

    processed_data = {
        "data": {
            "about": {
                "country": user_data["about"].get("country"),
                "date_joined": user_data["about"].get("date_joined"),
                "date_verified": user_data["about"].get("date_verified"),
                "is_verified": user_data["about"].get("is_verified"),
                "username": user_data["about"].get("username")
            },
            "bio_links": [{"url": link.get("url")} for link in user_data.get("bio_links", []) if link.get("url")],
            "biography": user_data.get("biography", ""),
            "full_name": user_data.get("full_name", ""),
            "follower_count": user_data.get("follower_count", 0),
            "following_count": user_data.get("following_count", 0),
            "media_count": user_data.get("media_count", 0),
            "is_private": is_private,
            "hd_profile_pic_versions": user_data.get("hd_profile_pic_versions", [{}])[0] if user_data.get("hd_profile_pic_versions") else {},
        }
    }

    if not is_private:
        processed_data["data"].update({
            "category": user_data.get("category"),
            "category_id": user_data.get("category_id"),
            "location_data": {
                "city_name": user_data.get("location_data", {}).get("city_name")
            },
            "public_phone_number": user_data.get("public_phone_number")
        })

    return processed_data

def process_posts_data(data):
    processed_posts = {
        "data": {
            "items": []
        }
    }
    
    if data.get("data", {}).get("is_private", False):
        # Gizli profil için boş liste döndür
        return processed_posts
    
    for item in data.get("data", {}).get("items", []):
        processed_item = {
            "caption": {
                "created_at": item.get("caption", {}).get("created_at", ""),
                "created_at_utc": item.get("caption", {}).get("created_at_utc", ""),
                "text": item.get("caption", {}).get("text", ""),
            },
            "like_count": item.get("like_count", 0),
            "comment_count": item.get("comment_count", 0),
            "thumbnail_url": item.get("thumbnail_url", ""),
            "tagged_users": [
                {"user": {"username": user.get("user", {}).get("username", "")}}
                for user in item.get("tagged_users", [])
            ],
        }
        
        image_versions = item.get("image_versions", {}).get("items", [])
        if image_versions:
            processed_item["caption"]["url"] = min(image_versions, key=lambda x: x.get("width", 0)).get("url", "")
        else:
            processed_item["caption"]["url"] = ""
        
        processed_posts["data"]["items"].append(processed_item)
    
    processed_posts["data"]["items"].sort(key=lambda x: x["like_count"], reverse=True)
    
    return processed_posts
