import './style.css'
import { useState } from 'react'

export default function AddSoftware () {
  const [SoftwareName, SetSoftwareName] = useState('')
  const [SoftwareVersion, SetSoftwareVersion] = useState('')
  function AddSoftwareToDB (e) {
    e.preventDefault()
    window.fetch('http://192.168.1.211:8000/add_software', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: SoftwareName,
        version: SoftwareVersion
      })
    })
    SetSoftwareName('')
    SetSoftwareVersion('')
  }

  return (
    <form className='add-software' onSubmit={e => AddSoftwareToDB(e)}>
      <h2>Add software</h2>
      <label>
        Name
        <input type='text' placeholder='Software name...' value={SoftwareName} onChange={e => SetSoftwareName(e.target.value)} />
      </label>
      <label>
        Version
        <input type='text' placeholder='Software version...' value={SoftwareVersion} onChange={e => SetSoftwareVersion(e.target.value)} />
      </label>
      <input className='add-software__submit' type='submit' value='Submit' />
    </form>
  )
}
