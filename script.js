const urls = [
    'https://gist.githubusercontent.com/Andres2D/5a6711f4e6701d411af9333cc84ecd1a/raw/1c1bb735b9664510fdd3186e2d6d94025cf550e9/country-flags-svg.json',
    'https://gist.githubusercontent.com/JuninhoFreitas/8bf9b82f70383e3a551cc848ce53b06c/raw/796dc4e2fa8db49b981e25fae57d32b52c1d9420/countries.json'
];

const countryNames = {
    AED: "Emiratos Árabes Unidos",
    AFN: "Afganistán",
    ALL: "Albania",
    AMD: "Armenia",
    ANG: "Curazao",
    AOA: "Angola",
    ARS: "República Argentina",
    AUD: "Mancomunidad de Australia",
    AWG: "Aruba",
    AZN: "Azerbaiyán",
    BAM: "Bosnia y Herzegovina",
    BBD: "Barbados",
    BDT: "República Popular de Bangladés",
    BGN: "República de Bulgaria",
    BHD: "Reino de Baréin",
    BIF: "República de Burundi",
    BMD: "Bermudas",
    BND: "Brunéi",
    BOB: "Estado Plurinacional de Bolivia",
    BRL: "República Federativa del Brasil",
    BSD: "Mancomunidad de las Bahamas",
    BTN: "Reino de Bután",
    BWP: "República de Botsuana",
    BYN: "República de Bielorrusia",
    BZD: "Belice",
    CAD: "Canadá",
    CDF: "República Democrática del Congo",
    CHF: "Confederación Suiza",
    CLP: "República de Chile",
    CNY: "República Popular China",
    COP: "República de Colombia",
    CRC: "República de Costa Rica",
    CUP: "República de Cuba",
    CVE: "República de Cabo Verde",
    CZK: "República Checa",
    DJF: "República de Yibuti",
    DKK: "Reino de Dinamarca",
    DOP: "República Dominicana",
    DZD: "República Argelina Democrática y Popular",
    EGP: "República Árabe de Egipto",
    ERN: "Estado de Eritrea",
    ETB: "República Democrática Federal de Etiopía",
    EUR: "Unión Europea",
    FJD: "República de Fiyi",
    FKP: "Islas Malvinas",
    FOK: "Islas Feroe",
    GBP: "Reino Unido de Gran Bretaña e Irlanda del Norte",
    GEL: "Georgia",
    GGP: "Bailía de Guernsey",
    GHS: "República de Ghana",
    GIP: "Gibraltar",
    GMD: "República de Gambia",
    GNF: "República de Guinea",
    GTQ: "República de Guatemala",
    GYD: "República Cooperativa de Guyana",
    HKD: "Región Administrativa Especial de Hong Kong",
    HNL: "República de Honduras",
    HRK: "República de Croacia",
    HTG: "República de Haití",
    HUF: "Hungría",
    IDR: "República de Indonesia",
    ILS: "Estado de Israel",
    IMP: "Isla de Man",
    INR: "República de la India",
    IQD: "República de Irak",
    IRR: "República Islámica de Irán",
    ISK: "República de Islandia",
    JEP: "Jersey",
    JMD: "Jamaica",
    JOD: "Reino Hachemita de Jordania",
    JPY: "Estado de Japón",
    KES: "República de Kenia",
    KGS: "República Kirguisa",
    KHR: "Reino de Camboya",
    KID: "Islas Kiribati",
    KMF: "Unión de las Comoras",
    KRW: "República de Corea",
    KWD: "Estado de Kuwait",
    KYD: "Islas Caimán",
    KZT: "República de Kazajistán",
    LAK: "República Democrática Popular Lao",
    LBP: "República Libanesa",
    LKR: "República Democrática Socialista de Sri Lanka",
    LRD: "República de Liberia",
    LSL: "Reino de Lesoto",
    LYD: "Estado de Libia",
    MAD: "Reino de Marruecos",
    MDL: "República de Moldavia",
    MGA: "República de Madagascar",
    MKD: "República de Macedonia del Norte",
    MMK: "República de la Unión de Myanmar",
    MNT: "Mongolia",
    MOP: "Región Administrativa Especial de Macao",
    MRU: "República Islámica de Mauritania",
    MUR: "República de Mauricio",
    MVR: "República de Maldivas",
    MWK: "República de Malaui",
    MXN: "Estados Unidos Mexicanos",
    MYR: "Malasia",
    MZN: "República de Mozambique",
    NAD: "República de Namibia",
    NGN: "República Federal de Nigeria",
    NIO: "República de Nicaragua",
    NOK: "Reino de Noruega",
    NPR: "República Democrática Federal de Nepal",
    NZD: "Nueva Zelanda",
    OMR: "Sultanato de Omán",
    PAB: "República de Panamá",
    PEN: "República del Perú",
    PGK: "Estado Independiente de Papúa Nueva Guinea",
    PHP: "República de Filipinas",
    PKR: "República Islámica de Pakistán",
    PLN: "República de Polonia",
    PYG: "República del Paraguay",
    QAR: "Estado de Catar",
    RON: "Rumania",
    RSD: "República de Serbia",
    RUB: "Federación de Rusia",
    RWF: "República de Ruanda",
    SAR: "Reino de Arabia Saudita",
    SBD: "Islas Salomón",
    SCR: "República de Seychelles",
    SDG: "República de Sudán",
    SEK: "Reino de Suecia",
    SGD: "República de Singapur",
    SHP: "Santa Elena, Ascensión y Tristán de Acuña",
    SLE: "República de Sierra Leona",
    SOS: "República Federal de Somalia",
    SRD: "República de Surinam",
    SSP: "República de Sudán del Sur",
    STN: "República Democrática de Santo Tomé y Príncipe",
    SYP: "República Árabe Siria",
    SZL: "Reino de Esuatini",
    THB: "Reino de Tailandia",
    TJS: "República de Tayikistán",
    TMT: "Turkmenistán",
    TND: "República Tunecina",
    TOP: "Reino de Tonga",
    TRY: "República de Turquía",
    TTD: "República de Trinidad y Tobago",
    TVD: "Tuvalu",
    TWD: "República de China (Taiwán)",
    TZS: "República Unida de Tanzania",
    UAH: "Ucrania",
    UGX: "República de Uganda",
    USD: "Estados Unidos de América",
    UYU: "República Oriental del Uruguay",
    UZS: "República de Uzbekistán",
    VES: "República Bolivariana de Venezuela",
    VND: "República Socialista de Vietnam",
    VUV: "República de Vanuatu",
    WST: "Estado Independiente de Samoa",
    XAF: "Comunidad Económica y Monetaria de África Central",
    XCD: "Organización de Estados del Caribe Oriental",
    XDR: "Fondo Monetario Internacional",
    XOF: "Unión Económica y Monetaria de África Occidental",
    XPF: "Territorios Franceses del Pacífico",
    YER: "República de Yemen",
    ZAR: "República de Sudáfrica",
    ZMW: "República de Zambia",
    ZWL: "República de Zimbabue"
};

async function fetchCountryData() {
    let countryData = null;
    for (const url of urls) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Error: ${response.status}`);
            countryData = await response.json();
            break;
        } catch (error) {
            console.warn(`Error al cargar datos desde ${url}:`, error);
        }
    }
    return countryData;
}

async function fetchExchangeRates() {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return response.json();
    } catch (error) {
        console.error('Error al obtener las tasas de cambio:', error);
        return null;
    }
}

async function populateCurrencyTable() {
    const countryData = await fetchCountryData();
    const exchangeRates = await fetchExchangeRates();
    const currencyList = document.getElementById('currency-list');

    if (!countryData || !exchangeRates) {
        const errorRow = document.createElement('tr');
        errorRow.innerHTML = '<td colspan="4">Hubo un error al cargar los datos. Inténtalo de nuevo más tarde.</td>';
        currencyList.appendChild(errorRow);
        return;
    }

    const countries = {};
    
    countryData.forEach(item => {
        const currencyCode = item.Currencies ? item.Currencies[0].code : item.currencyCode;
        const currencyName = item.Currencies ? item.Currencies[0].name : item.currency;
        countries[currencyCode] = {
            flag: item.flags ? item.flags.svg : item.flag,
            countryName: countryNames[currencyCode] || item.name,
            currencyName: currencyName,
            currencyCode: currencyCode
        };
    });

    const addedCurrencies = new Set();

    Object.keys(exchangeRates.rates).forEach(currency => {
        if (!addedCurrencies.has(currency)) {
            addedCurrencies.add(currency);
            const rate = exchangeRates.rates[currency];
            
            const country = countries[currency] || {
                flag: `https://flagcdn.com/16x12/${currency.slice(0, 2).toLowerCase()}.png`,
                countryName: countryNames[currency] || currency,
                currencyName: currency,
                currencyCode: currency
            };

            const currencyRow = document.createElement('tr');
            currencyRow.innerHTML = `
                <td><img src="${country.flag}" alt="${currency}"></td>
                <td>${countryNames[currency] || 'No disponible'}</td>
                <td>${country.currencyName} <span class="currency-code">(${country.currencyCode})</span></td>
                <td>${rate.toFixed(4)}</td>
            `;
            currencyList.appendChild(currencyRow);
        }
    });
}

function filterTable() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll('#currency-list tr');

    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        const textContent = Array.from(cells).map(cell => cell.textContent).join(' ').toLowerCase();
        row.style.display = textContent.includes(filter) ? '' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', populateCurrencyTable);
