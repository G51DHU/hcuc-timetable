import './style.css'
import ExistingSoftware from './existing-software'
import AddSoftware from './add-software'
export default function Software () {
  return (
    <div className='software'>
      <h1 className='software__title'>Software</h1>
      <div className='software__view-and-add'>
        <ExistingSoftware />
        <AddSoftware />
      </div>
    </div>
  )
}
