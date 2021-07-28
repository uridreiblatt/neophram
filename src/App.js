import formJSON from './Elements/formElement.json';
import { FormContext } from './FormContext';
import { useState, useEffect } from 'react';
import Element from './components/Element';
import ConfirmForm from './components/ConfirmForm'
console.log('formJSON',formJSON)
function App() {
  const [elements, setElements] = useState(null);
  const [stageFormStep, setstageFormStep] = useState(0);
  const nextStep = (e) => {
    var newstageFormStep = stageFormStep 
    e.preventDefault();
    newstageFormStep=newstageFormStep+1
    console.log(elements.pages.length)
    if (newstageFormStep >=elements.pages.length ) return;

    setstageFormStep(newstageFormStep);
  };
  const prevStep = (e) => { 
    var newstageFormStep = stageFormStep 
    e.preventDefault();
    newstageFormStep=newstageFormStep-1
    console.log(newstageFormStep)    
    if (newstageFormStep<0) return;
    setstageFormStep(newstageFormStep);
  };
  const handleSubmit = ()=>{
    console.log('submit')
    var value_elemnet = elements.fields.map((field,i)=> field.field_value)
    alert( JSON.stringify(value_elemnet))
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



 
  const { fields, page_label, pages } = elements ?? {}
  return (
    
    <FormContext.Provider value={{handleChange,handleSubmit}}>
    <div className="container">
      <form>
        <h3>{page_label} {stageFormStep}</h3>

        {fields ? fields.map((field, i) => <div key={i}><Element field={field} /><p></p></div>) : null}


        {
            pages ? pages.map((page,i)=> 
                        (stageFormStep === i ? 
                                              page.fields ? 
                                                            page.fields.map((field, i) => <div key={i}><Element field={field} /><p></p></div>) 
                                                          : null
                                           : null))
                  :null
        }
          

        
        <button  className="btn btn-primary" onClick={nextStep}>Continue</button>
        <button  className="btn btn-primary" onClick={prevStep}>Go Back</button>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button> 
      </form>
    </div>
    </FormContext.Provider>
  );
}

export default App;
