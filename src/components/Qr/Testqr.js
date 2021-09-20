import React, { Component } from 'react'
import { useHistory,Link } from 'react-router-dom';
import QrReader from 'react-qr-scanner'

class Testqr extends Component {

  constructor(props) {
    super(props)
    this.state = {
      delay: 1000,
      result: 'No result',
      keepScan : true
    }

    this.handleScan = this.handleScan.bind(this)
  }
  
  handleScan(data) {
    try {
      if (!this.state.keepScan) return;
      if (data !=null)
      {
        console.log(data.text)
        this.setState({
          keepScan: false,
        })
      this.setState({
        result: data.text,
      })
    }
    else{
      this.setState({
        result: 'scan qr code',
      })
    }
    }
    catch (err) {
      console.log(data)
    }
  }
  handleError(err) {
    console.error(err)
  }
 
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>{this.state.result}</p>
        
        
       
       
        {this.state.keepScan ? null :
        <Link to={`/MultiStageForm/${this.state.result}`} className="btn btn-primary" >Goto Form</Link>
      }
     
        {/* <Link disable={true}  to={`/MultiStageForm/PRP2100002`}  > Goto Form</Link> */}
       
      
      </div>
    )
  }
}
export default Testqr