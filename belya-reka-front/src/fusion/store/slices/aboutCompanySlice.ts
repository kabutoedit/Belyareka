import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $api } from "../../../api";

interface AboutData {
  title: string;
  subtitle: string;
  description: string;
  video_url: string;
}

type InitialState = {
  aboutData: AboutData | null;
  loading: "idle" | "loading" | "failed";
  error: string | null;
};

const initialState: InitialState = {
  aboutData: null,
  loading: "idle",
  error: null,
};

export const getAboutCompany = createAsyncThunk(
  "aboutCompany/get",
  async (lang: string = "ru", { rejectWithValue }) => {
    try {

      const response = await $api.get(`/about-block?locale=${lang}`);
      const responseData = response.data;

      if (responseData.data) {
        return responseData.data;
      } else {
        return null;
      }
    } catch (error: any) {
      console.error("Ошибка загрузки About:", error);
      return rejectWithValue(error.response?.data || "Ошибка загрузки");
    }
  }
);

const aboutCompanySlice = createSlice({
  name: "aboutCompany",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAboutCompany.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(getAboutCompany.fulfilled, (state, action) => {
        state.loading = "idle";
        state.aboutData = action.payload;
      })
      .addCase(getAboutCompany.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});

export default aboutCompanySlice.reducer;