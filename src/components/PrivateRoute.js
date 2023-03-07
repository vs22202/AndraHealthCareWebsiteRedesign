import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component,path, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      path={path}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to={{pathname:"/login",state:{text:'You Need To Login To Do That',path:path}}} />
      }}
    ></Route>
  )
}