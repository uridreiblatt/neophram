// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import QrReader from 'react-qr-scanner'

// class Testqr extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       delay: 1000,
//       result: 'No result',
//       keepScan : true
//     }

//     this.handleScan = this.handleScan.bind(this)
//   }
  
//   handleScan(data) {
//     try {
//       if (!this.state.keepScan) return;
//       if (data !=null)
//       {
//         console.log(data.text)
//         this.setState({
//           keepScan: false,
//         })
//       this.setState({
//         result: data.text,
//       })
//     }
//     else{
//       this.setState({
//         result: 'scan qr code',
//       })
//     }
//     }
//     catch (err) {
//       console.log(data)
//     }
//   }
//   handleError(err) {
//     alert(err);
//     console.error(err);
//   }
 
//   render() {
//     const previewStyle = {
//       height: 240,
//       width: 320,
//     }

//     return (
//       <div className="qr-form">
//         <QrReader
//           delay={this.state.delay}
//           style={previewStyle}
//           onError={this.handleError}
//           onScan={this.handleScan}
//         />
//         <p>{this.state.result}</p>
        
        
       
       
//         {/* {this.state.keepScan ? null :
//         <Link to={`/MultiStageForm/${this.state.result}`} className="btn btn-primary" >Goto Form</Link>
//       } */}
     
//         <Link disable={true}  to={`/MultiStageForm/PRP2100002`} className="btn btn-primary" > Goto Form</Link>
       
      
//       </div>
//     )
//   }
// }
// export default Testqr