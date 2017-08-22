const defaultState = {
    UserBasicInfo: null,
    ErrorDialog: null,
}
//Global reducer
const GlobalReducer = (state = defaultState , action) => {
    switch (action.type) {
        case 'DISPLAY_ERROR_DIALOG' : return Object.assign({}, state, {
                ErrorDialog : action.payload
              });
        case 'BASIC_INFO':
            return Object.assign({}, state, {
               UserBasicInfo: action.payload
            });
        default : return state;
    }
}

