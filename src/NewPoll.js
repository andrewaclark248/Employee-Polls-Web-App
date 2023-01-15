import Select from 'react-select'
import './App.css'
import { connect } from "react-redux";
import { useState } from 'react';
import { NEW_POLL_TYPE } from "./redux/actions/pollActions.js"
import { HOME_PAGE } from "./redux/actions/changePageAction.js"
import AppNavBar from './Navbar.js';
import App from './App';
import { useNavigate } from 'react-router-dom';


function NewPoll(props) {
  var [firstOption, setFirstOption] = useState("");
  var [secondOption, setSecondOption] = useState("");
  var [pollName, setpollName] = useState("");
  const navigate = useNavigate();

    return (
    <div >
        <center>
            <h1 className="bottom-padding">New Poll</h1>
        </center>

        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="card" >
                    <div className="card-header text-white bg-primary">New Poll</div>
                    <div className="card-body">
                        <h5 className="card-title pb-4">Would You Rather?</h5>
                        <div className="pb-3">
                            <label className="">Poll Name</label>
                            <input className="form-control" placeholder="Poll Name" onChange={(e) => { setpollName(e.target.value) }} />
                        </div>
                        <div className="pb-3">
                            <label className="">First Option</label>
                            <input className="form-control" placeholder="First Option" onChange={(e) => { setFirstOption(e.target.value) }} />
                        </div>
                        <div className="pb-5">
                            <label className="">Second Option</label>
                            <input className="form-control" placeholder="Second Option" onChange={(e) => { setSecondOption(e.target.value) }} />
                        </div>
                        <div className="pb-2">
                            <button className="btn btn-primary" onClick={() => { onClickHandler(props, firstOption, secondOption, pollName); navigate('/home'); }}>Create Poll</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3"></div>

        </div>
      </div>
    );
  }


function onClickHandler(props, firstOption, secondOption, pollName) {
    props.setAlertText("You created a New Poll!!!"); 
    
    props.showNotificationBox(true); 
    
    props.dispatch({type: NEW_POLL_TYPE, payload: {firstOption: firstOption, secondOption: secondOption, currentUser: props.currentUser, pollName: pollName} });
}


export default connect((state) => ({
	currentUser: state.loginUser.currentUser,
	allPolls: state.polls.allPolls
}))(NewPoll);


  
  //props.dispatch({
  //  type: ADD_GOAL,
  //  goal
  //})

//(state) => ({
 //   goals: state.goals,
 // })


 //props.dispatch({type: HOME_PAGE })