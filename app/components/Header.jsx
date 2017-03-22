import React from 'react'

export class Header extends React.Component {
  componentDidMount() {
     $(document).foundation();
  }
  render () {
    return (
      <div id="widemenu" className="title-bar max-width" data-options="marginTop:0;stickyOn: small" data-sticky>
        <div className="title-bar-left">
          <ul className="menu">
            <li className="menu-text"><img src="img/TEP-logo.png"/></li>
          </ul>
        </div>
        <div className="title-bar-right">
          <ul className="menu">
            <li className="super-hide-middle-medium"><a href="#"><i className="fa fa-home fa-2x" aria-hidden="true"></i>HOME</a></li>
            <li className="hide-for-small-only"><a href="#"><i className="fa fa-calculator fa-2x" aria-hidden="true"></i>TOOLS</a></li>
            <li className="show-for-small-only"><a href="#"><i className="fa fa-calculator fa-lg" aria-hidden="true"></i></a></li>
            <li className="hide-for-small-only"><a href="property-news"><i className="fa fa-newspaper-o fa-2x" aria-hidden="true"></i>ARTICLES</a></li>
            <li className="show-for-small-only"><a href="property-news"><i className="fa fa-newspaper-o fa-lg" aria-hidden="true"></i></a></li>
            <li className="hide-for-small-only"><a href="property-news"><small>REGISTER/LOGIN</small></a></li>
            <li>
              <ul className="dropdown menu" data-dropdown-menu>
                <li>
                  <button className="menu-icon" type="button"></button>
                  <ul className="vertical menu super-scrollable-menu">
                    <li className="show-for-small-only"><a href="property-news">Register/Login</a></li>
                    <li><a href="property-search?asking_price_max=&asking_price_min=&max_bathroom=&min_bathroom=&level=&furnishing=&resource_type=&listing_type=sale&">Property Search</a></li>
                    <ul className="vertical menu">
                      <li><a href="property-search?asking_price_max=&asking_price_min=&max_bathroom=&min_bathroom=&level=&furnishing=&resource_type=&listing_type=sale&">&ensp;For Sale</a></li>
                      <li><a href="property-search?asking_price_max=&asking_price_min=&max_bathroom=&min_bathroom=&level=&furnishing=&resource_type=&listing_type=rental&">&ensp;For Rent</a></li>
                      <li><a href="property-search?asking_price_max=&asking_price_min=&max_bathroom=&min_bathroom=&level=&furnishing=&resource_type=&listing_type=room_rental&">&ensp;For Room Rental</a></li>
                      <li><a href="right_item_3">&ensp;By District</a></li>
                      <li><a href="property-map/search?radius=500&asking_price_max=&asking_price_min=&max_bathroom=&min_bathroom=&level=&furnishing=&resource_type=&listing_type=sale&">&ensp;By Map</a></li>
                      <li><a href="right_item_3">&ensp;By Estate</a></li>
                      <li><a href="right_item_3">&ensp;By Property Directory</a></li>
                    </ul>
                    <li><a>Condo</a></li>
                    <ul className="vertical menu">
                      <li><a href="right_item_3">&ensp;By District</a></li>
                      <li><a href="right_item_3">&ensp;By Map</a></li>
                    </ul>
                    <li><a>HDB</a></li>
                    <ul className="vertical menu">
                      <li><a href="right_item_3">&ensp;By Estate</a></li>
                      <li><a href="right_item_3">&ensp;By Map</a></li>
                    </ul>
                    <li><a href="new-launches">New Project</a></li>
                    <li><a href="property-agents">Find Agent</a></li>
                    <li><a href="featured-focus">Featured Focus</a></li>
                    <li><a href="events">Upcoming Events</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
