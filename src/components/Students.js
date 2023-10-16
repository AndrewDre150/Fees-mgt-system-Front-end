import React, {useState} from 'react'
import useFetch from './useFetct'

function Students() {
    const [url, setUrl] = useState("http://127.0.0.1:8000/students");
    const {data: students, loading, error} = useFetch(url);
    
    const handleSearch = (e) => {
        e.preventDefault();
        const student_name = e.target.student.value;
        e.preventDefault();
        setUrl(`http://127.0.0.1:8000/students?search=${student_name}`);
    }
    
    const handleSearchChange = (e) =>{
        if(e.length === 0){
            setUrl("http://127.0.0.1:8000/students");
        }
    }

    return (
      <div>
          <div className='filter_students'>
              <form onSubmit={handleSearch}>
                  <input type='text' onChange={(e) =>handleSearchChange(e.target.value)} name ="student" placeholder='student name'/>
                  <button>search student</button>
              </form>
          </div>
          <div className='payments_effected'>
              <h1>Our Registered Students</h1>
              <table>
                  <tr>
                      <th>#</th>
                      <th>Name of student</th>
                      <th>Student No</th>
                      <th>Nationality</th>
                      <th>Gender</th>
                  </tr>
                  {error && <p>{error}</p>}
                  {loading && <p>Loading data ....</p>}
                  {students && 
                  <>
                      {students.map(payment => {
                          return(
                              <tr key={payment.id}>
                                  <td>{payment.id}</td>
                                  <td>{payment.name}</td>
                                  <td>{payment.student_number}</td>
                                  <td>{payment.nationality}</td>
                                  <td>{payment.gender}</td>
                              </tr>
                          )
                      })}
                  </>
                  }
              </table>
          </div>
      </div>
    )
}

export default Students