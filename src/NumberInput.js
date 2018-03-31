import React from 'react';

class NumberInput extends React.Component{
   constructor(props){
       super(props);
       this.handleChange = this.handleChange.bind(this);
   };
   handleChange(event){
        this.props.handleChange(event.target.value);
   };
   render(){
       return(
           <div>
               <input className="form-control"
                type="number"
                value={this.props.inputValue}
                onChange={this.handleChange} />
           </div>
       );
   };
};
export default NumberInput;