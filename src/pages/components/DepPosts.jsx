import React, {useRef, useState, useEffect} from 'react'

import { useDownloadExcel } from 'react-export-table-to-excel';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";


const DepPosts = ({product_orders}) => {

    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Enrod-Records',
        sheet: 'Records'
    })

    const [filteredOrders, setFiltered] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

    const [ progressFilter, setProgressFilter] = useState('');
    const [ weekFilter, setWeekFilter] = useState('');
    const [ departmentFilter, setDepartmentFilter] = useState('');
    const [ dateFilter, setDateFilter] = useState('');




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

      const filterDate = (array) => {
        if(dateFilter != ''){
            if(departmentFilter === "cutting"){
                return array.filter((order) => order.date_cutted === dateFilter);
            }
            else if(departmentFilter === "assembly_prep"){
                return array.filter((order) => order.date_preped === dateFilter);
            }
            else if(departmentFilter === "assembly_one"){
                return array.filter((order) => order.date_assembled_one === dateFilter);
            }
            else if(departmentFilter === "assembly_two"){
                return array.filter((order) => order.date_assembled_two === dateFilter);
            }
            else if(departmentFilter === "quality_control"){
                return array.filter((order) => order.date_checked === dateFilter);
            }
            else if(departmentFilter === "finishing_one"){
                return array.filter((order) => order.date_finished_one === dateFilter);
            }
            else if(departmentFilter === "finishing_two"){
                return array.filter((order) => order.date_finished === dateFilter);
            }
            else{
                return array.filter((order) => order.date_finished === dateFilter);
            }
        }
        else{
          return array;
        }
      };

      const filterDepartment = (array) => {
        if(departmentFilter != ''){
            if(departmentFilter === "cutting"){
                return array.filter((order) => order.cutting !== null);
            }
            else if(departmentFilter === "assembly_prep"){
                return array.filter((order) => order.assembly_prep !== null);
            }
            else if(departmentFilter === "assembly_one"){
                return array.filter((order) => order.assembly_one !== null);
            }
            else if(departmentFilter === "assembly_two"){
                return array.filter((order) => order.assembly_two !== null);
            }
            else if(departmentFilter === "quality_control"){
                return array.filter((order) => order.quality_control !== null);
            }
            else if(departmentFilter === "finishing_one"){
                return array.filter((order) => order.finishing_one !== null);
            }
            else if(departmentFilter === "finishing_two"){
                return array.filter((order) => order.finishing_two !== null);
            }
        }
        else{
          return array;
        }
      };

      useEffect(() => {
        console.log(dateFilter);
  
    }, [dateFilter]);

    useEffect(() => {
        let result = product_orders;
    
        result = filterProgress(result);
        result = filterWeek(result);
        result = filterDate(result);
        result = filterDepartment(result);

        setFiltered(result);
    }, [progressFilter, weekFilter, departmentFilter, dateFilter]);
    
      useEffect(() => {
        
          if(progressFilter != "" || weekFilter != "" || departmentFilter != "" || dateFilter != "" )
          {
            setIsFiltered(true);
          }
          else{
            setIsFiltered(false);
          }
      }, [progressFilter, weekFilter, departmentFilter, dateFilter]);

  return (
    <div>            
        <div className="md:px-12 py-0 w-full">
            <div className='flex justify-between items-center  mb-3'>
                <div className='flex flex-row items-center gap-2'>
                    <Menu>
                        <MenuHandler>
                            <Button className="bg-white text-gray-700 border font-medium" variant="black">{departmentFilter == "" ? <span>Department</span> : departmentFilter }</Button>
                        </MenuHandler>
                        <MenuList className='space-y-2'>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setDepartmentFilter("")}}>All</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setDepartmentFilter("cutting")}}>Cutting</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setDepartmentFilter("assembly_prep")}}>A-1 Prep</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setDepartmentFilter("assembly_one")}}>A-1</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setDepartmentFilter("assembly_two")}}>A-2</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setDepartmentFilter("quality_control")}}>QC</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setDepartmentFilter("finishing_one")}}>F-1</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setDepartmentFilter("finishing_two")}}>F-2</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuHandler>
                            <Button className="bg-white text-gray-700 border font-medium" variant="black">{progressFilter == "" ? <span>Status</span> : progressFilter }</Button>
                        </MenuHandler>
                        <MenuList className='space-y-2'>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setProgressFilter("")}}>All</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setProgressFilter("Completed")}}>Completed</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setProgressFilter("In-Progress")}}>In-Progress</MenuItem>
                            <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setProgressFilter("Pending")}}>To Do</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuHandler>
                            <Button className="bg-white text-gray-700 border font-medium" variant="black">{weekFilter == "" ? <span>WEEK</span> : weekFilter }</Button>
                        </MenuHandler>
                        <MenuList className='space-y-2 h-[30vh] overflow-y-scroll'>
                              <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setWeekFilter("")}}>All</MenuItem>
                               {[...Array(52)].map((x, i) =>
                                  <MenuItem className='hover:bg-gray-200 py-2' onClick={() => {setWeekFilter(`Week ${i + 1}`)}}>Week {i + 1}</MenuItem>
                              )}
                        </MenuList>
                    </Menu>
                                    
                    <div className="relative max-w-sm">
                        <input onChange={(e) => {setDateFilter(e.target.value)}} value={dateFilter} id='date' name='date' type="date" className="bg-white text-gray-700 border shadow-md text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"/>
                    </div>

                </div>
                {/* {
                  isFiltered? 
                  <ExportToExcel apiData={filteredOrders} fileName={"Enrod-Orders"} />
                  :
                  <ExportToExcel apiData={product_orders} fileName={"Enrod-Orders"} />
                } */}
                <button onClick={onDownload} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md"> Download Copy </button>

        

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
                    {
                        dateFilter && <th className="text-left py-3 px-4 uppercase font-semibold text-sm hidden">Date Finished</th>

                    }
    

                    </tr>
                </thead>
                <tbody className="text-gray-700 ">
                    {
                        isFiltered ? 
                        filteredOrders?.map(order => {
                            return(
                                <tr key={order.id}>
                                    <td className="text-left py-3 px-4">{order.week_issued}</td>
                                    <td className="text-left py-3 px-4">{order.product_order}</td>
                                    <td className="text-left py-3 px-4">{order.item_code}</td>
                                    <td className="text-left py-3 px-4 line-clamp-1">{order.description}</td>
                                    <td className="text-left py-3 px-4">{order.quantity}</td>
                                    <td className="text-left py-3 px-4 hidden">{dateFilter}</td>
                                </tr>
                            )
                        }):
                        product_orders?.map(order => {
                            return(
                                <tr key={order.id}>
                                    <td className="text-left py-3 px-4">{order.week_issued}</td>
                                    <td className="text-left py-3 px-4">{order.product_order}</td>
                                    <td className="text-left py-3 px-4">{order.item_code}</td>
                                    <td className="text-left py-3 px-4 line-clamp-2">{order.description}</td>
                                    <td className="text-left py-3 px-4">{order.quantity}</td>
                                    <td className="text-left py-3 px-4 hidden">{dateFilter}</td>

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

export default DepPosts