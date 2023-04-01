import React, {useRef, useState, useEffect} from 'react'
import { ExportToExcel } from './ExcelExport';

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";


const Posts = ({product_orders}) => {

    const tableRef = useRef(null);

    const [filteredOrders, setFiltered] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

    const [ progressFilter, setProgressFilter] = useState('');
    const [ weekFilter, setWeekFilter] = useState('');


    const filterProgress = (array) => {
        if(progressFilter != ''){
          if(progressFilter === "Completed"){
            return array.filter((order) => order.date_finished !== null);
          }
          else if(progressFilter === "In-Progress"){
            return array.filter((order) => order.cutting === "In-Progress" || order.cutting === "Ok" && order.date_finished === null);
          }
          else{
            return array.filter((order) => order.cutting === null);
          }
        }
        else{
          return array;
        }
      };

      const filterWeek = (array) => {
        if(weekFilter != ''){
          return array.filter((order) => order.week_issued.toLowerCase() === weekFilter.toLowerCase());
        }
        else{
          return array;
        }
      };

    useEffect(() => {
        let result = product_orders;
    
        result = filterProgress(result);
        result = filterWeek(result);
    
        setFiltered(result);
      }, [progressFilter, weekFilter]);
    
      useEffect(() => {
        
          if(progressFilter != "" || weekFilter != "" )
          {
            setIsFiltered(true);
          }
          else{
            setIsFiltered(false);
          }
      }, [progressFilter, weekFilter]);

  return (
    <div>            
        <div className="md:px-12 py-0 w-full">
            <div className='flex justify-between items-center  mb-2'>
                <div className='flex flex-row items-center gap-2'>
                    <Menu>
                        <MenuHandler>
                            <Button className="bg-white text-gray-700 border font-medium" variant="black">Week</Button>
                        </MenuHandler>
                        <MenuList className='space-y-2 h-[30vh] overflow-y-scroll'>
                              <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setWeekFilter("")}}>All</MenuItem>
                               {[...Array(52)].map((x, i) =>
                                  <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setWeekFilter(`Week ${i + 1}`)}}>Week {i + 1}</MenuItem>
                              )}
                            {/* <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setProgressFilter("Completed")}}>Completed</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setProgressFilter("In-Progress")}}>In-Progress</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setProgressFilter("Pending")}}>Pending</MenuItem> */}
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuHandler>
                            <Button className="bg-white text-gray-700 border font-medium" variant="black">Status</Button>
                        </MenuHandler>
                        <MenuList className='space-y-2'>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setProgressFilter("")}}>All</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setProgressFilter("Completed")}}>Completed</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setProgressFilter("In-Progress")}}>In-Progress</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setProgressFilter("Pending")}}>To Do</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                {
                  isFiltered? 
                  <ExportToExcel apiData={filteredOrders} fileName={"Enrod-Orders"} />
                  :
                  <ExportToExcel apiData={product_orders} fileName={"Enrod-Orders"} />
                }

        

            </div>
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
                <table className="min-w-full bg-white"  ref={tableRef}>
                <thead className="bg-gray-700 text-white">
                    <tr>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Week Issued</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Product Order</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Item Code</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Quantity</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Cutting</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Assembly Prep</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Assembly One</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Assembly Two</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Quality Control</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Finishing One</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Finishing Two</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Date Finished</th>

                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {
                        isFiltered ? 
                        filteredOrders?.map(order => {
                            return(
                                <tr key={order.id}>
                                    <td className="text-left py-3 px-4">{order.week_issued}</td>
                                    <td className="text-left py-3 px-4">{order.product_order}</td>
                                    <td className="text-left py-3 px-4">{order.item_code}</td>
                                    <td className="text-left py-3 px-4">{order.description}</td>
                                    <td className="text-left py-3 px-4">{order.quantity}</td>
                                    <td className="text-left py-3 px-4">{order.cutting}</td>
                                    <td className="text-left py-3 px-4">{order.assembly_prep}</td>
                                    <td className="text-left py-3 px-4">{order.assembly_one}</td>
                                    <td className="text-left py-3 px-4">{order.assembly_two}</td>
                                    <td className="text-left py-3 px-4">{order.quality_control}</td>
                                    <td className="text-left py-3 px-4">{order.finishing_one}</td>
                                    <td className="text-left py-3 px-4">{order.finishing_two}</td>
                                    <td className="text-left py-3 px-4">{order?.date_finished}</td>
    
                                </tr>
                            )
                        }):
                        product_orders?.map(order => {
                            return(
                                <tr key={order.id}>
                                    <td className="text-left py-3 px-4">{order.week_issued}</td>
                                    <td className="text-left py-3 px-4">{order.product_order}</td>
                                    <td className="text-left py-3 px-4">{order.item_code}</td>
                                    <td className="text-left py-3 px-4">{order.description}</td>
                                    <td className="text-left py-3 px-4">{order.quantity}</td>
                                    <td className="text-left py-3 px-4">{order.cutting}</td>
                                    <td className="text-left py-3 px-4">{order.assembly_prep}</td>
                                    <td className="text-left py-3 px-4">{order.assembly_one}</td>
                                    <td className="text-left py-3 px-4">{order.assembly_two}</td>
                                    <td className="text-left py-3 px-4">{order.quality_control}</td>
                                    <td className="text-left py-3 px-4">{order.finishing_one}</td>
                                    <td className="text-left py-3 px-4">{order.finishing_two}</td>
                                    <td className="text-left py-3 px-4">{order?.date_finished}</td>
    
                                </tr>
                            )
                        })

              
                    
                }
                </tbody>
                </table>
            </div>
        </div></div>
  )
}

export default Posts