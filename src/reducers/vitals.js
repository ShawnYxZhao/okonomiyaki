const defaultVitals = {
    visited: false
}

const vitals = (state=defaultVitals, action) => {
    switch (action.type) {
        case "UPDATE_VITALS":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default vitals;