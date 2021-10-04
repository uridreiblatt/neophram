import React from 'react'
import BrScnaner from '../components/Qr/BarcodeScanner'
    
    

export default function Home() {
    return (
        <div className="home">


         
            <h1>Scan prescription Barcode</h1>
            {/* <QrScnaner></QrScnaner> */}
            <BrScnaner></BrScnaner>
          
       
      </div>
   
    )
}
