import React, { useState } from 'react'


import { history } from '../redux'
import Head from './head'

// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="flex justify-center items-center h-screen ">
      <Head title="Hello" />
      
      <div className="flex   bg-blue-300 border p-16 rounded-lg ">
        <div className="border-4 border-gray-500 rounded-lg ">
          <input
            className="placeholder-gray-500 placeholder-opacity-100 pl-2 focus:outline-none"
            type="text"
            id="input-field"
            onChange={onChange}
            value={value}
            placeholder="Введите данные"
          />
        </div>
        <div className="flex ml-4 bg-red-500 hover:bg-red-700 rounded-lg w-16 text-white font-bold justify-center ">
          <button
            className="focus:outline-none"
            type="button"
            id="search-button"
            onClick={() => history.push(`/dashboard/${value}`)}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
