import "./App.css";
import axios from 'axios'
import formSchema from "./formSchema";
import Form from "./Form";
import React, { useState, useEffect } from 'react'

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  checked: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  return (
    <div className="App">
      <Form />
    </div>
  )

}
export default App;
