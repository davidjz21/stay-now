import express from "express";
import { createHotel, updateHotel, deleteHotel, getHotel, getHotels } from "../controllers/hotel.js"
import Hotel from "../models/Hotel.js"
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router();

// create
router.post("/", verifyAdmin, createHotel)

// update
router.put("/:id", verifyAdmin, updateHotel)

// delete
router.delete("/:id", verifyUser, deleteHotel)

// get
router.get("/:id", getHotel)

// get all
router.get("/", getHotels)

export default router