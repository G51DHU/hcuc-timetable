import "./style.css"
import IMGuserAvatar from "../../../assets/user.png"
import IMGclock from "../../../assets/clock.svg"

export default function UnitPopUp({name, code, software, teacher, timetabledHours }) {
    return(
        <div className="unit-pop-up">
            <h4>{name}</h4>
            <p>{code}</p>
            <div className="unit-pop-up__teacher">
                <img src={IMGuserAvatar} />
                <p>{teacher}</p>
            </div>
            <div className="unit-pop-up__hours-scheduled">
                <img src={IMGclock}/>
                <p>{timetabledHours} hours scheduled</p>
            </div>
            <div className="unit-pop-up__software">
                <p>Software: &nbsp;</p>
                <div>
                    {software.map((asoftware, index)=>(<div key={index}>{Object.keys(asoftware)} : {Object.values(asoftware)}</div>))}
                </div>
            </div>
        </div>
    )
}