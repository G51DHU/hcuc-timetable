import './style.css'
import { useState } from 'react'

export default function AddSoftware () {
  const [SoftwareName, SetSoftwareName] = useState('')
  const [SoftwareVersion, SetSoftwareVersion] = useState('')
  function AddSoftwareToDB (e) {
    e.preventDefault()
    window.fetch('http://localhost:8000/add_software', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: SoftwareName,
        version: SoftwareVersion
      })
    })
  }

  return (
    <form className='add-software' onSubmit={e => AddSoftwareToDB(e)}>
      <h2 className='add-software__title'>Add software</h2>
      <label className='add-software__name-label'>
        Name
        <input className='add-software__name-input' type='text' placeholder='Software name...' value={SoftwareName} onChange={e => SetSoftwareName(e.target.value)} />
      </label>
      <label className='add-software__version-label'>
        Version
        <input className='add-software__version-input' type='text' placeholder='Software version...' value={SoftwareVersion} onChange={e => SetSoftwareVersion(e.target.value)} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  )
}
