import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
    hideDropdown: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hideDropdown = !state.hideDropdown
            }
            
    
        default:
            return state;
    }
}