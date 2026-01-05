import axios from "axios";
import React, { useEffect, useState } from "react";
import Tablee from '../components/Table'

const User = () => {

  const [product, setProduct] = useState([])
  const API = 'https://fakestoreapi.com/products'

  const getData = async (url) => {
      const request = await axios.get(url)
      setProduct(request?.data)
    }

  try{

    useEffect(() =>{
    getData(API)
  } , [])

  }catch(error){
    throw new Error(error)
  }
  return (
    <div>
      <h1>
      <Tablee product={product} />
      </h1>
    </div>
  );
};

export default User;
