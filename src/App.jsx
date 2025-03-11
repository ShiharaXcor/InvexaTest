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
        

        <ProductManagment />

      </div>  
    </>
  )
}

export default App
