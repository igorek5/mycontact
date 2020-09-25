import React from "react";
import style from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    onChangeStatus = (e) => {
       let status = e.currentTarget.value;
       this.setState({
           status: status
       })
    };

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({  //асинхронная операция
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
    this.props.updateUserStatus(this.state.status)
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <p onDoubleClick={this.activateEditMode} className={style.status}>
                            {!this.props.status ? 'Обновить статус' : this.props.status}
                        </p>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onChangeStatus} autoFocus={true}  onBlur={this.deactivateEditMode} // onBlur событие срабатывает когда фокус уйдет  с поля
                        className={style.input_status} value={this.state.status} on/>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus