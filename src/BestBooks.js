import React  from 'react';
import axios from "axios"
import { useEffect } from 'react';

export default function BestBooks() {
  useEffect(() => {
    getBooks()
  },[])
  
  async function getBooks() {
    const API = "http://localhost:8098/book";
    const results = await axios.get(API);
    console.log(results.data);
  }

  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
      

    </>
  )
  
}