import express from 'express'
import dotenv from 'dotenv'
import multer from 'multer'
import cors from 'cors'
import userRoutes from './routes/auth.js'
import blogRoutes from './routes/blogs.js'
import postRoutes from './routes/posts.js'
import registerRoutes from './routes/register.js'
import path from "path";
import { fileURLToPath } from "url";
import { uploadPost } from './controllers/posts.js'
import { editBlog, uploadBlog } from './controllers/blogs.js'
import { editRegister, uploadRegister } from './controllers/register.js'
import db from './config/database.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

// async function syncDB() {
//     await db.sync()
// }
// syncDB()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/asset", express.static(path.join(__dirname, "uploads")));

app.post('/blogs', upload.single('image'), uploadBlog) 
app.put('/blogs/:id', upload.single('image'), editBlog)
app.post('/posts', upload.single('image'), uploadPost)
app.post('/register', upload.single('image'), uploadRegister)
app.put('/register/:id', upload.single('image'), editRegister);

app.use('/auth', userRoutes)
app.use('/blogs', blogRoutes)
app.use('/posts', postRoutes)
app.use('/register', registerRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
