import { Reducer } from "redux";
import {
  ActionState,
  CONFIRM_MAIL,
  CONFIRM_MAIL_ERROR,
  CONFIRM_MAIL_SUCCESS,
} from "../../actions/actionTypes";

const initialState: ActionState = {
  loading: false,
  data: {
    status: 0,
    data: {
      message: "",
    },
  },
  error: {
    status: false,
    data: {
      data: {
        message: "",
      },
    },
  },
};
export const confirmMail: Reducer<ActionState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CONFIRM_MAIL:
      return {
        ...state,
        loading: true,
      };

    case CONFIRM_MAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case CONFIRM_MAIL_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};
