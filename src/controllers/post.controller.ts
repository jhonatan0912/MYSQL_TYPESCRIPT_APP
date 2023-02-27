import { Request, Response } from "express";
import { connect } from "./../database";
import { Post } from "./../interface/Post";

export const getPosts = async (req: Request, res: Response): Promise<Response> => {
  const conn = await connect();
  const posts = await conn.query('SELECT * FROM post');
  return res.json(posts[0])
}

export const getPost = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  const conn = await connect();
  const post = await conn.query('SELECT * FROM post WHERE id=?', [id]);
  return res.json(post[0])
}

export const createPost = async (req: Request, res: Response) => {
  const newPost: Post = req.body;
  const conn = await connect();
  await conn.query('INSERT INTO post SET ?', [newPost]);
  return res.json({
    mesagge: "Post created"
  })
}

export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedPost: Post = req.body;
  const conn = await connect();
  await conn.query('UPDATE post SET ? WHERE id=?', [updatedPost, id]);
  return res.json({
    message: "Post updated"
  })
}

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params
  const conn = await connect();
  await conn.query('DELETE  FROM post WHERE id=?', [id]);
  return res.json({
    message: "Post deleted successfully"
  })
}