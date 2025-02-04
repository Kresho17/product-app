import json
import os
import django


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "product_service.settings")
django.setup()

from products.models import Product

def load_products():

    for i in range(1, 101):
        data = {
            "id": i,
            "title": f"iPhone {i}",
            "description": "An apple mobile which is nothing like apple",
            "discountPercentage": round(10 + (i % 20), 2),
            "price": 549 + (i * 5),
            "rating": 4.3,
            "brand": "Apple",
            "stock": 96,
            "category": "smartphone",
            "images": [
                "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
                "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
                "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
            ]
        }

        # Update or create product in database
        product, created = Product.objects.update_or_create(
            id=data["id"],
            defaults={
                "title": data["title"],
                "description": data["description"],
                "discountPercentage": data["discountPercentage"],
                "price": data["price"],
                "rating": data["rating"],
                "brand": data["brand"],
                "stock": data["stock"],
                "category": data["category"],
                "images": data["images"]
            }
        )

        if created:
            print(f"✅ Product created: {product.title}")
        else:
            print(f"🔄 Product updated: {product.title}")

if __name__ == "__main__":
    load_products()
    print("Data uploaded to the database!")
