import React, { Component } from 'react'; 

class Counter extends Component {
  state = {
    count: 0,
    tags : ['tag1','tag2', 'tag3']
  };
  style = {
    fontSize: 20
  };
  render() {   
    this.getBadgeClass();
    return (
     <React.Fragment>
    <span style ={{fontSize: 30}} className= {this.getBadgeClass()}> {this.formatCount()}</span>
    <button  style={this.style} className="btn btn-secondary btn-sm">Increment</button>
    <ul>
      {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
    </React.Fragment>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "badge-primary";
  }

  formatCount() {

    const{count} = this.state;
    return count === 0 ? 'ZERO' : count;
  }
}
 
export default Counter;