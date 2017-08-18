
const createInitState = () => (
    {
        screenIndex: 0,
        NN: {}
    }
);

const fyiReducer = (state = createInitState(), action) => {
    switch (action.type) {
        case 'changeScreen':
            return Object.assign({}, state, {screenIndex: action.index});
        case 'serializeNN':
            return Object.assign({}, state, {NN: action.NN});
        default:
            return state;
    }
};

export default fyiReducer;
