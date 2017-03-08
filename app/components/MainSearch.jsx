import React from 'react';

export class MainSearch extends React.Component {
  render () {
    return (
      <div>
        <div className="show-for-small-only hero-background">

        </div>
        <div className="hide-for-small-only" data-sticky-container>
          <div className="hide-for-small-only sticky hero-background" data-sticky data-options="marginTop:3.4;" data-top-anchor="main-content:top" data-btm-anchor="main-content:bottom">

            <div className="search-container">
              <div>
                <h1>The Edege Property. Your home for real estate</h1>
              </div>
              <div>
                <div className="search-tabs">
                  <div className="buy-rent-toggle">
                    <div>
                      <span>Buy</span>
                    </div>
                    <div>
                      <span>Rent</span>
                    </div>
                  </div>
                  <div>
                    <span>Check Valuation</span><span>Research</span>
                  </div>
                </div>
                <div className="main-search-text">
                  <input type="text" placeholder="Enter Project, Street Name or Address"/>
                </div>
                <div className="search-details">
                  <div>
                    <div>
                      <label>Property Type
                        <select>
                          <option>Types</option>
                        </select>
                      </label>
                    </div>
                    <div>
                      <label>District
                        <select>
                          <option>District</option>
                        </select>
                      </label>
                    </div>
                    <div>
                      <label>Bed Rooms
                        <select>
                          <option>1</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label>Price
                        <select>
                          <option>Min</option>
                        </select>
                      </label>
                      <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
                      <label>
                        <select>
                          <option>Max</option>
                        </select>
                      </label>
                    </div>
                    <div>
                      <button>Search</button>
                    </div>
                  </div>
                  <div>
                    <div>
                      <input ref="checkbox1" type="checkbox" /><label>Show me only properties below valuation</label>
                    </div>
                    <div>
                      <h2>More Options</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="search-footer">
              <i className="fa fa-apple fa-lg" aria-hidden="true"></i> Get Edge Property on iOS <i className="fa fa-android fa-lg" aria-hidden="true"></i> Get Edge Property on Android
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default MainSearch;
