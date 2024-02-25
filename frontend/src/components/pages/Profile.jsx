import axios from 'axios'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user)

  return (
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
    </div>
  )
}

export default Profile
