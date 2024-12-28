import React from "react";

const Filter = () => {
  const product = [
    { id: 1, title: "iphone", price: 19000 },
    { id: 2, title: "iphone2", price: 12000 },
    { id: 3, title: "iphone3", price: 13000 },
    { id: 4, title: "iphone4", price: 14000 },
    { id: 5, title: "iphone5", price: 15000 },
    { id: 6, title: "iphone6", price: 16000 },
    { id: 7, title: "iphone7", price: 17000 },
    { id: 8, title: "iphone8", price: 18000 },
    { id: 9, title: "iphone9", price: 18000 },
  ];
  const filterdata = product.filter((data) => data.price >"17000");
  console.log(filterdata);
  return <div>
    {filterdata.map((data)=><div key={data.id}>
        <h2>{data.id}</h2>
    </div>)}
  </div>;
};

export default Filter;
