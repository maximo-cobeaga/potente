from django.shortcuts import render
from .models import Propiedad, ImagenPropiedad, AmenitiesPropiedad, Etiquetas, Tipos
from .seriallizers import PropiedadSerializer, ImagenPropiedadSerializer, AmenitiesPropiedadSerializer, TiposSerializer, EtiquetasSerializer
from rest_framework import viewsets

# Create your views here.


class PropiedadView(viewsets.ModelViewSet):
    serializer_class = PropiedadSerializer
    queryset = Propiedad.objects.all()


class ImagenPropiedadView(viewsets.ModelViewSet):
    serializer_class = ImagenPropiedadSerializer
    queryset = ImagenPropiedad.objects.all()


class AmenitiesView(viewsets.ModelViewSet):
    serializer_class = AmenitiesPropiedadSerializer
    queryset = AmenitiesPropiedad.objects.all()


class TiposView(viewsets.ModelViewSet):
    serializer_class = TiposSerializer
    queryset = Tipos.objects.all()


class EtiquetasView(viewsets.ModelViewSet):
    serializer_class = EtiquetasSerializer
    queryset = Etiquetas.objects.all()
