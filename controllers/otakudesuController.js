import { API_BASE_URL } from "../config/api.js";
import axios from "axios";

export const renderOtakudesuAnimeDetail = async (req, res) => {
    try {
        const { animeId } = req.params;
        const apiUrl = `${API_BASE_URL}/otakudesu/anime/${animeId}`;
        const response = await axios.get(apiUrl);
        const anime = response.data.data;
        res.render("detail", { anime });
    } catch (error) {
        res.status(404).render("404");
    }
};
