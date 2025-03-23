# E-commerce Backend

This is a **Node.js & Express** backend for an **E-commerce application** using **MongoDB**. It supports user authentication, product management, cart functionality, order processing, and payment integration with **Razorpay**.

## 🚀 Features

- **User Authentication** (Register, Login, Update Profile)
- **Product Management** (Create, Read, Update, Delete)
- **Cart Management** (Add, Update, Delete, Get Cart Summary)
- **Order Processing** (Create Order, Update Order Status)
- **Payment Gateway Integration** (Razorpay)
- **AWS S3 Image Upload** (Profile & Product Images)
- **JWT Authentication**

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
$ git clone https://github.com/trilok24/ecommerce-backend.git
$ cd ecommerce-backend
```

### 2️⃣ Install Dependencies
```bash
$ yarn install
```

### 3️⃣ Create a `.env` File
```env
PORT=3000
MONGODB_URI=mongodb+srv://your-mongodb-uri
SECRET_KEY=your-secret-key
BUCKET=
REGION=a
S3_ACCESS_KEY=your-s3-access-key
S3_ACCESS_SECRET=your-s3-access-secret
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret
```

### 4️⃣ Start the Server
```bash
$ yarn start
```

The server runs at: `http://localhost:3000`

---

## 🔌 API Endpoints

### 🔹 User Authentication
- `POST /register` - Register a new user
- `POST /login` - User login
- `GET /getUser/:userId` - Get user details
- `PUT /updateUser/:_id` - Update user details

### 🔹 Product Management
- `POST /createProduct` - Add a new product
- `GET /getProduct` - Get all products
- `GET /getpro/:_id` - Get a single product by ID
- `PUT /products/:productId` - Update a product
- `DELETE /deletepro/:_id` - Delete a product

### 🔹 Cart Management
- `POST /addCart/:_id` - Add item to cart
- `PUT /updateCart/:_id` - Update cart
- `DELETE /delCart/:_id` - Remove item from cart
- `GET /getCartSummary/:userId` - Get cart details

### 🔹 Order Processing
- `POST /createOrder/:_id` - Create an order
- `PUT /updateOrderStatus/:_id` - Update order status

### 🔹 Payment Gateway (Razorpay)
- `POST /create-payment-order` - Initiate a payment
- `POST /verify-payment` - Verify payment success

---


## 🚀 Deployment

### Deploy on Render
1. Push the project to GitHub
2. Create a **New Web Service** on [Render](https://ecommerce-backend-1y8b.onrender.com)
3. Git Repo https://github.com/trilok24/ecommerce-backend
4. Set **Build Command**: `yarn install`
5. Set **Start Command**: `node app.js`
6. Add Environment Variables from `.env`
7. Deploy and access the backend URL

---

## 🔥 Future Enhancements
- Implement coupon & discount system
- Add real-time order tracking
- Implement AI-based product recommendations

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT
- **File Storage:** AWS S3
- **Payment Gateway:** Razorpay
- **Deployment:** Render

---

## 📬 Contact
**Trilok Mandre**  
📧 [trilokmandre1234@gmail.com](mailto:trilokmandre1234@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/trilok-mandre-4a0a47209)  
📂 [GitHub](https://github.com/trilok24)

---

⚡ *Happy Coding! 🚀*

