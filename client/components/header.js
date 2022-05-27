import React from 'react'
import { useParams, Link } from 'react-router-dom'

import Head from './head'

const Header = ({ repositoryName }) => {
  const { userName } = useParams()

  return (
    <div>
      <Head title="Hello" />
      <div className="container flex h-16 w-full bg-blue-300 justify-between">
        <div
          className="flex border-2 border-black p-4 bg-purple-400 hover:bg-purple-600 rounded-lg h-8 items-center font-bold text-lg text-white  mt-4 ml-4 "
          id="repository-name"
        >
          <Link to={`/${userName}`}>{userName}</Link>
        </div>
        <div
          className="flex  p-4  rounded-lg h-8 items-center font-bold text-lg text-black mt-4 text-xl "
          id="go-repository-list"
        >
         {repositoryName}
        </div>

        <div
          className="flex border-2 border-black p-4 bg-purple-400 hover:bg-purple-600 rounded-lg h-8 items-center font-bold text-lg text-white mt-4 mr-4 "
          id="go-back"
        >
          <Link to="/" id="go-back">
            go-back
          </Link>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)
