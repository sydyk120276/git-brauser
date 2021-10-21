import React from 'react'
import Head from './head'

const Pepository = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          This is Pepository component akbar
        </div>
      </div>
    </div>
  )
}

Pepository.propTypes = {}

export default React.memo(Pepository)
