import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalFeed from 'pages/GlobalFeed'
import Article from 'pages/Article'
import TagFeed from 'pages/TagFeed'
import YourFeed from 'pages/YourFeed'
import CreateArticle from 'pages/CreateArticle'
import EditArticle from 'pages/EditArticle'
import Settings from 'pages/Settings'
import Authentication from 'pages/Authentication'
import UserProfile from 'pages/UserProfile'

export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/profiles/:slug" component={UserProfile} />
      <Route path="/profiles/:slug/favorites" component={UserProfile} />
      <Route path="/settings" component={Settings} exact />
      <Route path="/articles/new" component={CreateArticle} />
      <Route path="/articles/:slug/edit" component={EditArticle} />
      <Route path="/feed" component={YourFeed} exact />
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/articles/:slug" component={Article} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
    </Switch>
  )
}
