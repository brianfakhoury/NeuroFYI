
const createInitState = () => (
    {
        user: false,
        cardScreens: [],
        networks: []
    }
);

const playReducer = (state = createInitState(), action) => {
    switch (action.type) {
        case 'loadUser':
            return Object.assign({}, state, {user: true});
        case 'showCardScreen':
            const newArray0 = state.cardScreens.concat([action.cardIndex.toString()]);
            return Object.assign({}, state, {cardScreens: newArray0});
        case 'closeCard':
            const newArray1 = state.cardScreens.slice();
            newArray1.splice(action.index, 1);
            return Object.assign({}, state, {cardScreens: newArray1});
        case 'loadNetwork':
            const newArray2 = JSON.parse(JSON.stringify(state.networks));
            newArray2.push(action.networkJSON);
            return Object.assign({}, state, {networks: newArray2});
        case 'logout':
            return Object.assign({}, state, {user: null});
        default:
            return state;
    }
};

export default playReducer;
