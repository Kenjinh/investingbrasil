from django.urls import path
from . import views

urlpatterns = [
    #Templates Area
    path('', views.HomePage.as_view(), name='Home-Page')
]