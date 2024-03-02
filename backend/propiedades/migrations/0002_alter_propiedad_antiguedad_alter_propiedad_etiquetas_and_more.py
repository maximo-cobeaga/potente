# Generated by Django 4.2.6 on 2024-01-20 17:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('propiedades', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propiedad',
            name='antiguedad',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='propiedad',
            name='etiquetas',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='propiedades.etiquetas'),
        ),
        migrations.AlterField(
            model_name='propiedad',
            name='expensas',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='propiedad',
            name='ficha',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='propiedad',
            name='orientacion',
            field=models.TextField(blank=True, choices=[('Norte', 'Norte'), ('Sur', 'Sur'), ('Este', 'Este'), ('Oeste', 'Oeste')], default=None, max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name='propiedad',
            name='plantas',
            field=models.TextField(blank=True, choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5 o mas', '5 o mas')], default=None, max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name='propiedad',
            name='publicar_precio',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='propiedad',
            name='toilettes',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
