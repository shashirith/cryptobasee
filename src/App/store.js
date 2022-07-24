import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";

import { cryptNewsApi } from "../services/cryptonewsApi";

export default configureStore({
  reducer: {
    //   connect store to api
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptNewsApi.reducerPath]: cryptNewsApi.reducer,
  },
});
