
import React from 'react'

function Button({cateloryItem,filterItems}){
  return (
    <div class=" pt-5 mx-40">
    <h2 className=' uppercase text-xl my-5 relative'>
            <div class="bg-secondary pr-3 z-0">FEATURED PRODUCTS</div>
            <div className='border-t-2 border-dashed border-black absolute w-[90%] left-52 top-3 z-40'></div>
    </h2>
    <div className='flex justify-end'>
        {
           cateloryItem.map((data)=>(
            <div key={data.id} >
            <button className='p-6 bg-red-300 mx-4 text-white text-xl rounded-3xl' onClick={()=> filterItems(data.id)}>{data.name}</button>

            </div>
           ))
           
        }   
    </div>
    </div>
  )
}

export default Button