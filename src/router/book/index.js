import express from "express";

import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "./controller.js";

import validation from "./validation.js";

const router = express.Router();

router.get("/", getBooks);

router.get("/:id", getBookById);

router.post("/", validation, createBook);

router.put("/:id", validation, updateBook);

router.delete("/:id", deleteBook);

export default router;
