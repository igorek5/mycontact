import React from "react";
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>
                <Field component={"input"} type={"email"} name={"email"} placeholder={"Email"}/>
            </p>

            <p>
                <Field component={"input"} type={"password"} name={"password"} placeholder={"Пароль"}/>
            </p>

            <div className={style.password_info}>
                <label className={style.login_checkbox}>
                   <Field component={"input"} type={"checkbox"} name={"rememberMy"}/>
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
        props.setloginRegister(fromData.email, fromData.password, fromData.rememberMy)
    };

    return <section className={style.login}>
        <h2>Login</h2>
        <p className={style.description}>Введите пожалуйста свой логин и пароль</p>
        <LoginReduxForm onSubmit={onSubmit} />

    </section>

};

export default Login;