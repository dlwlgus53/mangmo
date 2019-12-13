
from django.urls import path
from . import views

urlpatterns = [
    path('index', views.index, name='map'),
    path('frame', views.frame, name='frame'),
]