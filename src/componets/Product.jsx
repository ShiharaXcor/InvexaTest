import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import React from "react";
  
  const Product = (props) => {
    return (
      <div className="mt-10 shadow-2xl">
        <TableContainer component={Paper}>
          <Table>
            <TableHead className="!bg-red-300 ">
              <TableRow >
                <TableCell >Product ID</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Unit</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Supplier Name</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             



              {
              
              props.productList.length < 0? 
              
              
              props.productList.map((product, index) => (
                <TableRow key={index} className="hover:bg-slate-100">
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.catogary}</TableCell>
                  <TableCell>{product.Unit}</TableCell>
                  <TableCell>{product.Price}</TableCell>
                  <TableCell>{product.Suppiler}</TableCell>
                  <TableCell className="!flex !gap-3">
                        <Button className="!bg-red-500  !text-white ">Update</Button>
                        <Button className="!bg-red-500  !text-white ">Delete</Button>



                  </TableCell>
                </TableRow>
              )) : <TableRow>
                        <TableCell colSpan={7}  scope="row" className="!text-center">
                            No     product   data
                        </TableCell>
                
                
                </TableRow>}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default Product;
  