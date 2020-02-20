import Auth from "../Auth";

const auth = new Auth();

const initialState = {
  authObject: auth
};

export default function(state = initialState, action) {
  return state;
}
