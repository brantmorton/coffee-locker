import { EDIT_FORM_SHOWING } from "../actions/types";

const initialState = {
  isEditFormShowing: false
};

const editFormShowingReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_FORM_SHOWING:
      return {
        isEditFormShowing: !state.isEditFormShowing
      };

    default:
      return state;
  }
};

export default editFormShowingReducer;
