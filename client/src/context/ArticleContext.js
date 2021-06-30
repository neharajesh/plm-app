import { createContext, useContext, useEffect, useState } from "react"
import { loadAllArticles } from "../api/ArticleAPI";

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
    const [ articles, setArticles ] = useState([]);

    useEffect(async() => {
        const response = await loadAllArticles();
        console.log(response)
        setArticles(response.articles)
    }, [setArticles])

    return(<>
        <ArticleContext.Provider value={{ articles, setArticles }}>
            {children}
        </ArticleContext.Provider>
    </>)
}

export const useArticle = () => {
    return useContext(ArticleContext)
}