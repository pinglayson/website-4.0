import React from 'react';

export class Footer extends React.Component {
  render () {
    return (
      <div className="expanded row">
        <div className="expanded row">
          <div className="small-7 medium-6 columns">
            <dl>
              <dt>Follow Us On</dt>
              <dd>
                <img alt="facebook" src="https://s3-ap-southeast-1.amazonaws.com/www.theedgeproperty.com.sg/images/fb_btn.png"/>&nbsp;
                <img alt="twitter" src="https://s3-ap-southeast-1.amazonaws.com/www.theedgeproperty.com.sg/images/tw_btn.png"/>&nbsp;
                <img alt="instagram" src="https://s3-ap-southeast-1.amazonaws.com/www.theedgeproperty.com.sg/images/icons/insta_btn.png"/>&nbsp;
                <img alt="linkdin" src="https://s3-ap-southeast-1.amazonaws.com/www.theedgeproperty.com.sg/images/icons/li_btn.png"/>&nbsp;
                <img alt="youtube" src="https://s3-ap-southeast-1.amazonaws.com/www.theedgeproperty.com.sg/images/icons/yt_btn.png"/>
              </dd>
            </dl>
          </div>
          <div className="small-5 medium-6 columns">
            <dl>
              <dt>Our Sites</dt>
              <dd>
                <img alt="singapore" src="https://s3-ap-southeast-1.amazonaws.com/www.theedgeproperty.com.sg/images/Singapore-Flag.png"/>&nbsp;&nbsp;
                <img alt="malaysia" src="https://s3-ap-southeast-1.amazonaws.com/www.theedgeproperty.com.sg/images/Malaysia-Flag.png"/>
              </dd>
            </dl>
          </div>
        </div>
        <div className="expanded row">
          <div className="small-12 medium-12 large-6 columns no-padding-sides">
            <div className="small-4 columns">
              <dl>
                <dt>Real Estate</dt>
                <dd>Browse All Properties</dd>
                <dd>Condos</dd>
                <dd>HDB</dd>
                <dd>Landed</dd>
                <dd>Commercial</dd>
                <dd>Industrial</dd>
              </dl>
            </div>
            <div className="small-4 columns">
              <dl>
                <dt>Singapore District</dt>
                <dd>Browse All District</dd>
                <dd>Yishun</dd>
                <dd>Punggol</dd>
                <dd>Pasir Ris</dd>
                <dd>Toa Payoh</dd>
                <dd>Bedok</dd>
                <dd>Commonwealth</dd>
                <dd>Orchard</dd>
              </dl>
            </div>
            <div className="small-4 columns">
              <dl>
                <dt>&nbsp;</dt>
                <dd>Pasir Panjang</dd>
                <dd>Woodlands</dd>
                <dd>Marine Parade</dd>
                <dd>Seletar</dd>
                <dd>Bayshore</dd>
                <dd>Eunos</dd>
                <dd>Holland</dd>
                <dd>Jurong</dd>
              </dl>
            </div>
          </div>
          <div className="small-12 medium-12 large-6 columns no-padding-sides">
            <div className="small-4 columns">
              <dl>
                <dt>HDB Estate</dt>
                <dd>Browse all estates</dd>
                <dd>Punggol</dd>
                <dd>Bukit Merah</dd>
                <dd>Jurong West</dd>
                <dd>Tampines</dd>
                <dd>Bishan</dd>
                <dd>Serangoon</dd>
                <dd>Clementi</dd>
              </dl>
            </div>
            <div className="small-4 columns">
              <dl>
                <dt>&nbsp;</dt>
                <dd>Sengkang</dd>
                <dd>Queenstown</dd>
                <dd>Toa Payoh</dd>
                <dd>Sembawang</dd>
                <dd>Hougang</dd>
                <dd>Bukit Batok</dd>
                <dd>Choa Chu Kang</dd>
              </dl>
            </div>
            <div className="small-4 columns">
              <dl>
                <dt>Quick Links</dt>
                <dd>About Us</dd>
                <dd>Terms & Condition</dd>
                <dd>Privacy Policy</dd>
                <dd>Contact Us</dd>
                <dd>Advertise with us</dd>
                <dd>User Guide</dd>
                <dd>Facebook</dd>
                <dd>Watchlist</dd>
                <dd>We're Hiring!</dd>
                <dd>FAQs</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
