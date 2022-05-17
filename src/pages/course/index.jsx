import "./style.css"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import UnitCard from "./unit-card"
import CourseCard from "../courses/course-card"

export default function Course() {
    const {_id, name, code, units} = useLocation().state
    const [ListOfUnits, SetListOfUnits] = useState(units)
    const [PlusOrMinus, SetPlusOrMinus] = useState('+')
    
    return(
      <div className='course'>
        <h1>Course</h1>

        <CourseCard _id={_id} name={name} code={code} units={units} />

        <h2>Units</h2>
        <div className='course__inner-wrapper'>
          <div className='course__row-wrapper'>
            <div className='course__row'>
              {(ListOfUnits.length === 0) ? null : ListOfUnits.map((unit, index) => <UnitCard key={index} name={unit.name} code={unit.code} teacher={unit.teacher} scheduled_hours={unit.timetabledHours} /> )}
            </div>
          </div>
        </div>
        {/*PlusOrMinus === '+' ? null : <EditCourse ReloadCourses={GetCourses} />*/}
        <div className='course__add--deactivated' onClick={() => SetPlusOrMinus((PlusOrMinus === '+') ? '-' : '+')}>{PlusOrMinus}</div>
      </div>
    )
}