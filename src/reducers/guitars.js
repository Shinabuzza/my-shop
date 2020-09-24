const initialState = {
    guitars: [{
        id:0,
        title:'ESP-8sting',
        
    }],
    ids: [],
};
export default (state= initialState, action) => {

    switch (action.type) {
        case 'SET_GUITARS':
            return {
                guitars: action.payload
            };
        case 'ADD_GUITARS':
            return {
                guitars: [
                    ...state.guitar,
                    action.payload
                ]
            };
        default:
            return state;
    }
};