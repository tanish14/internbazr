import React, {Component} from 'react'
import './App.css'
import Nav from './components/Nav'
import ProductDisplay from './components/ProductDisplay'
import ProductDetails from './components/ProductDetails'
import productData from './ProductData'
//import result from './webscrape'

class App extends Component {
  state = {
    productData : productData,
    currentDisplayImgPos : 0,
    showHeartBeatSection : false,
    inputValue: ''
  }

  onColorOptionClick = (pos) => {
    this.setState({currentDisplayImgPos: pos})
  }

  onFeatureClick = (pos) => {
    let updatedState = false;
    if (pos === 1) {
      updatedState = true;
    }
    this.setState({showHeartBeatSection: updatedState})
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  // validpin = ['110036', '110024', '110075'];

  // onClicKCheck = () => {
  //   let inp = this.state.inputValue;
  //   for(let j=0;j<20;j++){
  //     if(inp==result[j]){
  //       return(alert("Available"))
  //     }
  //   }
  //   return(alert("Not Available"))
  // }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <ProductDisplay currentDisplayImg={this.state.productData.colorOptions
          [this.state.currentDisplayImgPos].imageUrl} 
          showHeartBeatSection={this.state.showHeartBeatSection}/>
          <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} 
          currentDisplayImgPos={this.state.currentDisplayImgPos} onFeatureClick={this.onFeatureClick}
          showHeartBeatSection={this.state.showHeartBeatSection}/>
          {/* <h2 style={{"margin-top": "10px"}} className="heading">Check Availability in your Region</h2> */}
          {/* <div>
            <input type="text" value={this.state.inputValue} onChange={this.updateInputValue} id="fname" name="fname" style={{"margin-right": "10px"}}/>
            <button className="primaryBtn" onClick = {this.onClicKCheck}>Check Availability</button>
          </div> */}
        </div>
      </div>
    )
  }
}
export default App
