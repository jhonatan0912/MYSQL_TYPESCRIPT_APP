import { Router } from "express";
const router = Router();

// Controllers
import { getPosts, getPost, createPost, updatePost, deletePost } from "../controllers/post.controller";

router.get('/', getPosts);

router.get('/:id', getPost);

router.post('/', createPost);

router.patch('/:id', updatePost);

router.delete('/:id', deletePost);


export default router;