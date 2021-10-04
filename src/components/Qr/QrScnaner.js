// import React, { useState } from 'react'
// import { useHistory,Link } from 'react-router-dom';
// import QrReader from 'react-qr-scanner'

// const QrScnaner = () => {
//   const previewStyle = {
//     height: 240,
//     width: 320
//   };
//   const [scanData, setscanData] = useState('R02020202');
//   const [scanIfnodelay, setscanIfnodelay] = useState(500);
//   const [scanIfnoresult, setscanIfnoresult] = useState('No result');
//   const [scanIfnokeepScan, setscanIfnokeepScan] = useState(true);
         
//  const handleScan =(data) => {
//     try {
//       if (!scanIfnokeepScan) return;
//       if (data !=null)
//       {
//         console.log(data)
//         //setscanIfnokeepScan(false);
//         setscanData( data.text);
       
//       }    
//     else{
//       setscanIfnoresult('Failed to scan qr code');
        
//       }
    
//     }
//     catch (err) {
//       //console.log(err)
//     }
//   }
//   const GotoForm= () =>
//   {
//     let path = '/MultiStageForm';
//     let history = useHistory();
//     history.push(path);
//   }
//   const handleError = (err)=> {
//     console.error(err)
//   }
  

//     return (
//       <div>
//         <QrReader

//           delay={scanIfnodelay}
//           style={previewStyle}
//           onError={handleError}
//           onScan={handleScan}
//         />
//         <p>{scanIfnoresult}</p>
//         {/* <div>
//         {!scanIfno.keepScan ?  <button type="submit" className="btn btn-primary btn-block" onClick={GotoForm} >Submit</button>:null } 
//        </div> */}

//       <Link to={`/MultiStageForm/${scanData}`}  className="btn btn-primary">Goto Form</Link>
//       </div>
      
//     )
//   }

// export default QrScnaner