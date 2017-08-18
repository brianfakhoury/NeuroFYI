
const createInitState = () => (
    {
        camera: () => console.error("THREE camera not connected"),
        wormholeCameraPosition: 0,
        screenIndex: 0
    }
);

const introReducer = (state = createInitState(), action) => {
    switch (action.type) {
        case 'connectCamera':
            return Object.assign({}, state, {camera: action.camera});
        case 'changeCamPos':
            return Object.assign({}, state, {wormholeCameraPosition: action.position});
        case 'setScreen':
            return Object.assign({}, state, {screenIndex: action.screenIndex});
        default:
            return state;
    }
};

export default introReducer;
