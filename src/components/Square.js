import React, { Component } from 'react'

class Square extends Component {
   render = () => {
       return (
           <div className="container">
               <img className="img" src={this.props.source}/>
               <div className="text-container">
                    <p className="text">{this.props.number}</p>
                    <h2 className="text">{this.props.name}</h2>
               </div>
           </div>
       )
   }
}

export default Square