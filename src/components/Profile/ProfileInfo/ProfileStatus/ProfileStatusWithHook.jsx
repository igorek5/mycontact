import React, {useEffect, useState} from "react";
import style from './ProfileStatus.module.css'

const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false);

    let [status, setStatus] = useState(props.status);

// хук useState использует какой то state со стороны. useState возвращает массив и по этому мы его деструктуризируем
// и получаем значение, это стартовое инициализированное значение "useState(false)" и получаем функцию "setStatus"
// которая может в реакте это значение поменять. так работает если мы будем этот state менять значение с помощью этой функци
// эта компонента будет перересовываться, будет очередной рендеринг очередной цикл отрисовки

    useEffect(() => {
        setStatus(props.status)
    },[props.status]);

// useEffect() тоже хук который запускает эфект, другими словами какую то функцию. После того как все отрисуется и покажется на экране
// если мы не поставим зависимости useEffect() будет отрисовываться при каждой отрисовки, если поставим зависимость пустую
    // это будет напоминать componentDidMaunt
    // если мы установим зависимость то этот хук будет вызаваться не один раз при отрисовки а тогда когда придут в него props из вне.
    // чтобы мы могли его засинхронизировать

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