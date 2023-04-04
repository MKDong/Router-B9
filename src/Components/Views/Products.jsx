import React,{useState} from 'react'

function Products(props) {
    console.log(props);
   
  
  return (
    <div>
        <div>{props.image.data.map(item => {
            return(
                <img 
                src={`https://backoffice.nodemy.vn${item.attributes.formats.thumbnail.url}`}
                />
                )
            })}</div>
            <div 
                
            >{props.name}</div>
            <div>{props.price}</div>
            {/* <div>{props.slug}</div> */}
    </div>
  )
}

export default Products