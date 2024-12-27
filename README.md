# Shopper Backend

## 🛠 Shopper Backend: The Powerhouse Behind Your Shopping Experience

The **Shopper Backend** is a robust server-side application that powers the Shopper platform. It provides APIs for managing authentication, user accounts, product data, and order processing. Built using **Node.js, Express, and MongoDB**, the backend ensures efficient data handling and seamless communication with the frontend.

---

### 🚀 Features

- **Authentication**:
  - Secure login and logout functionality.
  - JWT-based authentication.
- **Product Management**:
  - APIs to handle product listings, including:
    - Product descriptions.
    - Prices and discount offers.
    - High-resolution images.
- **Order Management**:
  - APIs to handle user orders and track purchase history.
- **Performance**:
  - Optimized database queries for faster response times.
  - Scalable architecture to handle high traffic.

---

### 🛠️ Technologies Used

- **Backend Framework**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **API Testing**: Postman, Swagger

---

### 🔧 Installation

Follow these steps to set up the backend locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/vishakha115/ecommerce-backend-app
   ```

2. Navigate to the backend directory:
   ```bash
   cd shopper-backend
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up the environment variables:
   - Create a `.env` file in the root directory and add the following:
     ```env
     PORT=4000
     MONGO_URI=<mongodb+srv://vishakha115:vishakha115@cluster0.o4zcbkg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/e-commerce>
     JWT_SECRET=<your-secret-key>
     
     ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. The backend will be running at:
   ```
   http://localhost:4000
   ```

### Additional Notes

- Ensure **Node.js** is installed (Node v21. 0.0).
- MongoDB must be installed and running locally or on a cloud service (e.g., MongoDB Atlas).
- Use tools like Postman to test the APIs.

---

### 📂 Folder Structure

```
shopper-backend/
├── controllers/       # Handle request logic for routes
├── models/            # Mongoose models for MongoDB
├── routes/            # API routes
├── middleware/        # Custom middleware (e.g., auth)
├── utils/             # Utility functions
├── config/            # Configuration files
├── server.js          # Entry point of the application
└── package.json
```

---

### 🤝 Contribution Guidelines

We welcome contributions to improve the backend! Follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a meaningful description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---


Empower your shopping platform with **Shopper Backend**!
