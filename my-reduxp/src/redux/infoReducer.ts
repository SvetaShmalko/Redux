import { InfoProps } from "../components/Info"
import { InfoActions } from "./actions";
import { CREATE_INFO } from "../consts";

export interface InfoState {
    arrInfo: InfoProps[]
}

const initialState: InfoState = {
    arrInfo: []
}

export const infoReducer = (
    state = initialState, 
    action: InfoActions
    ): InfoState => {
        switch (action.type) {
            case CREATE_INFO:
              return {...state, arrInfo: [...state.arrInfo, action.payload] };
        
            default:
              return state;
          }
}