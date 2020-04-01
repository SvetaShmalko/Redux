import React, { Component } from "react";
import { connect } from "react-redux";
import { UserState } from "../../store/reducers/userReducer";
import { Dispatch } from "../../store";
import { createUser } from "../../store/actions";
import { UserItemProps } from "../User";



export interface State {
    name: string;
    age: number
}

export interface ConnectedProps {
    users: UserItemProps[]

}

type ComponentProps = ConnectedProps & ReturnType<typeof mapDispatchToProps>;

export const initialState: State = {
    name: '',
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


    handleSubmit = async (e: React.FormEvent<EventTarget>) => {
        const { name, age } = this.state;
        e.preventDefault();
    //     console.log('State:', this.state);
    //     const res = { name: this.state.name, age: this.state.age }
    //   //  this.props.createNewResourse(res);
    //     this.setState(initialState);
    //     console.log('Props:', this.props);

        try {
            const resp = await fetch("https://reqres.in/api/users", {
              method: "POST",
              body: JSON.stringify({
                name,
                age,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then(res => {
              this.setState(initialState);
              return res.json();
            });
    
            this.props.createNewResourse(resp);
          } catch (error) {
            this.setState(initialState);
            alert("An error occured");
          }
    
    }


    render() {

        const { name, age } = this.state;

        return (
            <div id='login' >
                <form onSubmit={this.handleSubmit}>
                    <label>Enter your name</label>
                    <div>

                        <input type="text"
                            className="form-control"
                            value={name}
                            id="validationDefault01"
                            placeholder="Username"
                            required
                            onChange={this._onNameChange}
                        />
                    </div>

                    <label>Enter your age</label>
                    <div>
                        <input type="number"
                            className="form-control"
                           // value={age}
                            id="validationDefault02"
                            placeholder="Age"
                            required
                            onChange={this._onAgeChange}
                        />
                    </div>

                    <input className="btn btn-success"
                        type="submit"
                        value="Submit" />

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

export default connect((mapStateToProps),mapDispatchToProps)(NewUser)
