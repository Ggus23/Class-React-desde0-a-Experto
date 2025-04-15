import './App.css'
import { Modal } from './components'
import { useModalContext } from './components/Modal/Context/useModalContext'
function App() {
  const {setState} = useModalContext()

  const openModal = () => {
    setState(true)
  }
return(
  <>
  <Modal>
    <div>
      <h2>Hola mundo</h2>
      <h3>React</h3>
    </div>
  </Modal>
  <button onClick={openModal}>Open Modal</button>
  </>
  )
}

export default App
