from django.shortcuts import render
from .models import Propiedad, ImagenPropiedad
from .seriallizers import PropiedadSerializer, ImagenPropiedadSerializer
from rest_framework import viewsets

# Create your views here.


class PropiedadView(viewsets.ModelViewSet):
    serializer_class = PropiedadSerializer
    queryset = Propiedad.objects.all()


class ImagenPropiedadView(viewsets.ModelViewSet):
    serializer_class = ImagenPropiedadSerializer
    queryset = ImagenPropiedad.objects.all()
