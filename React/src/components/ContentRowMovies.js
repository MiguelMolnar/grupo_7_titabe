import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRowTop(){

    const [totalProducts, setTotalProducts] = useState([]);
    const [totalUsers, setTotalUsers] = useState([]);
    const [totalSubcategories, setTotalSubcategories] = useState([]);

    useEffect(()=>{
        fetch('/api/products')
        .then(response => response.json())
        .then(data =>{
            setTotalProducts(data.count);
            setTotalSubcategories(data.countByCategory.length)
        })
        .catch((e)=> console.error(e))
    },[])

    useEffect(()=>{
        fetch('/api/users')
        .then(response => response.json())
        .then(data =>{
            setTotalUsers(data.count);
        })
        .catch((e)=> console.error(e))
    },[])

    let products = {
        color:   "primary",
        titulo: "Total de productos",
        valor: totalProducts,
        icono: "fas fa-film",
    }
    
    let users ={
        color:   "success",
        titulo: "Total de usuarios",
        valor: totalUsers,
        icono: "fas fa-user",
    }
    
    let categories = {
        color:   "warning",
        titulo: "Total de categorias",
        valor: totalSubcategories,
        icono: "fas fa-user",
    }
    
    let cardProps = [products,users,categories];

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;