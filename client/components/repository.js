import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import Head from './head'
import Header from './header'

const Pepository = () => {
  const [user, setUser] = useState([])
  const { userName } = useParams()

  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then((it)  => {
      setUser(it.data)
    })

  }, [userName])

  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div className="container flex items-center justify-center h-screen">
        <div className="p-10 bg-blue-300   text-xl font-bold leading-loose rounded-lg border-4 border-black">
          {user.map((list) => {
            return (
              <div key={list.id}>
                <Link
                  className="hover:text-red-600  w-full rounded-md p-1"
                  to={`/${userName}/${list.name}`}
                >
                  {list.name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Pepository.propTypes = {}

export default React.memo(Pepository)
