from rest_framework import serializers
from .models import Propiedad, ImagenPropiedad


class ImagenPropiedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagenPropiedad
        fields = '__all__'


class PropiedadSerializer(serializers.ModelSerializer):
    imagenes = ImagenPropiedadSerializer(many=True, read_only=True)

    class Meta:
        model = Propiedad
        fields = [
            'ficha',
            'titulo_propiedad',
            'tipo_propiedad',
            'descripcion',
            'estado',
            'estado_ac',
            'moneda',
            'precio',
            'publicar_precio',
            'etiquetas',
            'dormitorios',
            'ambientes',
            'baños',
            'toilettes',
            'metros_totales',
            'metros_cubiertos',
            'metros_descubiertos',
            'metros_semidescubiertos',
            'estrenar',
            'antiguedad',
            'expensas',
            'orientacion',
            'plantas',
            'cocheras',
            'amenities',
            'activa',
            'imagenes',
        ]
