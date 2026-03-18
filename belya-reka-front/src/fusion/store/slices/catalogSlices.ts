import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IProductsCatalogDelivery } from "ts/types/common.interface";
import axios from "axios";
import { CATALOG_BASKET_DATA } from "data/mock";

type initialStateCatalog = {
  catalogs: IProductsCatalogDelivery[];
  loading: string;
  error: null | boolean;
};

const initialState: initialStateCatalog = {
  catalogs: [],
  loading: "idle",
  error: null,
};

type CatalogCountItem = {
  id: IProductsCatalogDelivery["id"];
  count: IProductsCatalogDelivery["count"];
  price: IProductsCatalogDelivery["price"];
};

export const getCatalog = createAsyncThunk("catalogs/getCatalog", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_MONSTR_API_PRODUCT}products`);

    const countCatalogs = localStorage.getItem(CATALOG_BASKET_DATA);
    const resCountCatalogs: CatalogCountItem[] | null = countCatalogs && JSON.parse(countCatalogs);

    // Модификация данных перед возвратом из createAsyncThunk
    const modifiedData = res.data.map((item: IProductsCatalogDelivery) => ({
      ...item,
      count: resCountCatalogs?.find((el) => el.id === item.id)?.count ?? null,
      img: `${import.meta.env.VITE_MONSTR_API_PRODUCT}/${item.img}`,
      starting_price: item.price,
      price: resCountCatalogs?.find((el) => el.id === item.id)?.price ?? 0,
      isHas: false,
      // isHas: item.id === 2 ? true : false,
    }));

    return modifiedData;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    localStorage.removeItem(CATALOG_BASKET_DATA);
    if (error.message) {
      return rejectWithValue(error.response.data);
    }
    // Обработка ошибок и возврат с ошибкой, если необходимо
  }
});

const catalogSlice = createSlice({
  name: "catalogs",
  initialState,
  reducers: {
    changeCatalogs: (state, action: PayloadAction<IProductsCatalogDelivery[]>) => {
      const setSaveCatalogBasket: CatalogCountItem[] = action.payload
        .filter((item) => item.count && item.count)
        .map((item) => ({ id: item.id, count: item.count, price: item.price }));
      localStorage.setItem(CATALOG_BASKET_DATA, JSON.stringify(setSaveCatalogBasket));
      state.catalogs = action.payload;
    },
    resetBasket: (state) => {
      state.catalogs = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCatalog.pending, (state) => {
      state.loading = "idle";
    }),
      builder.addCase(getCatalog.fulfilled, (state, action) => {
        state.catalogs = action.payload;
      });
  },
});

/* export const fetchPosts = createAsyncThunk(APIMONSTR,); */

export const { changeCatalogs, resetBasket } = catalogSlice.actions;

export default catalogSlice.reducer;
