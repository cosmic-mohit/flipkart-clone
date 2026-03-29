const pool = require('./db');

const sampleProducts = [
  // Headphones & Audio - 5 products
  {
    name: 'Wireless Headphones Pro',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 4999,
    category: 'Headphones',
    stock: 15,
    image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Bluetooth Speaker Max',
    description: 'Portable 360° sound Bluetooth speaker with waterproof design',
    price: 3499,
    category: 'Audio',
    stock: 20,
    image_url: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'True Wireless Earbuds Pro',
    description: 'Premium true wireless earbuds with active noise cancellation',
    price: 5999,
    category: 'Headphones',
    stock: 12,
    image_url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Gaming Headset RGB',
    description: 'Professional gaming headset with RGB lighting and 7.1 surround',
    price: 6499,
    category: 'Headphones',
    stock: 10,
    image_url: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Studio Monitor Speaker',
    description: 'Professional studio monitor speakers for audio production',
    price: 8999,
    category: 'Audio',
    stock: 8,
    image_url: 'https://images.unsplash.com/photo-1589003077984-894fdbb6d763?w=500&h=500&fit=crop&q=60'
  },

  // Computing - Keyboards & Mice - 5 products
  {
    name: 'Mechanical Keyboard RGB',
    description: 'RGB backlit mechanical keyboard with Cherry MX switches',
    price: 4499,
    category: 'Keyboards',
    stock: 14,
    image_url: 'https://images.unsplash.com/photo-1587829191301-623642503e3e?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Wireless Mouse Logitech',
    description: 'Ergonomic wireless mouse with precision tracking and 2.4GHz',
    price: 1899,
    category: 'Mice',
    stock: 18,
    image_url: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Gaming Mouse Pro',
    description: 'Professional gaming mouse with 16000 DPI and programmable buttons',
    price: 2799,
    category: 'Mice',
    stock: 16,
    image_url: 'https://images.unsplash.com/photo-1552864562-40261ee63e3f?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Wireless Keyboard Compact',
    description: 'Ultra-slim wireless keyboard with chiclet keys',
    price: 1399,
    category: 'Keyboards',
    stock: 22,
    image_url: 'https://images.unsplash.com/photo-1587906553409-e0e407cceb8d?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Keyboard Mouse Combo',
    description: 'Bundle deal: Wireless keyboard and mouse combo set',
    price: 2499,
    category: 'Keyboards',
    stock: 19,
    image_url: 'https://images.unsplash.com/photo-1584701694323-c8b98e6fce4d?w=500&h=500&fit=crop&q=60'
  },

  // Webcams - 4 products
  {
    name: '4K Webcam Ultra HD',
    description: '4K Ultra HD webcam perfect for streaming and video calls',
    price: 5999,
    category: 'Webcams',
    stock: 11,
    image_url: 'https://images.unsplash.com/photo-1598985269340-5433cd147fab?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Full HD Webcam 1080p',
    description: 'Full HD webcam with auto-focus and built-in microphone',
    price: 2999,
    category: 'Webcams',
    stock: 16,
    image_url: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Webcam 2K Premium',
    description: '2K resolution webcam with wide angle lens',
    price: 3999,
    category: 'Webcams',
    stock: 13,
    image_url: 'https://images.unsplash.com/photo-1515711595432-68e2ec3a5da5?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Ring Light + Webcam',
    description: 'Webcam bundle with professional LED ring light',
    price: 4999,
    category: 'Webcams',
    stock: 9,
    image_url: 'https://images.unsplash.com/photo-1575658222582-d19be8cb4fbf?w=500&h=500&fit=crop&q=60'
  },

  // Cables & Connectors - 5 products
  {
    name: 'USB-C Cable Braided',
    description: 'Fast charging USB-C braided cable, 2 meters',
    price: 399,
    category: 'Cables',
    stock: 50,
    image_url: 'https://images.unsplash.com/photo-1606933248051-5ce98adc3b2f?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'HDMI 2.1 Cable 2M',
    description: '4K 60Hz HDMI cable with ethernet channel',
    price: 799,
    category: 'Cables',
    stock: 35,
    image_url: 'https://images.unsplash.com/photo-1541043464171-7dcc3a7e0bc1?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'USB Hub 7-Port',
    description: 'Multi-port USB 3.0 hub with fast data transfer',
    price: 1599,
    category: 'Cables',
    stock: 22,
    image_url: 'https://images.unsplash.com/photo-1588411118915-1a54485463a0?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'DisplayPort Cable 2M',
    description: 'High-speed DisplayPort cable for 4K displays',
    price: 999,
    category: 'Cables',
    stock: 20,
    image_url: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Power Extension Cable 5M',
    description: 'Heavy-duty power extension cable with surge protection',
    price: 599,
    category: 'Cables',
    stock: 45,
    image_url: 'https://images.unsplash.com/photo-1595521645993-37c0f6e23aa8?w=500&h=500&fit=crop&q=60'
  },

  // Accessories - Phone & Tablet - 5 products
  {
    name: 'Smartphone Case Premium',
    description: 'Durable protective smartphone case with shock absorption',
    price: 499,
    category: 'Accessories',
    stock: 80,
    image_url: 'https://images.unsplash.com/photo-1586253408509-fc20341bb839?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Portable Charger 20000mAh',
    description: '20000mAh portable power bank with fast charging',
    price: 1499,
    category: 'Accessories',
    stock: 30,
    image_url: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Phone Holder Adjustable',
    description: 'Adjustable phone holder for desk mounting',
    price: 599,
    category: 'Accessories',
    stock: 50,
    image_url: 'https://images.unsplash.com/photo-1605559424843-9e4c3dec3806?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Screen Protector Tempered Glass',
    description: 'Premium tempered glass screen protector with installation kit',
    price: 399,
    category: 'Accessories',
    stock: 70,
    image_url: 'https://images.unsplash.com/photo-1516321318423-f06f70504504?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'USB-C Fast Charger 65W',
    description: '65W fast charger for laptops and devices',
    price: 1299,
    category: 'Accessories',
    stock: 25,
    image_url: 'https://images.unsplash.com/photo-1591290621749-e06c7dcd4628?w=500&h=500&fit=crop&q=60'
  },

  // Storage - 3 products
  {
    name: 'SSD 1TB External',
    description: 'Fast external SSD with 1TB storage capacity and USB 3.1',
    price: 8999,
    category: 'Storage',
    stock: 13,
    image_url: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'USB Flash Drive 64GB',
    description: 'High-speed USB 3.1 flash drive with 64GB storage',
    price: 799,
    category: 'Storage',
    stock: 60,
    image_url: 'https://images.unsplash.com/photo-1583871423020-e567b4bfc8c0?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'MicroSD Card 256GB',
    description: 'Fast microSD card for phones and tablets with 256GB',
    price: 2499,
    category: 'Storage',
    stock: 28,
    image_url: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500&h=500&fit=crop&q=60'
  },

  // Office & Lighting - 4 products
  {
    name: 'Laptop Stand Aluminum',
    description: 'Adjustable aluminum laptop stand for better ergonomics',
    price: 2499,
    category: 'Office',
    stock: 18,
    image_url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'LED Desk Lamp Pro',
    description: 'LED desk lamp with adjustable brightness and color temperature',
    price: 2199,
    category: 'Office',
    stock: 21,
    image_url: 'https://images.unsplash.com/photo-1565636192335-14c951cf03d9?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Monitor Light Bar',
    description: 'Auto-dimming monitor light bar to reduce eye strain',
    price: 3499,
    category: 'Office',
    stock: 14,
    image_url: 'https://images.unsplash.com/photo-1608889335941-32ac5f2041c3?w=500&h=500&fit=crop&q=60'
  },
  {
    name: 'Desk Organizer Wooden',
    description: 'Wooden desk organizer for cables and accessories',
    price: 899,
    category: 'Office',
    stock: 35,
    image_url: 'https://images.unsplash.com/photo-1593642632865-35bfb0acb814?w=500&h=500&fit=crop&q=60'
  }
];

const seedData = async () => {
  try {
    // Clear existing data
    await pool.query('DELETE FROM order_items;');
    await pool.query('DELETE FROM orders;');
    await pool.query('DELETE FROM products;');

    // Insert sample products
    for (const product of sampleProducts) {
      await pool.query(
        `INSERT INTO products (name, description, price, category, stock, image_url) 
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [product.name, product.description, product.price, product.category, product.stock, product.image_url]
      );
    }

    console.log('✅ Sample data seeded successfully');
  } catch (err) {
    console.error('❌ Error seeding data:', err);
  }
};

module.exports = seedData;
