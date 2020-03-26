import React, { Component } from "react";
import { connect } from "react-redux";
import { UserState } from "../../store/reducers/userReducer";
import { Dispatch } from "../../store";
import { createUser } from "../../store/actions";

export interface UserItemProps {
    name: string;
    age: number
}

export interface State {
    name: string;
    age: number
}

interface ConnectedProps {
    users: UserItemProps[]

}

type ComponentProps = ConnectedProps & ReturnType<typeof mapDispatchToProps>;

export const initialState: State = {
    name: 'Sveta',
    age: 26
};

class NewUser extends Component<ComponentProps, State> {
    public state: State = initialState;

    _onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: e.currentTarget.value });
        console.log(this.state.name);  
    }

    _onAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ age: Number(e.currentTarget.value) });
        console.log(this.state.age);
    }


    handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        console.log('State:', this.state);
        console.log('Props:', this.props);
        
        this.props.createNewResourse({name: this.state.name, age: this.state.age});
        this.setState(initialState);
        console.log('Props:', this.props);
    }


    render() {

        const { name, age } = this.state;

        return (
            <div id='login' >
                <form>
                    <div>
                        <input
                            placeholder='Username'
                            type="text"
                            name='name'
                            value={name}
                            onChange={this._onNameChange}
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Age'
                            type="number"
                            name='age'
                            value={age}
                            onChange={this._onAgeChange}
                        />
                    </div>
                    <button type="submit" onClick={this.handleSubmit} >
                        Submit
                        </button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state: { userReducer: UserState }): ConnectedProps => ({
    users: state.userReducer.users
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    createNewResourse: (p: UserItemProps) => dispatch(createUser(p))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)
