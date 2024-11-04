import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
class Component extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='cards'>

          <div className='card'>
            <img src="/Louvre.png" alt="Example" />

            <div className='titles'>
              <div className='namePrice'>
                  <h3>Louvre</h3>
                  <h3> <del>$1000</del> <b>$500</b></h3>

              </div>
              <span>Take your tour</span>

              <div className='btnDiv'>
                <button className='Activebtn'>Buy ticket</button>

                <button className='secondary'>Add person</button>
              </div>
            </div>
          
          </div>
          
          
          <div className='card'>
            <img src="/2.png" alt="Example" />

            <div className='titles'>
              <div className='namePrice'>
                  <h3>Louvre</h3>
                  <h3> <del>$1000</del> <b>$500</b></h3>

              </div>
              <span>Take your tour</span>

              <div className='btnDiv'>
                <button className='Activebtn'>Buy ticket</button>

                <button className='secondary'>Add person</button>
              </div>
            </div>
          
          </div>
          <div className='card'>
            <img src="/3.png" alt="Example" />

            <div className='titles'>
              <div className='namePrice'>
                  <h3>Louvre</h3>
                  <h3> <del>$1000</del> <b>$500</b></h3>

              </div>
              <span>Take your tour</span>

              <div className='btnDiv'>
                <button className='Activebtn'>Buy ticket</button>

                <button className='secondary'>Add person</button>
              </div>
            </div>
          
          </div>
          <div className='card'>
            <img src="/4.png" alt="Example" />

            <div className='titles'>
              <div className='namePrice'>
                  <h3>Louvre</h3>
                  <h3> <del>$1000</del> <b>$500</b></h3>

              </div>
              <span>Take your tour</span>

              <div className='btnDiv'>
                <button className='Activebtn'>Buy ticket</button>

                <button className='secondary'>Add person</button>
              </div>
            </div>
          
          </div>

        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Component />);
