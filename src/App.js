import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import NewsContainer from "./components/News/NewsContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {
    return (

            <div className='main__wrapper'>
                <Header/>
                <div className='container container__flex'>
                    <Navbar store={props.store} />

                    <Route path='/profile' render={ () => <Profile store={props.store}/>}  />
                    <Route path='/dialogs' render={ () => <DialogsContainer store={props.store}/> } />
                    <Route path='/news' render={ () => <NewsContainer store={props.store}/> } />
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
               
                </div>
            </div>
    );
}


export default App;
