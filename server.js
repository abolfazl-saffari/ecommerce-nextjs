const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

server.use(middlewares);

server.post("/upload", upload.single("image"), function (req, res, next) {
  res.json(req.file);
});

server.get("/files", (req, res, next) => {
  fs.readdir("./uploads/", (err, files) => {
    if (err) return next(err);
    res.json(files);
  });
});

server.get("/files/:file_id", (req, res, next) => {
  const { file_id } = req.params;
  res.set("Content-Type", "image/jpeg");
  res.sendFile(path.join(__dirname, "uploads/" + file_id));
});

server.use(jsonServer.bodyParser);

const imageFieldUploadMiddleware = upload.single("image");
server.use((req, res, next) => {
  if (
    (req.method === "POST" || req.method === "PATCH") &&
    req.headers["content-type"] != "application/json"
  ) {
    imageFieldUploadMiddleware(req, res, next);
  } else {
    next();
  }
});

server.use((req, res, next) => {
  if (req.file) {
    const { mimetype, size, filename } = req.file;

    if (mimetype != "image/jpg")
      throw new Error("image should be in image/jpg type");
    if (size > 2 * 1024 * 1024)
      throw new Error("image size should be less than 2MB");

    req.body.image = "/files/" + filename;
  }
  next();
});

server.use(router);

server.listen(3004, () => {
  console.log("Customized JSON-Server is running at http://localhost:3004/");
});
