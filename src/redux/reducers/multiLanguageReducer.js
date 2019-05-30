import LANG_CHANGE from "../actions/multiLanguageAction";

const intialState = {
    title: "Hello",
    message: "Good morning"
}

export function languageChangeReducer(state = intialState, action) {
    switch (action.type) {
        case LANG_CHANGE:
            if (action.payload === "en") {
                return Object.assign({}, state, {
                    title: "Hello",
                    message: "Good morning"
                } )
            }
            if (action.payload === "vn") {
                return Object.assign({}, state, {
                    title: "Xin chao",
                    message: "Chao buoi sang"
                } )
            }
    }
}