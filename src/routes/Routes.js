import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalFeed from 'pages/GlobalFeed'
import Article from 'pages/Article'
import Authentication from 'pages/authentication'

export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact></Route>
      <Route path="/article/:slug" component={Article}></Route>
      <Route path="/register" component={Authentication}></Route>
      <Route path="/login" component={Authentication}></Route>
    </Switch>
  )
}
