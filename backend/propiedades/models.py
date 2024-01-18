from django.db import models
from django.contrib.auth.models import User
from django.utils.safestring import mark_safe


# Create your models here.
MONEDAS = [
    ('ARS', 'ars'),
    ('USD', 'usd'),
]

ESTADOS = [
    ('En venta', 'En venta'),
    ('En alquiler', 'En alquiler'),
    ('En alquiler temporal', 'En alquiler temporal'),
]
ESTADOS_A = [
    ('En venta', 'En venta',),
    ('En alquiler', 'En alquiler'),
    ('En alquiler temporal', 'En alquiler temporal'),
    ('Vendido', 'Vendido'),
    ('Alquilado', 'Alquilado'),
    ('Alquilado temporalmente', 'Alquilado temporalmente'),
    ('Reservado', 'Reservado'),
]

ORIENTACION = [
    ('Norte', 'Norte'),
    ('Sur', 'Sur'),
    ('Este', 'Este'),
    ('Oeste', 'Oeste'),
]

PLANTAS = [
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5 o mas', '5 o mas'),
]

LUMINOSIDAD = [
    ('Poco luminoso', 'Poco luminoso'),
    ('Luminoso', 'Luminoso'),
    ('Muy luminoso', 'Muy luminoso'),
]


class Etiquetas(models.Model):
    etiqueta = models.CharField(max_length=100)

    def __str__(self):
        return self.etiqueta

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Etiquetas'
        verbose_name_plural = 'Etiquetas'


class Tipos(models.Model):
    tipo = models.CharField(max_length=100)

    def __str__(self):
        return self.tipo

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Tipos de Propiedades'
        verbose_name_plural = 'Tipos de Propiedades'


class AmenitiesPropiedad(models.Model):
    tipo = models.CharField(max_length=100, blank=True, null=True, default='')

    def __str__(self):
        return self.tipo

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Amenities'
        verbose_name_plural = 'Amenities'


class Propiedad(models.Model):
    ficha = models.TextField()
    titulo_propiedad = models.CharField(max_length=200)
    tipo_propiedad = models.ForeignKey(Tipos, on_delete=models.CASCADE)
    descripcion = models.TextField()
    estado = models.CharField(max_length=50, choices=ESTADOS, default=None)
    estado_ac = models.CharField(
        max_length=50, choices=ESTADOS_A, default=None)
    moneda = models.CharField(max_length=50, choices=MONEDAS, default=None)
    precio = models.IntegerField(null=True)
    publicar_precio = models.BooleanField()
    etiquetas = models.ForeignKey(Etiquetas, on_delete=models.CASCADE)
    dormitorios = models.IntegerField(null=True)
    ambientes = models.IntegerField(null=True)
    baños = models.IntegerField(null=True)
    toilettes = models.IntegerField(null=True)
    metros_totales = models.FloatField(null=True)
    metros_cubiertos = models.FloatField(null=True)
    metros_descubiertos = models.FloatField(null=True)
    metros_semidescubiertos = models.FloatField(null=True)
    estrenar = models.BooleanField(default=False)
    antiguedad = models.IntegerField(null=True)
    expensas = models.FloatField(null=True)
    orientacion = models.TextField(
        max_length=25, choices=ORIENTACION, default=None)
    plantas = models.TextField(max_length=25, choices=PLANTAS, default=None)
    cocheras = models.IntegerField(null=True)
    amenities = models.ManyToManyField(AmenitiesPropiedad)
    activa = models.BooleanField(default=False)
    autor = models.ForeignKey(
        User, null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo_propiedad

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Propiedades'
        verbose_name_plural = 'Propiedades'


class ImagenPropiedad(models.Model):
    prop = models.ForeignKey(
        Propiedad, on_delete=models.CASCADE, related_name='imagenes')
    imagen = models.ImageField(
        upload_to='img', default='', null=True, blank=True)

    def image_tag(self):
        return mark_safe('<img src="%s" width="150" height="150" />' % (self.imagen.url))

    image_tag.short_description = 'Image'
