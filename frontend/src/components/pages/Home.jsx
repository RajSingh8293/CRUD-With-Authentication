import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import Loader from './Loader'

const Home = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const token = JSON.parse(localStorage.getItem('token'))
  const navigate = useNavigate()
  const getAllUsers = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:5000/api/v1/users')
      // console.log(response)
      setUsers(response?.data?.users)
      setLoading(false)
    } catch (error) {
      //   console.log(error)
      toast.error(error?.response?.data?.message)
      setLoading(false)
    }
  }

  const deleteUser = async (id) => {
    setLoading(true)

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/user/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      )
      console.log(response)
      if (response?.data?.success) {
        // toast.success(response?.data?.messgae)
        toast.success('User deleted successfully')
        getAllUsers()
      }
      setLoading(false)
    } catch (error) {
      toast.error(error?.response?.data?.messgae)
      setLoading(false)
    }
  }

  const userProfile = (id) => {
    navigate(`/userdetails/${id}`)
  }
  useEffect(() => {
    getAllUsers()
  }, [])
  return (
    <section>
      <div className=" relative overflow-x-auto">
        <h1 className=" py-5 text-center font-semibold text-2xl">All Users</h1>
        {loading ? (
          <Loader />
        ) : (
          <table className=" mx-auto w-[80%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 cursor-pointer">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Opeariotns
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    onClick={() => userProfile(user._id)}
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <span>{user?.firstName} </span>
                    <span>{user?.lastName}</span>
                  </th>
                  <td
                    className="px-6 py-4"
                    onClick={() => userProfile(user._id)}
                  >
                    {user?.email}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-5">
                      <NavLink to={`/update/${user._id}`}>
                        <span className="text-blue-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </span>
                      </NavLink>

                      <span
                        onClick={() => deleteUser(user._id)}
                        className="text-red-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  )
}

export default Home
