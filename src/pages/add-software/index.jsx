export default function AddSoftware(){

    const list_of_software = fetch("http://localhost:8000/list_of_software")
        .then(response => {return response.json()})
    console.log(list_of_software)


    return (
        <div>
            wow
            {list_of_software.map((software)=>(<>{software}</>))}
        </div>
    )
}   