import {useState, useContext} from 'react'
import './App.css'
import {useUser} from './context/user.jsx'
// const navn = setNavn()
// function setNavn(verdi) {
//   return verdi
// }

// kjøres på nytt og nytt igjen
function App() {
  const {user} = useUser()
  const [navn, setNavn] = useState("") // hiver ut av kodeblokken
  const [count, setCount] = useState(0)
  // per
  // julie
  // const navn;
  // navn = "per"
  // const mellomlagring = navn
  // navn = "julie" 
  function handleCountPlus () {
    setCount((prev) => prev + 1)
  }
  // const handleCountPlus = () => {
  //   // const verdi = count
  //   setCount(a => a + 1)
  //   // setCount(verdi + 1)
  //   // setCount(count + 1)
  // }
  let Verdi = 20 // hver gang koden kjøres sett tilbake til 20

  function addNumber(num) {
    Verdi += num
  }

  const obj = {
    navn: "per",
    alder: 23
  }
  const [per, alder] = {...obj}
  // per = obj.navn
  // alder = obj.alder
  const [toDo, setTodo] = useState([])
   toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo


  return (
    <>
      <div>
        <p>{Verdi}</p>
        <button onClick={addNumber(1)}>click</button>
      </div>
    </>
  )
}

export default App
