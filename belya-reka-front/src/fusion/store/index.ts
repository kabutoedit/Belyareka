import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from "./slices/catalogSlices";
import presscenterSlice from "./slices/presscenterSlices";
import aboutCompanySlice from "./slices/aboutCompanySlice";
import salesPointsSlice from "./slices/salesPointsSlice";

export const store = configureStore({
  reducer: {
    products: catalogSlice,
    presscenterSlice: presscenterSlice,
    aboutCompanySlice: aboutCompanySlice,
    salesPointsSlice: salesPointsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
