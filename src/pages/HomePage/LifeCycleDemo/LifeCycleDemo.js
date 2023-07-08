import React, { Component } from "react";

class LifeCycleDemo extends Component {
  constructor() {
    super();
    console.log("Inside Constructor");

    this.state = {
      isLoading: true,
      featureName: "",
    };
  }


  componentDidMount(){
      //Executed Only once after initial rendering
      //Used
      setTimeout( ()=>{
        this.setState( {
          isLoading:false,
          featureName:'Vithun'
        })
      },2000);
       
  }


  shouldComponentUpdate(nextProps,nextState){
    // if(nextState === this.state){
    //   return true;
    // }
    return true;
  }

  componentDidUpdate(prevProp,prevState){
    //Called immediately after updateing JSX 
    //Whether re rendering is over(executed) or not
    //place to add tiny dom updations
    document.getElementById("myPara").style.color = 'Green'
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>LifeCycleDemo</div>
        <p id="myPara">Features : {this.state.featureName}</p>
      </div>
    );
  }
}

export default LifeCycleDemo;
