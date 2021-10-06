import React  from 'react'
import { Link ,useHistory,useParams} from 'react-router-dom';
import { FormContext } from './FormContext';
import { useState, useEffect } from 'react';
import formJSON from '../../Elements/data.json';
import Element from './Element';
import { AiFillFilePdf } from "react-icons/ai";
import Pdf from '../../Pdf/Doc.pdf'
import api from '../../Api/api'


 

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



        const handleSubmit = (e) =>
        {   

          e.preventDefault();
          console.log(JSON.stringify(elements));     
          let jsn = JSON.stringify(elements);
          api.post("/CleanRoom",jsn,
          {method: "POST",
            headers: {       
              'Access-Control-Allow-Origin': '*',
              "Accept": "application/json",
              "Content-type": "application/json"}}
        )
        .then(res => {
            console.log(res);
            alert (JSON.stringify(res));
                
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


          // var username = 'D002F8E1CEFA4567AB6032DF9EAA4D0D';
          // var password = 'PAT';
          // var credentials = btoa(username + ':' + password);
          // var basicAuth = 'Basic ' + credentials;
         
          
           
             
          //   api.patch("NEO_PREPTASK('PRP2100002')?$expand=NEO_PRESCRIPTION_LBL_SUBFORM",elements,
          //   {method: "PATCH",
          //     headers: {
          //        'Authorization':  basicAuth,
          //       'Access-Control-Allow-Origin': '*',
          //       "Accept": "application/json",
          //      "Content-type": "application/json"}}
          // )
          // .then(res => {
          //     console.log(res);
          //     alert("Success");
          //     history.push("/");    
                  
          // })
          // .catch(error => {
          //   if (error.response) {
          //     // Request made and server responded
          //     console.log(error.response.data);
          //     console.log(error.response.status);
          //     console.log(error.response.headers);
          //   } else if (error.request) {
          //     // The request was made but no response was received
          //     console.log(error.request);
          //   } else {
          //     // Something happened in setting up the request that triggered an Error
          //     console.log('Error', error.message);
          //   }
          //   alert(error);
            
          // });
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

        const openPdf = (e)=> {

          try{
            e.preventDefault();
            window.open(Pdf);
            return;
          api.get("PrepPdf",
            {method: "GET",
              headers: {            
                'Access-Control-Allow-Origin': '*',
                "Accept": "application/pdf",
                "Content-type": "application/json"},
                responseType: 'blob'}
          )
          .then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.pdf'); //or any other extension
            document.body.appendChild(link);            
            link.click();
           

            
          }          
          )
         
      
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
            alert(" net :" + error);
           
           
          }
          
          )}
        catch(er)
        {
          //history.push("/"); 
          alert("gbl: " + er); 
         
        
        }
        }
       
      
      
      
       const { errorMessage, errorInnerException,rootobjectReactForm , errorCode } = elements ?? {}
        const { app_url, app_label , pages } = rootobjectReactForm ?? {}
        const { fields } = pages ?? {}
    return (
        <FormContext.Provider value={{handleChange,handleSubmit}}>
    <div className="container">
      <form>
        <h3 style={{color:"black"}}> Barcode: {barcode}   <a onClick={openPdf}>
       <AiFillFilePdf className="ico" style={{backgroundColor:"black" , height:"30px", width:"30px"}} />
   </a>          
   </h3>
               
               <br></br>
   
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