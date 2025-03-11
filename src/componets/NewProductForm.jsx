import { Typography, Grid, TextField, Autocomplete, Button } from '@mui/material';
import React, { useState } from 'react'

const NewProductForm = () => {

    const  catogary   =   [
        "Grocary"
        , "Eggs",   
        , "Rice",   
        "Fresh  item"  

    ]

    const   unit   =[
            "Kg",   
            "L",   
            "QTY"   ,  

    ]

    const    supplier  =   [

{
      id:"s100",  
      name:"kamal"   
      ,location  :   "kurunagala"   ,   
           
},
{
    id:"s101",  
    name:"namal"   
    ,location  :   "kurunagala"   ,   
         
},
{
    id:"s102",  
    name:"sahan"   
    ,location  :   "kurunagala"   ,   
         
},
{
    id:"s103",  
    name:"nadun"   
    ,location  :   "kurunagala"   ,   
         
},

    ]

const   [id  ,  setId]  =   useState("")  ;   
const   [name  ,  setName]   =   useState("");   
const   [cato ,  setCato]   =   useState("");  
const   [uni ,  setUnit]   =   useState(""); 
const   [price  ,  setPrice]   =   useState ();  
const   [supname ,  setSupname]   =  useState("")   ; 
const   [image,  setImage]   =  useState(null);   





const     handleIdChange  =(event)=>{

        setId(event.target.value);   

}

const     handleNameChange  =(event)=>{

    setName(event.target.value);   

}

const     handleCatoChange  =(event)=>{

    setCato(event.target.value);   

}

const     handleUnitChange  =(event)=>{

    setUnit(event.target.value);   

}


const     handlePriceChange  =(event)=>{

    setPrice(event.target.value);   

}


const     handlesupplierChange  =(event)=>{

    setSupname(event.target.value);   

}


const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        setImage(URL.createObjectURL(file)); // Creates a preview URL
    }
};


  return (
    <Grid className=' flex  justify-center'>

        <Grid container spacing={2}
            className='!bg-red-100 !w-[500px]  !mt-5  '>

           
            <Grid   item   xs={12} className='!shadow-lg ! !p-5 !flex-col   ' >
               
                <Typography component="h1"
                className='!text-2xl !text-center !font-bold !text-red-800'>ADD  NEW  PRODUCT </Typography>
               
                <Grid className='!mt-10  !flex  !gap-4'>
                    <TextField  className='w-64 '      label="product id"  value={id}   onChange={handleIdChange}/>  
                    <TextField  className='w-64 '     label="product name"   value={name}  onChange={handleNameChange} />  

                </Grid>

                <Grid>
                    <Autocomplete  
                    disablePortal 
                    options={catogary} 
                    className='!mt-4'
                    value={cato}  
                    onChange={(event,newValue)=>setCato(newValue)}
                     renderInput={(params)=><TextField  {...params}      label="catogary" />}/>

                </Grid>

                <Grid  item    xs={12} className='!flex  gap-4'>   

                   <Autocomplete  
                   disablePortal   
                   options={unit}  
                   className='!mt-4' 
                   value={uni}
                   onChange={(event,newValue)=>setUnit(newValue)}  
                   renderInput={(params)=><TextField {...params}   className='!w-56'  label='unit' />}  />   
                  
                   <TextField   className='w-56 !mt-4'   label="price"  value={price }  onChange={handlePriceChange}/>   
               
                </Grid>

                    <Grid  item  xs={12}  
                >
                    <Autocomplete 
                    disablePortal 
                    options={supplier.map((sup)=>sup.name)} 
                    className='!mt-4' 
                    value={supname}
                    onChange={(event,newValue)=>setSupname(newValue)}
                     renderInput={(params)=><TextField  {...params}  label="suplier"   />}/>

                </Grid>
                <Grid   item    xs={12} >  
                    <Button    className='!bg-red-500  w-full !mt-4 !font-bold !text-lg !text-white' >  SAVE  </Button>  
                
                </Grid>   
            
            </Grid>
         
         </Grid>
   
   </Grid>

  )
}

export default NewProductForm
