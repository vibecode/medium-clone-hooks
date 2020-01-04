import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalFeed from 'pages/GlobalFeed'
import Article from 'pages/Article'

export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact></Route>
      <Route path="/article/:slug" component={Article}></Route>
    </Switch>
  )
}
