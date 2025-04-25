import { createSlice } from '@reduxjs/toolkit';
import sampleData from './sampleData.json';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: sampleData,
  },
  reducers: {
    updatePrices: (state) => {
      state.assets = state.assets.map((asset) => {
        const randomChange = (Math.random() * 2 - 1).toFixed(2);
        const newPrice = (asset.price * (1 + randomChange / 100)).toFixed(2);
        const new1h = (Math.random() * 10 - 5).toFixed(2);
        const new24h = (Math.random() * 20 - 10).toFixed(2);
        const new7d = (Math.random() * 30 - 15).toFixed(2);
        const newVolume = Math.floor(asset.volume_24h * (1 + Math.random() * 0.05));

        return {
          ...asset,
          price: parseFloat(newPrice),
          percent_change_1h: parseFloat(new1h),
          percent_change_24h: parseFloat(new24h),
          percent_change_7d: parseFloat(new7d),
          volume_24h: newVolume,
        };
      });
    },
  },
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;