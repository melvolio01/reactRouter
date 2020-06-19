import React from 'react';
import { useParams } from 'react-router-dom';
import useArticle from '../hooks/useArticle';


const Article = () => {
  const { teamId, articleId } = useParams()

  const {
    response: article,
    loading
  } = useArticle({ teamId, articleId })

  if (loading) return <div><h2>Loading...</h2></div>
  console.log(article)

  return (
    <div className="panel">
      <article className="article">
        <h1 className="header">{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  )
}

export default Article;