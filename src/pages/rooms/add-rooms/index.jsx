import { useState } from "react"
import { useEffect } from "react/cjs/react.production.min"
import "./style.css"

export default function AddRooms() {
    const [SelectedSoftware, SetSelectedSoftware] = useState([])
    const [ListOfSoftware, SetListOfSoftware] = useState([])


    function GetSoftware () {
        window.fetch('http://192.168.1.211:8000/software')
          .then(response => response.json())
          .then(data => SetListOfSoftware(data))
    }
    GetSoftware()

    return(
        <div className="add-rooms">
            <h2>Add room</h2>

            <label>
                Name
                <input type="text" />
            </label>

            <div>
                <label>
                    Name
                    <select name="software" onChange={(e)=>SetSelectedSoftware(e.target.value)}>
                        {ListOfSoftware.map((software, index)=><option key={index} value={software._id}>{software.name} - {software.version} </option>)}
                    </select>
                </label>
                <div className="add-rooms__existing-software">
                    {SelectedSoftware.map((sofware)=><div>{sofware}</div>)}
                </div>
            </div>
        </div>
    )
}