const IS_FETCHING = "IS_FETCHING";
const DATA_LOADED = "DATA_LOADED";
const DATA_LOAD_ERROR = "DATA_LOAD_ERROR";
const START_FETCHING = "START_FETCHING";
const DELETE_ITEM = "DELETE_ITEM";

const initialState = {
  loading: false,
  error: false,
  current: [],
  history: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_FETCHING":
      return { ...state, loading: action.bool };

    case "DATA_LOADED":
      const d = new Date();
      const date =
        ("0" + d.getDate()).slice(-2) +
        "-" +
        ("0" + (d.getMonth() + 1)).slice(-2) +
        "-" +
        d.getFullYear() +
        " " +
        ("0" + d.getHours()).slice(-2) +
        ":" +
        ("0" + d.getMinutes()).slice(-2);
      const newImage = {
        url: action.data.data.image_url,
        name: action.data.data.id,
        id: action.data.data.import_datetime
          .split("")
          .slice(11)
          .join("")
          .split(":")
          .join(""),
        date: date,
      };

      return {
        ...state,
        history: [...state.history, newImage],
        current: newImage,
      };

    case "DATA_LOAD_ERROR":
      return { ...state, error: true };

    case "DELETE_ITEM":
      return {
        ...state,
        history: state.history.filter((i) => i.id !== action.imgId),
      };

    default:
      return state;
  }
};

export const isFetching = (bool) => {
  return { type: IS_FETCHING, bool };
};

export const requestDataSuccess = (data) => {
  return { type: DATA_LOADED, data };
};

export const requestDataError = () => {
  return { type: DATA_LOAD_ERROR };
};

export const startFetching = () => {
  return { type: START_FETCHING };
};

export const deleteItem = (imgId) => {
  return { type: DELETE_ITEM, imgId };
};
