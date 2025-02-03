import json
import os
import django


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "product_service.settings")
django.setup()

from products.models import Product


data = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "discountPercentage": 12.96,
        "price": 549,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 2,
        "title": "Samsung Galaxy S21",
        "description": "A sleek and powerful Samsung smartphone with cutting-edge technology",
        "discountPercentage": 15.5,
        "price": 799,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 3,
        "title": "Google Pixel 5",
        "description": "The latest Google smartphone with an amazing camera and smooth experience",
        "discountPercentage": 10.3,
        "price": 699,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 4,
        "title": "OnePlus 9 Pro",
        "description": "A high-performance phone with an elegant design and fast charging",
        "discountPercentage": 20.7,
        "price": 999,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 5,
        "title": "Xiaomi Mi 11",
        "description": "An affordable flagship with powerful hardware and a stunning display",
        "discountPercentage": 18.9,
        "price": 749,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 6,
        "title": "Huawei P40 Pro",
        "description": "A premium smartphone with excellent photography features and 5G support",
        "discountPercentage": 12.0,
        "price": 899,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 7,
        "title": "Sony Xperia 1 II",
        "description": "A camera-centric smartphone for those who want a professional photography experience",
        "discountPercentage": 25.1,
        "price": 1099,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 8,
        "title": "Oppo Find X3 Pro",
        "description": "An elegantly designed phone with a focus on camera quality and high performance",
        "discountPercentage": 14.8,
        "price": 999,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 9,
        "title": "Motorola Edge Plus",
        "description": "A large-screen smartphone with powerful hardware and a stunning display",
        "discountPercentage": 18.2,
        "price": 1099,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 10,
        "title": "LG Velvet",
        "description": "A sleek design with a solid mid-range performance and good value for the price",
        "discountPercentage": 9.4,
        "price": 649,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 11,
        "title": "Asus ROG Phone 5",
        "description": "A gaming phone designed for high performance, featuring a large battery and fast refresh rate display",
        "discountPercentage": 17.3,
        "price": 999,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 12,
        "title": "Nokia 8.3 5G",
        "description": "A solid mid-range phone with 5G support and great battery life",
        "discountPercentage": 22.0,
        "price": 699,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 13,
        "title": "Realme GT",
        "description": "A budget-friendly smartphone with powerful specs and a smooth experience",
        "discountPercentage": 14.3,
        "price": 599,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 14,
        "title": "Vivo X60 Pro",
        "description": "A high-end smartphone with a focus on photography and professional performance",
        "discountPercentage": 12.5,
        "price": 899,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 15,
        "title": "Honor 50 Pro",
        "description": "A well-rounded smartphone with good performance and a great display",
        "discountPercentage": 11.7,
        "price": 799,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    },
    {
        "id": 16,
        "title": "Apple iPhone 12",
        "description": "The premium iPhone with an improved camera, sleek design, and 5G support",
        "discountPercentage": 10.9,
        "price": 949,
        "rating": 4.3,
        "brand": "Apple",
        "stock": 96,
        "category": "smarphone",
        "images": [
            "https://image.alza.cz/products/NL244a1g5/NL244a1g5.jpg?width=500&height=500",
            "https://image.alza.cz/products/UM331b1/UM331b1.jpg?width=360&height=360",
            "https://image.alza.cz/products/MR098b01/MR098b01.jpg?width=1000&height=1000"
        ]
    }
]

def load_products():
    for item in data:
        product, created = Product.objects.update_or_create(
            id=item["id"],
            defaults={
                "title": item["title"],
                "description": item["description"],
                "discount_percentage": item["discountPercentage"],
                "price": item["price"],
                "rating": item["rating"],
                "brand": item["brand"],
                "stock": item["stock"],
                "category": item["category"],
                "images": item["images"]
            }
        )
        if created:
            print(f"✅ Product created: {product.title}")
        else:
            print(f"🔄 Product updated: {product.title}")

if __name__ == "__main__":
    load_products()
    print("Data uploaded to the database!")
