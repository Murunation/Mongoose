import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cd(null, "/tmp");
  },
  filename: (req, file, cb) => {
    // const ext = extractExtension(file.originalname);
    // console.log("extention: ", ext);
    // const newName = nanoid() + "." + ext;
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
