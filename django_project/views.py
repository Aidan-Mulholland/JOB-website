from django.views.generic import TemplateView, ListView
from updates.models import Post

class HomePageView(TemplateView):
    template_name = "home.html"

class AboutPageView(ListView):
    model = Post
    template_name = "about.html"