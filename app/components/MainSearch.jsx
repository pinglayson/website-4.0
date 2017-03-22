import React from 'react';

export class MainSearch extends React.Component {
  render () {
    return (
      <div className="main-search">
        <div className="hide-for-large">

        </div>
        <div className="show-for-large" data-sticky-container>
          <div className="show-for-large sticky hero-background" data-sticky data-options="marginTop:4.5;" data-top-anchor="main-content:top" data-btm-anchor="main-content:bottom">

            <div className="main-search-container row column">
              <div className="search-container row column">
                <div className="small-8 small-centered columns text-center">
                  <h3 className="white-text-with-shadow">The Edge Property. Your home for real estate</h3>
                </div>
                <div className="small-11 small-centered columns no-padding-sides">
                  <div className="search-tabs small-12 columns no-padding-sides">
                    <div className="buy-rent-toggle small-5 columns">
                      <div className="small-6 columns">
                        Buy
                      </div>
                      <div className="small-6 columns">
                        Rent
                      </div>
                    </div>
                    <div className="small-7 columns">
                      <div className="small-8 columns no-padding-sides white-text-with-shadow">Check Valuation</div>
                      <div className="small-4 columns white-text-with-shadow">Research</div>
                    </div>
                  </div>
                  <div className="main-search-text">
                    <input type="text" placeholder="Enter Project, Street Name or Address"/>
                  </div>
                  <div className="search-details row extended">
                    <div className="row extended">
                      <div className="small-3 columns">
                        <div className="input-container">
                          <label>Property Type
                            <select>
                              <option>Types</option>
                            </select>
                          </label>
                        </div>
                      </div>
                      <div className="small-6 columns">
                        <div className="input-container">
                          <label>District
                            <select>
                              <option>District</option>
                            </select>
                          </label>
                        </div>
                      </div>
                      <div className="small-3 columns">
                        <div className="input-container">
                          <label>Bed Rooms
                            <select>
                              <option>1</option>
                            </select>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row extended">
                      <div className="double-input-container small-8 columns no-padding-sides">
                        <div className="small-5 columns">
                          <label>Price</label>
                          <select>
                            <option>Min</option>
                          </select>
                        </div>
                        <div className="small-2 columns text-center">
                          <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
                        </div>
                        <div className="small-5 columns">
                          <label>&nbsp;</label>
                          <select>
                            <option>Max</option>
                          </select>
                        </div>
                      </div>
                      <div className="small-4 columns">
                        <button className="button expanded large">Search</button>
                      </div>
                    </div>
                  </div>
                  <div className="search-more-options row extended">
                    <div className="small-8 columns no-padding-right">
                      <input ref="belowValuation" type="checkbox" />
                      <label className="super-no-margin-right white-text-with-shadow">Show me only properties below valuation</label>
                    </div>
                    <div className="small-4 columns no-padding-left text-right white-text-with-shadow">
                      <h5>More Options</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="search-footer">
                <label className="white-text-with-shadow">&nbsp;<i className="fa fa-apple fa-lg" aria-hidden="true"></i> Get Edge Property on iOS &nbsp;<i className="fa fa-android fa-lg" aria-hidden="true"></i> Get Edge Property on Android</label>
              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default MainSearch;
