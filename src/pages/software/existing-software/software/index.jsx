import './style.css'
export default function Software ({ name, version, _id }) {
  return (
    <div className='software-card' title={`Name = ${name} \nVersion = ${version} \nID = ${_id}`}>
      <div className='software-card__name' title={name}>
        {name}
      </div>
      <div className='software-card__version' title={version}>
        {version}
      </div>
    </div>
  )
}
