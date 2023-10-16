import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import icon from './images/icon.png'
import andy from './images/andy.jpg'
import Payments from './Payments'
import Students from './Students'
import useFetch from './useFetct'
import Account from './Account'

const InitialComponent = () => {
    const {data: payments, loading, error} = useFetch("http://127.0.0.1:8000/payments");
    const {data: stats, loading: loadStats, error: errStats} = useFetch("http://127.0.0.1:8000/stats");
    
    return(
        <>
            <div className='quickStats'>
                <div>
                    <i class="fa-solid fa-users fa-3x"></i>
                    {stats && <span>{stats.user_count.toLocaleString()}</span>}
                    <p>User count</p>
                </div>
                <div>
                    <i class="fa-solid fa-graduation-cap fa-3x"></i>
                    {stats && <span>{stats.students_count.toLocaleString()}</span>}
                    <p>Students count</p>
                </div>
                <div>
                    <i class="fa-sharp fa-solid fa-coins fa-3x"></i>
                    {stats && <span>{stats.amount_collected.toLocaleString()}/=</span>}
                    <p>Amount count</p>
                </div>
            </div>
            <div className='payments'>
                <h1>Recent Payments </h1>
                <table>
                    <tr>
                        <th>#</th>
                        <th>Name of student</th>
                        <th>Amount Paid (Ugx)</th>
                        <th>Date</th>
                    </tr>
                    {error && <p>{error}</p>}
                    {loading && <p>Loading data ....</p>}
                    {payments && 
                    <>
                        {payments.map(payment => {
                            return(
                                <tr key={payment.id}>
                                    <td>{payment.id}</td>
                                    <td>{payment.name}</td>
                                    <td>{payment.amount.toLocaleString()}</td>
                                    <td>{payment.date}</td>
                                </tr>
                            )
                        })}
                    </>
                    }
                </table>
            </div>
        </>
    )
}


function Dashboard({logOut}) {
    const [current, setCurrent] = useState("initial");
    useEffect(()=>{
        console.log(current);
    })
  return (
    <div className='dashboard'>
        <div className='div'>
            <div>
                <img src={andy} />
                <figcaption>Andrew Turinawe</figcaption>
                <small>created on 10th/07/2023</small>
                <hr />
                <Link className='active' onClick={() => setCurrent("initial")}>Home</Link>
                <Link onClick={() => setCurrent("payments")}>Payments</Link>
                <Link onClick={() => setCurrent("students")}>Students</Link>
                <Link onClick={() => setCurrent("account")}>My Account</Link>
                <Link onClick={logOut}>Logout</Link>
            </div>
        </div>
        <div className='div'>
            <div className='system_name'>
                <p>Startcom Fees Management Online System</p>
            </div>
            <div className='sticky'>
                {current === 'initial' && <InitialComponent />}
                {current === 'payments' && <Payments />}
                {current === 'students' && <Students />}
                {current === 'account' && <Account />}
            </div>
        </div>
    </div>
  )
}

export default Dashboard