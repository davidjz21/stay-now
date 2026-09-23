import express from "express";
import { updateUser, deleteUser, getUser, getUsers, } from "../controllers/user.js"
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router();

/*
router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hola usuario, estas autenticado")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hola usuario, has iniciado sesion y puedes eliminar tu cuenta")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Hola administrador, has iniciado sesion y puedes gestionar usuarios")
})
*/

// update
router.put("/:id", verifyUser, updateUser)

// delete
router.delete("/:id", verifyUser, deleteUser)

// get
router.get("/:id", verifyUser, getUser)

// get all
router.get("/", verifyAdmin, getUsers)

export default router