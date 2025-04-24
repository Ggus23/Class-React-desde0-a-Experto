import './App.css'
import { getCharacter } from './services/api.service'
import { Character } from './models';
import { useApi } from './hooks/useApi';
import { useCallback } from 'react';
function App() {
  const params = useCallback(()=>1,[]) 
  const {loading, error, data , fetch} = useApi<Character, number>(getCharacter, {autoFetch: true, params:params()})

  if(loading){
    return (<p>Cargando</p>)
  }
  if(error){
    return (<p>Ups {error.message}</p>)
  }
return(
  <>
  {JSON.stringify(data)}
  <button onClick={() =>fetch(2)}></button>

  </>
  )
}

export default App
