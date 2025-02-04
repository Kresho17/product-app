# Product Service

This is a simple product management service built with Django. Follow the steps below to set up and run the application locally.

## Requirements

Before starting the application, ensure you have the following installed:

- Python 3.8+
- Django 3.0+
- pip
- Virtual environment (recommended)

## Setup Instructions

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Kresho17/product-app.git
cd product-app/backend/product_service
```

### 2. Set Up a Virtual Environment

It's a good practice to use a virtual environment to manage dependencies:

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

### 3. Install Dependencies

Install all the required Python dependencies by running:


```bash
pip install -r requirements.txt
```

### 4. Configure the Environment

In the project root directory, you should see a file named .env.template. This file contains environment variables that the application needs to run.

Copy the .env.template file and rename it to .env:


```bash
cp .env.template .env
```

Open the .env file and fill in the required values. Some of the fields you may need to set are:

```bash
DJANGO_SECRET_KEY=<your_secret_key>
```

### 5. Run Migrations
Run database migrations to set up the database tables:

```bash
python manage.py migrate
```

### 6. Start the Development Server
Once everything is set up, you can start the Django development server:

```bash
python manage.py runserver
```

You should now be able to access the application at:

```bash
http://127.0.0.1:8000
```


### 8. Populate the Database (Optional)

If you need to populate the database with sample data (e.g., products), you can run the following script:

```bash
python populate_products.py
```


# Node.js

A simple product management service built with Node.js. Follow the instructions below to set up and run the application locally.

## Requirements

- Node.js 14+
- npm

## Setup Instructions

### 1. Navigate to the frontend folder


```bash
cd product-app/frontend
```

### 2. Install Dependencies

Install all the required dependencies:


```bash
npm install
```

### 3. Start the Development Server

Install all the required dependencies:

```bash
npm run dev
```

By default, the application will be available at:

```bash
http://localhost:3000
```