import "./style.css"
import { useState, useEffect } from "react"
import Room from "./room"

export default function Rooms() {
    const [ListOfRooms, SetListOfRooms] = useState([])
    const [ListOfSoftware, SetListOfSoftware] = useState([])

    function GetRooms () {
        window.fetch('http://192.168.1.211:8000/rooms')
          .then(response => response.json())
          .then(data => SetListOfRooms(data))
    }
    useEffect(()=>{
        GetRooms ()
    },[])

    function GetSoftware () {
        window.fetch('http://192.168.1.211:8000/software')
          .then(response => response.json())
          .then(data => SetListOfSoftware(data))
    }
    
    return(
        <div className="rooms">
            <h1>Rooms</h1>
            <div className="rooms__row-wrapper">
                <div className="rooms__row">
                    {ListOfRooms.map((room, index)=> <Room key={index} _id={room._id} name={room.name} software={room.software_id} />)}
                </div>
            </div>
        </div>
    )
}