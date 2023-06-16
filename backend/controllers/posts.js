import { postModel } from "../models/postModel.js";
import dotenv from "dotenv";

dotenv.config();
export const getPosts = async (req, res) => {
    try {
        const posts = await postModel.find();
        console.log("posts", posts);
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const createPost = async (req, res) => {
    try {
        // req.body là để server lấy data từ dưới client gửi lên
        // ở đây mình sẽ lưu data lấy từ req.body vàng mảng newPost
        const newPost = req.body;

        const post = await postModel(newPost);
        post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;

        const post = await postModel.findOneAndUpdate(
            { _id: updatePost._id },
            updatePost,
            { new: true }
        );
        post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
