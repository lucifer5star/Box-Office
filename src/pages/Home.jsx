import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
const Home = () => {
 const [searchStr,setSearchStr] =useState('')

 const onSearchInputChange=(e)=>{
    setSearchStr(e.target.value);
 }
 const onSearch=async(e)=>{
    e.preventDefault();
    const response= await fetch(`https://api.tvmaze.com/search/shows?q={searchStr}`)
    const body = await response.json()
    console.log(body)
 }
  return (
    <div>
        {/* <Link to="/starred">Go To Starred Page</Link> */}
        {/* <div>{inputValue}</div> */}
        <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange}/>
        <button type='submit'>Search</button>
        </form>
        {/* Home */}
    </div>
  )
}

export default Home
