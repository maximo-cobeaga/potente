from rest_framework import serializers
from .models import Propiedad, ImagenPropiedad, AmenitiesPropiedad, Tipos, Etiquetas


class ImagenPropiedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagenPropiedad
        fields = '__all__'


class AmenitiesPropiedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = AmenitiesPropiedad
        fields = '__all__'


class TiposSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipos
        fields = '__all__'


class EtiquetasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Etiquetas
        fields = '__all__'


class PropiedadSerializer(serializers.ModelSerializer):
    imagenes = ImagenPropiedadSerializer(many=True, read_only=True)

    class Meta:
        model = Propiedad
        fields = [
            'id',
            'ficha',
            'titulo_propiedad',
            'tipo_propiedad',
            'ubicacion',
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
            'destacar',
            'oficina'
        ]
