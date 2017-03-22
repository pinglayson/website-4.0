import React from 'react';
import Header from 'Header';
import MainSearch from 'MainSearch';
import MainContent from 'MainContent';
import Footer from 'Footer';

export class Main extends React.Component {
  render () {
    return (
      <div>
        <div data-sticky-container>
          <Header/>
        </div>
        <div className="expanded row">
          <div className="small-12 medium-12 large-6 column no-padding-left">
            <MainSearch/>
          </div>
          <div className="small-12 medium-12 large-6 column">
            <MainContent/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main;
