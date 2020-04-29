import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";



const App = (props) => {
    return (

            <div className='main__wrapper'>
                <Header/>
                <div className='container container__flex'>
                    <Navbar friends={props.state.navbarPage.friends} />

                    <Route path='/profile' render={ () => <Profile post={props.state.profilePage.post}
                                                                   foto={props.state.profilePage.profileFoto}
                                                                   addPost={props.addPost}
                                                                   newPostText={props.state.profilePage.newPostText}
                                                                   updateNewPostText={props.updateNewPostText}/>}  />
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.messagesPage.dialogs}
                                                                   messagesPage={props.state.messagesPage}
                                                                   addMessage={props.addMessage}
                                                                   updateNewMessageText={props.updateNewMessageText}/> } />
                    <Route path='/news' render={ () => <News newsMessage={props.state.newsPage}
                                                                addNews={props.addNews}
                                                             updateNewNewsText={props.updateNewNewsText}/> } />
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
               
                </div>
            </div>
    );
}


export default App;
