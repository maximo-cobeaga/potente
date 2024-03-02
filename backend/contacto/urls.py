from django.urls import path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()

router.register(r'contacto', views.ContactoView, 'contacto')

urlpatterns = [
    path('', views.ContactoView.as_view(), name='contacto')
]
