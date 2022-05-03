import { useState, useEffect } from "react"
import Room from "./room"

export default function Rooms() {
    const [ListOfRooms, SetListOfRooms] = useState([])
    const [ListOfSoftware, SetListOfSoftware] = useState([])

    function GetRooms () {
        window.fetch('http://10.52.23.208:8000/list_of_rooms')
          .then(response => response.json())
          .then(data => SetListOfRooms(data))
    }
    useEffect(()=>{
        GetRooms ()
    },[])

    function GetSoftware () {
        window.fetch('http://10.52.23.208:8000/list_of_software')
          .then(response => response.json())
          .then(data => SetListOfSoftware(data))
    }
    
    return(
        <div className="rooms">
            <img/>
            {ListOfRooms.map((room, index)=> <Room key={index} _id={room._id} name={room.name} software={room.software_id} />)}
        </div>
    )
}