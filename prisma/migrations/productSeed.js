const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedProducts() {
  try {
    const products = [
      {
        name: "Adicolor Classics Hoodie",
        brand: "H&M",
        price: 19.99,
        imageSrc: "../Img/hoodie model.jpg",
        rating: 4.5,
        description:
          "The Adicolor Classics Hoodie is a versatile and stylish addition to your wardrobe...",
        productType: "Hoodie",
        sizes: "Small,Medium,Large,Extra Large", // Menggunakan koma sebagai pemisah
        reviews: `
          This hoodie is incredibly comfortable and durable. I love its simple yet stylish design. It's perfect for chilly weather.
          The Adicolor Classics Hoodie is a must-have. It's soft, warm, and the fit is just right. Highly recommended!
          I'm really impressed with the quality of this hoodie. It's worth every penny.
        `,
        actions: [
          { icon: "fas fa-heart", action: "Add to Favorites" },
          { icon: "fas fa-shopping-cart", action: "Add to Cart" },
        ],
      },
      {
        name: "Blue Jeans",
        brand: "Levis",
        price: 20.5,
        imageSrc: "../Img/jeans model.jpg",
        rating: 4.2,
        description: "Our Blue Jeans are a classic choice for any wardrobe...",
        productType: "Hoodie",
        sizes: "28W,30W,32W,34W", // Menggunakan koma sebagai pemisah
        reviews: `
        I've been wearing these jeans for years, and they never disappoint. Comfortable fit and durable.
        The Blue Jeans by Levi's are my go-to choice. Great quality and stylish.
        These jeans are a great value for the price. I highly recommend them.
        `,
        actions: [
          { icon: "fas fa-heart", action: "Add to Favorites" },
          { icon: "fas fa-shopping-cart", action: "Add to Cart" },
        ],
      },
      {
        name: "Adicolor Classics Hoodie",
        brand: "H&M",
        price: 19.99,
        imageSrc: "../Img/hoodie model.jpg",
        rating: 4.5,
        description:
          "The Adicolor Classics Hoodie is a versatile and stylish addition to your wardrobe...",
        productType: "Hoodie",
        sizes: "Small,Medium,Large,Extra Large", // Menggunakan koma sebagai pemisah
        reviews: `
          This hoodie is incredibly comfortable and durable. I love its simple yet stylish design. It's perfect for chilly weather.
          The Adicolor Classics Hoodie is a must-have. It's soft, warm, and the fit is just right. Highly recommended!
          I'm really impressed with the quality of this hoodie. It's worth every penny.
        `,
        actions: [
          { icon: "fas fa-heart", action: "Add to Favorites" },
          { icon: "fas fa-shopping-cart", action: "Add to Cart" },
        ],
      },
      {
        name: "Adicolor Classics Hoodie",
        brand: "H&M",
        price: 19.99,
        imageSrc: "../Img/hoodie model.jpg",
        rating: 4.5,
        description:
          "The Adicolor Classics Hoodie is a versatile and stylish addition to your wardrobe...",
        productType: "Hoodie",
        sizes: "Small,Medium,Large,Extra Large", // Menggunakan koma sebagai pemisah
        reviews: `
          This hoodie is incredibly comfortable and durable. I love its simple yet stylish design. It's perfect for chilly weather.
          The Adicolor Classics Hoodie is a must-have. It's soft, warm, and the fit is just right. Highly recommended!
          I'm really impressed with the quality of this hoodie. It's worth every penny.
        `,
        actions: [
          { icon: "fas fa-heart", action: "Add to Favorites" },
          { icon: "fas fa-shopping-cart", action: "Add to Cart" },
        ],
      },
      {
        name: "Adicolor Classics Hoodie",
        brand: "H&M",
        price: 19.99,
        imageSrc: "../Img/hoodie model.jpg",
        rating: 4.5,
        description:
          "The Adicolor Classics Hoodie is a versatile and stylish addition to your wardrobe...",
        productType: "Hoodie",
        sizes: "Small,Medium,Large,Extra Large", // Menggunakan koma sebagai pemisah
        reviews: `
          This hoodie is incredibly comfortable and durable. I love its simple yet stylish design. It's perfect for chilly weather.
          The Adicolor Classics Hoodie is a must-have. It's soft, warm, and the fit is just right. Highly recommended!
          I'm really impressed with the quality of this hoodie. It's worth every penny.
        `,
        actions: [
          { icon: "fas fa-heart", action: "Add to Favorites" },
          { icon: "fas fa-shopping-cart", action: "Add to Cart" },
        ],
      },
      {
        name: "Adicolor Classics Hoodie",
        brand: "H&M",
        price: 19.99,
        imageSrc: "../Img/hoodie model.jpg",
        rating: 4.5,
        description:
          "The Adicolor Classics Hoodie is a versatile and stylish addition to your wardrobe...",
        productType: "Hoodie",
        sizes: "Small,Medium,Large,Extra Large", // Menggunakan koma sebagai pemisah
        reviews: `
          This hoodie is incredibly comfortable and durable. I love its simple yet stylish design. It's perfect for chilly weather.
          The Adicolor Classics Hoodie is a must-have. It's soft, warm, and the fit is just right. Highly recommended!
          I'm really impressed with the quality of this hoodie. It's worth every penny.
        `,
        actions: [
          { icon: "fas fa-heart", action: "Add to Favorites" },
          { icon: "fas fa-shopping-cart", action: "Add to Cart" },
        ],
      },
      {
        name: "Adicolor Classics Hoodie",
        brand: "H&M",
        price: 19.99,
        imageSrc: "../Img/hoodie model.jpg",
        rating: 4.5,
        description:
          "The Adicolor Classics Hoodie is a versatile and stylish addition to your wardrobe...",
        productType: "Hoodie",
        sizes: "Small,Medium,Large,Extra Large", // Menggunakan koma sebagai pemisah
        reviews: `
          This hoodie is incredibly comfortable and durable. I love its simple yet stylish design. It's perfect for chilly weather.
          The Adicolor Classics Hoodie is a must-have. It's soft, warm, and the fit is just right. Highly recommended!
          I'm really impressed with the quality of this hoodie. It's worth every penny.
        `,
        actions: [
          { icon: "fas fa-heart", action: "Add to Favorites" },
          { icon: "fas fa-shopping-cart", action: "Add to Cart" },
        ],
      },
      {
        name: "Adicolor Classics Hoodie",
        brand: "H&M",
        price: 19.99,
        imageSrc: "../Img/hoodie model.jpg",
        rating: 4.5,
        description:
          "The Adicolor Classics Hoodie is a versatile and stylish addition to your wardrobe...",
        productType: "Hoodie",
        sizes: "Small,Medium,Large,Extra Large", // Menggunakan koma sebagai pemisah
        reviews: `
          This hoodie is incredibly comfortable and durable. I love its simple yet stylish design. It's perfect for chilly weather.
          The Adicolor Classics Hoodie is a must-have. It's soft, warm, and the fit is just right. Highly recommended!
          I'm really impressed with the quality of this hoodie. It's worth every penny.
        `,
        actions: [
          { icon: "fas fa-heart", action: "Add to Favorites" },
          { icon: "fas fa-shopping-cart", action: "Add to Cart" },
        ],
      },
      {
        name: "Adicolor Classics Hoodie",
        brand: "H&M",
        price: 19.99,
        imageSrc: "../Img/hoodie model.jpg",
        rating: 4.5,
        description:
          "The Adicolor Classics Hoodie is a versatile and stylish addition to your wardrobe...",
        productType: "Hoodie",
        sizes: "Small,Medium,Large,Extra Large", // Menggunakan koma sebagai pemisah
        reviews: `
          This hoodie is incredibly comfortable and durable. I love its simple yet stylish design. It's perfect for chilly weather.
          The Adicolor Classics Hoodie is a must-have. It's soft, warm, and the fit is just right. Highly recommended!
          I'm really impressed with the quality of this hoodie. It's worth every penny.
        `,
        actions: [
          { icon: "fas fa-heart", action: "Add to Favorites" },
          { icon: "fas fa-shopping-cart", action: "Add to Cart" },
        ],
      },
      // Tambahkan produk lain di sini
    ];

    for (const product of products) {
      await prisma.product.create({
        data: product,
      });
    }

    console.log("Semua data produk berhasil ditambahkan ke database.");
  } catch (error) {
    console.error("Error seeding data produk:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
