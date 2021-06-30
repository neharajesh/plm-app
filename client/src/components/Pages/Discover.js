import { useArticle } from "../../context/ArticleContext"

export const Discover = () => {
    const { articles } = useArticle();

    return (<>
        <div className="pageContainer">
            <h1> Discover </h1>
            <p className="mg-tb-1 txt-l w-75"> Worried if you're taking good care of your pet? Are you confused about your pet's behaviour or are you just curious to learn more? </p>
            <p className="mg-b-1 txt-l"> Discover articles and lists relating to your needs! </p>

            <div className="flex flex-row-wrap">
                {articles.map(article => (<div key={article._id} className="card bdr-thin bdr-grey bdr-rad-m mg-1 card-w-15 card-h-25">
                    <img className="articleImage" 
                    // src={article.articleImage==="" ? "https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo" : article.articleImage} 
                    src={article.articleImage}
                    alt="article" />
                    <p className="mg-t-1 pd-05 txt-l txt-500"> {article.articleName} </p>
                    <div key={article._id} className="mg-t-05 pd-05 flex flex-row-wrap">
                        {article.category.map(category => <span className="txt-s mg-025 pd-025 bdr-none bdr-rad-m mg-r-05 fill-secondary-grey txt-black"> {category} </span>)}
                    </div>
                    <p className="badge-tl pd-lr-05 fill-secondary-blue txt-s txt-black"> {article.author} </p>
                    <a className="readButton mg-b-1 mg-l-1 txt-white" href={article.articleLink}> Read </a>
                </div>))}
            </div>
        </div>
    </>)
}