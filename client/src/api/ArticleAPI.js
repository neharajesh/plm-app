import axios from "axios"
import ROOT_URL from "../config"

export const loadAllArticles = async () => {
    try {
        const response = await axios.get(`${ROOT_URL}/article`)
        return response.data
    } catch (err) {
        console.log("Error occurred while fetching articles")
    }
}