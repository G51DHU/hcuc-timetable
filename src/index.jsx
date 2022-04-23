import ReactDOM from 'react-dom'
import Software from './pages/software'

function Index () {
  return (
    <>
      <Software />
    </>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
  navigator.serviceWorker.register('../service-worker.js');
  });
}
