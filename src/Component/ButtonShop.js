
import React from 'react'

function ButtonShop({cateloryItem,filterItems}){
  return (
    <div class=" mt-5 ml-28 bg-white px-9 w-[300px]">
    <h2 className=' uppercase text-xl my-5 relative w-[160px]'>
            <div class="bg-secondary pr-3 z-0">FILTER BY PRICE</div>
            <div className='border-t-2 border-dashed border-black absolute w-[33%] left-40 top-3 z-40'></div>
    </h2>
    <form className=''>

            <div   class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <div class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 py-4">
                  {
                  cateloryItem.map((data)=>(
                    <div class="custom-control custom-radio custom-control-inline w-full p-1"key={data.id}>
                      <input type="radio" class=" w-16 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" id="size-1" name="size" onClick={()=> filterItems(data.id)}/>
                      <label class="custom-control-label text-[18px] text-blue-500" for="size-1">{data.name}</label>
                   </div>
                  ))

                }
                
                </div>
 
            </div>
  
    </form>
    </div>
  )
}

export default ButtonShop;