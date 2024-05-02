// Gunakan import express
import express from "express";
// inisialisai express router
const router = express.Router();

//tambahkan kode script dari route index.js

router.get("/", (req, res) => {
  res.send("Selamat Datang di Gamelab Indonesia!");
});

router.get("/kelas", (req, res) => {
  res.send("Ini adalah Halaman Kelas");
});

router.get("/about", (req, res) => {
  res.send("Ini adalah Halaman About");
});

router.get("/kelas/:id", (req, res) => {
  res.send(`Ini adalah halaman untuk kelas ${req.params.id}`);
});

router.get("/kelas/:jurusan/:id/:pilihan?", (req, res) => {
  var jurusan = req.params.jurusan;
  var id = req.params.id;
  var pilihan = req.params.pilihan;
  res.send(
    `Ini adalah halaman untuk kelas ${jurusan} ${pilihan} tingkat ${id}`
  );
});

router.post("/", (req, res) => {
  res.send("Ini adalah POST");
});

router.put("/", (req, res) => {
  res.send("Ini adalah PUT");
});

router.delete("/", (req, res) => {
  res.send("Ini adalah DELETE");
});

// tambahkan export default router
export default router;
