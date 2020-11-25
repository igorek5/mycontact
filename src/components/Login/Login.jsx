import React from "react";
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {createFild, Input} from "../common/FormsControls/FormsControls";
import {requiredField, maxLenghtValidator} from "../utils/validators/Validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const maxLenght10 = maxLenghtValidator(10);

const LoginForm = ({handleSubmit, error}) => {    //деструктуризация на из props нужно handleSubmit, error
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createFild(Input, 'email', 'email', 'email', [requiredField])}
                {/*<Field component={Input} type={"email"} name={"email"} placeholder={"Email"} validate={[requiredField]}/>*/}
            </div>

            <div>
                <Field component={Input} type={"password"} name={"password"} placeholder={"Пароль"} validate={[requiredField]}/>
            </div>

            {error && <div className={style.error_message}>{error}</div>}

            <div className={style.password_info}>
                <label className={style.login_checkbox}>
                   <Field component={Input} type={"checkbox"} name={"rememberMy"}/>
                    Запомните меня
                </label>
            </div>

            <button className="button" type="submit">Login</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (fromData) => {
        console.log(fromData);
        props.setlogin(fromData.email, fromData.password, fromData.rememberMy)
    };

if (props.isAuth) {
    return <Redirect to='/profile'/>
}

    return <section className={style.login}>
        <h2>Login</h2>
        <p className={style.description}>Введите пожалуйста свой логин и пароль</p>
        <LoginReduxForm onSubmit={onSubmit} />

    </section>

};

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapDispatchToProps, {})(Login);