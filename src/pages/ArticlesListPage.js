import React from 'react'

import articleContent from './article-content'
import ArticlesList from '../components/ArticlesList'

const ArticlesListPage = () => (
	<>
		<h1>Articles</h1>
		<ArticlesList article={articleContent} />
	</>
)

export default ArticlesListPage
