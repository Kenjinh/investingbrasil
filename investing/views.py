from django.shortcuts import render
from rest_framework import generics
from rest_framework.renderers import TemplateHTMLRenderer


# Create your views here.

class HomePage(generics.ListAPIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'public/index.html'

    def get(self, request, *args, **kwargs):
        args = {
            'title': 'Home Page'
        }
        return render(request, self.template_name, args)
