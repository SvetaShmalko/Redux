import { UserActions } from "../actions";
import { CREATE_USER } from "../../constants/userAction";
import { UserItemProps } from "../../components/User";
import { Users } from "../../components/Users";



export interface UserState {
    users: UserItemProps[]
};


const initialState = {
    users: []
};

const resp = async() => {
    await fetch("https://my-json-server.typicode.com/SvetaShmalko/json-server/users")
.then(res => {

 console.log(res);
 let users = res.json();
  return users;

})};


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