import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



function DetailProduct() {
  const { slug  } = useParams(); 
  // console.log(slug ); 

 

  const [itemProduct, setItemProduct] = useState(null)
   const getItemProduct =  () => {
    return  axios.get(`https://backoffice.nodemy.vn/api/products/${slug}`)
    .then(res => {
      // console.log(res.data.data);

      setItemProduct(res.data.data)
    })
  }
    // console.log(itemProduct.attributes); 


  useEffect(() => {
    getItemProduct()
  }, [])


  return (
   
      <div>{itemProduct && 
        <>
          <div>
            {itemProduct.attributes.image.data.map((item) => {
              return(
                <div key = {item.id}>
                  <img src={`https://backoffice.nodemy.vn${item.attributes.formats.thumbnail.url}`}  />

                </div>
              )
            })}
          </div>
          <div>{itemProduct.attributes.name}</div>
          <div>{itemProduct.attributes.price}</div>
        </>
      }</div>

  )
}

export default DetailProduct