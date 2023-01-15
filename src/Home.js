import { connect } from "react-redux";
import { SHOW_POLL_PAGE, ANWSERED_POLL_PAGE} from "./redux/actions/changePageAction.js"
import AppNavBar from './Navbar.js';
import { useNavigate } from 'react-router-dom';

function Home(props) { 
  /** 
    var userUnansweredPolls = null;
    var userAnwseredPolls = null;
    if (props.allPolls.length > 0) {
      userUnansweredPolls = unansweredPolls(props.allPolls, props.currentUser)
      userAnwseredPolls = awnseredPolls(props.allPolls, props.currentUser)
    }

    //sort unawnsered polls
    let sortedUserUnansweredPolls = userUnansweredPolls?.sort((a, b) =>  {return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()})
    
    //sort awnsered polls
    let sortedUserAnwseredPolls = userAnwseredPolls?.sort((a, b) =>  {return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()})
    


    */

    console.log("orignalPolls", props.originalPolls);
    console.log("userPolls", props.userPolls);

    //pretty user name
    var userName = getUserNamePretty(props.currentUser)

    //get avatar
    var picture = getAvatar(props.currentUser)

    return (
      <div>
          <center>
            <div className="bottom-padding">
              <h1>Home Page</h1>
              <span>Current User: {userName}</span>
              <img src={picture} height={100} width={100} />

            </div>
          </center>

          <div className="row">
            <div className="col-2"></div>

            <div className="col-4">
              <div className="card" >
                <div className="card-header text-white bg-primary">Unawnsered Polls</div>
                <div className="card-body">

                  <div className="">

                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="card" >
                <div className="card-header text-white bg-primary">Awnsered Polls</div>
                <div className="card-body">

                  <div className="">

                  </div>

                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
      </div>
    );
  }


  function unansweredPolls(allPolls, currentUser) {
    var userAnansweredPolls = allPolls.filter(function(poll) {
      if ((poll.currentUser == currentUser) && (poll.answer == "none")){
        return poll;
      }
    });
    return userAnansweredPolls
  } 

  function awnseredPolls (allPolls, currentUser) {
    var userAnsweredPolls = allPolls.filter(function(poll) {
      if ((poll.currentUser == currentUser) && (poll.answer != "none")){
        return poll;
      }
    });
    return userAnsweredPolls;
  }

  function getUserNamePretty(currentUser) {
    var firstName = currentUser.split("-")[0]
    var lastName = currentUser.split("-")[1]
    var name = firstName + " " + lastName
    return name;
  }


function getAvatar(currentUser) {
  var file = null
  if (currentUser == "jane-doe") {
      file = require("./assets/avatar-3-female.jpg")
  } else if(currentUser == "john-doe") {
      file = require("./assets/avatar-2-male.jpg")
  } else if (currentUser == "batman") {
      file = require("./assets/avatar-1-male.jpg")
  } else {
      file = require("./assets/none.jpg")
  }
  return file;
}

  
  
  export default connect((state) => ({
    currentUser: state.loginUser.currentUser,
    originalPolls: state.polls.originalPolls,
    userPolls: state.polls.userPolls
  }))(Home);