import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Products from './Products'
import { Link, useParams } from 'react-router-dom'
import DetailProduct from './DetailProduct'

function ListProduct() {
    const [post, setPost] = useState([])
    const getProduct = () => {
        return axios.get('https://backoffice.nodemy.vn/api/products?populate=*')
        .then(res => {
            setPost(res.data.data)
            // console.log(post);
        })
        
    }

    useEffect(() => {
        getProduct()      
    }, [])

    const handleDetail = (item) => {
        const newDetail = {item}
        console.log(newDetail);
    }

    
  return (
    <div>
        {post.map(item => {
            // console.log(item.attributes.slug);

             
            return(
                
                <div key = {item.id}>
                <Link  to={`${item.attributes.slug}`} onClick={() => {handleDetail(item)}} >
                    <Products
                        // products = {item}
                        id={item.id}
                        slug={item.attributes.slug}
                        name= {item.attributes.name}
                        image = {item.attributes.image}
                        price = {item.attributes.price}
                    />

                </Link>

                <DetailProduct
                    
                />
                  
                </div>
                )
            
        })}
    </div>
  )
}

export default ListProduct