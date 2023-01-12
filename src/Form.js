import React from "react";

const Form = (props) => {
    const { change, submit } = props
    const {firstName, lastName, email, password, ToS} = props.values;

    onSubmit = (e) => {
        e.preventDefault()
        submit()
      }
    onChange = evt => {
        const { name, value, checked, type } = evt.target
        const newVal = type === 'checkbox' ? checked : value
        change(name, newVal)
      }
    

    return (
        <div className="App">
          <form>
          <label> First 
            <input 
            type="text"
            onChange={onChange}
            name='firstName'
            value=''
            />
          </label>
          <label> Last Name
            <input 
            type="text" 
            onChange={onChange}
            name='lastName'
            value=''
            />
          </label>
          <label> Email
            <input 
            type="text" 
            onChange={onChange}
            name='email'
            value=''
            />
          </label>
          <label> Password
            <input 
            type="text" 
            onChange={onChange}
            name='password'
            value=''
            />
          </label>
          <label> Agree to Terms of Service
            <input 
            type="checkbox" 
            onChange={onChange}
            name='ToS'
            checked={ToS}
            />
          </label>
          <label>
            <input 
            type="submit" 
            onChange={onChange}
            name='submit'
            value=''
            />
          </label>
          </form>
        </div>

);
}


export default Form