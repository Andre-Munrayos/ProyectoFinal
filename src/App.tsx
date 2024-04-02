import './App.css'
import { Kontainer, FormLogin } from './compenets'

function App() {

  return (
    <div className='divGeneral'>
      <Kontainer>
          <div className='form-kontainer'>
            <div className='form-topKontainer'></div>
            <div><FormLogin /></div>
            <div className='form-topKontainer'></div>
          </div>
      </Kontainer>
    </div>
  )
}

export default App
