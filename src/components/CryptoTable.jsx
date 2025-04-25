import { useSelector } from "react-redux";
import "./CryptoTable.css";

export default function CryptoTable() {
  const assets = useSelector((state) => state.crypto.assets);

  return (
    <div className="table-container">
      <h1 className="table-title">🪙 Real-Time Crypto Tracker</h1>
      <table className="crypto-table">
        <thead>
          <tr className="table-header">
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id}>
              <td>{index + 1}</td>
              <td>
                <img src={asset.logo_url} alt={asset.symbol} width={24} />
              </td>
              <td>{asset.name}</td>
              <td>{asset.symbol}</td>
              <td>${asset.price.toLocaleString()}</td>
              <td className={asset.percent_change_1h > 0 ? "green" : "red"}>
                {asset.percent_change_1h}%
              </td>
              <td className={asset.percent_change_24h > 0 ? "green" : "red"}>
                {asset.percent_change_24h}%
              </td>
              <td className={asset.percent_change_7d > 0 ? "green" : "red"}>
                {asset.percent_change_7d}%
              </td>
              <td>${asset.market_cap.toLocaleString()}</td>
              <td>${asset.volume_24h.toLocaleString()}</td>
              <td>{asset.circulating_supply.toLocaleString()}</td>
              <td>
                {asset.max_supply ? asset.max_supply.toLocaleString() : "∞"}
              </td>
              <td>
                <img
                  src={asset.chart_7d_url}
                  alt={`${asset.name} 7d chart`}
                  className="chart-img"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
