import { store } from '../store/store';
import { updateCrypto } from '../features/crypto/cryptoSlice';
import { CryptoAsset } from '../types/crypto';

class CryptoWebSocket {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private updateInterval: NodeJS.Timeout | null = null;

  connect() {
    // In a real application, you would connect to a real WebSocket server
    // For this example, we'll simulate price updates
    this.simulatePriceUpdates();
  }

  private generateRandomChange(): number {
    // Generate a random change between -0.5% and +0.5%
    return (Math.random() - 0.5) * 0.01;
  }

  private updateChartData(currentData: number[]): number[] {
    const lastPrice = currentData[currentData.length - 1];
    const newPrice = lastPrice * (1 + this.generateRandomChange());
    return [...currentData.slice(1), newPrice];
  }

  private simulatePriceUpdates() {
    // Update every 1.5 seconds
    this.updateInterval = setInterval(() => {
      const state = store.getState();
      const assets = state.crypto as CryptoAsset[];

      assets.forEach((asset: CryptoAsset) => {
        const priceChange = this.generateRandomChange();
        const newPrice = asset.price * (1 + priceChange);
        
        // Calculate new changes
        const newChange1h = asset.change1h + (Math.random() - 0.5) * 0.2;
        const newChange24h = asset.change24h + (Math.random() - 0.5) * 0.1;
        const newChange7d = asset.change7d + (Math.random() - 0.5) * 0.05;

        // Update market cap and volume based on new price
        const newMarketCap = asset.marketCap * (1 + priceChange);
        const newVolume24h = asset.volume24h * (1 + (Math.random() - 0.5) * 0.05);

        // Update chart data
        const newChartData = this.updateChartData(asset.chartData);
        
        store.dispatch(updateCrypto({
          id: asset.id,
          price: newPrice,
          change1h: newChange1h,
          change24h: newChange24h,
          change7d: newChange7d,
          marketCap: newMarketCap,
          volume24h: newVolume24h,
          circulatingSupply: asset.circulatingSupply,
          maxSupply: asset.maxSupply,
          chartData: newChartData
        }));
      });
    }, 1500); // Update every 1.5 seconds
  }

  disconnect() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}

export const cryptoWebSocket = new CryptoWebSocket(); 