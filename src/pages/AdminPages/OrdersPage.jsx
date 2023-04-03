import React, {useEffect, useContext, useState} from 'react'
import OrdersContext from '../../context/Orders'
import FadeInOut from '../../animations/Fade';

const OrdersPage = () => {

    const { product_orders, getOrders, showModal, setModal, formValues, onChange, errors, postOrder } = useContext(OrdersContext);

    useEffect(() =>{
        getOrders();
    },[]);

  return (
    <div>
        <div className="py-5 mt-10 md:px-12">
            <div className="h-full overflow-y-auto">
                <div className="container  mx-auto grid">
                <h5 className='font-medium mb-4'>Product Orders</h5>
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                    <div className="flex items-center p-4 rounded-lg shadow-xs bg-gray-800">
                    <div className="p-3 mr-4 rounded-full text-orange-100 bg-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>

                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-400">
                        To Do
                        </p>
                        <p className="text-lg font-semibold text-gray-200">
                        {product_orders?.filter(product_order => product_order.cutting === null).length}
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
                        In-Progress
                        </p>
                        <p className="text-lg font-semibold text-gray-200">
                        {product_orders?.filter(product_order => product_order.cutting === "In-Progress" || product_order.cutting === "Ok" && product_order.date_finished === null).length}
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
                        Completed Orders
                        </p>
                        <p className="text-lg font-semibold text-gray-200">
                        {product_orders?.filter(product_order => product_order.date_finished !== null).length}
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className='md:px-12'>
            <button onClick={() => setModal(true)} className='px-4 py-2 bg-blue-600 text-sm font-medium hover:bg-blue-500 duration-100 transition-all ease-out text-white rounded-md'>New Order</button>
        </div>
        <div className='flex px-4 gap-10 flex-wrap md:px-12'>
        <div className="py-8">
            <h5 className='py-4 font-bold text-lg'>To Do</h5>
            <div className='flex flex-col gap-4'>
                {
                    product_orders?.filter(product_order => product_order.cutting === null).length > 0 ?
                    product_orders?.filter(product_order => product_order.cutting === null).map(order => {
                        return(
                                 <div  key={order.id} className="m-auto h-52 w-full max-w-md bg-white shadow-md p-2 border-t-4 border-blue-600 rounded hover:scale-105 duration-300 transition-all ease-out">
                                        <header className="p-2 border-b flex"> 
                                            <div className="flex flex-col">
                                                <h4 className="text-xs font-semibold">PO: {order.product_order}</h4>
                                                <h1 className="text-lg font-mono text-blue-600">Item Code: {order.item_code}</h1>
                                            </div>
                                        </header>
                                        <div className="flex flex-wrap justify-between p-2 w-full gap-4">
                                            <div className="flex flex-col w-full">
                                                <h4 className="text-xs">Quantity: {order.quantity}</h4>
                                                <h1 className="text-lg">{order.description}</h1>
                                            </div>

                                            <div className="flex flex-col">
                                                <h4 className="text-xs">Date Issued</h4>
                                                <h1 className="text-md">{order.date_started}</h1>
                                            </div>

                                            <div className="flex flex-col mr-2">
                                                <h4 className="text-xs">Week Issued</h4>
                                                <h1 className="text-md">{order.week_issued}</h1>
                                            </div>
                                        </div>

                                    </div>
                        )
                    }):
                    <div className="m-auto h-52 invisible w-full max-w-md bg-white shadow-md p-2 border-t-4 border-amber-600 rounded">
                        <header className="p-2 border-b flex"> 
                            <div className="flex flex-col">
                                <h4 className="text-xs font-semibold">PO: </h4>
                                <h1 className="text-lg font-mono text-red-600">Item Code: </h1>
                            </div>
                        </header>
                        <div className="flex flex-wrap justify-between p-2 w-full gap-4">
                            <div className="flex flex-col w-full">
                                <h4 className="text-xs">Quantity: </h4>
                                <h1 className="text-lg"></h1>
                            </div>

                            <div className="flex flex-col">
                                <h4 className="text-xs">Date Issued</h4>
                                <h1 className="text-md"></h1>
                            </div>

                            <div className="flex flex-col mr-2">
                                    <h4 className="text-xs">Week Issued</h4>
                                    <h1 className="text-md"></h1>
                            
                            </div>
                        </div>

                    </div>
                    

                }
            </div>
        </div>
        <div className="py-8">
            <h5 className='py-4 font-bold text-lg'>In-Progress</h5>
            <div className='flex flex-col gap-4'>
                {
                    product_orders?.filter(product_order => product_order.cutting === "In-Progress" || product_order.cutting === "Ok" && product_order.date_finished === null).length > 0 ?
                    
                        product_orders?.filter(product_order => product_order.cutting === "In-Progress" || product_order.cutting === "Ok" && product_order.date_finished === null).map(order => {
                            return(
                                     <div  key={order.id} className="m-auto h-52 w-full max-w-md bg-white shadow-md p-2 border-t-4 border-amber-600 rounded hover:scale-105 duration-300 transition-all ease-out">
                                            <header className="p-2 border-b flex"> 
                                                <div className="flex flex-col">
                                                    <h4 className="text-xs font-semibold">PO: {order.product_order}</h4>
                                                    <h1 className="text-lg font-mono text-amber-600">Item Code: {order.item_code}</h1>
                                                </div>
                                            </header>
                                            <div className="flex flex-wrap justify-between p-2 w-full gap-4">
                                                <div className="flex flex-col w-full">
                                                    <h4 className="text-xs">Quantity: {order.quantity}</h4>
                                                    <h1 className="text-lg">{order.description}</h1>
                                                </div>
    
                                                <div className="flex flex-col">
                                                    <h4 className="text-xs">Date Issued</h4>
                                                    <h1 className="text-md">{order.date_started}</h1>
                                                </div>
    
                                                <div className="flex flex-col mr-2">
                                                    <h4 className="text-xs">Week Issued</h4>
                                                    <h1 className="text-md">{order.week_issued}</h1>
                                                </div>
                                            </div>
    
                                        </div>
                            )
                        }):
                        <div className="m-auto h-52 invisible w-full max-w-md bg-white shadow-md p-2 border-t-4 border-amber-600 rounded ">
                            <header className="p-2 border-b flex"> 
                                <div className="flex flex-col">
                                    <h4 className="text-xs font-semibold">PO: </h4>
                                    <h1 className="text-lg font-mono text-red-600">Item Code: </h1>
                                </div>
                            </header>
                            <div className="flex flex-wrap justify-between p-2 w-full gap-4">
                                <div className="flex flex-col w-full">
                                    <h4 className="text-xs">Quantity: </h4>
                                    <h1 className="text-lg"></h1>
                                </div>

                                <div className="flex flex-col">
                                    <h4 className="text-xs">Date Issued</h4>
                                    <h1 className="text-md"></h1>
                                </div>

                                <div className="flex flex-col mr-2">
                                    <h4 className="text-xs">Week Issued</h4>
                                    <h1 className="text-md"></h1>
                                </div>
                            </div>

                        </div>
                        


                
                
                }
            </div>
        </div>
        <div className="py-8">
            <h5 className='py-4 font-bold text-lg'>Completed</h5>
            <div className='flex flex-col gap-4'>
                {
                    product_orders?.filter(product_order => product_order.date_finished !== null).map(order => {
                        return(
                                 <div  key={order.id} className="m-auto h-52 w-full max-w-md bg-white shadow-md p-2 border-t-4 border-green-600 rounded hover:scale-105 duration-300 transition-all ease-out">
                                        <header className="p-2 border-b flex"> 
                                            <div className="flex flex-col">
                                                <h4 className="text-xs font-semibold">PO: {order?.product_order}</h4>
                                                <h1 className="text-lg font-mono text-green-700">Item Code: {order?.item_code}</h1>
                                            </div>
                                        </header>
                                        <div className="flex flex-wrap justify-between p-2 w-full gap-4">
                                            <div className="flex flex-col w-full">
                                                <h4 className="text-xs">Quantity: {order.quantity}</h4>
                                                <h1 className="text-lg">{order?.description}</h1>
                                            </div>

                                            <div className="flex flex-col">
                                                <h4 className="text-xs">Date Issued</h4>
                                                <h1 className="text-md">{order?.date_started}</h1>
                                            </div>

                                            <div className="flex flex-col">
                                                <h4 className="text-xs">Date Finished</h4>
                                                <h1 className="text-md">{order?.date_finished}</h1>
                                            </div>

                                            <div className="flex flex-col  mr-2">
                                                <h4 className="text-xs">Week Issued</h4>
                                                <h1 className="text-md">{order?.week_issued}</h1>
                                            </div>
                                        </div>

                                    </div>
                        )
                    })
                }
            </div>
        </div>
       
       
    </div> 
       
        {
            showModal && 
            <FadeInOut show={showModal} duration={200}>
            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 bg-zinc-800/60 left-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg md:h-auto">

                <div className="relative bg-white rounded-lg shadow-lg">
                    <button onClick={() => setModal(false)}  type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 ">Create New Order</h3>
                        <form className="space-y-6" onSubmit={postOrder}>
                            <div>
                                <label htmlFor="product_order" className="block mb-2 text-sm font-medium text-gray-900 ">Product Order</label>
                                <input type="text" name="product_order" id="product_order" value={formValues["product_order"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                                {errors.product_order && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2">{errors.product_order[0]}</span></div>)}

                            </div>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Item Code</label>
                                <input type="text" name="item_code" id="item_code" value={formValues["item_code"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                                {errors.item_code && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2">{errors.item_code[0]}</span></div>)}

                            </div>
                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                                <input type="text" name="description" id="description" value={formValues["description"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                                {errors.description && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2">{errors.description[0]}</span></div>)}
                            </div>
                            <div>
                                <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 ">Quantity</label>
                                <input type="number" name="quantity" id="quantity" value={formValues["quantity"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                                {errors.quantity && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2">{errors.quantity[0]}</span></div>)}

                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
        </FadeInOut>
        }
    </div>
  )
}

export default OrdersPage