function exchange() {
  const handleConvert = async (e) => {
    e.preventDefault();
    try {
        const fromCurrency = document.getElementById("fromCurrency").value;
        const toCurrency = document.getElementById("toCurrency").value;
        const amount = document.getElementById("amount").value;

        const response = await fetch(
            `http://localhost:8080/currencies/${fromCurrency}/${toCurrency}`
        );

        const data = await response.json();
        const rate = data;
        const convertedAmount = (amount * rate).toFixed(2);

        // alert(`Converted Amount: ${convertedAmount} ${toCurrency}`);

        // Seccionamos Estilos de Aparición de Datos
        document.getElementById("resultContainer").style.display = "block";
        document.getElementById("resultContainer").style.animation = "slideIn 0.5s ease";
        
        // Mostramos Toda la operación de conversión
        document.getElementById("resultAmount").textContent = `${convertedAmount} ${toCurrency}`;
        document.getElementById("fromAmount").textContent = amount;
        document.getElementById("fromCurrencyText").textContent = fromCurrency ;
        document.getElementById("toAmount").textContent = ` ${convertedAmount}`;
        document.getElementById("toCurrencyText").textContent = toCurrency;

        // Mostramos la tasa de cambio
        document.getElementById("exchangeRate").textContent = ` 1 ${fromCurrency} = ${rate} ${toCurrency}`


    } catch (error) {
      console.error("Error al convertir la moneda:", error);
    }
  }
  return (
    <div>
      <div class="container">
        <div class="converter-container">
          <div class="page-title">
            <h1>Conversor de Monedas</h1>
            <p>Convierte entre más de 160 monedas con tasas actualizadas</p>
          </div>

          <form class="converter-form" id="converterForm">
            <div class="form-group full-width">
              <label for="amount">Cantidad a Convertir</label>
              <input
                type="number"
                id="amount"
                class="amount-input"
                placeholder="Ingresa la cantidad"
                min="0"
                step="0.01"
                required
              ></input>
            </div>

            <div class="currency-info">
              <div class="currency-card">
                <div class="form-group">
                  <label for="fromCurrency">Desde</label>
                  <select id="fromCurrency" required>
                    <option value="">Seleccionar moneda</option>
                    <option value="USD">USD - Dólar Estadounidense</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - Libra Esterlina</option>
                    <option value="JPY">JPY - Yen Japonés</option>
                    <option value="AED">
                      AED - Dirham de los Emiratos Árabes Unidos
                    </option>
                    <option value="AFN">AFN - Afgani Afgano</option>
                    <option value="ALL">ALL - Lek Albanés</option>
                    <option value="AMD">AMD - Dram Armenio</option>
                    <option value="ANG">
                      ANG - Florín de las Antillas Neerlandesas
                    </option>
                    <option value="AOA">AOA - Kwanza Angoleño</option>
                    <option value="ARS">ARS - Peso Argentino</option>
                    <option value="AUD">AUD - Dólar Australiano</option>
                    <option value="AWG">AWG - Florín Arubeño</option>
                    <option value="AZN">AZN - Manat Azerbaiyano</option>
                    <option value="BAM">
                      BAM - Marco Convertible de Bosnia y Herzegovina
                    </option>
                    <option value="BBD">BBD - Dólar de Barbados</option>
                    <option value="BDT">BDT - Taka de Bangladesh</option>
                    <option value="BGN">BGN - Lev Búlgaro</option>
                    <option value="BHD">BHD - Dinar de Baréin</option>
                    <option value="BIF">BIF - Franco de Burundi</option>
                    <option value="BMD">BMD - Dólar de Bermudas</option>
                    <option value="BND">BND - Dólar de Brunéi</option>
                    <option value="BOB">BOB - Boliviano</option>
                    <option value="BRL">BRL - Real Brasileño</option>
                    <option value="BSD">BSD - Dólar de las Bahamas</option>
                    <option value="BTN">BTN - Ngultrum de Bután</option>
                    <option value="BWP">BWP - Pula de Botsuana</option>
                    <option value="BYN">BYN - Rublo Bielorruso</option>
                    <option value="BZD">BZD - Dólar de Belice</option>
                    <option value="CAD">CAD - Dólar Canadiense</option>
                    <option value="CDF">CDF - Franco Congoleño</option>
                    <option value="CHF">CHF - Franco Suizo</option>
                    <option value="CLP">CLP - Peso Chileno</option>
                    <option value="CNY">CNY - Yuan Chino</option>
                    <option value="COP">COP - Peso Colombiano</option>
                    <option value="CRC">CRC - Colón Costarricense</option>
                    <option value="CUP">CUP - Peso Cubano</option>
                    <option value="CVE">CVE - Escudo de Cabo Verde</option>
                    <option value="CZK">CZK - Corona Checa</option>
                    <option value="DJF">DJF - Franco de Yibuti</option>
                    <option value="DKK">DKK - Corona Danesa</option>
                    <option value="DOP">DOP - Peso Dominicano</option>
                    <option value="DZD">DZD - Dinar Argelino</option>
                    <option value="EGP">EGP - Libra Egipcia</option>
                    <option value="ERN">ERN - Nakfa Eritreo</option>
                    <option value="ETB">ETB - Birr Etíope</option>
                    <option value="FJD">FJD - Dólar de Fiyi</option>
                    <option value="FKP">
                      FKP - Libra de las Islas Malvinas
                    </option>
                    <option value="FOK">FOK - Corona de las Islas Feroe</option>
                    <option value="GEL">GEL - Lari Georgiano</option>
                    <option value="GGP">GGP - Libra de Guernsey</option>
                    <option value="GHS">GHS - Cedi Ghanés</option>
                    <option value="GIP">GIP - Libra de Gibraltar</option>
                    <option value="GMD">GMD - Dalasi Gambiano</option>
                    <option value="GNF">GNF - Franco Guineano</option>
                    <option value="GTQ">GTQ - Quetzal Guatemalteco</option>
                    <option value="GYD">GYD - Dólar Guyanés</option>
                    <option value="HKD">HKD - Dólar de Hong Kong</option>
                    <option value="HNL">HNL - Lempira Hondureño</option>
                    <option value="HRK">HRK - Kuna Croata</option>
                    <option value="HTG">HTG - Gourde Haitiano</option>
                    <option value="HUF">HUF - Florín Húngaro</option>
                    <option value="IDR">IDR - Rupia Indonesia</option>
                    <option value="ILS">ILS - Nuevo Shekel Israelí</option>
                    <option value="IMP">IMP - Libra de la Isla de Man</option>
                    <option value="INR">INR - Rupia India</option>
                    <option value="IQD">IQD - Dinar Iraquí</option>
                    <option value="IRR">IRR - Rial Iraní</option>
                    <option value="ISK">ISK - Corona Islandesa</option>
                    <option value="JEP">JEP - Libra de Jersey</option>
                    <option value="JMD">JMD - Dólar Jamaiquino</option>
                    <option value="JOD">JOD - Dinar Jordano</option>
                    <option value="KES">KES - Chelín Keniano</option>
                    <option value="KGS">KGS - Som Kirguís</option>
                    <option value="KHR">KHR - Riel Camboyano</option>
                    <option value="KID">KID - Dólar de Kiribati</option>
                    <option value="KMF">KMF - Franco Comorense</option>
                    <option value="KRW">KRW - Won Surcoreano</option>
                    <option value="KWD">KWD - Dinar Kuwaití</option>
                    <option value="KYD">KYD - Dólar de las Islas Caimán</option>
                    <option value="KZT">KZT - Tenge Kazajo</option>
                    <option value="LAK">LAK - Kip Laosiano</option>
                    <option value="LBP">LBP - Libra Libanesa</option>
                    <option value="LKR">LKR - Rupia de Sri Lanka</option>
                    <option value="LRD">LRD - Dólar Liberiano</option>
                    <option value="LSL">LSL - Loti de Lesoto</option>
                    <option value="LYD">LYD - Dinar Libio</option>
                    <option value="MAD">MAD - Dirham Marroquí</option>
                    <option value="MDL">MDL - Leu Moldavo</option>
                    <option value="MGA">MGA - Ariary Malgache</option>
                    <option value="MKD">MKD - Denar Macedonio</option>
                    <option value="MMK">MMK - Kyat de Myanmar</option>
                    <option value="MNT">MNT - Tugrik Mongol</option>
                    <option value="MOP">MOP - Pataca de Macao</option>
                    <option value="MRU">MRU - Ouguiya Mauritano</option>
                    <option value="MUR">MUR - Rupia Mauriciana</option>
                    <option value="MVR">MVR - Rufiyaa de Maldivas</option>
                    <option value="MWK">MWK - Kwacha Malauí</option>
                    <option value="MXN">MXN - Peso Mexicano</option>
                    <option value="MYR">MYR - Ringgit Malayo</option>
                    <option value="MZN">MZN - Metical Mozambiqueño</option>
                    <option value="NAD">NAD - Dólar Namibio</option>
                    <option value="NGN">NGN - Naira Nigeriana</option>
                    <option value="NIO">NIO - Córdoba Nicaragüense</option>
                    <option value="NOK">NOK - Corona Noruega</option>
                    <option value="NPR">NPR - Rupia Nepalí</option>
                    <option value="NZD">NZD - Dólar Neozelandés</option>
                    <option value="OMR">OMR - Rial Omaní</option>
                    <option value="PAB">PAB - Balboa Panameño</option>
                    <option value="PEN">PEN - Sol Peruano</option>
                    <option value="PGK">
                      PGK - Kina de Papúa Nueva Guinea
                    </option>
                    <option value="PHP">PHP - Peso Filipino</option>
                    <option value="PKR">PKR - Rupia Pakistaní</option>
                    <option value="PLN">PLN - Zloty Polaco</option>
                    <option value="PYG">PYG - Guaraní Paraguayo</option>
                    <option value="QAR">QAR - Riyal Catarí</option>
                    <option value="RON">RON - Leu Rumano</option>
                    <option value="RSD">RSD - Dinar Serbio</option>
                    <option value="RUB">RUB - Rublo Ruso</option>
                    <option value="RWF">RWF - Franco Ruandés</option>
                    <option value="SAR">SAR - Riyal Saudí</option>
                    <option value="SBD">
                      SBD - Dólar de las Islas Salomón
                    </option>
                    <option value="SCR">SCR - Rupia de Seychelles</option>
                    <option value="SDG">SDG - Libra Sudanesa</option>
                    <option value="SEK">SEK - Corona Sueca</option>
                    <option value="SGD">SGD - Dólar de Singapur</option>
                    <option value="SHP">SHP - Libra de Santa Elena</option>
                    <option value="SLE">SLE - Leone de Sierra Leona</option>
                    <option value="SLL">
                      SLL - Leone de Sierra Leona (Antiguo)
                    </option>
                    <option value="SOS">SOS - Chelín Somalí</option>
                    <option value="SRD">SRD - Dólar Surinamés</option>
                    <option value="SSP">SSP - Libra Sursudanesa</option>
                    <option value="STN">
                      STN - Dobra de Santo Tomé y Príncipe
                    </option>
                    <option value="SYP">SYP - Libra Siria</option>
                    <option value="SZL">SZL - Lilangeni de Esuatini</option>
                    <option value="THB">THB - Baht Tailandés</option>
                    <option value="TJS">TJS - Somoni Tayiko</option>
                    <option value="TMT">TMT - Manat Turcomano</option>
                    <option value="TND">TND - Dinar Tunecino</option>
                    <option value="TOP">TOP - Pa'anga Tongano</option>
                    <option value="TRY">TRY - Lira Turca</option>
                    <option value="TTD">
                      TTD - Dólar de Trinidad y Tobago
                    </option>
                    <option value="TVD">TVD - Dólar de Tuvalu</option>
                    <option value="TWD">TWD - Nuevo Dólar Taiwanés</option>
                    <option value="TZS">TZS - Chelín Tanzano</option>
                    <option value="UAH">UAH - Grivna Ucraniana</option>
                    <option value="UGX">UGX - Chelín Ugandés</option>
                    <option value="UYU">UYU - Peso Uruguayo</option>
                    <option value="UZS">UZS - Som Uzbeko</option>
                    <option value="VES">VES - Bolívar Venezolano</option>
                    <option value="VND">VND - Dong Vietnamita</option>
                    <option value="VUV">VUV - Vatu de Vanuatu</option>
                    <option value="WST">WST - Tala Samoano</option>
                    <option value="XAF">
                      XAF - Franco CFA de África Central
                    </option>
                    <option value="XCD">XCD - Dólar del Caribe Oriental</option>
                    <option value="XCG">XCG - Unidad de Cuenta</option>
                    <option value="XDR">
                      XDR - Derechos Especiales de Giro
                    </option>
                    <option value="XOF">
                      XOF - Franco CFA de África Occidental
                    </option>
                    <option value="XPF">XPF - Franco CFP</option>
                    <option value="YER">YER - Rial Yemení</option>
                    <option value="ZAR">ZAR - Rand Sudafricano</option>
                    <option value="ZMW">ZMW - Kwacha Zambiano</option>
                    <option value="ZWL">ZWL - Dólar Zimbabuense</option>
                  </select>
                </div>
              </div>

              <button
                type="button"
                class="swap-btn"
                id="swapBtn"
                title="Intercambiar monedas"
              >
                ⇄
              </button>

              <div class="currency-card">
                <div class="form-group">
                  <label for="toCurrency">Hacia</label>
                  <select id="toCurrency" required>
                    <option value="">Seleccionar moneda</option>
                    <option value="USD">USD - Dólar Estadounidense</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - Libra Esterlina</option>
                    <option value="JPY">JPY - Yen Japonés</option>
                    <option value="AED">
                      AED - Dirham de los Emiratos Árabes Unidos
                    </option>
                    <option value="AFN">AFN - Afgani Afgano</option>
                    <option value="ALL">ALL - Lek Albanés</option>
                    <option value="AMD">AMD - Dram Armenio</option>
                    <option value="ANG">
                      ANG - Florín de las Antillas Neerlandesas
                    </option>
                    <option value="AOA">AOA - Kwanza Angoleño</option>
                    <option value="ARS">ARS - Peso Argentino</option>
                    <option value="AUD">AUD - Dólar Australiano</option>
                    <option value="AWG">AWG - Florín Arubeño</option>
                    <option value="AZN">AZN - Manat Azerbaiyano</option>
                    <option value="BAM">
                      BAM - Marco Convertible de Bosnia y Herzegovina
                    </option>
                    <option value="BBD">BBD - Dólar de Barbados</option>
                    <option value="BDT">BDT - Taka de Bangladesh</option>
                    <option value="BGN">BGN - Lev Búlgaro</option>
                    <option value="BHD">BHD - Dinar de Baréin</option>
                    <option value="BIF">BIF - Franco de Burundi</option>
                    <option value="BMD">BMD - Dólar de Bermudas</option>
                    <option value="BND">BND - Dólar de Brunéi</option>
                    <option value="BOB">BOB - Boliviano</option>
                    <option value="BRL">BRL - Real Brasileño</option>
                    <option value="BSD">BSD - Dólar de las Bahamas</option>
                    <option value="BTN">BTN - Ngultrum de Bután</option>
                    <option value="BWP">BWP - Pula de Botsuana</option>
                    <option value="BYN">BYN - Rublo Bielorruso</option>
                    <option value="BZD">BZD - Dólar de Belice</option>
                    <option value="CAD">CAD - Dólar Canadiense</option>
                    <option value="CDF">CDF - Franco Congoleño</option>
                    <option value="CHF">CHF - Franco Suizo</option>
                    <option value="CLP">CLP - Peso Chileno</option>
                    <option value="CNY">CNY - Yuan Chino</option>
                    <option value="COP">COP - Peso Colombiano</option>
                    <option value="CRC">CRC - Colón Costarricense</option>
                    <option value="CUP">CUP - Peso Cubano</option>
                    <option value="CVE">CVE - Escudo de Cabo Verde</option>
                    <option value="CZK">CZK - Corona Checa</option>
                    <option value="DJF">DJF - Franco de Yibuti</option>
                    <option value="DKK">DKK - Corona Danesa</option>
                    <option value="DOP">DOP - Peso Dominicano</option>
                    <option value="DZD">DZD - Dinar Argelino</option>
                    <option value="EGP">EGP - Libra Egipcia</option>
                    <option value="ERN">ERN - Nakfa Eritreo</option>
                    <option value="ETB">ETB - Birr Etíope</option>
                    <option value="FJD">FJD - Dólar de Fiyi</option>
                    <option value="FKP">
                      FKP - Libra de las Islas Malvinas
                    </option>
                    <option value="FOK">FOK - Corona de las Islas Feroe</option>
                    <option value="GEL">GEL - Lari Georgiano</option>
                    <option value="GGP">GGP - Libra de Guernsey</option>
                    <option value="GHS">GHS - Cedi Ghanés</option>
                    <option value="GIP">GIP - Libra de Gibraltar</option>
                    <option value="GMD">GMD - Dalasi Gambiano</option>
                    <option value="GNF">GNF - Franco Guineano</option>
                    <option value="GTQ">GTQ - Quetzal Guatemalteco</option>
                    <option value="GYD">GYD - Dólar Guyanés</option>
                    <option value="HKD">HKD - Dólar de Hong Kong</option>
                    <option value="HNL">HNL - Lempira Hondureño</option>
                    <option value="HRK">HRK - Kuna Croata</option>
                    <option value="HTG">HTG - Gourde Haitiano</option>
                    <option value="HUF">HUF - Florín Húngaro</option>
                    <option value="IDR">IDR - Rupia Indonesia</option>
                    <option value="ILS">ILS - Nuevo Shekel Israelí</option>
                    <option value="IMP">IMP - Libra de la Isla de Man</option>
                    <option value="INR">INR - Rupia India</option>
                    <option value="IQD">IQD - Dinar Iraquí</option>
                    <option value="IRR">IRR - Rial Iraní</option>
                    <option value="ISK">ISK - Corona Islandesa</option>
                    <option value="JEP">JEP - Libra de Jersey</option>
                    <option value="JMD">JMD - Dólar Jamaiquino</option>
                    <option value="JOD">JOD - Dinar Jordano</option>
                    <option value="KES">KES - Chelín Keniano</option>
                    <option value="KGS">KGS - Som Kirguís</option>
                    <option value="KHR">KHR - Riel Camboyano</option>
                    <option value="KID">KID - Dólar de Kiribati</option>
                    <option value="KMF">KMF - Franco Comorense</option>
                    <option value="KRW">KRW - Won Surcoreano</option>
                    <option value="KWD">KWD - Dinar Kuwaití</option>
                    <option value="KYD">KYD - Dólar de las Islas Caimán</option>
                    <option value="KZT">KZT - Tenge Kazajo</option>
                    <option value="LAK">LAK - Kip Laosiano</option>
                    <option value="LBP">LBP - Libra Libanesa</option>
                    <option value="LKR">LKR - Rupia de Sri Lanka</option>
                    <option value="LRD">LRD - Dólar Liberiano</option>
                    <option value="LSL">LSL - Loti de Lesoto</option>
                    <option value="LYD">LYD - Dinar Libio</option>
                    <option value="MAD">MAD - Dirham Marroquí</option>
                    <option value="MDL">MDL - Leu Moldavo</option>
                    <option value="MGA">MGA - Ariary Malgache</option>
                    <option value="MKD">MKD - Denar Macedonio</option>
                    <option value="MMK">MMK - Kyat de Myanmar</option>
                    <option value="MNT">MNT - Tugrik Mongol</option>
                    <option value="MOP">MOP - Pataca de Macao</option>
                    <option value="MRU">MRU - Ouguiya Mauritano</option>
                    <option value="MUR">MUR - Rupia Mauriciana</option>
                    <option value="MVR">MVR - Rufiyaa de Maldivas</option>
                    <option value="MWK">MWK - Kwacha Malauí</option>
                    <option value="MXN">MXN - Peso Mexicano</option>
                    <option value="MYR">MYR - Ringgit Malayo</option>
                    <option value="MZN">MZN - Metical Mozambiqueño</option>
                    <option value="NAD">NAD - Dólar Namibio</option>
                    <option value="NGN">NGN - Naira Nigeriana</option>
                    <option value="NIO">NIO - Córdoba Nicaragüense</option>
                    <option value="NOK">NOK - Corona Noruega</option>
                    <option value="NPR">NPR - Rupia Nepalí</option>
                    <option value="NZD">NZD - Dólar Neozelandés</option>
                    <option value="OMR">OMR - Rial Omaní</option>
                    <option value="PAB">PAB - Balboa Panameño</option>
                    <option value="PEN">PEN - Sol Peruano</option>
                    <option value="PGK">
                      PGK - Kina de Papúa Nueva Guinea
                    </option>
                    <option value="PHP">PHP - Peso Filipino</option>
                    <option value="PKR">PKR - Rupia Pakistaní</option>
                    <option value="PLN">PLN - Zloty Polaco</option>
                    <option value="PYG">PYG - Guaraní Paraguayo</option>
                    <option value="QAR">QAR - Riyal Catarí</option>
                    <option value="RON">RON - Leu Rumano</option>
                    <option value="RSD">RSD - Dinar Serbio</option>
                    <option value="RUB">RUB - Rublo Ruso</option>
                    <option value="RWF">RWF - Franco Ruandés</option>
                    <option value="SAR">SAR - Riyal Saudí</option>
                    <option value="SBD">
                      SBD - Dólar de las Islas Salomón
                    </option>
                    <option value="SCR">SCR - Rupia de Seychelles</option>
                    <option value="SDG">SDG - Libra Sudanesa</option>
                    <option value="SEK">SEK - Corona Sueca</option>
                    <option value="SGD">SGD - Dólar de Singapur</option>
                    <option value="SHP">SHP - Libra de Santa Elena</option>
                    <option value="SLE">SLE - Leone de Sierra Leona</option>
                    <option value="SLL">
                      SLL - Leone de Sierra Leona (Antiguo)
                    </option>
                    <option value="SOS">SOS - Chelín Somalí</option>
                    <option value="SRD">SRD - Dólar Surinamés</option>
                    <option value="SSP">SSP - Libra Sursudanesa</option>
                    <option value="STN">
                      STN - Dobra de Santo Tomé y Príncipe
                    </option>
                    <option value="SYP">SYP - Libra Siria</option>
                    <option value="SZL">SZL - Lilangeni de Esuatini</option>
                    <option value="THB">THB - Baht Tailandés</option>
                    <option value="TJS">TJS - Somoni Tayiko</option>
                    <option value="TMT">TMT - Manat Turcomano</option>
                    <option value="TND">TND - Dinar Tunecino</option>
                    <option value="TOP">TOP - Pa'anga Tongano</option>
                    <option value="TRY">TRY - Lira Turca</option>
                    <option value="TTD">
                      TTD - Dólar de Trinidad y Tobago
                    </option>
                    <option value="TVD">TVD - Dólar de Tuvalu</option>
                    <option value="TWD">TWD - Nuevo Dólar Taiwanés</option>
                    <option value="TZS">TZS - Chelín Tanzano</option>
                    <option value="UAH">UAH - Grivna Ucraniana</option>
                    <option value="UGX">UGX - Chelín Ugandés</option>
                    <option value="UYU">UYU - Peso Uruguayo</option>
                    <option value="UZS">UZS - Som Uzbeko</option>
                    <option value="VES">VES - Bolívar Venezolano</option>
                    <option value="VND">VND - Dong Vietnamita</option>
                    <option value="VUV">VUV - Vatu de Vanuatu</option>
                    <option value="WST">WST - Tala Samoano</option>
                    <option value="XAF">
                      XAF - Franco CFA de África Central
                    </option>
                    <option value="XCD">XCD - Dólar del Caribe Oriental</option>
                    <option value="XCG">XCG - Unidad de Cuenta</option>
                    <option value="XDR">
                      XDR - Derechos Especiales de Giro
                    </option>
                    <option value="XOF">
                      XOF - Franco CFA de África Occidental
                    </option>
                    <option value="XPF">XPF - Franco CFP</option>
                    <option value="YER">YER - Rial Yemení</option>
                    <option value="ZAR">ZAR - Rand Sudafricano</option>
                    <option value="ZMW">ZMW - Kwacha Zambiano</option>
                    <option value="ZWL">ZWL - Dólar Zimbabuense</option>
                  </select>
                </div>
              </div>
            </div>

            <button type="submit" class="convert-btn" onClick={handleConvert}>
              Convertir Moneda
            </button>
          </form>

          <div class="loading" id="loading">
            <div class="spinner"></div>
            <p>Obteniendo tasas de cambio...</p>
          </div>

          <div class="result-container" id="resultContainer">
            <div class="result-amount" id="resultAmount">
              0.00
            </div>
            <div class="result-details" id="resultDetails">
              <span id="fromAmount">0</span>{" "}
              <span id="fromCurrencyText">USD</span> =
              <span id="toAmount">0.00</span>{" "}
              <span id="toCurrencyText">EUR</span>
            </div>
            <div class="exchange-rate" id="exchangeRate">
              1 USD = 0.8817 EUR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default exchange;
