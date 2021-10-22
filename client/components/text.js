import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'

import Head from './head'
import Header from './header'

const Text = () => {
const [text, setText] = useState('')
const { userName, repositoryName } = useParams()

useEffect(() => {
  axios(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`).then(
    (repo) => {
      setText(repo.data)
    }
  )
}, [repositoryName, userName])

  return (
    <div>
      <Head title="Hello" />
      <Header repositoryName={repositoryName} />
      <div id="description" className="bg-purple-300 rounded-lg border shadow-lg p-10">
        <Markdown>{text}</Markdown>
      </div>
    </div>
  )
}

Text.propTypes = {}

export default React.memo(Text)