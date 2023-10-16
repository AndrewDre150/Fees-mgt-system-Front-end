import React, {useEffect} from 'react'

function Header() {

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/blogs")
    .then(res => {
      if(!res.ok){
        throw Error("resource not found | end point not found")
      }
      return res.json()})
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.message);
    })
  },[])

  return (
    <div>Header</div>
  )
}

export default Header