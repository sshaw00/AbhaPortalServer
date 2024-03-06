const { Router } = require("express");
const router = Router();
const {
  getUsers,
  register,
  login,
  protected,
  logout,
} = require("../controllers/auth");
const { registerValidation, loginValidation } = require("../validators/auth");
// const {
//   validationMiddleware,
// } = require("../middlewares/validations-middleware.js");
const { userAuth } = require("../middlewares/auth-middleware.js");

router.get("/get-users", getUsers);
router.get("/protected", userAuth, protected);
router.post("/register", registerValidation, register);
router.post("/login", loginValidation, login);
router.get("/logout", logout);
module.exports = router;
