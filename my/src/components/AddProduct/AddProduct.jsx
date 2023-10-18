import React, { useState } from 'react';

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(product, null, 2));
    console.log(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <h2>ADD PRODUCT</h2>
        <input name="name" placeholder="Name" onChange={handleChange} />
      </div>
      <div>
        <input name="description" placeholder="Description" onChange={handleChange} />
      </div>
      <div>
        <input name="category" placeholder="Category" onChange={handleChange} />
      </div>
      <div>
        <input name="quantity" placeholder="Quantity" type="number" onChange={handleChange} />
      </div>
      <div>
        <input name="price" placeholder="Price" type="number" onChange={handleChange} />
      </div>
      <div>
        <button type="submit">SUBMIT</button>
      </div>
      <div>
        <button type="reset">CANCEL</button>
      </div>
    </form>
  );
}

export default AddProduct;
