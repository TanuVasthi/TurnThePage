const express = require('express');
const app = express();
const db = require('./models');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 3001; // Use environment variable or default to 3000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


app.use(bodyParser.json());


app.post('/checkout', async (req, res) => {
  try {
    console.log("Hello");
    const cartData = req.body;

    // Sequelize 
    const Order = db.orders;

    
    await db.sequelize.transaction(async (t) => {
      
      for (const item of cartData) {
        if (!item.price) {
          item.price=200;
    
        }
        await Order.create({
          book_id: item.id,
          customer_id: 1, 
          price: item.price,
          quantity: item.item,
        }, { transaction: t }
        );
      }
    });

    // Successfull Transaction
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({ success: false, error: 'An error occurred during checkout.' });
  } finally {
    res.end(); 
  }
});


