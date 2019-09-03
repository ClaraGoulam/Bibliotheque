import * as React from 'react';


export default class Bouton extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            value:null
        };
    }
    render(){
        return (
            <button onClick={this.props.onClick} style={boutonStyle}>
                {this.props.value}
            </button>
        )
    }
}

const boutonStyle = {
    backgroundColor:'white',
    borderRadius:'20px',
    width:'100px',
    height:'30px',
    borderColor: 'white',
    color:'black',
}