import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';

function Movie (){

	const [products, setProducts] = useState([]);

	useEffect(()=>{
        fetch('/api/products')
        .then(response => response.json())
        .then(data =>{
            setProducts(data.products);
        })
        .catch((e)=> console.error(e))
    },[])

    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Todos los productos en la DB</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
											<th>Id</th>
                                            <th>Nombre</th>
                                            <th>descripción</th>
                                            <th>Categoria</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>descripción</th>
                                            <th>Categoria</th>
										</tr>
									</tfoot>
									<tbody>
									{
										products.map((movie,index)=>{
											return  <MovieList  {...movie}  key={index} />
										})
									}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}

export default Movie;