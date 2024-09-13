from ..models import InstagramAnalysis


def prepare_for_ai_analysis(username):
    try:
        analysis = InstagramAnalysis.objects.get(username=username)
        popular_posts = analysis.popular_posts.all()

        ai_input = f"User Profile:\n"
        ai_input += f"Username: {analysis.username}\n"
        ai_input += f"Full Name: {analysis.full_name}\n"
        ai_input += f"Biography: {analysis.biography}\n"
        ai_input += f"Followers: {analysis.followers_count}\n"
        ai_input += f"Following: {analysis.follows_count}\n"
        ai_input += f"Total Posts: {analysis.posts_count}\n\n"

        ai_input += "Popular Posts:\n"
        for i, post in enumerate(popular_posts, 1):
            ai_input += f"Post {i}:\n"
            ai_input += f"Caption: {post.caption}\n"
            ai_input += f"Location: {post.location}\n"
            ai_input += f"Likes: {post.likes_count}\n"
            ai_input += f"Comments: {post.comments_count}\n\n"

        return ai_input
    except InstagramAnalysis.DoesNotExist:
        return None