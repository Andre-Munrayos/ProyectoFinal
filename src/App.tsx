import './App.css'
// import { Kontainer, FormLogin } from './compenets'
// import { Home,SearchLibrary } from './pages'
import { SearchLibrary } from './pages'

function App() {

  return (
    <div className='divGeneral'>
      {<SearchLibrary />}
      {/* <Home /> */}
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
