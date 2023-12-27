import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the destination folder for uploaded files
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // Define the filename for the uploaded file
    cb(file.originalname);
  },
});

export const upload = multer({
  storage,
})