import express from "express";
import bodyParser from 'body-parser'
import cors from 'cors'
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json()); //Otherwise we won't be able to send data to database
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);


app.get('/test',(req,res)=>{
  res.json("It worked")
})

app.listen(8800, () => {
    console.log("Connected!");
  });