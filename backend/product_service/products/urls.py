from django.urls import path
from .views import ProductListAPIView
from .views import ProductDetailAPIView

urlpatterns = [
    path("products/", ProductListAPIView.as_view(), name="product-list"),
    path("products/<int:id>/", ProductDetailAPIView.as_view(), name="product-detail"),
]
