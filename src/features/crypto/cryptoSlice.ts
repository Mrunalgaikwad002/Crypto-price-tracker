import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoAsset, UpdateCryptoPayload } from '../../types/crypto';
import { initialCryptoData } from '../../services/mockData';

const initialState: CryptoAsset[] = initialCryptoData;

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateCrypto: (state, action: PayloadAction<UpdateCryptoPayload>) => {
      const { 
        id, 
        price, 
        change1h,
        change24h, 
        change7d,
        marketCap, 
        volume24h,
        circulatingSupply,
        maxSupply,
        chartData
      } = action.payload;
      
      const asset = state.find(asset => asset.id === id);
      if (asset) {
        asset.price = price;
        asset.change1h = change1h;
        asset.change24h = change24h;
        asset.change7d = change7d;
        asset.marketCap = marketCap;
        asset.volume24h = volume24h;
        asset.circulatingSupply = circulatingSupply;
        asset.maxSupply = maxSupply;
        asset.chartData = chartData;
      }
    }
  }
});

export const { updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer; 