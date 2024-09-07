import React from 'react';
import { Link } from 'react-router-dom';

function Category({ item }) {
  return (
    <div className="pt-5 mx-40">
      <h2 className="uppercase text-xl my-5 relative">
        <span className="bg-secondary pr-3">Categories</span>
        <div className="border-t-2 border-dashed border-black absolute w-[98%] left-32 top-3"></div>
      </h2>
      <div className="flex justify-between items-center">
        {
          item.map((data) => (
            <Link to={`/categories/${data.id}`} key={data.id}>
              <div className="">
                <div className="overflow-hidden">
                  <img className="rounded-full" src={require(`../Material/Categories/`+data.id+`.jpg`)} alt="" width="200" height='200' />
                </div>
                <div className="text-center mt-2 text-xl">
                  <h6>{data.name}</h6>
                  <small className="text-body">100 Products</small>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Category;
