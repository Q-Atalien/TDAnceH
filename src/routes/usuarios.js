var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
  usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
  usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
  usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
  usuarioController.entrar(req, res);
});

router.post("/newElement", function (req, res) {
  usuarioController.newElement(req, res);
});

router.post("/listarTodos", function (req, res) {
  usuarioController.listarTodos(req, res);
});

router.post("/apagarTarefa", function (req, res) {
  usuarioController.apagarTarefa(req, res);
});

router.post("/check", function (req, res) {
  usuarioController.check(req, res);
});

module.exports = router;
