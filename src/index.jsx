import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Software from './pages/software'
import Rooms from './pages/rooms'

function Index () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Rooms />} />
        <Route path='/Software' element={<Software />} />
        <Route path='/rooms' element={<Rooms />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('../service-worker.js')
  })
}
