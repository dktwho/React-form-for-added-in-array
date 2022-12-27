import './App.css';
import { useState} from 'react'
function App() {

  const [notes, setNotes] = useState([1,2,3,4,5])
  const [value, setValue] = useState('')
  //---------------------------------------------
  const [letters, setLetters] = useState(['a', 'b', 'c'])
  const [value2, setValue2] = useState('')

  const res = letters.map((letter, index) => {
    return <li key={index}>{letter}</li>
  } )

  function addItem2() {
    setLetters([...letters, value2])
    setValue2('')
  }

  function changeHandler(e) {
    setValue2(e.target.value)
  }



  // ------------------------------------
  function addItem() {
    setNotes([...notes, value])
  }
  const result = notes.map((note, idx) => {
    return <p key={idx}>{note}</p>
  })

  // ---------------------------------------



  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={addItem}>Add Item press</button>
      <p>{result}</p>
      <br />
      <br />
      <hr />
      <input value={value2} onChange={changeHandler} />
      <button onClick={addItem2}>Add letter</button>
      <ul>{res}</ul>
 

    </div>
  );
}

export default App;
