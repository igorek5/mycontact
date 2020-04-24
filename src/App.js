import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='main__wrapper'>
                <Header/>
                <div className='container container__flex'>
                    <Navbar friends={props.state.navbarPage.friends} />

                    <Route path='/profile' render={ () => <Profile post={props.state.profilePage.post} foto={props.state.profilePage.profileFoto} /> }  />
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.messagesPage.dialogs} message={props.state.messagesPage.message} /> } />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
               
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
