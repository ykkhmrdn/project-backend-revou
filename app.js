require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
// const { productRoute } = require('./routes/productRoutes')
// const { formRoute } = require('./routes/formRoutes')
// const { aboutRoute } = require('./routes/aboutRoutes')
// const { pool } = require('./config/databases')


const PORT = process.env.PORT || 3000;

const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use((req, res, next) => {
    console.log(`Method: ${req.method} ${req.path}`);
    next();
  });


// //rute
// app.use("/", productRoute)
// // rute untuk form
// app.use("/form", formRoute )
// // rute untuk about
// app.use("/about", aboutRoute)



routes.forEach((route) => app.use(route));

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})