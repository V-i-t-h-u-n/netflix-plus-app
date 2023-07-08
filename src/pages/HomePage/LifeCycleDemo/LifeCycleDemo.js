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
        <p>Features : {this.state.featureName}</p>
      </div>
    );
  }
}

export default LifeCycleDemo;
