import http.client
import json

def get_instagram_user_info(username):
    conn = http.client.HTTPSConnection("instagram-scraper-api2.p.rapidapi.com")
    headers = {
        'x-rapidapi-key': "f22918d99dmsh71acada7ddbd749p127222jsna09892e6c54f",
        'x-rapidapi-host': "instagram-scraper-api2.p.rapidapi.com"
    }
    conn.request("GET", f"/v1/info?username_or_id_or_url={username}&include_about=true", headers=headers)
    res = conn.getresponse()
    data = res.read()
    return json.loads(data.decode("utf-8"))

def get_instagram_posts(username):
    conn = http.client.HTTPSConnection("instagram-scraper-api2.p.rapidapi.com")
    headers = {
        'x-rapidapi-key': "9cf1b4a59emsh2f1920dd6f80a7ap1c60abjsn20a97356e1d4",
        'x-rapidapi-host': "instagram-scraper-api2.p.rapidapi.com"
    }
    conn.request("GET", f"/v1.2/posts?username_or_id_or_url={username}", headers=headers)
    res = conn.getresponse()
    data = res.read()
    return json.loads(data.decode("utf-8"))

def process_instagram_data(user_info, posts_data):
    processed_data = {
        "data": {
            "about": {
                "country": user_info.get("data", {}).get("about", {}).get("country"),
                "date_joined": user_info.get("data", {}).get("about", {}).get("date_joined"),
                "date_verified": user_info.get("data", {}).get("about", {}).get("date_verified"),
                "is_verified": user_info.get("data", {}).get("about", {}).get("is_verified"),
                "username": user_info.get("data", {}).get("about", {}).get("username")
            },
            "bio_links": user_info.get("data", {}).get("bio_links", []),
            "biography": user_info.get("data", {}).get("biography"),
            "category": user_info.get("data", {}).get("category"),
            "category_id": user_info.get("data", {}).get("category_id"),
            "full_name": user_info.get("data", {}).get("full_name"),
            "hd_profile_pic_versions": user_info.get("data", {}).get("hd_profile_pic_versions", [])[:1],
            "location_data": {
                "city_name": user_info.get("data", {}).get("location_data", {}).get("city_name")
            },
            "media_count": user_info.get("data", {}).get("media_count"),
            "profile_pic_url": user_info.get("data", {}).get("profile_pic_url"),
            "profile_pic_url_hd": user_info.get("data", {}).get("profile_pic_url_hd"),
            "public_email": user_info.get("data", {}).get("public_email"),
            "public_phone_number": user_info.get("data", {}).get("public_phone_number"),
            "followers_count": user_info.get("data", {}).get("follower_count"),
            "following_count": user_info.get("data", {}).get("following_count"),
            "posts": {
                "items": []
            }
        }
    }
    
    for item in posts_data.get("data", {}).get("items", []):
        processed_item = {
            "caption": {
                "created_at": item.get("caption", {}).get("created_at"),
                "created_at_utc": item.get("caption", {}).get("created_at_utc"),
                "text": item.get("caption", {}).get("text")
            },
            "like_count": item.get("like_count", 0),
            "comment_count": item.get("comment_count"),
            "thumbnail_url": item.get("thumbnail_url")[1],
            "tagged_users": [
                {"user": {"username": user.get("user", {}).get("username")}}
                for user in item.get("tagged_users", [])
            ],
            "top_likers": item.get("top_likers", [])
        }
        processed_data["data"]["posts"]["items"].append(processed_item)
    
    # Sort the items by like_count in descending order
    processed_data["data"]["posts"]["items"].sort(key=lambda x: x["like_count"], reverse=True)
    
    return processed_data

def main():
    username = "alibicim"
    user_info = get_instagram_user_info(username)
    posts_data = get_instagram_posts(username)
    processed_data = process_instagram_data(user_info, posts_data)
    print(json.dumps(processed_data, indent=4, ensure_ascii=False))

if __name__ == "__main__":
    main()
