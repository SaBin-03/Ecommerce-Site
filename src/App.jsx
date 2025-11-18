import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from './pages/Home'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Kids from './pages/Kids'
import NewArrival from './pages/NewArrival'
import NewArrivalsDetails, { arrivalsLoader } from './productsDetails/NewArrivalsDetails'
import NewArrivalsProductDetails, { newArrivalsProducDetalsLoder } from './productsDetails/NewArrivalsProductDetails'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path='MensSection' element={<Mens />}/>
        <Route path='WomensSection' element={<Womens />}/>
        <Route path='KidsSection' element={<Kids />}/>
        <Route path='NewArrivals' element={<NewArrival />}>
          <Route index element={<NewArrivalsDetails />} loader={arrivalsLoader} />
          <Route path=':id' element={<NewArrivalsProductDetails />} loader={newArrivalsProducDetalsLoder}/>
        </Route>
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