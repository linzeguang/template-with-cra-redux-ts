import React from 'react'

import { template } from '@/api'

const Home: React.FC = () => {
  return (
    <div>
      <button onClick={() => template.fetchList().then(console.log)}>fetchList</button>
      <button onClick={() => template.fetchTest().then(console.log)}>fetchTest</button>
      <button onClick={() => template.fetchTodo().then(console.log).catch(console.log)}>
        fetchTodo
      </button>
    </div>
  )
}

export default Home
