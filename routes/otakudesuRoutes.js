import express from "express";
import { renderOtakudesuAnimeDetail } from "../controllers/otakudesuController.js";

const router = express.Router();

router.get("/otakudesu/anime/:animeId", renderOtakudesuAnimeDetail);

export default router;
