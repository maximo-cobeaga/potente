from django.contrib import admin
from django.db import models
from django.forms import CheckboxSelectMultiple
from .models import *

# Register your models here.


class AmenitiesPropiedadAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.ManyToManyField: {'widget': CheckboxSelectMultiple},
    }


class ImagenPropiedadAdmin(admin.TabularInline):
    model = ImagenPropiedad
    fields = ['imagen', 'image_tag']
    readonly_fields = ['image_tag']


class PropiedadAdmin(admin.ModelAdmin):
    inlines = [
        ImagenPropiedadAdmin
    ]
    list_display = ('titulo_propiedad', 'ficha', 'estado', 'estado_ac', 'precio',
                    'autor', 'oficina', 'destacar', 'activa',)

    def save_model(self, request, obj, form, change):
        if getattr(obj, 'autor', None) is None:
            obj.autor = request.user
        obj.save()


admin.site.register(Propiedad, PropiedadAdmin)
admin.site.register(Tipos)
admin.site.register(Etiquetas)
admin.site.register(AmenitiesPropiedad)
