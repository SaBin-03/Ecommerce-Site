import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from './pages/Home'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Kids from './pages/Kids'
import NewArrival from './pages/NewArrival'
import NewArrivalsDetails, { arrivalsLoader } from './productsDetails/NewArrivals/NewArrivalsDetails'
import NewArrivalsProductDetails, { newArrivalsProducDetalsLoder } from './productsDetails/NewArrivals/NewArrivalsProductDetails'
import WomensCollectionDetails, { womensLoader } from './productsDetails/TopWomensCollection/WomesCollectionDetails'
import WomesCollectionProductDetails, { womensProducDetalsLoder } from './productsDetails/TopWomensCollection/WomesCollectionProductDetails'
import MensDetails, { mensLoader } from './productsDetails/Mens/MensDetails'
import MensProductDetails, { mensProducDetalsLoder } from './productsDetails/Mens/MensProductDetails'
import KidsDetails, { kidsLoader } from './productsDetails/Kids/KidsDetails'
import KidsProductDetails, { kidsProducDetalsLoder } from './productsDetails/Kids/KidsProductDetails'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path='MensSection' element={<Mens />}>
          <Route index element={<MensDetails />} loader={mensLoader} />
          <Route path=':id' element={<MensProductDetails />} loader={mensProducDetalsLoder}/>
        </Route>
        <Route path='WomensSection' element={<Womens />}>
          <Route index element={<WomensCollectionDetails />} loader={womensLoader} />
          <Route path=':id' element={<WomesCollectionProductDetails />} loader={womensProducDetalsLoder}/>
        </Route>
        <Route path='KidsSection' element={<Kids />}>
          <Route index element={<KidsDetails/>} loader={kidsLoader} />
          <Route path=':id' element={<KidsProductDetails />} loader={kidsProducDetalsLoder}/>
        </Route>
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