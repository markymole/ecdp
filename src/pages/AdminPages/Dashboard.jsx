import React, {useState, useEffect, useContext} from 'react'
import OrdersContext from '../../context/Orders'
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const { product_orders, getOrders} = useContext(OrdersContext);

  useEffect(()=>{
    getOrders();
  }, [])


  return (

    <div className='md:px-12'>
        <div class="h-full mt-14">
        <div className="grid gap-6 mb-4 md:grid-cols-2 xl:grid-cols-6">
                    <div className="flex items-center p-4 rounded-lg shadow-xs bg-gray-800">
                    <div className="p-3 mr-4 rounded-full text-orange-100 bg-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>

                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-400">
                        Ongoing Cutting
                        </p>
                        <p className="text-lg font-semibold text-gray-200">
                        {product_orders?.filter(product_order => product_order.cutting === "In-Progress").length}
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center p-4 rounded-lg shadow-xs bg-gray-800">
                    <div className="p-3 mr-4 rounded-full text-orange-100 bg-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-400">
                        Ongoing Assembly-1
                        </p>
                        <p className="text-lg font-semibold text-gray-200">
                        {product_orders?.filter(product_order => product_order.assembly_one === "In-Progress").length}
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center p-4  rounded-lg shadow-xs bg-gray-800">
                    <div className="p-3 mr-4  rounded-full text-green-100 bg-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-400">
                        Ongoing Assembly-2
                        </p>
                        <p className="text-lg font-semibold text-gray-200">
                        {product_orders?.filter(product_order => product_order.assembly_two === "In-Progress").length}
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center p-4 rounded-lg shadow-xs bg-gray-800">
                        <div className="p-3 mr-4  rounded-full text-teal-100 bg-teal-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                        </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-400">
                        Ongoing QC
                        </p>
                        <p className="text-lg font-semibold text-gray-200">
                        {product_orders?.filter(product_order => product_order.quality_control === "In-Progress").length}
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center p-4 rounded-lg shadow-xs bg-gray-800">
                    
                    <div className="p-3 mr-4  rounded-full text-blue-100 bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-400">
                        Ongoing Finishing-1
                        </p>
                        <p className="text-lg font-semibold text-gray-200">
                        {product_orders?.filter(product_order => product_order.finishing_one === "In-Progress").length}
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center p-4 rounded-lg shadow-xs bg-gray-800">
                    <div className="p-3 mr-4 rounded-full text-orange-100 bg-purple-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-400">
                        Ongoing Finishing-2
                        </p>
                        <p className="text-lg font-semibold text-gray-200">
                        {product_orders?.filter(product_order => product_order.finishing_two === "In-Progress").length}
                        </p>
                    </div>
                    </div>
                </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-4 gap-4 text-gray-800 ">
          <div class="md:col-span-2 xl:col-span-3">
            <h3 class="text-lg font-semibold">Enrod Orders Summary</h3>
          </div>
          <div class="md:col-span-2 xl:col-span-1">
            <div class="rounded bg-white p-3 border shadow-md border-gray-200">
              <div class="flex justify-between py-1 text-gray-800 ">
                <h3 class="text-sm font-semibold">Orders in TO-DO</h3>
                <svg class="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
              </div>
              <div class="text-sm text-white mt-2 max-h-[30vh] overflow-y-scroll scrollbar-hide">
              {
                    product_orders?.filter(product_order => product_order.date_finished === null && product_order.cutting === null).slice(0,7).map(order => {
                        return(
                          <div class="bg-gray-600 hover:bg-blue-700 p-2 rounded mt-1 border-b cursor-pointer">Order # {order.product_order} - Item Code: {order.item_code}</div>
                        )
                    })
                }
                
              </div>
            </div>
          </div>
          <div>
            <div class="rounded bg-white p-3 border shadow-md border-gray-200">
              <div class="flex justify-between py-1 text-gray-800">
                <h3 class="text-sm font-semibold">Orders In-Progress</h3>
                <svg class="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
              </div>
              <div class="text-sm text-white mt-2 max-h-[30vh] overflow-y-scroll scrollbar-hide">
                {
                    product_orders?.filter(product_order => product_order.date_finished === null && product_order.cutting !== null).slice(0,7).map(order => {
                        return(
                          <div class="bg-gray-600 hover:bg-blue-700 p-2 rounded mt-1 border-b  cursor-pointer">Order # {order.product_order} - Item Code: {order.item_code}</div>
                        )
                    })
                }
                 
              
              </div>
            </div>
          </div>
          <div>
            <div class="rounded bg-white shadow-md border-gray-200 border p-3">
              <div class="flex justify-between py-1 text-gray-800 ">
                <h3 class="text-sm font-semibold">Orders Finished</h3>
                <svg class="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
              </div>
              <div class="text-sm text-white mt-2 max-h-[30vh] overflow-y-scroll scrollbar-hide">
                  {
                      product_orders?.filter(product_order => product_order.date_finished !== null).slice(0,7).map(order => {
                          return(
                            <div class="bg-gray-600 hover:bg-blue-700  p-2 rounded mt-1 border-b border-gray-100  cursor-pointer">Order # {order.product_order} - Item Code: {order.item_code}</div>
                          )
                      })
                  }
                    

               
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard