import express from "express";

import { createBook, getAllBooks } from "../controllers/books";

export default (router: express.Router) => {
  router.post("/book", createBook);
  router.get("/book", getAllBooks);
};
