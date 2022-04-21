import { useEffect, useState } from "react"

export default function AddSoftware(){
    
    const [listOfSoftware, SetListOfSoftware] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8000/list_of_software")
            .then(response => response.json())
            .then(data => SetListOfSoftware(data))
    },[])

    return (
        <div className="add-software">
            <h1>Add Software</h1>

            <input type="search" placeholder="Search for software..." />

            {
            listOfSoftware.map((software, index)=>(
                <div key={index} >
                    <div>
                        {software.name}
                    </div>
                    <div>
                        {software.version}
                    </div>
                    <div>
                        {software._id}
                    </div>
                </div>

            ))
            }

        </div>
    )
}   