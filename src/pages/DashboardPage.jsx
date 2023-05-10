import React from 'react';
//import { auth } from '../firebaseConfig';
//import { getAuth, signOut } from'firebase/auth'
import { useNavigate } from 'react-router-dom';
import "firebase/auth";

import Card from '../components/Card';
import PieChart from '../components/PieChart';


// function DashboardPage() {
//   const history = useNavigate();
//   //const auth = getAuth();

//   const handleSignOut = async (event) => {
//     event.preventDefault();
//     try {
//       await firebase.auth().signOut();
//       history('/');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome to the Dashboard!</h1>
//       <button onClick={handleSignOut}>Sign Out</button>
//     </div>
//   );
// }


function DashboardPage() {
    return (
      <>
      <div className='dashboardContainer'>
        <div className="leftDashContainer">
        <Card width="280px" height="944px" bgColor="#000" borderRadius="30px" styleName="style2">
        <div>
            <p style={{fontSize:"36px", marginTop:"60px", fontWeight:'700'}}>Board.</p>

            <div className="vertical-nav">
                <ul>
                    <li>
                        <a href="#">
                            <div className="menu-item">
                                <span className="material-symbols-outlined">dashboard</span> 
                                <span className="menu-item-text">Dashboard</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <div className="menu-item">
                                <span className="material-symbols-outlined">sell</span> 
                                <span className="menu-item-text">Transactions</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <div className="menu-item">
                                <span className="material-symbols-outlined">event_available</span> 
                                <span className="menu-item-text">Schedules</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <div className="menu-item">
                                <span className="material-symbols-outlined">account_circle</span> 
                                <span className="menu-item-text">Users</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <div className="menu-item">
                                <span className="material-symbols-outlined">settings</span> 
                                <span className="menu-item-text">Settings</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="vertical-nav">
            <ul>
                <li><a href="#">Help</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        </Card>
        </div>
        <div className="rightDashContainer">
        <div className="topDashContainer">
        <Card width="222px" height="120px" bgColor="#DDEFE0" borderRadius="20px" styleName="style3">
            <div className='topDashBoardCardContent'>
                <p className='topDashBoardCardText'>Total Revenues</p>
                <p className='amount'>$2,129,430</p>
            </div>
            <div className='topDashBoardCardIcon'>
            <span className="material-symbols-outlined">account_balance_wallet</span>
            </div>
        </Card>
        <Card width="222px" height="120px" bgColor="#F4ECDD" borderRadius="20px" styleName="style3">
            <div className='topDashBoardCardContent'>
                <p className='topDashBoardCardText'>Total Transactions</p>
                <p className='amount'>$2,129,430</p>
            </div>
            <div className='topDashBoardCardIcon'>
            <span className="material-symbols-outlined">sell</span>
            </div>
        </Card>
        <Card width="222px" height="120px" bgColor="#EFDADA" borderRadius="20px" styleName="style3">
            <div className='topDashBoardCardContent'>
                <p className='topDashBoardCardText'>Total Likes</p>
                <p className='amount'>$2,129,430</p>
            </div>
            <div className='topDashBoardCardIcon'>
            <span className="material-symbols-outlined">thumb_up</span>
            </div>
        </Card>
        <Card width="222px" height="120px" bgColor="#DEE0EF" borderRadius="20px" styleName="style3">
            <div className='topDashBoardCardContent'>
                <p className='topDashBoardCardText'>Total Users</p>
                <p className='amount'>$2,129,430</p>
            </div>
            <div className='topDashBoardCardIcon'>
            <span className="material-symbols-outlined">group</span>
            </div>
        </Card>
        </div>
        <div className="middleDashContainer">
        <Card width="1000px" height="359px" bgColor="#fff" borderRadius="20px" styleName="style4">
        <p className="graph-heading" >Number of Users</p>
            <div className="graph">  
            <svg viewBox="0 0 600 300">
                <line className="axis" x1="50" y1="20" x2="50" y2="270" />
                <line className="axis" x1="50" y1="270" x2="480" y2="270" />
                <text className="axis-label" x="25" y="25">500</text>
                <text className="axis-label" x="25" y="75">400</text>
                <text className="axis-label" x="25" y="125">300</text>
                <text className="axis-label" x="25" y="175">200</text>
                <text className="axis-label" x="25" y="225">100</text>
                <text className="axis-label" x="25" y="275">0</text>
                <text className="axis-label" x="100" y="290">Week 1</text>
                <text className="axis-label" x="200" y="290">Week 2</text>
                <text className="axis-label" x="300" y="290">Week 3</text>
                <text className="axis-label" x="400" y="290">Week 4</text>
                <path className="grid" d="M50,270 h430" />
                <path className="grid" d="M50,220 h430" />
                <path className="grid" d="M50,170 h430" />
                <path className="grid" d="M50,120 h430" />
                <path className="grid" d="M50,70 h430" />
                <path className="grid" d="M50,20 h430" />
                <path className="user-line" d="M50,270 C100,200 200,100 300,150 S400,250 450,200" stroke="blue" strokeWidth="2" fill="none" />
                <path className="guest-line" d="M50,270 C100,100 200,200 300,250 S400,150 450,100" stroke="red" strokeWidth="2" fill="none" />
            </svg>
    </div>
        </Card>
        </div>
        <div className="bottomDashContainer">
        <Card width="480px" height="256px" bgColor="#fff" borderRadius="20px">
            <p style={{margin:"10px", fontSize:"18px", fontWeight:"700"}}>Top Products</p>
            <div>
            <div className='bottomDiv'>
                <PieChart/>
                <ul>
                    <li style={{color:"#98D89E"}}>Basic Tees</li>
                    <li style={{color:"#F7DC7D"}}>Custom Short Pants</li>
                    <li style={{color:"#EE8484"}}>Super Hoddies</li>
                </ul>
            </div>
            </div>
        </Card>
        <Card width="480px" height="256px" bgColor="#fff" borderRadius="20px">
            <p style={{margin:"10px", fontSize:"18px", fontWeight:"700"}}>Today's schedule</p>
            <div className='mettingCard' style={{borderLeft: "solid 7px #9BDD7C"}}>
                    <p className='meetingHeading' style={{color:"#000"}}>Meeting with suppliers from Kuta Bali</p>
                    <p>14.00-15.00</p>
                    <p>at Sunset Road, Kuta, Bali</p>
            </div>
            <div className='mettingCard' style={{borderLeft: "solid 7px #6972C4"}}>
                    <p className='meetingHeading' style={{color:"#000"}}>Check operation at Giga factory 1</p>
                    <p>18.00-120.00</p>
                    <p>at Centeral Jakarta</p>
            </div>
        </Card>
        </div>
        </div>
      </div>
      </>
    );
  }
export default DashboardPage;
