import React from 'react';
import Header from 'Header';
import MainSearch from 'MainSearch';
import MainContent from 'MainContent';
import Footer from 'Footer';

export class Main extends React.Component {
  render () {
    return (
        <div className="off-canvas-wrapper" >
          <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
            <Header/>
            <div className="off-canvas-content" data-off-canvas-content>
              <div className="row">
                <div className="small-12 medium-6 column">
                  <MainSearch/>
                </div>
                <div className="small-12 medium-6 column">
                  <MainContent/>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
    );
  }
}

export default Main;
