import React  from 'react'
import { Link } from 'react-router-dom';
import { FormContext } from './FormContext';
import { useState, useEffect } from 'react';
import formJSON from '../../Elements/formElementApi.json';
import Element from './Element';
import ConfirmForm from './ConfirmForm'
import { AiFillFilePdf } from "react-icons/ai";

import {Pdf} from '../../Pdf/Doc.pdf';
console.log('formJSON',formJSON)
const MultiStageForm = ({barCode}) => {
        const [elements, setElements] = useState(null);
        const [stageFormStep, setstageFormStep] = useState(0);
        const nextStep = (e) => {
          var newstageFormStep = stageFormStep 
          e.preventDefault();
          newstageFormStep=newstageFormStep+1
          console.log(elements.rootobjectReactForm.pages.length)
          if (newstageFormStep >=elements.rootobjectReactForm.pages.length ) return;
      
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
          //var value_elemnet = elements.fields.map((field,i)=> field.field_value)
          //alert( JSON.stringify(value_elemnet))
          alert( JSON.stringify(elements.rootobjectReactForm.app_label))
      
          }
      
          const handleChange = (id, event) => {
            const newElements = { ...elements }
            newElements.rootobjectReactForm.pages.forEach(Page => {
              Page.fields.forEach(field => {
            const { field_type, field_id } = field
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
          });
            }
      
        useEffect(()=>{
        setElements(formJSON)
        
        },[])
      
      
      
       const { errorMessage, errorInnerException,rootobjectReactForm , errorCode } = elements ?? {}
        const { app_url, app_label , pages } = rootobjectReactForm ?? {}
        const { fields } = pages ?? {}
    return (
        <FormContext.Provider value={{handleChange,handleSubmit}}>
    <div className="container">
      <form>
        <h3>{barCode}</h3>
        <h3>{app_label } {stageFormStep} Presscription pdf: <Link className="active" to={'/pdf'} >
            <AiFillFilePdf className="ico" />
           
            </Link></h3>
        
       
       
     


       {/* {fields ? fields.map((field, i) => <div key={i}><Element field={field} /><p></p></div>) : null} */}


        {
            pages ? pages.map((page,i)=> 
                        (stageFormStep === i ? 
                                              page.fields ? 
                                                            page.fields.map((field, i) => <div key={i}><Element field={field} /><p></p></div>) 
                                                          : null
                                           : null))
                  :null
        }
          

        
       
        <button  className="btn btn-success" onClick={prevStep}>Go Back</button>
        <button  className="btn btn-success" onClick={nextStep}>Continue</button>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button> 
      </form>
    </div>
    </FormContext.Provider>
    )
}
export default MultiStageForm