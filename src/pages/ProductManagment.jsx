import React from 'react'
import NewProductForm from '../componets/NewProductForm'
import Product from '../componets/Product'


const ProductManagment = () => {


      const   ProductList   = [
        {id:"p1001",
            name:"eggs",
            catogary:"Eggs",  
            Unit  :   "qty",   
            Price  :  32.00,   
            Suppiler  :   "kamala",   

        }, 
        {   id:"p1002",
            name:"Samon",
            catogary:"Groccay",  
            Unit  :   "qty",   
            Price  :  204.00,   
            Suppiler  :   "namal",   
            
        },
      ]




  return (
  <div>
    <NewProductForm />



    <Product   productList  ={ProductList}/>

  </div>
  )
}

export default ProductManagment
