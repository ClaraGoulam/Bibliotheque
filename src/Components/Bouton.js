import * as React from 'react';


export default class Bouton extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            value:null,
            onClick:null,
            backgroundColor:null,
            borderRadius:null,
            width:null,
            height:null,
            borderColor: null,
            color:null
        }; 
    }
    render(){
        return (
            <button onClick={this.props.onClick} style={{backgroundColor: this.props.backgroundColor,
                                                        borderRadius: this.props.borderRadius,
                                                        width: this.props.width,
                                                        height: this.props.height,
                                                        borderColor: this.props.borderColor,
                                                        color: this.props.color}}>
                {this.props.value}
            </button>
        )
    }
}