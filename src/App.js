import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import NewsContainer from "./components/News/NewsContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {setInitialized} from "./components/redux/app_reducer";
import Preloader from "./components/common/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.setInitialized()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
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
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {setInitialized}),
    withRouter)
    (App);
