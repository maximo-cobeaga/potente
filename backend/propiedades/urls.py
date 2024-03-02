from rest_framework import routers
from django.urls import path, include
from . import views

router = routers.DefaultRouter()
router.register(r'propiedad', views.PropiedadView, 'propiedad')
router.register(r'amenities', views.AmenitiesView, 'amenities')
router.register(r'tipos', views.TiposView, 'tipos')
router.register(r'etiquetas', views.EtiquetasView, 'etiquetas')

urlpatterns = [
    path('', include(router.urls))
]
