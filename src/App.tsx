import './App.css'
import { Kontainer, FormLogin } from './compenets'
import { Home } from './pages'

function App() {

  return (
    <div className='divGeneral'>
      <Home />
      {/* <Kontainer>
          <div className='form-kontainer'>
            <div className='form-topKontainer'></div>
            <div><FormLogin /></div>
            <div className='form-topKontainer'></div>
          </div>
      </Kontainer> */}
    </div>
  )
}

export default App
