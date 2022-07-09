import './style.css'
import { useState, useEffect } from 'react'

export default function AddCourses ({ ReloadCourses }) {
  const STYLE = {
    'add-rooms__software--added': {
      backgroundColor: 'lightblue'
    }
  }
  const [ListOfSoftware, SetListOfSoftware] = useState([])
  const [SelectedSoftware, SetSelectedSoftware] = useState([])
  const [RoomName, SetRoomName] = useState([])

  function GetSoftware () {
    window.fetch('http://localhost:8000/software')
      .then(response => response.json())
      .then(data => SetListOfSoftware(data))
  }

  // Leave "GetSoftware()" in "useState", or you'll get a memory leak.
  useEffect(() => {
    GetSoftware()
  }, [])

  function OnSoftwareClick (index) {
    SelectedSoftware.includes(index) ? SetSelectedSoftware(SelectedSoftware.filter((s) => { return s !== index })) : SetSelectedSoftware([...SelectedSoftware, index])
  }

  function AddCourse (e) {
    e.preventDefault()
    window.fetch('http://localhost:8000/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: RoomName,
        software: SelectedSoftware.map((value) => ListOfSoftware[value])
      })
    })
    ReloadCourses()
  }

  return (
    <form className='add-course' onSubmit={(e) => AddCourse(e)}>
      <h2>Add Course</h2>
      <div className='add-course__inner-wrapper'>
        <div className='add-course__forum'>
          <label>
            Name
            <input type='text' onChange={(e) => SetRoomName(e.target.value)} />
          </label>
          <label>
            Add unit:
            <div>
              <label>
                Name
                <input type='text' onChange={(e) => SetRoomName(e.target.value)} />
              </label>
              <label>
                Code
                <input type='text' onChange={(e) => SetRoomName(e.target.value)} />
              </label>
              <label>
                Teacher
                <input type='text' onChange={(e) => SetRoomName(e.target.value)} />
              </label>
              <label>
                Scheduled Hours
                <input type='text' onChange={(e) => SetRoomName(e.target.value)} />
              </label>
            </div>
          </label>
          <label>
            Select Software
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Version</th>
                </tr>
                {
                  ListOfSoftware.length === 0
                    ? null
                    : ListOfSoftware.map((software, index) =>
                      (
                        <tr
                          key={index}
                          style={SelectedSoftware.includes(index) ? STYLE['add-rooms__software--added'] : null}
                          onClick={() => OnSoftwareClick(index)}
                        >
                          <td>{software.name}</td>
                          <td>{software.version}</td>
                        </tr>
                      ))
                }
              </tbody>
            </table>
          </label>
        </div>
        <div className='add-course__added-units'>
          <h3>Added units:</h3>
        </div>
      </div>
      <input type='submit' />
    </form>
  )
}
