import { useState } from 'react'
import './App.css'
import Recepie from './components/Recepie'
import Home from './components/Home'
import RecipeList from './components/RecipeList'
import { Route,RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {

  const route = createBrowserRouter([
    {path: "/",
     element: <Home />
  },
  {
    path: '/foods',
    element: <RecipeList />
  },
  {
    path: "/recipes/:recipeId",
    element: <Recepie />
  }
  ])

  return (
    <>
     <RouterProvider router={route} />
    </>
  )
}

export default App