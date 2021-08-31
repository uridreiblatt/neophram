import React  from 'react'
import { Link ,useHistory,useParams} from 'react-router-dom';
import { FormContext } from './FormContext';
import { useState, useEffect } from 'react';
import formJSON from '../../Elements/formElementApi.json';
import Element from './Element';
import ConfirmForm from './ConfirmForm'
import { AiFillFilePdf } from "react-icons/ai";
import Pdf from '../../Pdf/Doc.pdf'
import DataTable from '../MultiStageForm/DataTable'
import Instructions from './Instructions';

//import {Pdf} from 'Doc.pdf'; ,
console.log('formJSON',formJSON)
const MultiStageForm = () => {
  
        let { barcode } = useParams();
        console.log(barcode);
        const history = useHistory();
        const [showSubmit,setshowSubmit] = useState(false);
        const [elements, setElements] = useState(null);
        const [stageFormStep, setstageFormStep] = useState(0);
        const nextStep = (e) => {
          var newstageFormStep = stageFormStep 
          e.preventDefault();
          newstageFormStep=newstageFormStep+1
          console.log(elements.rootobjectReactForm.pages.length)
          if (newstageFormStep >=elements.rootobjectReactForm.pages.length )
          {  
             setshowSubmit(true);
             return;
          }
      
          setstageFormStep(newstageFormStep);
        };
        const prevStep = (e) => { 
          setshowSubmit(false);
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
          alert( JSON.stringify(elements.rootobjectReactForm))                             
          history.push("/");
      
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
        const openPdf = ()=> {
          window.open(Pdf);
        }
      
      
      
       const { errorMessage, errorInnerException,rootobjectReactForm , errorCode } = elements ?? {}
        const { app_url, app_label , pages } = rootobjectReactForm ?? {}
        const { fields } = pages ?? {}
    return (
        <FormContext.Provider value={{handleChange,handleSubmit}}>
    <div className="container">
      <form>
        <h3 style={{color:"blue"}}> Barcode: {barcode}</h3>
        <h3>{app_label } stage {stageFormStep} Presscription pdf: <a onClick={openPdf}>
      <AiFillFilePdf className="ico" style={{backgroundColor:"black" , height:"40px", width:"40px"}} />
   </a>          
            </h3>
            <DataTable></DataTable>
            <Instructions></Instructions>

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
        {showSubmit ? <button  className="btn btn-primary" onClick={handleSubmit}>Submit</button> :null}
      </form>
    </div>
    </FormContext.Provider>
    )
}
export default MultiStageForm