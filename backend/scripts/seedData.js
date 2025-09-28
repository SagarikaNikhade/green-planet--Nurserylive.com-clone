const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');
const User = require('../models/User');

// Load environment variables
dotenv.config();

// Sample products data
const products = [
  {
    title: "Anthurium (Pink) - Plant",
    price: 999,
    image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-anthurium-andreanum-princess-amalia-elegance-plant_600x600.jpg?v=1634213376",
    rating: 4.8,
    category: "plant",
    info: "If you have space to spare, make an impressive display in your living room with a great eye-catcher Anthurium plant.",
    common: "Tailflower, flamingo flower and laceleaf.",
    height: "Up to 50 centimeter",
    fcolor: "Pink",
    bloom: "Year Round",
    level: "Medium",
    stock: 50
  },
  {
    title: "Parijat Tree, Parijatak, Night Flowering Jasmine - Plant",
    price: 399,
    image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-parijat-tree-parijatak-night-flowering-jasmine-plant-16969158688908_600x600.jpg?v=1634225455",
    rating: 5.0,
    category: "plant",
    info: "Parijat is one of the beautiful and mysterious plants whose flowers fall on the ground after blooming. The flowers bloom at night and drop down from the branches at the first rays of light.",
    common: "Parijat, Paarijaata, Night-flowering Jasmine, Coral Jasmine",
    height: "Up to 10 meters",
    fcolor: "White.",
    bloom: "August to December.",
    level: "Easy.",
    stock: 30
  },
  {
    title: "Radish Red Round - Desi Vegetable Seeds",
    price: 27,
    image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-radish-red-round-desi-vegetable-seeds-16969238020236_600x600.jpg?v=1634204738",
    rating: 3.4,
    category: "seed",
    info: "Other than commonly known radishes, many different varieties exist. This Radish packet contains approximately 35 seeds.",
    common: "Radish pusa chetki, Mooli",
    height: "Up to 10 inches",
    fcolor: "red",
    bloom: "Spring and the fall",
    level: "Easy to grow",
    stock: 100
  },
  {
    title: "Rajnigandha, Tuberose - Bulbs (set of 10)",
    price: 199,
    image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-rajnigandha-tuberose-bulbs-set-of-10-280288_600x600.jpg?v=1679750991",
    rating: 4.5,
    category: "bulb",
    info: "Growing Rajnigandha Bulbs is an easy task, it is an easy-care flower which does not require special expertise to grow it as house flower plant.",
    common: "Mexican tuberose, Tuberose, Rajanigandha",
    height: "2 to 3 feet",
    fcolor: "White",
    bloom: "Summer, Autumn",
    level: "Easy to grow",
    stock: 75
  },
  {
    title: "Zephyranthes Lily, Rain Lily (Yellow) - Bulbs (set of 10)",
    price: 159,
    image: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-bulbs-zephyranthes-rain-lily-yellow-flower-bulbs_600x600.jpg?v=1634231936",
    rating: 4.5,
    category: "bulb",
    info: "Zephyranthes can be deciduous or evergreen bulbous perennials, with linear leaves and funnel-shaped or crocus-like flowers in spring, summer or autumn.",
    common: "Rain lily, Autumn zephyr lily, Peruvian swamp lily",
    height: "Up to 20 cm",
    fcolor: "Yellow",
    bloom: "After fall",
    level: "Easy to grow",
    stock: 60
  }
];

// Sample users data
const users = [
  {
    firstName: "Admin",
    lastName: "User",
    email: "admin@greenplanet.com",
    password: "admin123",
    role: "admin"
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "password123",
    role: "user"
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});
    console.log('Cleared existing data');

    // Insert products
    const createdProducts = await Product.insertMany(products);
    console.log(`Created ${createdProducts.length} products`);

    // Insert users
    const createdUsers = await User.insertMany(users);
    console.log(`Created ${createdUsers.length} users`);

    console.log('✅ Database seeded successfully!');
    console.log('📧 Admin login: admin@greenplanet.com / admin123');
    console.log('📧 User login: john@example.com / password123');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  }
};

// Run the seeder
seedDatabase();
