import { Console } from 'console';
import type { FormEvent } from 'react'
import './App.css';


const sendForm = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const { name, password } = event.target as typeof event.target & {
    name: { value: string }
    password: { value: string}
  }
  

  console.log(name.value, password.value)
// Below is the code to implement it into a database.
//   await fetch('/route', {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify({
//       name: name.value,
//       password: password.value
//     })
//   })
}

function App() {
  return (
    <form className="wrap" onSubmit={evt => { sendForm(evt) }}>
      <fieldset className="field-area">
        <label htmlFor='name'>Name: </label>
        <input type="text" id="name" />
      </fieldset>
      <fieldset className="field-area">
        <label htmlFor='password'>Password: </label>
        <input type="password" id="password" />
      </fieldset>
      <button type='submit'>Login</button>
    </form>
  );
}

export default App;
