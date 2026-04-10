import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


export default function () {

  // const [data, setData] = useState([])
  const { id } = useParams();

  const [values, setValues] = useState({
    mname: '',
    price: '',
    fid: '',
    qid: '',
    id: ''
  })
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:8004/updatemenu/${id}`)
      .then(res => setValues(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8004/updatemenu/${id}`, values)
      .then(res => {
        console.log(res);
        navigate('/menu')
      })
      .catch(err => {
        console.log(err);
      })

  }
  return (
    <>

      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>

        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded-5'>
          <h1 style={{ color: "brown" }}>Update menu</h1>

          <form onSubmit={handleUpdate}  >

            <div className='mb-2'  >
              <label htmlFor="name">Name:</label>
              <input type="text" name='Dish Name' className='form-control' placeholder='Enter Dish Name'
                value={values.mname} onChange={e => setValues({ ...values, mname: e.target.value })}
              />
            </div>

            <div className='mb-2'>
              <label htmlFor="text">Quentity:</label>
              <select
                className="form-control"
                value={values.qid} onChange={e => setValues({ ...values, qid: e.target.value })}
              >
                <option value="">Select Quantity</option>
                <option value="1">HALF</option>
                <option value="2">FULL</option>
              </select>

            </div>

            <div className='mb-3'>
              <label htmlFor="text">Price:</label>
              <input type="number" name='Price' className='form-control' placeholder='Enter price'
                value={values.price} onChange={e => setValues({ ...values, price: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="text">Category:</label>
              <select
                className="form-control"
                value={values.fid}
                onChange={e => setValues({ ...values, fid: e.target.value })}
              >
                <option value="">Select Category</option>
                <option value="1">VEG</option>
                <option value="2">NON VEG</option>
                <option value='3'>CHINESE</option>
              </select>
            </div>


            <button className='btn btn-success'>Update</button>

            <Link to='/menu' className='btn btn-primary ms-3'>Back</Link>

          </form>
        </div>

      </div>
    </>
  )
}