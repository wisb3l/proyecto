import React, { PureComponent } from 'react';
import './Project.css';

import Tag from '../Tag/Tag'

class Project extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      aux:true,
      hasError: false,
    };
  }

  changeState=(valor)=>{
    console.log(valor)
    this.setState({
      aux :!this.state.aux
    })
  }
  
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className={"ProjectWrapper "+ (this.state.aux ? '' : 'expandedDiv')} onClick={()=>this.changeState(this.state.aux)}>
        <div className="stateProject">
          <div className="stateIndicator"></div>
        </div>
        <div className="nombreProject">
          <p>Golden Kitty</p>
        </div>
        <div className="content">
          <p>Assignes recommended to solve defect no project.</p>
        </div>
        <div className="tags">
          <Tag/>
          <Tag/>
        </div>
      </div>
    );
  }
}

export default Project;
