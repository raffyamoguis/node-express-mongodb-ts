import express from "express";

import { addBook } from "../models/books";

export const createBook = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { isbn, name, details } = req.body;

    if (!isbn || !name || !details) {
      return res.sendStatus(400);
    }

    const book = await addBook({
      isbn,
      name,
      details,
    });

    return res.status(200).json(book).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
