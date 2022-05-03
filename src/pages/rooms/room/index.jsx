import { Fragment } from "react" 

export default function Room({_id, name, software}) {
    
    return(
        <details>
            <summary>
                {name}
            </summary>
            <p>
                {software.map((software, index)=><Fragment key={index}><br/>{software}</Fragment>)}
            </p>
        </details>
    )
}