import './style.css'
export default function AddSoftware () {
  return (
    <div className='add-software'>
      <h2 className='add-software__title'>Add software</h2>
      <label>
        Name
        <input type='text' placeholder='Software name...' />
      </label>
      <label>
        Version
        <input type='text' placeholder='Software version...' />
      </label>
    </div>
  )
}
