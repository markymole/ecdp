import React, { useEffect, useState } from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentP, indexOfFirstPost, indexOfLastPost }) => {
    const [showPrev, setShowPrev] = useState(true);
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className=' md:px-12'>
        <div className='w-full p-4 mb-10 flex items-center justify-between bg-white overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-b-lg'>
        <p className='text-sm font-medium px-4 py-2'>Showing {indexOfFirstPost + 1} to {(indexOfLastPost > totalPosts) ? (indexOfLastPost - (indexOfLastPost - totalPosts)) : indexOfLastPost} of {totalPosts} results </p>
        <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px gap-1 border border-gray-300  rounded-md">
            {currentP > 1 &&  <li onClick={() =>paginate(currentP - 1)} className='hover:cursor-pointer  bg-white text-blue-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:border focus:border-blue-900 focus:text-blue-900 font-sm rounded-md text-sm px-1 py-1.5'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
            </li>}
            
            {pageNumbers.map(number => (
                <li key={number} className="hover:cursor-pointer bg-white shadow-sm">
                    <a onClick={() => paginate(number)} className={`page-link ${currentP === number ? "focus:z-10 focus:border focus:blue-blue-900 focus:text-blue-900 border-2 border-blue-700 text-blue-900 bg-blue-100 font-semibold rounded-md text-sm px-2.5 py-1.5" : "text-gray-900 bg-white  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:border focus:border-blue-900 focus:text-blue-900  font-medium rounded-md text-sm px-2 py-1"}`}>{number} </a>
                </li>            
            ))}
            {currentP < pageNumbers.length &&
                 <li onClick={() =>paginate(currentP + 1)} className='hover:cursor-pointer bg-white text-blue-900  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:border focus:border-blue-900 focus:text-blue-900  font-sm rounded-md text-sm px-1 py-1.5'>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                     <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                 </svg>
             </li>
            }
           
        </ul>
        </nav>
    </div>
    </div>
   
  )
}
