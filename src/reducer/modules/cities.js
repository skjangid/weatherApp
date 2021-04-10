const initialState = {
  cities: [],
};

// reducer function to manage the modal state
export default function cities(state = initialState, action) {
  switch (action.type) {
    case 'CITY_LIST':
      return {
        ...state,
        cities: action.cities,
      };
    default:
      return state;
  }
}
