import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Products from './Products'
import { Link, useParams } from 'react-router-dom'

function ListProduct() {
    const param=useParams()
    const [params,setParams]=useState(param)
    const [post, setPost] = useState([])
    const getProduct = () => {
        return axios.get('https://backoffice.nodemy.vn/api/products?populate=*')
        .then(res => {
            setPost(res.data.data)
            console.log(post);
        })
        
    }

    useEffect(() => {
        getProduct()      
    }, [])
  return (
    <div>
        {post.map(item => {
            console.log(item.attributes.slug);

             
            return(
                
                <>
                <Link to={`${item.attributes.slug}`}>
                    <Products
                        // products = {item}
                        id={item.id}
                        slug={item.attributes.slug}
                        name= {item.attributes.name}
                        image = {item.attributes.image}
                        price = {item.attributes.price}
                    />

                </Link>
                  
                </>
                )
            
        })}
    </div>
  )
}

export default ListProduct