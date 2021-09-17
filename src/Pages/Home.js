import React from 'react'
import QrScnaner from '../components/Qr/QrScnaner'
import Testqr from '../components/Qr/Testqr'
    
    

export default function Home() {
    return (
        <div className="home">


         
            <h1>Scan prescription Qr</h1>
            {/* <QrScnaner></QrScnaner> */}
            <Testqr></Testqr>
          
       
      </div>
   
    )
}
