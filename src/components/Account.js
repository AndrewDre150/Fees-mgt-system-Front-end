import React, {useState, useEffect, useRef} from 'react'
import useFetch from './useFetct';

function Account() {
    const [dataUpdate, setDataUpdate] = useState(null);
    const [loadingUpdate, setLoadingUpdate] = useState(true);
    const [errorUpdate, setErrorUpdate] = useState(null);

    const fullnameRef = useRef()
    const emailRef = useRef()
    const contactRef = useRef()
    const dobRef = useRef()
    const addressRef = useRef()
    const genderRef = useRef()

    const [url, setUrl] = useState("http://127.0.0.1:8000/user-profile/1");
    const {data, loading, error, refresh, setRefresh} = useFetch(url);
    function handleUserInfo(e){
        e.preventDefault();
        let formData = new FormData(document.querySelector("#profile"));
    
            fetch("http://127.0.0.1:8000/user-profile/1", {
                method: "POST",
                body: formData
            })
            .then(res => {
                if(!res.ok){
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then(data =>{
                setDataUpdate(data);
                setLoadingUpdate(true);
                setErrorUpdate(null);
            })
            .catch(err =>{
                setErrorUpdate(err.message);
                setLoadingUpdate(true);
            })
    }
    // useEffect(()=>{
    //   setUrl("http://127.0.0.1:8000/user-profile/1");
    //   fetch(url)
    //   .then(res => {
    //       if(!res.ok){
    //           throw Error(res.statusText);
    //       }
    //       return res.json();
    //   })
    //   .then(data =>{
    //     setData(data);
    //     setLoading(false);
    //     setError(null);
    //   })
    //   .catch(err =>{
    //       setError(err.message);
    //       setLoading(false);
    //   })
    // })
  return (
    <div className='userProfile'>
        {data && 
        <form onSubmit={handleUserInfo} id='profile'>
            <div>
              <label>Name</label>
              <input type='text' name='name' readOnly value={data['full_name']} placeholder='fullname' />
              <label>Email</label>
              <input type='email' name='email' readOnly value={data['email']} placeholder='user email' />
              <label>Gender</label>
              {data['gender'] === 'MALE' ?
                <>
                  <input type='radio' name='gender' readOnly value={'MALE'} checked /> <span>Male</span>
                </>:
                <>
                  <input type='radio' name='gender' readOnly value={'FEMALE'} checked  /> <span>Female</span>
                </>
              } 
              <label>Date of Birth</label>
              <input type='date' value={data['dob']} name='date'/>
            </div>
            <div>
              <label>Address</label>
              <textarea placeholder='user address' value={data['address']} name='address'></textarea>
              <label>Contact</label>
              <input type='tel' name='tel' value={data['contact']} placeholder='phone number'/>
              {loadingUpdate && <button>Update User Info</button>}
              {!loadingUpdate && <button>Updating information ...</button>}
            </div>
        </form>
        }
    </div>
  )
}

export default Account