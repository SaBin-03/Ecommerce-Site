import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from './pages/Home'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Kids from './pages/Kids'
import NewArrival from './pages/NewArrival'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path='MensSection' element={<Mens />}/>
        <Route path='WomensSection' element={<Womens />}/>
        <Route path='KidsSection' element={<Kids />}/>
        <Route path='NewArrivalsSection' element={<NewArrival />}/>
      </Route>
    )
  )



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App