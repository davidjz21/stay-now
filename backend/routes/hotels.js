import express from "express";
import { createHotel } from "../controllers/hotel.js"
import { updateHotel } from "../controllers/hotel.js"
import { deleteHotel } from "../controllers/hotel.js"
import { getHotel } from "../controllers/hotel.js"
import { getHotels } from "../controllers/hotel.js"

const router = express.Router();

// create
router.post("/", createHotel)

// update
router.put("/:id", updateHotel)

// delete
router.delete("/:id", deleteHotel)

// get
router.get("/:id", getHotel)

// get all
router.get("/", getHotels)

export default router