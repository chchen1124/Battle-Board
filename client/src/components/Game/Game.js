import React, { Component } from "react";
import "./Game.css";
import TopNav from "../TopNav/TopNavLoggedIn";
import API from "../../utils/API.js";

class Game extends Component {
    constructor(props) {
    	super(props);
    	this.state = {
			value: '',
			gameList: [],
			foundGames: true
		};
  
      this.handleChange = this.handleChange.bind(this);
	  this.handleBuild = this.handleBuild.bind(this);
	  this.handleBattle = this.handleBattle.bind(this);
	}
	
	componentDidMount() {
		this.searchGames();
	}
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleBuild(event) {
      console.log('Name submitted: ' + this.state.value);
      event.preventDefault();
	}
	
	handleBattle(event) {
		console.log("Battle for", this.state.value);
		event.preventDefault();
	}
  
    render() {
      return (
        <div>
			<TopNav />
			<div className="container">
				<div className="row">
					<div className = "col-sm-12 col-md-6 col-md-offset-3 gameForm">
						<div className="panel panel-default">
							<div className="panel-body">
								<form>
									<label>
										Create New Game:
										<input size="100%" type="text" value={this.state.value} onChange={this.handleChange} />
									</label>
									<button onClick={this.handleBuild} className="btn btn-primary pull-left" type="submit" value="Build and Return"><span className="buttonText">Build and Return</span></button>
									<button onClick={this.handleBattle} className="btn btn-primary pull-right" type="submit" value="Build and Battle"><span className="buttonText">Build and Battle</span></button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
      );
    }
  }

export default Game;