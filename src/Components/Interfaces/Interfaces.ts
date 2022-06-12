
export interface IResponseData {
    apiKey: string,
    currency: string,
    date: string
}

// {
//     "result": "success",
//     "documentation": "https://www.exchangerate-api.com/docs",
//     "terms_of_use": "https://www.exchangerate-api.com/terms",
//     "time_last_update_unix": 1654992001,
//     "time_last_update_utc": "Sun, 12 Jun 2022 00:00:01 +0000",
//     "time_next_update_unix": 1655078401,
//     "time_next_update_utc": "Mon, 13 Jun 2022 00:00:01 +0000",
//     "base_code": "USD",
//     "conversion_rates": {
//         "USD": 1,
//         "AED": 3.6725,
//         "AFN": 88.6175,
//         "ALL": 111.7498,
//         "AMD": 422.6664,
//         "ANG": 1.79,
//         "AOA": 433.6265,
//         "ARS": 121.4835,
//         "AUD": 1.4125,
//         "AWG": 1.79,
//         "AZN": 1.6953,
//         "BAM": 1.8549,
//         "BBD": 2,
//         "BDT": 92.0622,
//         "BGN": 1.8546,
//         "BHD": 0.376,
//         "BIF": 2022.0624,
//         "BMD": 1,
//         "BND": 1.3829,
//         "BOB": 6.8592,
//         "BRL": 4.9244,
//         "BSD": 1,
//         "BTN": 78.0496,
//         "BWP": 12.1906,
//         "BYN": 2.7684,
//         "BZD": 2,
//         "CAD": 1.2756,
//         "CDF": 1992.933,
//         "CHF": 0.9861,
//         "CLP": 826.3384,
//         "CNY": 6.7233,
//         "COP": 3766.8388,
//         "CRC": 682.7164,
//         "CUP": 24,
//         "CVE": 104.5752,
//         "CZK": 23.384,
//         "DJF": 177.721,
//         "DKK": 7.0754,
//         "DOP": 54.9037,
//         "DZD": 145.2554,
//         "EGP": 18.6834,
//         "ERN": 15,
//         "ETB": 51.7849,
//         "EUR": 0.9484,
//         "FJD": 2.1714,
//         "FKP": 0.8105,
//         "FOK": 7.0754,
//         "GBP": 0.8106,
//         "GEL": 2.954,
//         "GGP": 0.8105,
//         "GHS": 8.1161,
//         "GIP": 0.8105,
//         "GMD": 53.9763,
//         "GNF": 8832.4842,
//         "GTQ": 7.7053,
//         "GYD": 208.6549,
//         "HKD": 7.8509,
//         "HNL": 24.5069,
//         "HRK": 7.1457,
//         "HTG": 111.7015,
//         "HUF": 376.2356,
//         "IDR": 14476.2095,
//         "ILS": 3.3879,
//         "IMP": 0.8105,
//         "INR": 78.0515,
//         "IQD": 1455.5405,
//         "IRR": 42075.4041,
//         "ISK": 129.874,
//         "JEP": 0.8105,
//         "JMD": 153.246,
//         "JOD": 0.709,
//         "JPY": 134.3975,
//         "KES": 117.2864,
//         "KGS": 81.0008,
//         "KHR": 4048.2219,
//         "KID": 1.4124,
//         "KMF": 466.5814,
//         "KRW": 1270.9423,
//         "KWD": 0.2996,
//         "KYD": 0.8333,
//         "KZT": 435.3914,
//         "LAK": 16334.3085,
//         "LBP": 1507.5,
//         "LKR": 355.6267,
//         "LRD": 151.5897,
//         "LSL": 15.7517,
//         "LYD": 4.7711,
//         "MAD": 9.7516,
//         "MDL": 19.0392,
//         "MGA": 4009.8923,
//         "MKD": 57.4362,
//         "MMK": 1833.238,
//         "MNT": 3122.6606,
//         "MOP": 8.0864,
//         "MRU": 36.4133,
//         "MUR": 43.6433,
//         "MVR": 15.4042,
//         "MWK": 1028.9734,
//         "MXN": 19.9498,
//         "MYR": 4.3916,
//         "MZN": 64.602,
//         "NAD": 15.7517,
//         "NGN": 414.7564,
//         "NIO": 35.7468,
//         "NOK": 9.6686,
//         "NPR": 124.8794,
//         "NZD": 1.5699,
//         "OMR": 0.3845,
//         "PAB": 1,
//         "PEN": 3.7606,
//         "PGK": 3.5419,
//         "PHP": 53.0649,
//         "PKR": 200.5141,
//         "PLN": 4.3606,
//         "PYG": 6867.7111,
//         "QAR": 3.64,
//         "RON": 4.6747,
//         "RSD": 111.1228,
//         "RUB": 57.7912,
//         "RWF": 1056.2677,
//         "SAR": 3.75,
//         "SBD": 7.9542,
//         "SCR": 13.1014,
//         "SDG": 445.1352,
//         "SEK": 10.0018,
//         "SGD": 1.3829,
//         "SHP": 0.8105,
//         "SLL": 13073.157,
//         "SOS": 576.9905,
//         "SRD": 21.6452,
//         "SSP": 478.9429,
//         "STN": 23.2358,
//         "SYP": 2511.3817,
//         "SZL": 15.7517,
//         "THB": 34.7634,
//         "TJS": 11.6953,
//         "TMT": 3.4986,
//         "TND": 2.8259,
//         "TOP": 2.2863,
//         "TRY": 17.1305,
//         "TTD": 6.7595,
//         "TVD": 1.4124,
//         "TWD": 29.5464,
//         "TZS": 2327.2257,
//         "UAH": 29.5185,
//         "UGX": 3700.0225,
//         "UYU": 39.3742,
//         "UZS": 11058.6351,
//         "VES": 5.2389,
//         "VND": 23173.5159,
//         "VUV": 114.206,
//         "WST": 2.6141,
//         "XAF": 622.1086,
//         "XCD": 2.7,
//         "XDR": 0.7487,
//         "XOF": 622.1086,
//         "XPF": 113.1743,
//         "YER": 249.5597,
//         "ZAR": 15.7529,
//         "ZMW": 16.9352,
//         "ZWL": 316.3966
//     }
// }