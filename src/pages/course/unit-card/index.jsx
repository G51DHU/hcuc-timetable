import "./style.css"
import IMGuserAvatar from "../../../assets/user.png"
import IMGclock from "../../../assets/clock.svg"


export default function UnitCard({PopUp, index, name, code, teacher, scheduled_hours}) {

    return(
        <button className="unit-card"  onClick={()=>PopUp(index)}>
            <h4>{name}</h4>
            <p>{code}</p>
            <div className="unit-card__teacher">
                <img src={IMGuserAvatar} />
                <p>{teacher}</p>
            </div>
            <div className="unit-card__hours-scheduled">
                <img src={IMGclock}/>
                <p>{scheduled_hours} hours scheduled</p>
            </div>
            <div className="unit-card__software">
                <p>Software: &nbsp;</p><p className="unit-card__click-to-expand">Click to expand.</p>
            </div>
        </button>
    )
}