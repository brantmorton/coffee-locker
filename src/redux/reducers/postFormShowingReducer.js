import { POST_FORM_SHOWING } from '../actions/types'

const initialState = {
  isPostFormShowing: false
};

const postFormShowingReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_SHOWING:
      return {
        isPostFormShowing: !state.isPostFormShowing
      };

    default:
      return state;
  }
};

export default postFormShowingReducer;
