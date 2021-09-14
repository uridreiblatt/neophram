import React  from 'react'
import { Link ,useHistory,useParams} from 'react-router-dom';
import { FormContext } from './FormContext';
import { useState, useEffect } from 'react';
import formJSON from '../../Elements/data.json';
import Element from './Element';
import ConfirmForm from './ConfirmForm'
import { AiFillFilePdf } from "react-icons/ai";
import Pdf from '../../Pdf/Doc.pdf'
import DataTable from '../MultiStageForm/DataTable'
import Instructions from './Instructions';
import axios from 'axios'



const api = axios.create({
  //baseURL: 'http://localhost/WebApiPg/api'
  //baseURL: 'http://localhost:61518/api'
  baseURL: 'https://ngpapi.neopharmgroup.com/odata/Priority/tabula.ini/eld0999/'
 })
 

//import {Pdf} from 'Doc.pdf'; ,
console.log('formJSON',formJSON)
const MultiStageForm = () => {

      //   var Submit_data = {
      //     "MONITORING": 'Y',
      //     "NORMALLABEL": 'Y',
      //     "STABILITY": 'Y',
      //     "FLOWRATE": 'Y',
      //     "WORKSTATIONNAME": "a1",
      //     "WORKSTATIONDES": "test1",
      //     "WEIGHINGCONTROL": 0.0000,
      //     "UNITS": 0,
      //     "SIGN": 'Y',
      //     "USERID2": 2597,
      //     "SNAME2": 'יובל בר-לב TEST',
      //     "USERID": 2583,
      //     "SNAME": 'אור גלבוע',
      //     "INITIAL": "Y",
      //     "NEO_PREPADDEQUIP_SUBFORM": [
      //         {
      //             "PARTNAME": "Z-0008"
      //         },
      //         {
      //             "PARTNAME": "Z-0009"
      //         },
      //         {
      //             "PARTNAME": "Z-0027"
      //         }
      //     ]
      // }
  
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



        const handleSubmit = () =>
        {                                    
          console.clear();
          console.log(JSON.stringify(elements));                                
          var username = 'D002F8E1CEFA4567AB6032DF9EAA4D0D';
          var password = 'PAT';
          var credentials = btoa(username + ':' + password);
          var basicAuth = 'Basic ' + credentials;
         
          
           
             
            api.patch("NEO_PREPTASK('PRP2100002')?$expand=NEO_PRESCRIPTION_LBL_SUBFORM",elements,
            {method: "PATCH",
              headers: {
                 'Authorization':  basicAuth,
                'Access-Control-Allow-Origin': '*',
                "Accept": "application/json",
               "Content-type": "application/json"}}
          )
          .then(res => {
              console.log(res);
              alert("Success");
                  
          })
          .catch(error => {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            alert(error);
          });

          history.push("/");       
        };




      
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
            case 'Multiselect' :
              field['field_value']  = (Array.isArray(event)? event.map(f=>f.value).join(', ') :null );             
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
            <br></br>
            {/* <Instructions></Instructions> */}

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