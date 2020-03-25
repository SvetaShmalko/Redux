import React, { Component } from "react";
import { connect } from "react-redux";
import { UserState, UserItemProps } from "../../store/reducers/userReducer";
import { Dispatch } from "../../store";
import { createUser } from "../../store/actions";

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

    handleChange(event: React.ChangeEvent<HTMLInputElement> ) {
       
    }

    handleSubmit(event: React.FormEvent) {
        event.preventDefault();

       this.props.createNewResourse({name: "sveta", age: 26})
    }
    
    

    render() {
        const { name, age } = this.state;
        console.log(this.props)

        return (
            <form
            onSubmit={(event) => this.handleSubmit(event)}
        >
            <label>Enter Your name</label>

            <input type="text"
                className="form-control"
                value={this.state.name}
                id="validationDefault01"
                placeholder="name"
                required
                onChange={this.handleChange}
            />

            <input className="btn btn-success"
                type="submit"
                value="Submit"
            />
        </form>
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
