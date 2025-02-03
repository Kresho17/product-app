from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer
from .pagination import CustomLimitOffsetPagination


class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.order_by('pk')
    serializer_class = ProductSerializer
    pagination_class = CustomLimitOffsetPagination


class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'