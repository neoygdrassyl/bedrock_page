import React, {Component} from 'react';

// UrbanRules Components
import R2017 from './rules_components/r2017'

class Rules extends Component {
    render(){
    const { translation } = this.props;
    return (
      <div className="Rules container">
                  <div className="row py-4 d-flex justify-content-center">
          <div className="col-lg-8">
            <h2 class="text-uppercase text-center pb-2">Normas URbanas</h2>
            <hr />
            <div className="text-center">
              <R2017 />
              <br />
            </div>
          </div >
        </div >
      </div >
    );
  }
  }
  
  export default Rules;