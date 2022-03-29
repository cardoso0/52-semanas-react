import { useRoutes } from "react-router-dom"

import { Home } from "../pages/Home"
import { Challenge } from "../pages/Challenge"

export const MainRoutes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/desafio', element: <Challenge /> }
  ])
}