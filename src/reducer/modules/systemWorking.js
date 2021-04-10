const INCREMENT_REQUEST_COUNT = 'INCREMENT_REQUEST_COUNT';
const DECREMENT_REQUEST_COUNT = 'DECREMENT_REQUEST_COUNT';
const RESET_REQUEST_COUNT = 'RESET_REQUEST_COUNT';

export const addAsyncWorkingRequest = (message = null) => {
  return {
    type: INCREMENT_REQUEST_COUNT,
    message,
  };
};

export const removeAsyncWorkingRequest = (message = null) => {
  return {
    type: DECREMENT_REQUEST_COUNT,
    message,
  };
};

export const resetAsyncWorkingRequest = (message = null) => {
  return {
    type: RESET_REQUEST_COUNT,
    message,
  };
};

const initialState = {
  requestCount: 1,
  visible: false,
};

// reducer function to manage the modal state
export default function systemWorking(state = initialState, action) {
  let requestCount, messages;

  switch (action.type) {
    case INCREMENT_REQUEST_COUNT:
      requestCount = state.requestCount + 1;
      messages = state.messages.slice(0);
      messages.push(action.message);

      return {
        ...state,
        requestCount,
      };

    case DECREMENT_REQUEST_COUNT:
      if (state.requestCount > 0) {
        requestCount = state.requestCount - 1;
      } else {
        requestCount = 0;
      }

      return {
        ...state,
        requestCount,
      };

    case RESET_REQUEST_COUNT:
      requestCount = 0;

      return {
        ...state,
        requestCount,
      };
    default:
      return state;
  }
}
