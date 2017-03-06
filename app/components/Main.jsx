import React from 'react';
import Header from 'Header';
import Footer from 'Footer';

export class Main extends React.Component {
  render () {
    return (
      <div>
        <div className="off-canvas-wrapper">
          <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
            <Header/>
            <div className="off-canvas-content" data-off-canvas-content>
              <div className="row column">

              </div>
            </div>
            <div>Main.jsx</div>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
