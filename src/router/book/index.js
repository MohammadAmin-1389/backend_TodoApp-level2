import express from "express";

import { getBooks, getBookById, createBook } from "./controller.js";

import validation from "./validation.js";

const router = express.Router();

router.get("/", getBooks);

router.get("/:id", getBookById);

router.post("/", validation, createBook);

export default router;
