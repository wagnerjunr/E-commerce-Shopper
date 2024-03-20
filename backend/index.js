const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const multer = require("multer");
const path = require("path");
const cors = require("cors");

require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect(mongoURI);

// API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Runnig")
    
})
//Image storage

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb) =>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating Upload Endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

// Creating Products

const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avaliable:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length >0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }else{
        id = 1;
    }
    const product = new Product({
        id:id,
        description:req.body.description,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved")
    res.json({
        success:true,
        description:req.body.description,
    })
})

//Creating Api for deleting products

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        description:req.body.description
    })
})

//Creating Api for get all Products

app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

// Shema creating folder for User model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// Creating Endpoint for registering the user

app.post('/signup',async(req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email adress "})
    }
    let cart = {};
    for(let i = 0; i < 100;i++){
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

// creating endpoint for user login
app.post('/login',async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }else{
        res.json({success:false,errors:"Wrong Email Id"});
    }
})

const fetchUser = async(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authentic using valid token"})
    }else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();

        }catch(error){
            res.status(401).send({errors:"please authentic using a valid token"})
        }
    }
}

app.get('/newcolletion',async(req,res)=>{
    let products = await Product.find({});
    let newcolletion = products.filter((product) => product.category === 'feminino');

    res.send(newcolletion);
})

app.get('/popular',async(req,res)=>{
    let products = await Product.find({});
    let popular = products.slice(1).slice(-8);

    res.send(popular);

})

app.post('/addtocart',fetchUser,async(req,res)=>{

        let userData = await Users.findOne({_id:req.user.id});
        userData.cartData[req.body.itemId] += 1;
        await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
        res.send("Added")
})

app.post('/removefromcart',fetchUser,async(req,res)=>{
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})

app.post('/getcart',fetchUser,async(req,res)=>{
    console.log("Getcart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port" + port)
    }else{
        console.log("Error: " + error)
    }
})
