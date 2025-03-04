from django.db import models

# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discountPercentage = models.FloatField()
    stock = models.IntegerField()
    category = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    images = models.JSONField()
    rating = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)

    def __str__(self):
        return self.title