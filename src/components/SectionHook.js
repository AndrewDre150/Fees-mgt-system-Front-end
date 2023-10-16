import React, {useEffect, useState, useRef} from 'react'
import useFetch from './useFetct'

function SectionHook() {
    const {data: blogs, loading, error} = useFetch("http://127.0.0.1:8000/blogs");
    const count = useRef(0);
    const inputRef = useRef();
    const [name, setName] = useState('');

    function focusElement(){
        inputRef.current.focus();
    }

    useEffect(()=>{
        count.current = count.current + 1;
    },[name])

    const Blog = (data) => {
      return(
        <div key={data['data'].id}>
          <h3>Author: {data['data'].author}</h3>
          <p>Title: {data['data'].title}</p>
        </div>
      )
    }
  
    return (
      <div>
        {error && <p>{error}</p>}
        {loading && <p>Loading data ....</p>}
        {blogs && 
          <>
          {blogs.map(blog => {
            console.log(blog);
            return(
              <Blog data = {blog}/>
            )
          })}
          </>
        }

        <input type='text' 
            placeholder='enter your name' 
            onChange={e => setName(e.target.value)}/>
        <p>hello {name}</p>
        <input type='password' 
            placeholder='enter password' 
            ref={inputRef} />
        <p>component rendered : {count.current} times!</p>
        <button onClick={focusElement}>focus element</button>
      </div>
    )
}

export default SectionHook