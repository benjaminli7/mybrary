const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const path = require("path");

const coverImageBasePath = "uploads/bookCovers";

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  description: {
    type: String,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  coverImageName: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Author",
  },
});

BookSchema.virtual("coverImagePath").get(function () {
  if (this.coverImageName != null) {
    return path.join("/", coverImageBasePath, this.coverImageName);
  }
})

module.exports = mongoose.model("Book", BookSchema);
module.exports.coverImageBasePath = coverImageBasePath;