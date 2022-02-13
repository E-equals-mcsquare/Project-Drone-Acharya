import {olmap, currentpanel} from "../actions/mapActions";

const initialState = {
    olmap: "",
    currentpanel: "Annotations"
}

function mapReducer(state = initialState, actions) {
    switch(actions.type) {
        case olmap:
            return { ...state, olmap: actions.olmap};
        case currentpanel:
            return { ...state, currentpanel: actions.currentpanel};
        default:
            return state    
    }
}

export default mapReducer;