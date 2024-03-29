import React, { useState, useEffect } from 'react';
import imagenFondo from '../assets/images/logo-white.png';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
function ContentRowTop(){
	
    const [lastProduct, setLastProduct] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(()=>{
        fetch('/api/products')
        .then(response => response.json())
        .then(data =>{
            setProducts(data.products);
        })
        .catch((e)=> console.error(e))
    },[])

	useEffect(()=>{
        fetch(`/api/products/${products.length + 1}`)
        .then(response => response.json())
        .then(data =>{
            setLastProduct(data);
        })
        .catch((e)=> console.error(e))
    },[])

	
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
									</div>
									<h5>{lastProduct.name}</h5>
									<p>{lastProduct.description}</p>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;