(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window).
        root.returnExports = factory();
    }
}(this, function() {
    return {"COUNTRY_DETAILS": {"EGY": {"slug": "eg", "weight": 0, "name": "Egypt", "adolescent": true, "mcc": 602, "id": 43, "special": false, "default_currency": "EGP"}, "BGD": {"slug": "bd", "weight": 0, "name": "Bangladesh", "adolescent": true, "ratingsbody": null, "mcc": 470, "id": 31, "special": false, "default_currency": "BDT"}, "MUS": {"slug": "mu", "weight": 0, "name": "Mauritius", "adolescent": true, "mcc": 617, "id": 50, "special": false, "default_currency": "MUR"}, "PER": {"slug": "pe", "weight": 0, "name": "Peru", "adolescent": false, "ratingsbody": "ESRB", "mcc": 716, "id": 18, "special": false, "default_currency": "PEN"}, "VUT": {"slug": "vu", "weight": 0, "name": "Vanuatu", "adolescent": true, "mcc": 541, "id": 47, "special": false, "default_currency": "USD"}, "NER": {"slug": "ne", "weight": 0, "name": "Niger", "adolescent": true, "mcc": 614, "id": 52, "special": false, "default_currency": "XOF"}, "COL": {"slug": "co", "weight": 0, "name": "Colombia", "adolescent": false, "ratingsbody": "ESRB", "mcc": 732, "id": 9, "special": false, "default_currency": "COP"}, "PAN": {"slug": "pa", "weight": 0, "name": "Panama", "adolescent": true, "ratingsbody": "ESRB", "mcc": 714, "id": 28, "special": false, "default_currency": "USD"}, "JOR": {"slug": "jo", "weight": 0, "name": "Jordan", "adolescent": true, "mcc": 416, "id": 51, "special": false, "default_currency": "JOD"}, "MDG": {"slug": "mg", "weight": 0, "name": "Madagascar", "adolescent": true, "mcc": 646, "id": 49, "special": false, "default_currency": "MGA"}, "TZA": {"slug": "tz", "weight": 0, "name": "Tanzania", "adolescent": true, "mcc": 640, "id": 44, "special": false, "default_currency": "TZS"}, "BWA": {"slug": "bw", "weight": 0, "name": "Botswana", "adolescent": true, "mcc": 652, "id": 45, "special": false, "default_currency": "BWP"}, "ECU": {"slug": "ec", "weight": 0, "name": "Ecuador", "adolescent": true, "ratingsbody": "ESRB", "mcc": 740, "id": 26, "special": false, "default_currency": "USD"}, "SEN": {"slug": "sn", "weight": 0, "name": "Senegal", "adolescent": true, "mcc": 608, "id": 41, "special": false, "default_currency": "XOF"}, "SRB": {"slug": "rs", "weight": 0, "name": "Serbia", "adolescent": true, "ratingsbody": "PEGI", "mcc": 220, "id": 16, "special": false, "default_currency": "RSD"}, "FRA": {"slug": "fr", "weight": 0, "name": "France", "adolescent": true, "ratingsbody": "PEGI", "mcc": 208, "id": 30, "special": false, "default_currency": "EUR"}, "LTU": {"slug": "lt", "weight": 0, "name": "Lithuania", "adolescent": true, "mcc": 370, "id": 38, "special": false, "default_currency": "LTL"}, "CHL": {"slug": "cl", "weight": 0, "name": "Chile", "adolescent": true, "ratingsbody": "ESRB", "mcc": 730, "id": 23, "special": false, "default_currency": "CLP"}, "GTM": {"slug": "gt", "weight": 0, "name": "Guatemala", "adolescent": true, "ratingsbody": "ESRB", "mcc": 704, "id": 25, "special": false, "default_currency": "GTQ"}, "CHN": {"slug": "cn", "weight": 0, "name": "China", "adolescent": true, "ratingsbody": null, "mcc": 460, "id": 21, "special": true, "default_currency": "CNY"}, "VEN": {"slug": "ve", "weight": 0, "name": "Venezuela", "adolescent": false, "ratingsbody": "ESRB", "mcc": 734, "id": 10, "special": false, "default_currency": "USD"}, "GIN": {"slug": "gn", "weight": 0, "name": "Guinea-Conakry", "adolescent": true, "mcc": 611, "id": 55, "special": false, "default_currency": "GNF"}, "URY": {"slug": "uy", "weight": 0, "name": "Uruguay", "adolescent": false, "ratingsbody": "ESRB", "mcc": 748, "id": 19, "special": false, "default_currency": "UYU"}, "KEN": {"slug": "ke", "weight": 0, "name": "Kenya", "adolescent": true, "mcc": 639, "id": 56, "special": false, "default_currency": "KES"}, "PHL": {"slug": "ph", "name": "Philippines", "adolescent": true, "ratingsbody": null, "low_memory": true, "mcc": 515, "id": 35, "weight": 0, "default_currency": "PHP"}, "ZAF": {"slug": "za", "weight": 0, "name": "South Africa", "adolescent": false, "ratingsbody": null, "mcc": 655, "id": 37, "special": false, "default_currency": "ZAR"}, "NIC": {"slug": "ni", "weight": 0, "name": "Nicaragua", "adolescent": true, "ratingsbody": "ESRB", "mcc": 710, "id": 29, "special": false, "default_currency": "NIO"}, "MMR": {"slug": "mm", "weight": 0, "name": "Myanmar", "adolescent": true, "mcc": 414, "id": 53, "special": false, "default_currency": "MMK"}, "TUN": {"slug": "tn", "weight": 0, "name": "Tunisia", "adolescent": true, "mcc": 605, "id": 39, "special": false, "default_currency": "TND"}, "RUS": {"slug": "ru", "weight": 0, "name": "Russia", "adolescent": true, "mcc": 250, "id": 36, "special": false, "default_currency": "EUR"}, "MEX": {"slug": "mx", "weight": 0, "name": "Mexico", "adolescent": false, "ratingsbody": "ESRB", "mcc": 334, "id": 12, "special": false, "default_currency": "MXN"}, "BRA": {"slug": "br", "weight": 0, "name": "Brazil", "adolescent": false, "ratingsbody": "CLASSIND", "mcc": 724, "id": 7, "special": false, "default_currency": "BRL"}, "USA": {"slug": "us", "weight": 1, "name": "United States", "adolescent": true, "ratingsbody": "ESRB", "mcc": 310, "id": 2, "special": false, "default_currency": "USD"}, "DEU": {"slug": "de", "weight": 0, "name": "Germany", "adolescent": true, "ratingsbody": "USK", "mcc": 262, "id": 14, "special": false, "default_currency": "EUR"}, "GNB": {"slug": "gw", "weight": 0, "name": "Guinea-Bissau", "adolescent": true, "mcc": 632, "id": 46, "special": false, "default_currency": "XOF"}, "GBR": {"slug": "uk", "weight": 0, "name": "United Kingdom", "adolescent": true, "ratingsbody": "PEGI", "mcc": 235, "id": 4, "special": false, "default_currency": "GBP"}, "CIV": {"slug": "ci", "weight": 0, "name": "C\u00f4te d\'Ivoire", "adolescent": true, "mcc": 612, "id": 40, "special": false, "default_currency": "XOF"}, "CRI": {"slug": "cr", "weight": 0, "name": "Costa Rica", "adolescent": true, "ratingsbody": "ESRB", "mcc": 712, "id": 27, "special": false, "default_currency": "CRC"}, "CAF": {"slug": "cf", "weight": 0, "name": "Central African Republic", "adolescent": true, "mcc": 623, "id": 54, "special": false, "default_currency": "XAF"}, "HUN": {"slug": "hu", "weight": 0, "name": "Hungary", "adolescent": true, "ratingsbody": "PEGI", "mcc": 216, "id": 13, "special": false, "default_currency": "HUF"}, "CMR": {"slug": "cm", "weight": 0, "name": "Cameroon", "adolescent": true, "mcc": 624, "id": 42, "special": false, "default_currency": "COP"}, "POL": {"slug": "pl", "weight": 0, "name": "Poland", "adolescent": true, "ratingsbody": "PEGI", "mcc": 260, "id": 11, "special": false, "default_currency": "PLN"}, "MNE": {"slug": "me", "weight": 0, "name": "Montenegro", "adolescent": true, "ratingsbody": "PEGI", "mcc": 297, "id": 15, "special": false, "default_currency": "EUR"}, "ESP": {"slug": "es", "weight": 0, "name": "Spain", "adolescent": true, "ratingsbody": "PEGI", "mcc": 214, "id": 8, "special": false, "default_currency": "EUR"}, "SLV": {"slug": "sv", "weight": 0, "name": "El Salvador", "adolescent": true, "ratingsbody": "ESRB", "mcc": 706, "id": 24, "special": false, "default_currency": "USD"}, "MLI": {"slug": "ml", "weight": 0, "name": "Mali", "adolescent": true, "mcc": 610, "id": 48, "special": false, "default_currency": "XOF"}, "GRC": {"slug": "gr", "weight": 0, "name": "Greece", "adolescent": true, "ratingsbody": "PEGI", "mcc": 202, "id": 17, "special": false, "default_currency": "EUR"}, "ITA": {"slug": "it", "weight": 0, "name": "Italy", "adolescent": true, "ratingsbody": "PEGI", "mcc": 222, "id": 22, "special": false, "default_currency": "EUR"}, "JPN": {"slug": "jp", "weight": 0, "name": "Japan", "adolescent": true, "mcc": 440, "id": 33, "special": false, "default_currency": "JPY"}, "ARG": {"slug": "ar", "weight": 0, "name": "Argentina", "adolescent": true, "ratingsbody": "ESRB", "mcc": 722, "id": 20, "special": false, "default_currency": "ARS"}, "IND": {"slug": "in", "name": "India", "adolescent": true, "ratingsbody": null, "low_memory": true, "mcc": 405, "id": 32, "weight": 0, "default_currency": "INR"}, "CZE": {"slug": "cz", "weight": 0, "name": "Czech Republic", "adolescent": true, "mcc": 230, "id": 34, "special": false, "default_currency": "CZK"}}, "COUNTRIES": ["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "KOR", "KOS", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SCG", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"]};
}));
