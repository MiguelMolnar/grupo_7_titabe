import React, { useState, useEffect } from 'react';
import Genre  from './Genre';

function GenresInDb() {

    const [categories, setCategories] = useState([]);

	useEffect(()=>{
        fetch('/api/products')
        .then(response => response.json())
        .then(data =>{
            setCategories(data.countByCategory);
        })
        .catch((e)=> console.error(e))
    },[])
    

        return (
            <React.Fragment>
            <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Categorias</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div className="row">
                                {
                                    categories.map((genre,index)=>{
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
        
}
export default GenresInDb;