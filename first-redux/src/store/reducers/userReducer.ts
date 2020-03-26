import { UserActions } from "../actions";
import { CREATE_USER } from "../../constants/userAction";
import { UserItemProps } from "../../components/User";



export interface UserState {
    users: UserItemProps[]
}

const initialState = {
    users: []
}


export const userReducer = (
    state = initialState,
    action: UserActions
): UserState => {
    switch (action.type) {
        case CREATE_USER:
            return {...state, users:[...state.users, action.payload]}
        default:
            return state;
    }
}