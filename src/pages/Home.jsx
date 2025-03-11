import React from 'react'

const Home = () => {

    const    users  =  [
      {
        id:1,
        name:"shan",
        age:21,
        mark:90.89,


    },
    {
      id:2,
      name:"Lakshan",
      age:22,
      mark:91.89,


  },
  {
    id:3,
    name:"shihara",
    age:23,
    mark:99.89,


},




    ]


  return (
    <div>
        <h1 className='text-center font-bold'>  this  is  the  home  page  </h1>



<div>
      <table>
        <thead>
          <tr>
            <th>User id  </th>
            <th>User  name</th>
            <th>Age</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
              {
                users.length > 0 ? (

                  
                    users.map((users,index)=>(
        
                        <tr  key={index}>
                          <td>{users.id}</td>
                          <td>{users.name}</td>
                          <td>{users.age}</td>
                          <td>{users.mark}</td>
                        </tr>
        
        
        
                    ))
                  


                ):(

                    <td colSpan="4" className='text-center'>No  data  available  </td>


                )
              }





        </tbody>
      </table>





</div>
      
    </div>
  )
}

export default Home
