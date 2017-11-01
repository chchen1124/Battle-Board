import React, {Component} from "react";
import { Tabs, Tab } from 'react-bootstrap';
import "./Footer.css";

class Footer extends Component
{
	constructor(props)
	{
		super(props)
		this.state={isModalOpen:false}

	}
    render() {
      return (
        <div>
          <button onClick={() => this.openModal()}>About Us</button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h1>Contact Information</h1>
            <p>Christopher Chen; chchen1124</p>
            <p>Richard Selznick; richardselz</p>
            <p>Courtney Radford; cradford</p>
            <p>Brian Evans; Dhwyll</p>
            <p>Ricardo Alcazar; rickmend87</p>
            <p>Jeff Palin; jeffpalin</p>
            <p><button onClick={() => this.closeModal()}>Close</button></p>
          </Modal>
        </div>
        <div>
          <button onClick={() => this.openModal()}>Feedback</button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
			<form>
				<h1>Please fill out the form fields below</h1>
				<p><label for="to">To</label><input type="email" name="to"></p>
				<p><label for="from">From</label><input type="email" name="from"></p>
				<p><label for="mymessage">Message</label><textarea name="mymessage" placeholder="Enter in a message" rows="40" cols="40"></textarea></p>
				<p><input type="submit" value="Submit" /><button type="cancel">Cancel</button></p>
			</form>          
          </Modal>
        </div>
        <div>
         <button onClick={() => this.openModal()}>Help</button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
			  <p><label for="instructions">Instructions</label><textarea name="instructions" placeholder="Enter in instructions" rows="40" cols="40"></textarea></p>
			  <p><input type="submit" value="Submit" /><button type="cancel">Cancel</button></p>
		      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} 
		       id="controlled-tab-example">
		              <Tab eventKey={1} title="Home">Home</Tab>
		              <Tab eventKey={2} title="DashBoard">DashBoard</Tab>
		              <Tab eventKey={3} title="Board">Board</Tab>
		              <Tab eventKey={4} title="Game">Game</Tab>
		              <Tab eventKey={5} title="CharacterInfo">CharacterInfo</Tab>
		      </Tabs>
		      <button onClick={()=>this.handleSelect("Home")}>Go to tab 1</button> 
		      <button onClick={()=>this.handleSelect("DashBoard")}>Go to tab 2</button>
		      <button onClick={()=>this.handleSelect("Board")}>Go to tab 3</button>
		      <button onClick={()=>this.handleSelect("Game")}>Go to tab 4</button>
		      <button onClick={()=>this.handleSelect("CharacterInfo")}>Go to tab 5</button> 
          </Modal>        
        </div>
      )
    }

    openModal() {
      this.setState({ isModalOpen: true })
    }

    closeModal() {
      this.setState({ isModalOpen: false })
    }
  class Modal extends React.Component {
    render() {
      if (this.props.isOpen === false)
        return null

      let modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        background: '#fff'
      }

      if (this.props.width && this.props.height) {
        modalStyle.width = this.props.width + 'px'
        modalStyle.height = this.props.height + 'px'
        modalStyle.marginLeft = '-' + (this.props.width/2) + 'px',
        modalStyle.marginTop = '-' + (this.props.height/2) + 'px',
        modalStyle.transform = null
      }

      if (this.props.style) {
        for (let key in this.props.style) {
          modalStyle[key] = this.props.style[key]
        }
      }

      let backdropStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: 'rgba(0, 0, 0, 0.3)'
      }

      if (this.props.backdropStyle) {
        for (let key in this.props.backdropStyle) {
          backdropStyle[key] = this.props.backdropStyle[key]
        }
      }

      return (
        <div className={this.props.containerClassName}>
          <div className={this.props.className} style={modalStyle}>
            {this.props.children}
          </div>
          {!this.props.noBackdrop &&
              <div className={this.props.backdropClassName} style={backdropStyle}
                   onClick={e => this.close(e)}/>}
        </div>
      )
    }

    close(e) {
      e.preventDefault()

      if (this.props.onClose) {
        this.props.onClose()
      }
    }
  }

  ReactDOM.render(<App/>, document.getElementById('app'))    	
}

export default Footer;