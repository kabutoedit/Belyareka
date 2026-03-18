import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { $api, API_URL } from "../../../api";

// Если TS ругается, нужно будет добавить detail_text?: string в интерфейс PressCenterItem
// Но пока оставим так, JS проглотит.

type InitialStateCatalog = {
  presscenter: any[]; // Временно any, чтобы не было ошибок типизации
  loading: "idle" | "loading" | "failed";
  error: string | null;
};

const initialState: InitialStateCatalog = {
  presscenter: [],
  loading: "idle",
  error: null,
};

export const getPrssCntr = createAsyncThunk("presscenter/getPrssCntr", async (_, { rejectWithValue }) => {
  try {
    // locale=ru (или меняй динамически, как мы обсуждали ранее)
    const response = await $api.get("/news?populate=*&sort=createdAt:desc&locale=ru");

    const strapiData = response.data.data;

    const modifiedData = strapiData.map((item: any) => {
      const attr = item.attributes || item;

      // Логика картинки (v4 / v5 support)
      let imageUrl = null;
      const imgField = attr.img;
      if (imgField) {
        if (imgField.data && imgField.data.attributes) {
          imageUrl = imgField.data.attributes.url;
        } else if (imgField.url) {
          imageUrl = imgField.url;
        } else if (Array.isArray(imgField) && imgField[0]?.url) {
          imageUrl = imgField[0].url;
        }
      }
      const fullImageUrl = imageUrl ? (imageUrl.startsWith("http") ? imageUrl : `${API_URL}${imageUrl}`) : null;

      return {
        id: item.id,
        title: attr.title,
        description: attr.description, // Краткое описание

        // === НОВОЕ ПОЛЕ ===
        detail_text: attr.detail_text, // Полный текст

        date: attr.date,
        img: fullImageUrl,
        primary_image: fullImageUrl,
      };
    });

    return modifiedData;
  } catch (error: any) {
    console.error("Redux Error:", error);
    return rejectWithValue(error.response?.data || "Ошибка при загрузке");
  }
});

const presscenterSlice = createSlice({
  name: "presscenter",
  initialState,
  reducers: {
    setPrssCntr: (state, action: PayloadAction<any[]>) => {
      state.presscenter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPrssCntr.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getPrssCntr.fulfilled, (state, action) => {
        state.loading = "idle";
        state.presscenter = action.payload;
      })
      .addCase(getPrssCntr.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { setPrssCntr } = presscenterSlice.actions;
export default presscenterSlice.reducer;
