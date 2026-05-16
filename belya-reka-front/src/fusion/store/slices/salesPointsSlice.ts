// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { $api } from "../../../api";

// interface PointItem {
//   id: number;
//   title: string;
//   coor: number[];
//   areaTitle?: string;
//   order: number;
// }

// interface SalesState {
//   areas: PointItem[];
//   districts: PointItem[];
//   loading: boolean;
// }

// const initialState: SalesState = {
//   areas: [],
//   districts: [],
//   loading: false,
// };

// export const getSalesPoints = createAsyncThunk("salesPoints/getAll", async (lang: string = "ru", { rejectWithValue }) => {
//   try {
//     // Запрашиваем ТОЛЬКО области и районы
//     const [areasRes, districtsRes] = await Promise.all([
//       $api.get(`/sales-areas?locale=${lang}&pagination[pageSize]=100&sort=order:asc`),
//       $api.get(`/sales-districts?populate=*&locale=${lang}&pagination[pageSize]=100&sort=order:asc`),
//     ]);

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const areas = areasRes.data.data.map((item: any) => {
//       const attr = item.attributes || item;
//       // Если order не задан или 0, ставим 9999 чтобы элемент был в конце
//       return { id: item.id, title: attr.title, coor: [attr.lat || 0, attr.lng || 0], order: attr.order || 9999 };
//     });
//     // Сортируем по order (элементы без order будут в конце)
//     areas.sort((a: PointItem, b: PointItem) => a.order - b.order);

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const districts = districtsRes.data.data.map((item: any) => {
//       const attr = item.attributes || item;
//       const relation = attr.oblasti || attr.salesArea || attr.sales_area;
//       const areaData = relation?.data?.attributes || relation;
//       // Если order не задан или 0, ставим 9999 чтобы элемент был в конце
//       return { id: item.id, title: attr.title, coor: [attr.lat || 0, attr.lng || 0], areaTitle: areaData?.title || "", order: attr.order || 9999 };
//     });
//     // Сортируем по order (элементы без order будут в конце)
//     districts.sort((a: PointItem, b: PointItem) => a.order - b.order);

//     return { areas, districts };
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: any) {
//     console.error("Error loading sales points:", error);
//     return rejectWithValue(error.response?.data || "Ошибка");
//   }
// });

// const salesPointsSlice = createSlice({
//   name: "salesPoints",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getSalesPoints.fulfilled, (state, action) => {
//       state.areas = action.payload.areas;
//       state.districts = action.payload.districts;
//     });
//   },
// });

// export default salesPointsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $api } from "../../../api";

interface PointItem {
  id: number;
  title: string;
  coor: number[];
  areaTitle?: string;
  order: number;
}

interface SalesState {
  areas: PointItem[];
  districts: PointItem[];
  loading: boolean;
}

const initialState: SalesState = {
  areas: [],
  districts: [],
  loading: false,
};

export const getSalesPoints = createAsyncThunk("salesPoints/getAll", async (lang: string = "ru", { rejectWithValue }) => {
  try {
    // Если запрашивается кыргызский (kg или kgz), принудительно переключаем на 'ru'
    const targetLang = lang === "kg" || lang === "kgz" ? "ru" : lang;

    // Запрашиваем области и районы с подмененной локалью
    const [areasRes, districtsRes] = await Promise.all([
      $api.get(`/sales-areas?locale=${targetLang}&pagination[pageSize]=100&sort=order:asc`),
      $api.get(`/sales-districts?populate=*&locale=${targetLang}&pagination[pageSize]=100&sort=order:asc`),
    ]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const areas = (areasRes.data?.data || []).map((item: any) => {
      const attr = item.attributes || item;
      return { id: item.id, title: attr.title, coor: [attr.lat || 0, attr.lng || 0], order: attr.order || 9999 };
    });
    areas.sort((a: PointItem, b: PointItem) => a.order - b.order);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const districts = (districtsRes.data?.data || []).map((item: any) => {
      const attr = item.attributes || item;
      const relation = attr.oblasti || attr.salesArea || attr.sales_area;
      const areaData = relation?.data?.attributes || relation;
      return { id: item.id, title: attr.title, coor: [attr.lat || 0, attr.lng || 0], areaTitle: areaData?.title || "", order: attr.order || 9999 };
    });
    districts.sort((a: PointItem, b: PointItem) => a.order - b.order);

    return { areas, districts };
  } catch (error: any) {
    console.error("Error loading sales points:", error);
    return rejectWithValue(error.response?.data || "Ошибка");
  }
});

const salesPointsSlice = createSlice({
  name: "salesPoints",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSalesPoints.fulfilled, (state, action) => {
      state.areas = action.payload.areas;
      state.districts = action.payload.districts;
    });
  },
});

export default salesPointsSlice.reducer;
