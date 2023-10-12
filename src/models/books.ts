import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  isbn: { type: String, required: true },
  name: { type: String, required: true },
  details: { type: String },
});

export const BookModel = mongoose.model("Book", BookSchema);

// Functions
export const addBook = (values: Record<string, any>) =>
  new BookModel(values).save().then((book) => book.toObject());
