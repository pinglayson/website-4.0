import React from 'react'

export class Header extends React.Component {
  componentDidMount() {
     $(document).foundation();
  }
  render () {
    return (
      <div>
          <div className="title-bar max-width" data-responsive-toggle="widemenu" data-hide-for="medium">
            <div className="title-bar-left">
              <span className="title-bar-title">THE EDGE PROPERTY</span>
            </div>
            <div className="title-bar-right">
              <button className="menu-icon" type="button" data-open="offCanvasRight"></button>
            </div>
          </div>

          <div className="off-canvas position-right" id="offCanvasRight" data-off-canvas data-position="right">
            <ul className="vertical menu" data-dropdown-menu>
              <li className="show-for-small-only"><a href="/">Home</a></li>
              <li className="show-for-small-only"><a href="/">Tools</a></li>
              <li className="show-for-small-only"><a href="property-news">Articles</a></li>
              <li><a href="property-search?asking_price_max=&asking_price_min=&max_bathroom=&min_bathroom=&level=&furnishing=&resource_type=&listing_type=sale&">Property Search</a></li>
              <ul className="vertical menu">
                <li><a href="property-search?asking_price_max=&asking_price_min=&max_bathroom=&min_bathroom=&level=&furnishing=&resource_type=&listing_type=sale&">For Sale</a></li>
                <li><a href="property-search?asking_price_max=&asking_price_min=&max_bathroom=&min_bathroom=&level=&furnishing=&resource_type=&listing_type=rental&">For Rent</a></li>
                <li><a href="property-search?asking_price_max=&asking_price_min=&max_bathroom=&min_bathroom=&level=&furnishing=&resource_type=&listing_type=room_rental&">For Room Rental</a></li>
                <li><a href="right_item_3">By District</a></li>
                <li><a href="property-map/search?radius=500&asking_price_max=&asking_price_min=&max_bathroom=&min_bathroom=&level=&furnishing=&resource_type=&listing_type=sale&">By Map</a></li>
                <li><a href="right_item_3">By Estate</a></li>
                <li><a href="right_item_3">By Property Directory</a></li>
              </ul>
              <li><a>Condo</a></li>
              <ul className="vertical menu">
                <li><a href="right_item_3">By District</a></li>
                <li><a href="right_item_3">By Map</a></li>
              </ul>
              <li><a>HDB</a></li>
              <ul className="vertical menu">
                <li><a href="right_item_3">By Estate</a></li>
                <li><a href="right_item_3">By Map</a></li>
              </ul>
              <li><a href="new-launches">New Project</a></li>
              <li><a href="property-agents">Find Agent</a></li>
              <li><a href="featured-focus">Featured Focus</a></li>
              <li><a href="events">Upcoming Events</a></li>
            </ul>
          </div>
          <div data-sticky-container>
            <div id="widemenu" className="top-bar max-width" data-options="marginTop:0;" data-sticky>
              <div className="top-bar-left">
                <ul className="menu">
                  <li className="menu-text">THE EDGE PROPERTY</li>
                </ul>
              </div>
              <div className="top-bar-right">
                <ul className="menu">
                  <li><a href="#">HOME</a></li>
                  <li><a href="#">TOOLS</a></li>
                  <li><a href="property-news">ARTICLES</a></li>
                  <li><button className="menu-icon" type="button" data-open="offCanvasRight"></button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
