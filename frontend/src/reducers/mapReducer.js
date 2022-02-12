import {olmap} from "../actions/mapActions";

const initialState = {
    olmap: ""
}

function mapReducer(state = initialState, actions) {
    switch(actions.type) {
        case olmap:
            return { ...state, olmap: actions.olmap};
        default:
            return state    
    }
}

export default mapReducer;