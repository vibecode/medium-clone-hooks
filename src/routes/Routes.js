import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalFeed from 'pages/GlobalFeed'
import Article from 'pages/Article'
import TagFeed from 'pages/TagFeed'
import YourFeed from 'pages/YourFeed'
import CreateArticle from 'pages/CreateArticle'
import Authentication from 'pages/authentication'

export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/feed" component={YourFeed} exact />
      <Route path="/articles/new" component={CreateArticle} />
      <Route path="/articles/:slug" component={Article} />
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/register" component={Authentication} />
      <Route path="/login" component={Authentication} />
    </Switch>
  )
}
