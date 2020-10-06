import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import NewsContainer from "./components/News/NewsContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";


const App = (props) => {
    return (

        <div className='main__wrapper'>
            <HeaderContainer/>

            <div className='container container__flex'>
                <Navbar/>

                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/news' render={() => <NewsContainer/>}/>
                <Route path='/music' component={Music}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/login' render={() => <LoginContainer/>}/>

            </div>
        </div>
    );
}


export default App;
