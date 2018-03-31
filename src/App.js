import React, { Component } from 'react';
import ReactDom  from 'react-dom';
import SelectInput from './SelectInput';
import BaseUnitList from './BaseUnitList.json';
import MassUnitList from './MassUnitList.json';
import DistanceUnitList from './DistanceUnitList.json';
import NumberInput from './NumberInput';
import './App.css';
import massConversion from './logics/MassConversion';
import Header from './Header';

class App extends Component {
  constructor(props){
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.changeHandlerleft = this.changeHandlerleft.bind(this);
    this.changeHandlerRight = this.changeHandlerRight.bind(this);
    this.handleChangeInputLeft= this.handleChangeInputLeft.bind(this);
    this.handleChangeInputRight = this.handleChangeInputRight.bind(this);
    this.state = {
      baseUnitOptions:BaseUnitList,
        leftUnitOptions:MassUnitList ,
        rightUnitOptions:MassUnitList,
        baseSelectValue:'mass',
        unitLeftSelectValue:'kilogram',
        unitRightSelectValue:'kilogram',
        leftInputValue:'1',
        rightInputValue:'1'
      };
  };
  
  handleChangeInputLeft(leftInputValue){
      this.setState({leftInputValue:leftInputValue},
       () => {
        const  direction = true;
             const leftInputNum =this.state.leftInputValue;
             if(leftInputNum !==""){
            const result= massConversion(this.state.unitLeftSelectValue,
              this.state.unitRightSelectValue,
               this.state.leftInputValue,
              direction);
              this.setState({rightInputValue:result});
              }  
           });
  };
  handleChangeInputRight(rightInputValue){
       this.setState({rightInputValue:rightInputValue},
      () => {
        const  direction =false;
        const rightInputNum = this.state.rightInputValue;
        const leftSelectUnit = this.state.unitLeftSelectValue;
        const rightSelectUnit = this.state.unitRightSelectValue;
              if(rightInputNum !==''){
              const result= massConversion(leftSelectUnit, rightSelectUnit,
                rightInputNum,direction);
              this.setState({leftInputValue:result});
                 }
           });
  };
  changeHandler(selectedValue){
          
          if(selectedValue === 'mass'){
            this.setState({baseSelectValue:selectedValue,
              leftUnitOptions:MassUnitList,
               rightUnitOptions:MassUnitList,
               unitLeftSelectValue:MassUnitList[0].value,
               unitRightSelectValue:MassUnitList[0].value});
          };
          if(selectedValue==='distance'){
            this.setState({baseSelectValue:selectedValue,
              leftUnitOptions:DistanceUnitList,
               rightUnitOptions:DistanceUnitList,
               unitLeftSelectValue:DistanceUnitList[0].value,
               unitRightSelectValue:DistanceUnitList[0].value,
               }
            )};
  };
  changeHandlerleft(selectedValue){
        this.setState({unitLeftSelectValue:selectedValue},
        () => {
          const  direction =true;
          const leftInputNum = this.state.leftInputValue;
          const rightInputNum = this.state.rightInputValue;
          const leftSelectUnit = this.state.unitLeftSelectValue;
          const rightSelectUnit = this.state.unitRightSelectValue;
          const result= massConversion(leftSelectUnit, rightSelectUnit,
            leftInputNum,direction);
            this.setState({rightInputValue:result});
        });
       
  };
  changeHandlerRight(selectedValue){
        this.setState({unitRightSelectValue:selectedValue},
        () => {
          const  direction =true;
          const leftInputNum = this.state.leftInputValue;
          const rightInputNum = this.state.rightInputValue;
          const leftSelectUnit = this.state.unitLeftSelectValue;
          const rightSelectUnit = this.state.unitRightSelectValue;
          const result= massConversion(leftSelectUnit, rightSelectUnit, leftInputNum, direction);
            this.setState({rightInputValue:result});
        });
  };
  render() {
        let baseState = 'the base state is : '+ this.state.baseSelectValue;
        let leftState = 'the left state is : '+ this.state.unitLeftSelectValue;
        let rightState = 'the right state is : '+ this.state.unitRightSelectValue;
        let leftInput ='this leftinput state is '+this.state.leftInputValue;
        let rightInput ='this righttinput state is '+this.state.rightInputValue;
    return (
         <div className="container">
             <Header/>
             <div className="row">
              <div className="col-md-10">
             <SelectInput 
              selectValue={this.state.baseSelectValue}
              changeHandler={this.changeHandler}
              selectOptions={this.state.baseUnitOptions} />
              </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                <NumberInput
                 handleChange={this.handleChangeInputLeft}
                 inputValue={this.state.leftInputValue} />
                </div>
                
                <div className="col-md-5">
                <NumberInput
                 handleChange={this.handleChangeInputRight}
                 inputValue={this.state.rightInputValue}
                  />
                </div> 
              </div>
              <div className="row">
              <div className="col-md-5">
              <SelectInput 
              selectValue={this.state.unitSelectValueLeft}
              changeHandler={this.changeHandlerleft}
              selectOptions={this.state.leftUnitOptions} />
              </div>
              <div className="col-md-5">
              <SelectInput 
              selectValue={this.state.unitSelectValueRight}
              changeHandler={this.changeHandlerRight}
              selectOptions={this.state.rightUnitOptions} />
              </div>
              </div>
              {baseState} <br/>
              {leftState}  <br/>
              {rightState} <br/>
              {leftInput} <br/>
              {rightInput} 
         </div>
    );
  }
}

export default App;
