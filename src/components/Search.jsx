import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Search() {
  const navigate = useNavigate();
  const [Query,SetQuery] = useState('')
  const SearchProducts = ()=>{
    if (Query ==''){
      return
    }
    navigate(`/Search/${Query}`)
  }
  return (
   <div className="hidden sm:flex items-center">
          <div className="flex border border-cyan-600 rounded overflow-hidden">
            <input
              type="text"
               onChange={(e)=>SetQuery(e.target.value)}
              placeholder="Search products"
              className="w-full px-4 py-1 outline-none"
            />
            <button className="bg-cyan-600 px-4 text-white"  onClick={SearchProducts}>
              🔍
            </button>
          </div>
        </div>
  )
}

export default Search