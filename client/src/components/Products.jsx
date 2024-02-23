import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Products() {
    const [allProducts, setAllProducts] = useState([])

    useEffect(()=>{
         axios.get('http://127.0.0.1:5000/api/products/')
         .then(res => setAllProducts(res.data))
         .catch(err=>console.log(err));
    }, [])

    console.log(allProducts)

  //   const [message, setMessage] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/products")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data));
  // }, []);

  return (
    <>
        <h1></h1>
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <div class="flex flex-wrap -m-4">
          {
            allProducts.map((e) => (
              <div className="p-4 lg:w-1/4 md:w-1/2" key={e._id}>
                
                  <div className="bg-white">
                  <Link to={"/products/" + e._id}>
                    <div className="mt-6">
                      <div className="gap-x- gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="group relative">
                          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40">
                            <img src={e.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                          </div>
                          <div className="mt-2 flex justify-between">
                            <div>
                              <h3 className="text-sm text-gray-700">
                               
                                  <span aria-hidden="true" className="absolute inset-0"></span>
                                  STOCK: {e.countInStock}
                              </h3>
                            </div>
                            <div class="flex items-center">
                                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{e.rating}</p>
                                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
                            </div>

                            {/* <p className="text-sm text-gray-900">
                              RATING:{e.rating}
                              </p> */}
                          </div>
                          <div className="mt-2 flex justify-between">
                            <div>
                              <h3 className="text-sm font-bold text-gray-700">
                                <a href="#">
                                  <span aria-hidden="true" className="absolute inset-0"></span>
                                  {e.name}
                                </a>
                              </h3>
                            </div>
                              <p className="text-sm font-medium text-gray-900">${e.price}</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </Link>
                  </div>
              </div>
            ))
          }
          
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
