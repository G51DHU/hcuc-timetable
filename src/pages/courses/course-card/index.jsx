import "./style.css"
import {Link} from "react-router-dom"

export default function CourseCard({_id, name, code, units}) {
    return(
        <Link
            className="course-card"
            to="/courses/course"
            state={{
                "_id":_id,
                "name": name,
                "code" : code,
                "units": units
            }}
            
        >
            <h3>{name}</h3>
            <li>{code}</li>
        </Link>
    )
}