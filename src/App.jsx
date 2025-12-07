import { useState } from 'react'
import './App.css'
import Header from './header'
import Scifi from './sci-fi-component'

function App() {
  const [count, setCount] = useState(Scifi)

  const handleChangePage = event =>
    setPage(event.target.id)

  return (
    <>
      <Header callback={handleChangePage} />
      <h1>{page}</h1>
      {page === 'sci-fi' ? <sci-fi-component /> : ''}
      
    </>
  );
}

export default App
