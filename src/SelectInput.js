import React, {Component} from 'react';

class SelectInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
          // optionItems='';
    };
    handleChange(event){
          this.props.changeHandler(event.target.value);
    };
    componentWillMount(){
        
    }
    render(){
        let selectOptions = this.props.selectOptions;
        const optionItems =  selectOptions.map((item) =>
                            <option key={item.name} value={item.value} >
                                {item.text}
                            </option>
                            );
        return(
            <div>
                <select  className="selectpicker form-control"
                  value={this.props.selectValue}
                         onChange={this.handleChange}>
                         {optionItems}
                </select>
            </div>
        );
    };
}
export default SelectInput;