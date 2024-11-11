import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5"


const Search = () => {
    const[search,setSearch] = useState('')
  return (
    <div>
        <div className='d-flex'>
            <input className="form-control  mt-1" type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success mt-1" type="submit"><IoSearchOutline/></button>
        </div>
    </div>
  )
}

export default Search