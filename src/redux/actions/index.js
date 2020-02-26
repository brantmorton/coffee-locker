import { POST_FORM_SHOWING, EDIT_FORM_SHOWING } from './types'

export const togglePostForm = () => {
  return {
    type: POST_FORM_SHOWING
  };
};

export const toggleEditForm = () => {
  return {
    type: EDIT_FORM_SHOWING
  }
}
