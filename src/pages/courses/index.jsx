import './style.css'
import { useState, useEffect } from 'react'
import AddCourse from "./add-course"
import CourseCard from './course-card'
import SearchIcon from "../../assets/magnifying-glass.svg"

export default function Courses () {
  const [ListOfCourses, SetListOfCourses] = useState([])
  const [PlusOrMinus, SetPlusOrMinus] = useState('+')
  const [ToDelete, SetToDelete] = useState([])
  const [SearchQuery, SetSearchQuery] = useState('')

  function GetCourses () {
    window.fetch('http://localhost:8000/courses')
      .then(response => response.json())
      .then(data => SetListOfCourses(data))
  }

  function DeleteSelectedCourses (ToDelete) {
    window.fetch('http://localhost:8000/courses', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ course_list: ToDelete })
    })
      .then(response => response.json())
    SetToDelete([])
    GetCourses()
  }

  useEffect(() => {
    GetCourses()
  }, [])

  function a(l){
    SetSearchQuery(l)
    console.log(SearchQuery)
  }
  return (
    <div className='courses'>
      <h1>Courses</h1>
      <div className='courses__delete'>
        <p>{ToDelete.length} Selected</p>
        {ToDelete.length >= 1 ? <button onClick={() => DeleteSelectedCourses(ToDelete)}>Click to delete</button> : null}
      </div>
      <div className='courses__inner-wrapper'>
        <div className='search-bar'>
            <img src={SearchIcon} />
            <input type='search' placeholder='Search for existing software...' value={SearchQuery} onChange={e => SetSearchQuery(e.target.value)} />
        </div>
        <div className='courses__row-wrapper'>
          <div className='courses__row'>
            {(ListOfCourses.length === 0) ? null : ListOfCourses.map((courses, index) => courses.name.match(SearchQuery) ? <CourseCard key={index} _id={courses._id} name={courses.name} code={courses.code} units={courses.units} SearchQuery={SearchQuery} SetSearchQuery={a} /> : null)}
          </div>
        </div>
      </div>
      {PlusOrMinus === '+' ? null : <AddCourse ReloadCourses={GetCourses} />}
      <div className='courses__add--deactivated' onClick={() => SetPlusOrMinus((PlusOrMinus === '+') ? '-' : '+')}>{PlusOrMinus}</div>
    </div>
  )
}
