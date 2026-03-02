
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
function HomeCategories() {

  const [Categories, SetCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => SetCategories(data));
  }, [])

  return (
    <>
    <div className='mb-8'>
        <h2 className="text-xl text-cyan-600 mb-3">Categories</h2>

        <div className="grid grid-cols-3 sm:grid-cols-6">
            {Categories.map((category) => (
              <Link to={`category/${category.slug}`} key={category.name} className="text-heading border border-buffer hover:border-default rounded-xl bg-neutral-primary focus:ring-4 focus:outline-none focus:ring-neutral-tertiary rounded-base text-base font-medium px-5 py-2.5 text-center me-3 mb-3">{category.name}</Link>



        ))}
        </div>
    </div>
    </>
  );
}

export default HomeCategories;
