# 🍴 Tasty Kitchens

A responsive food ordering web application built with **React.js**. Users can browse restaurants, view restaurant details and food items, manage their cart, and complete an order flow.

## 🔗 Live Demo

**Live Website:**
https://tasty-kitchen-mocha.vercel.app/

### Demo Credentials

> Use the demo credentials below to access the application.

**Username:** `rahul`
**Password:** `rahul@2021`

---

## 📌 About the Project

Tasty Kitchens is a restaurant and food-ordering application developed using React.js.

The application includes user authentication, protected routes, restaurant browsing, restaurant details, food-item management, cart functionality, sorting, responsive design, and an order completion flow.

The project was built to practice and demonstrate practical frontend development concepts such as **React state management, API integration, routing, authentication, reusable components, responsive CSS, and deployment**.

---

## ✨ Features

### 🔐 Authentication

* User login using REST API
* JWT-based authentication
* JWT token stored using cookies
* Protected routes for authenticated users
* Automatic redirection to the login page for unauthenticated users

### 🏠 Home Page

* Displays restaurant offers
* Offers carousel navigation
* Displays popular restaurants
* Restaurant filtering/sorting functionality
* Sort restaurants by rating:

  * Lowest
  * Highest
* Responsive layout for different screen sizes

### 🍽️ Restaurant Details

* Displays restaurant information
* Shows restaurant rating, cuisine, location, and cost for two
* Displays available food items
* Food-item images, prices, and ratings
* Add food items to cart
* Quantity controls for cart items

### 🛒 Cart

* Displays selected food items
* Increase item quantity
* Decrease item quantity
* Automatically removes an item when its quantity reaches zero
* Displays item prices and quantities
* Place order functionality

### ✅ Payment Success

* Displays successful order confirmation
* Provides navigation back to the home page

### ❌ Not Found

* Custom 404 page for invalid routes
* Navigation back to the homepage

### 📱 Responsive Design

* Responsive restaurant and food-item layouts
* Mobile-friendly navigation and content
* Responsive offers section
* Mobile-specific styling using CSS media queries

---

## 🛠️ Technologies Used

### Frontend

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**

### React Concepts

* Functional Components
* `useState`
* `useEffect`
* React Router
* Protected Routes
* `Outlet`
* Dynamic Routes
* Props
* Conditional Rendering
* Array methods such as `map()`, `find()`, and `filter()`

### APIs & Authentication

* REST APIs
* Fetch API
* JWT Authentication
* Cookies

### Tools

* Git
* GitHub
* Vercel
* VS Code
* Vite

---

## 🔌 API Integration

The application integrates with REST APIs to retrieve authentication, restaurant, offer, and food-item data.

Examples of API functionality include:

* User authentication
* Restaurant listing
* Restaurant details
* Offers
* Food items

Authentication requests use the JWT token stored in the browser cookie.

---

## 🧠 Key Concepts Practiced

This project helped me practice:

* Building reusable React components
* Managing application state
* Passing data using props
* Handling asynchronous API requests
* Working with REST APIs
* Implementing authentication
* Creating protected routes
* Working with dynamic routes
* Managing cart state
* Implementing quantity-based cart functionality
* Sorting data
* Handling conditional rendering
* Creating responsive layouts
* Debugging frontend issues
* Using Git and GitHub
* Deploying a React application with Vercel

---

## 📂 Project Structure

```text
restaurant-router-app/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Cart/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Home/
│   │   ├── Layout/
│   │   ├── LoginForm/
│   │   ├── NotFound/
│   │   ├── PaymentSuccessful/
│   │   ├── ProtectedRoute/
│   │   ├── RestaurantDetails/
│   │   └── ...
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sushma-kalikota/tasty_kitchen.git
```

### 2. Navigate to the project

```bash
cd tasty_kitchen
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

### 5. Create a production build

```bash
npm run build
```

---

## 🌐 Deployment

The application is deployed on **Vercel** and connected to the GitHub repository.

The deployment workflow is:

```text
Local Development
       ↓
      Git
       ↓
    GitHub
       ↓
     Vercel
       ↓
Live Application
```

Updates pushed to the `main` branch automatically trigger a new Vercel deployment.

---

## 📱 Responsive Design

The application has been designed to work across:

* Desktop
* Tablet
* Mobile devices

Responsive CSS media queries are used to adjust layouts, spacing, images, navigation, and content based on screen size.

---

## 🔮 Future Improvements

Possible future improvements include:

* Search restaurants and food items
* Add restaurant categories
* Improve cart persistence using local storage
* Add a complete payment gateway
* Add order history
* Add user profile management
* Add loading and error states throughout the application

---

## 👩‍💻 Developer

**Sushma Kalikota**

B.Tech — Computer Science and Engineering

GitHub:
https://github.com/Sushma-kalikota
