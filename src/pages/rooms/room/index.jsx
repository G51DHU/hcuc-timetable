import './style.css'

export default function Room ({ _id, name, software }) {
  return (
    <details className='room'>
      <summary>{name}</summary>
      <ul>
        {software.map((software, index) => <li key={index}>{software.name}{(index % 2 === 0) ? <br /> : null} </li>)}
      </ul>
    </details>
  )
}
