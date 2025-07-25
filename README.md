# 📦 Inventory Management System – Backend

This is the backend API for an Inventory Management System built using **Node.js**, **Express**, **MongoDB**, and **JWT-based authentication**. It allows user registration/login and authenticated product management.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Token)
- Python (for API testing)

---

## 📁 Folder Structure

```
backend/
├── app.js
├── server.js
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── productController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Product.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── productRoutes.js
├── utils/
│   └── generateToken.js
├── test_api.py
├── .env
└── package.json
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root:

```
MONGO_URI=mongodb://localhost:27017/ims
JWT_SECRET=your_jwt_secret
```

> 🔒 Keep `.env` in `.gitignore`

### 4. Run the server

```bash
npm start
# or
npm run dev
```

Server runs at: `http://localhost:3000`

---

## 🔐 Authentication Flow

- Register at `POST /register`
- Login at `POST /login` → receive JWT `access_token`
- Pass the token in headers for protected routes:

```
Authorization: Bearer <access_token>
```

---

## 📮 API Endpoints

| Method | Endpoint                    | Description                      |
|--------|-----------------------------|----------------------------------|
| POST   | `/register`                 | Register a new user              |
| POST   | `/login`                    | Login and receive access token   |
| POST   | `/products`                 | Add a new product (auth required)|
| PUT    | `/products/:id/quantity`    | Update product quantity          |
| GET    | `/products`                 | Get all products (auth required) |

---

## 🧪 API Testing with Python

Test the full backend by running:

```bash
python test_api.py
```

This script:
- Registers a user
- Logs in and fetches token
- Adds a product
- Updates its quantity
- Lists all products

### ✅ Sample Output:
```
User Registration: PASSED
Login Test: PASSED
Add Product: PASSED
Update Quantity: PASSED, Updated quantity: 15
Get Products: PASSED (Quantity = 15)
```

---

## 👨‍💻 Author

**Bhushan Uparikar**  
4th Year, IIIT Nagpur

---

## 📝 License

This project was developed for an interview assignment. Not licensed for production or commercial use.
