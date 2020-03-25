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


    

    render() {
        const { name, age } = this.state;
        console.log(this.props)

        return (
            <div>
               <input type="text"/>
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
