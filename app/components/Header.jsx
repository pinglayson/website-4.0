import React from 'react'

export class Header extends React.Component {
  render () {
    return (
          <div className="top-bar">

            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">The Edge Property</li>
              </ul>
            </div>

            <div className="top-bar-right">
              <ul className="dropdown menu">
                <li><a href="#">HOME</a></li>
                <li><a href="#">TOOLS</a></li>
                <li><a href="#">ARTICLES</a></li>
                <li><a href="#">REGISTER/LOGIN</a></li>
                <li>
                  <button className="menu-icon" type="button"></button>
                  <ul className="menu vertical">
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                    <li><a href="#">Item 5</a></li>
                    <li><a href="#">Item 6</a></li>
                  </ul>
                </li>
              </ul>
            </div>

          </div>
    );
  }
}

export default Header;
