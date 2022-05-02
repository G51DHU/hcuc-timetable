import { useState } from "react"

export default function Rooms(params) {
    const [Rooms, SetListOfRooms] = useState([])
    const [Software, SetListOfSoftware] = useState([])

    function GetRooms () {
        window.fetch('http://192.168.1.211:8000/list_of_rooms')
          .then(response => response.json())
          .then(data => SetListOfRooms(data))
      }

    function GetSoftware () {
        window.fetch('http://192.168.1.211:8000/list_of_software')
          .then(response => response.json())
          .then(data => SetListOfSoftware(data))
      }
    return(
        <div className="rooms">
            wow
            <img/>
            {}
        </div>
    )
}