
export default function Room(room) {
    room._id
    room.name
    room.software 
    return(
        <details>
            <summary>
                {room.name}
            </summary>
            <p>
                {room.software.map((room)=><>{room}</>)}
            </p>
        </details>
    )
}