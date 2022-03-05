import express from "express";
import { comment, createProduct, getProduct, getProducts, upvote } from "../controller/product.js";

const app = express()
const router = express.Router();


router.post("/",createProduct)
router.get("/",getProducts)
router.get("/:id",getProduct)
router.patch("/:id/upvote",upvote);
router.post("/:id/comment",comment);
export default router;