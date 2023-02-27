"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getPost = exports.getPosts = void 0;
const database_1 = require("./../database");
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield (0, database_1.connect)();
    const posts = yield conn.query('SELECT * FROM post');
    return res.json(posts[0]);
});
exports.getPosts = getPosts;
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const conn = yield (0, database_1.connect)();
    const post = yield conn.query('SELECT * FROM post WHERE id=?', [id]);
    return res.json(post[0]);
});
exports.getPost = getPost;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = req.body;
    const conn = yield (0, database_1.connect)();
    yield conn.query('INSERT INTO post SET ?', [newPost]);
    return res.json({
        mesagge: "Post created"
    });
});
exports.createPost = createPost;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedPost = req.body;
    const conn = yield (0, database_1.connect)();
    yield conn.query('UPDATE post SET ? WHERE id=?', [updatedPost, id]);
    return res.json({
        message: "Post updated"
    });
});
exports.updatePost = updatePost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const conn = yield (0, database_1.connect)();
    yield conn.query('DELETE  FROM post WHERE id=?', [id]);
    return res.json({
        message: "Post deleted successfully"
    });
});
exports.deletePost = deletePost;
