import React from "react";

const Rates = ({ rates, lastUpdate, getCurrencyName }) => {
  return (
    <div>
      <div className="last-update" id="lastUpdate">
        Última actualización: <span id="updateTime">{lastUpdate}</span>
      </div>

      <div className="rates-grid">
        {Object.entries(rates).map(([currency, value]) => (
          <div className="rate-card" key={currency}>
            <h3>
              {currency} - {getCurrencyName(currency)}
            </h3>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rates;
