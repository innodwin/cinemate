import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (

    <footer className=" p-4 bg-white  shadow md:flex dark:bg-gray-800 md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Clinemate</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href={() => false} target='_blank' className="mr-4 hover:underline md:mr-6 ">Instagram</a>
          </li>
          <li>
            <a href={() => false} target='_blank' className="mr-4 hover:underline md:mr-6">LinkedIn</a>
          </li>
          <li>
            <a href={() => false} target='_blank' className="mr-4 hover:underline md:mr-6">Youtube</a>
          </li>
          <li>
            <a href={() => false} target='_blank' className="hover:underline">Github</a>
          </li>
        </ul>
    </footer>

  )
}
