// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="bodyContainer">
          {showLeftNavbar ? (
            <div className="leftNavbar">
              <h1 className="bodyHeaderText">Left Navbar Menu</h1>
              <ul className="listItems">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content">
              <h1 className="bodyHeaderText">Content</h1>
              <p className="contentText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="rightNavbar">
              <h1 className="bodyHeaderText">Right Navbar</h1>
              <div className="adBoxContainer">
                <p className="adBox">Ad 1</p>
                <p className="adBox">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
