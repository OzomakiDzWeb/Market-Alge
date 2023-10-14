import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDownloadPageData = createAsyncThunk(
  'productSlice/fetchDownloadPageData',
  async () => {
    const response = await fetch('https://api-xh9w.onrender.com/products');
    const data = await response.json();
    return data;
  }
);