import  React   from 'react'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Pageroot from './Root/Pageroot'

import   Home  from '../src/pages/Home'; 
import   Page1  from   '../src/pages/Page1';   
import   Page2  from   '../src/pages/Page2';  

import ProductManagment from './pages/ProductManagment';




function App() {




  return (
    <>
      <div>  
        

        <h1>  this  is  the  new text from  shihara </h1>
        <h1>  this  is  from   gihan   </h1>

        <ProductManagment />

      </div>  
    </>
  )
}

export default App
