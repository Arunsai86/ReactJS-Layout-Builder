import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeContent = () => {
        onToggleShowContent()
      }

      const changeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const changeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="app-header-container">
          <h1>Layout</h1>
          <div className="checkboxes-container">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="context"
                checked={showContent}
                onChange={changeContent}
              />
              <label htmlFor="context">Content</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="left"
                checked={showLeftNavbar}
                onChange={changeLeftNavbar}
              />
              <label htmlFor="left">Left Navbar</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="right"
                checked={showRightNavbar}
                onChange={changeRightNavbar}
              />
              <label htmlFor="right">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
