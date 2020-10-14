import React from "react";
import style from "./FormsControls.module.css"



export const Textarea = ({input, meta, ...props}) => { // рест оператор диструкторизаруем input
    const hasError = meta.touched && meta.error;
    return (

        <div>
            <div className={hasError ? style.error : ''}>
                <textarea {...input} {...props} />
            </div>
            {meta.touched && <span className={style.error_message}>{meta.error}</span>}
        </div>
    )
};

export const Input = ({input, meta, ...props}) => { // рест оператор диструкторизаруем input
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={hasError && style.error}>
                <input {...input} {...props} />
            </div>
            {meta.touched && <span className={style.error_message}>{meta.error}</span>}
        </div>
    )
};