import React, { useEffect, useState } from "react";
import Rates from "../components/Rates";

function ExchangeRates() {
  const [data, setData] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const lastUpdate = "13:05";

  const handleCurrencyChange = (event) => {
    event.preventDefault();
    console.log("Cambio de moneda base:", baseCurrency);
    fetchExchangeRates();
  };

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/currencies/${baseCurrency}`
      );

      const result = await response.json();
      setData(result);
      console.log("Datos de tasas de cambio:", result);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  const getCurrencyName = (code) => {
    const names = {
      USD: "Dólar Estadounidense",
      AED: "Dirham de los Emiratos Árabes Unidos",
      AFN: "Afgani Afgano",
      ALL: "Lek Albanés",
      AMD: "Dram Armenio",
      ANG: "Florín de las Antillas Neerlandesas",
      AOA: "Kwanza Angoleño",
      ARS: "Peso Argentino",
      AUD: "Dólar Australiano",
      AWG: "Florín Arubeño",
      AZN: "Manat Azerbaiyano",
      BAM: "Marco Convertible de Bosnia-Herzegovina",
      BBD: "Dólar de Barbados",
      BDT: "Taka de Bangladesh",
      BGN: "Lev Búlgaro",
      BHD: "Dinar Bahreiní",
      BIF: "Franco Burundés",
      BMD: "Dólar de Bermudas",
      BND: "Dólar de Brunéi",
      BOB: "Boliviano",
      BRL: "Real Brasileño",
      BSD: "Dólar de las Bahamas",
      BTN: "Ngultrum Butanés",
      BWP: "Pula de Botsuana",
      BYN: "Rublo Bielorruso",
      BZD: "Dólar de Belice",
      CAD: "Dólar Canadiense",
      CDF: "Franco Congoleño",
      CHF: "Franco Suizo",
      CLP: "Peso Chileno",
      CNY: "Yuan Chino",
      COP: "Peso Colombiano",
      CRC: "Colón Costarricense",
      CUP: "Peso Cubano",
      CVE: "Escudo de Cabo Verde",
      CZK: "Corona Checa",
      DJF: "Franco de Yibuti",
      DKK: "Corona Danesa",
      DOP: "Peso Dominicano",
      DZD: "Dinar Argelino",
      EGP: "Libra Egipcia",
      ERN: "Nakfa Eritreo",
      ETB: "Birr Etíope",
      EUR: "Euro",
      FJD: "Dólar de Fiyi",
      FKP: "Libra de las Islas Malvinas",
      FOK: "Corona de las Islas Feroe",
      GBP: "Libra Esterlina",
      GEL: "Lari Georgiano",
      GGP: "Libra de Guernsey",
      GHS: "Cedi Ghanés",
      GIP: "Libra de Gibraltar",
      GMD: "Dalasi Gambiano",
      GNF: "Franco Guineano",
      GTQ: "Quetzal Guatemalteco",
      GYD: "Dólar Guyanés",
      HKD: "Dólar de Hong Kong",
      HNL: "Lempira Hondureña",
      HRK: "Kuna Croata",
      HTG: "Gourde Haitiano",
      HUF: "Forinto Húngaro",
      IDR: "Rupia Indonesia",
      ILS: "Nuevo Shekel Israelí",
      IMP: "Libra de la Isla de Man",
      INR: "Rupia India",
      IQD: "Dinar Iraquí",
      IRR: "Rial Iraní",
      ISK: "Corona Islandesa",
      JEP: "Libra de Jersey",
      JMD: "Dólar Jamaiquino",
      JOD: "Dinar Jordano",
      JPY: "Yen Japonés",
      KES: "Chelín Keniano",
      KGS: "Som Kirguís",
      KHR: "Riel Camboyano",
      KID: "Dólar de Kiribati",
      KMF: "Franco Comorense",
      KRW: "Won Surcoreano",
      KWD: "Dinar Kuwaití",
      KYD: "Dólar de las Islas Caimán",
      KZT: "Tenge Kazajo",
      LAK: "Kip Laosiano",
      LBP: "Libra Libanesa",
      LKR: "Rupia de Sri Lanka",
      LRD: "Dólar Liberiano",
      LSL: "Loti de Lesoto",
      LYD: "Dinar Libio",
      MAD: "Dirham Marroquí",
      MDL: "Leu Moldavo",
      MGA: "Ariary Malgache",
      MKD: "Denar Macedonio",
      MMK: "Kyat de Myanmar",
      MNT: "Tugrik Mongol",
      MOP: "Pataca de Macao",
      MRU: "Ouguiya Mauritano",
      MUR: "Rupia de Mauricio",
      MVR: "Rufiyaa de Maldivas",
      MWK: "Kwacha Malauí",
      MXN: "Peso Mexicano",
      MYR: "Ringgit Malayo",
      MZN: "Metical Mozambiqueño",
      NAD: "Dólar Namibio",
      NGN: "Naira Nigeriana",
      NIO: "Córdoba Nicaragüense",
      NOK: "Corona Noruega",
      NPR: "Rupia Nepalí",
      NZD: "Dólar Neozelandés",
      OMR: "Rial Omaní",
      PAB: "Balboa Panameño",
      PEN: "Sol Peruano",
      PGK: "Kina de Papúa Nueva Guinea",
      PHP: "Peso Filipino",
      PKR: "Rupia Pakistaní",
      PLN: "Zloty Polaco",
      PYG: "Guaraní Paraguayo",
      QAR: "Riyal Qatarí",
      RON: "Leu Rumano",
      RSD: "Dinar Serbio",
      RUB: "Rublo Ruso",
      RWF: "Franco Ruandés",
      SAR: "Riyal Saudí",
      SBD: "Dólar de las Islas Salomón",
      SCR: "Rupia de Seychelles",
      SDG: "Libra Sudanesa",
      SEK: "Corona Sueca",
      SGD: "Dólar de Singapur",
      SHP: "Libra de Santa Elena",
      SLE: "Leone de Sierra Leona",
      SLL: "Leone de Sierra Leona (Antiguo)",
      SOS: "Chelín Somalí",
      SRD: "Dólar Surinamés",
      SSP: "Libra Sursudanesa",
      STN: "Dobra de Santo Tomé y Príncipe",
      SYP: "Libra Siria",
      SZL: "Lilangeni de Esuatini",
      THB: "Baht Tailandés",
      TJS: "Somoni Tayiko",
      TMT: "Manat Turkmeno",
      TND: "Dinar Tunecino",
      TOP: "Paanga Tongano",
      TRY: "Lira Turca",
      TTD: "Dólar de Trinidad y Tobago",
      TVD: "Dólar de Tuvalu",
      TWD: "Dólar Taiwanés",
      TZS: "Chelín Tanzano",
      UAH: "Grivna Ucraniana",
      UGX: "Chelín Ugandés",
      UYU: "Peso Uruguayo",
      UZS: "Som Uzbeko",
      VES: "Bolívar Venezolano",
      VND: "Dong Vietnamita",
      VUV: "Vatu de Vanuatu",
      WST: "Tala Samoano",
      XAF: "Franco CFA de África Central",
      XCD: "Dólar del Caribe Oriental",
      XCG: "Caribe Guilder",
      XDR: "Derechos Especiales de Giro",
      XOF: "Franco CFA de África Occidental",
      XPF: "Franco CFP",
      YER: "Rial Yemení",
      ZAR: "Rand Sudafricano",
      ZMW: "Kwacha Zambiano",
      ZWL: "Dólar Zimbabuense",
    };
    return names[code] || code;
  };

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  return (
    <div class="main-container">
      <div class="content">
        <h1 class="page-title">Tasas de Cambio</h1>
        <p class="page-subtitle">
          Consulta las tasas de cambio actuales y históricas. Análisis detallado
          de tendencias y fluctuaciones del mercado.
        </p>

        <div class="controls-section">
          <div class="dropdown">
            <div class="base-currency-selector" id="baseCurrencySelector">
              <form onSubmit={handleCurrencyChange}>
                <select
                  value={baseCurrency}
                  onChange={(e) => setBaseCurrency(e.target.value)}
                >
                  <option value="USD">USD - {getCurrencyName("USD")}</option>
                  {Object.keys(data).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency} - {getCurrencyName(currency)}
                    </option>
                  ))}
                </select>
                <button type="submit">Actualizar</button>
              </form>
            </div>
          </div>
        </div>
        <div class="rates-container">
          <Rates
            rates={data}
            lastUpdate={lastUpdate}
            getCurrencyName={getCurrencyName}
          />
        </div>
      </div>
    </div>
  );
}

export default ExchangeRates;
