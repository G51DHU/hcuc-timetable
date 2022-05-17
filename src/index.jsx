import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Software from './pages/software'
import Rooms from './pages/rooms'
import Courses from './pages/courses'
import Course from './pages/course'




function Index () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Courses />} />
        <Route path='/Software' element={<Software />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/course' element={<Course />} />
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
