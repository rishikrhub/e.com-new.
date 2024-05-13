import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProducts() {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState('');
  async function createProduct() {
    const data = {title,description,price};
    await axios.post('/api/products', );
  }
    return (
       <Layout>
        <form onSubmit={createProduct}>
        </form>
        <h1>New Products</h1>
        <label>Product name</label>
         <input type="text" 
         placeholder="product name" 
         value={title} 
         onChange={ev => setTitle(ev.target.value)}/>
         <label>Description</label>
         <textarea placeholder="description" 
         value={description} 
         onChange={ev => setTitle(ev.target.value)}/>
         <label>Price (in INR)</label>
         <input type="number" 
         placeholder="price" 
         value={price} 
         onChange={ev => setTitle(ev.target.value)}/>
         <button type="submit" 
         className="btn-primary">Save</button>
       </Layout>
    );
}

