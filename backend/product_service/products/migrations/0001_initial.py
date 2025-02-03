# Generated by Django 4.2.18 on 2025-02-03 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('discount_percentage', models.FloatField()),
                ('stock', models.IntegerField()),
                ('category', models.CharField(max_length=100)),
                ('brand', models.CharField(max_length=100)),
                ('images', models.JSONField()),
            ],
        ),
    ]
