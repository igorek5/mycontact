import React, {useState} from "react";
import style from './ProfileStatus.module.css'

const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false);

    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    const onChangeStatus = (e) => {
        let text = e.currentTarget.value;
        setStatus(text);
    };

        return (
            <div>
                {!editMode &&
                    <div>
                        <p onDoubleClick={activateEditMode} className={style.status}>
                            {!status ? 'Обновить статус' : status}
                        </p>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onChangeStatus}  autoFocus={true} onBlur={deactivateEditMode} // onBlur событие срабатывает когда фокус уйдет  с поля
                        className={style.input_status} value={status}/>
                    </div>
                }
            </div>
        )
    }


export default ProfileStatusWithHook;