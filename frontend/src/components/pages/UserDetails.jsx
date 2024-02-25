import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Loader from './Loader'

const UserDetails = () => {
  const { id } = useParams()
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(false)
  console.log(user)

  const getUserById = async () => {
    // console.log(firstName, lastName, email, password)
    setLoading(true)
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/user/${id}`,
      )
      console.log(response.data)
      if (response?.data?.success) {
        setUser(response?.data?.user)
      }
      setLoading(false)
    } catch (error) {
      //   console.log(error)
      toast.error(error?.response?.data?.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    getUserById()
  }, [id])
  return (
    <section className="py-8 bg-gray-50">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className=" relative overflow-x-auto">
            <table className="mx-auto w-[100%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 cursor-pointer">
              <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <h1 className="py-5 px-6 capitalize font-semibold text-2xl">
                    Id : {user?._id}
                  </h1>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <span className="text-xl font-semibold">Name : </span>
                    <span>{user?.firstName} </span>
                    <span>{user?.lastName}</span>

                    <p>
                      {' '}
                      <span className="text-xl font-semibold">Email : </span>
                      {user?.email}
                    </p>
                  </th>
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
                      </NavLink>{' '}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className=" relative overflow-x-auto">
            <table className="mx-auto w-[100%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 cursor-pointer">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <h1 className="py-5 px-6 capitalize font-semibold text-2xl">
                    Address :
                  </h1>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <p>
                      <span className="text-xl font-semibold"> Country : </span>
                      <span className=" "> USA </span>
                    </p>
                    <p>
                      <span className="text-xl font-semibold"> Name : </span>
                      <span className=" "> Kennedy Kuphal </span>
                    </p>
                    <p>
                      <span className="text-xl font-semibold"> Address : </span>
                      <span className=" ">
                        {' '}
                        377 Hirthe Mountains Suite 110{' '}
                      </span>
                    </p>
                    <p>
                      <span className="text-xl font-semibold"> City : </span>
                      <span className=" "> North Amari </span>
                    </p>
                    <p>
                      <span className="text-xl font-semibold"> State : </span>
                      <span className=" "> Wyoming </span>
                    </p>
                    <p>
                      <span className="text-xl font-semibold">
                        {' '}
                        Zip Code :{' '}
                      </span>
                      <span className=" "> 31536-0888 </span>
                    </p>
                  </th>
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
                      </NavLink>{' '}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  )
}

export default UserDetails
