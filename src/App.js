import formJSON from './Elements/formElement.json';
import { FormContext } from './FormContext';
import { useState, useEffect } from 'react';
import Element from './components/Element';
console.log('formJSON',formJSON)
function App() {
  const [elements, setElements] = useState(null);

  const handleSubmit = ()=>{
    console.log('submit')
    alert(elements)
    }
    const handleChange = (id, event) => {
      const newElements = { ...elements }
      newElements.fields.forEach(field => {
      const { field_type, field_id, field_value } = field
      if (id === field_id) {
      switch (field_type) {
      case 'checkbox':
      field['field_value'] = event.target.checked;
      break;
      default:
      field['field_value'] = event.target.value;
      break;
      }
      }
      setElements(newElements)
      });
      }
  useEffect(()=>{
  setElements(formJSON[0])
  },[])

  const { fields, page_label } = elements ?? {}
  return (
    <FormContext.Provider value={{handleChange}}>
    <div className="container">
      <form>
        <h3>{page_label}</h3>
        {fields ? fields.map((field, i) => <div key={i}><Element field={field} /><p></p></div>) : null}

        {/* <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>*/}
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button> 
      </form>
    </div>
    </FormContext.Provider>
  );
}

export default App;
