import React from 'react';
import s from './Messages.module.css'

const Messages = () => {
    return (
            <div>
                <div className={s.item}>
                    Какие дела?
                </div>
                <div className={s.item}>
                    А у тебя?
                </div>
                <div className={s.item}>
                    А ты?
                </div>
                <div className={s.item}>
                    А я вам звезды дам!
                </div>
            </div>

    )
}

export default Messages;