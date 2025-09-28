# Green Planet Backend API

A comprehensive Node.js backend API for the Green Planet e-commerce application, built with Express.js and MongoDB.

## 🚀 Features

- **User Authentication** - JWT-based authentication with registration and login
- **Product Management** - Full CRUD operations for plant products
- **Shopping Cart** - Complete cart management with quantity controls
- **Security** - Helmet, CORS, rate limiting, and input validation
- **Database** - MongoDB with Mongoose ODM
- **Error Handling** - Comprehensive error handling and logging

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## 🛠️ Installation

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables in `.env`:**
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/green-planet
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRE=7d
   FRONTEND_URL=http://localhost:3000
   ```

## 🗄️ Database Setup

### Local MongoDB:
1. Install MongoDB locally
2. Start MongoDB service
3. Update `MONGODB_URI` in `.env` to `mongodb://localhost:27017/green-planet`

### MongoDB Atlas (Cloud):
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get connection string and update `MONGODB_URI` in `.env`

## 🌱 Seed Database

To populate the database with sample data:

```bash
npm run seed
```

This will create:
- Sample products (plants, seeds, bulbs)
- Admin user: `admin@greenplanet.com` / `admin123`
- Regular user: `john@example.com` / `password123`

## 🚀 Running the Application

### Development Mode:
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Products
- `GET /api/products` - Get all products (with pagination, search, filters)
- `GET /api/products/:id` - Get single product
- `GET /api/products/categories` - Get product categories
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Cart
- `GET /api/cart` - Get user's cart (Protected)
- `POST /api/cart/items` - Add item to cart (Protected)
- `PUT /api/cart/items/:itemId` - Update cart item (Protected)
- `DELETE /api/cart/items/:itemId` - Remove item from cart (Protected)
- `DELETE /api/cart` - Clear cart (Protected)

### Health Check
- `GET /api/health` - API health status

## 🔧 API Usage Examples

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login User
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get Products
```bash
curl http://localhost:5000/api/products?page=1&limit=10&category=plant
```

### Add to Cart (with authentication)
```bash
curl -X POST http://localhost:5000/api/cart/items \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "productId": "PRODUCT_ID",
    "quantity": 2
  }'
```

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - bcrypt for password security
- **Input Validation** - express-validator for request validation
- **Rate Limiting** - Prevent API abuse
- **CORS Protection** - Configured for frontend domain
- **Helmet** - Security headers
- **Error Handling** - Comprehensive error management

## 📊 Database Models

### User Model
- firstName, lastName, email, password
- role (user/admin), isActive
- timestamps

### Product Model
- title, price, image, rating, category
- info, common, height, fcolor, bloom, level
- stock, isActive, tags, images
- timestamps

### Cart Model
- user (reference), items array
- totalAmount, totalItems
- timestamps

## 🧪 Testing

```bash
npm test
```

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment | development |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/green-planet |
| JWT_SECRET | JWT secret key | - |
| JWT_EXPIRE | JWT expiration | 7d |
| FRONTEND_URL | Frontend URL for CORS | http://localhost:3000 |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@greenplanet.com or create an issue in the repository.
