import express from 'express'
import { deleteBlog, getAllBlogs, getBlogById, getBlogByTitle, getRelatedBlogs } from '../controllers/blogs.js';

const router = express.Router()

router.get('/', getAllBlogs)
router.get('/:title', getBlogByTitle)
router.get('/id/:id', getBlogById)
router.get('/related/:title', getRelatedBlogs)
router.delete('/:id', deleteBlog)

export default router;