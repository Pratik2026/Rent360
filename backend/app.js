const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productroutes');
const userRoutes = require('./routes/userroutes');
const { verifyUser } = require('./middleware/authmiddleware');

const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/user', userRoutes);
app.get('/', verifyUser, (req, res) => {
    return res.json({status: true, name: req.name, userid:req.userid})
})

const PORT = 7000;
app.listen(PORT, 'localhost', () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});

module.exports = app;
