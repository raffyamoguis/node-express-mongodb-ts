import express from "express";

import { createBook } from "../controllers/books";

export default (router: express.Router) => {
  router.post("/book", createBook);
};
