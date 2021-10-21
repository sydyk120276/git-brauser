import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import Head from './head'

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
      <div className="flex items-center justify-center h-screen">
        <div className="">
        {user.map((list) => {
          return (
            <div key={list.id}>
              <Link to={`/dashbord/${userName}/${list}`}>{list.name}</Link>
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
