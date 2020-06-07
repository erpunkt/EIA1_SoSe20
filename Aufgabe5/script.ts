/*GESAMTWERTE*/
var africaAbsolute: number = 1028 + 1041.9 + 1072.1 + 1073.7 + 1107.1 + 1134.4 + 1167.1 + 1174.5 + 1192.1 + 1207 + 1235.5;
var southamericaAbsolute: number = 1132.6 + 1093.1 + 1164.2 + 1215.5 + 1262 + 1308.9 + 1331.3 + 1321.7 + 1294.7 + 1279.2 + 1261.5;
var europeAbsolute: number = 4965.7 + 4616.4 + 4705.8 + 4615.2 + 4541.5 + 4436.9 + 4202 + 4191.6 + 4247.3 + 4278.7 + 4209.3;
var northamericaAbsolute: number = 6600.4 + 6139.9 + 6375.8 + 6262.8 + 5998.9 + 6167 + 6268.9 + 6048.7 + 5938.3 + 5920.5 + 6035.6;
var asiaAbsolute: number = 12954.7 + 13246.6 + 13986.8 + 14860.1 + 15308.8 + 15660.2 + 15787.7 + 15877 + 15984 + 16274.3 + 16274.1;
var australiaAbsolute: number = 1993 + 1875.7 + 1939.1 + 2035.2 + 2063.2 + 2014.7 + 2027.6 + 1986.8 + 1997.4 + 2001.3 + 2100.5;
var worldAbsolute: number = africaAbsolute + southamericaAbsolute + europeAbsolute + northamericaAbsolute + australiaAbsolute + australiaAbsolute ;
/*WERTE08*/
var africa08 = 1028;
var southamerica08 = 1132.6;
var europe08 = 4965.7;
var northamerica08 = 6600.4;
var asia08 = 12954.7;
var australia08 = 1993;
/*Relativ zur Gesamtemission*/
var africaRelative: number = (africaAbsolute / worldAbsolute) * 100;
var southamericaRealtive: number = (southamericaAbsolute / worldAbsolute) * 100;
var europeRelative: number = (europeAbsolute / worldAbsolute) * 100;
var northamericaRelative: number = (northamericaAbsolute / worldAbsolute) * 100;
var asiaRelative: number = (asiaAbsolute / worldAbsolute) * 100;
var australiaRelative: number = (australiaAbsolute / worldAbsolute) * 100;
/*Veränderung 2008 - 2018 in kg*/
var africaGrowthAbsolute: number = 1235.5 - 1028;
var southamericaGrowthAbsolute: number = 1261.5 - 1132.6;
var europeGrowthAbsolute: number = 4209.3 - 4965.7 ;
var northamericaGrowthAbsolute: number = 6035.6 - 6600.4;
var asiaGrowthAbsolute: number = 16274.1 - 12954.7;
var australiaGrowthAbsolute: number = 2100.5 - 1993;
/*Veränderung 2008 -2018 in %*/
var africaGrowth: number = (africaGrowthAbsolute / africa08) * 100;
var southamericaGrowth: number = (southamericaAbsolute / southamerica08) * 100;
var europeGrowth: number = (europeGrowthAbsolute / europe08) * 100;
var northamericaGrowth: number = (northamericaGrowthAbsolute / northamerica08) * 100;
var asiaGrowth: number = (asiaGrowthAbsolute / asia08) * 100;
var australiaGrowth: number = (australiaGrowthAbsolute / australia08) * 100;

console.log("Die Emission von Afrika ist: " + africaAbsolute + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + africaRelative + " %");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + africaGrowth + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " +  africaGrowthAbsolute + " kg CO2");

console.log("Die Emission von Südamerika ist: " + southamericaAbsolute + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + southamericaRealtive + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + southamericaGrowth + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " +  southamericaGrowthAbsolute + "kg CO2");

console.log("Die Emission von Europa ist: " + europeAbsolute + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + europeRelative + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + europeGrowth + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " +  europeGrowthAbsolute + "kg CO2");

console.log("Die Emission von Nordamerika ist: " + northamericaAbsolute + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + northamericaRelative + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + northamericaGrowth + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " +  northamericaGrowthAbsolute + "kg CO2");

console.log("Die Emission von Asien ist: " + asiaAbsolute + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + asiaRelative + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asiaGrowth + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " +  asiaGrowthAbsolute + "kg CO2");

console.log("Die Emission von Australien ist: " + australiaAbsolute + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asutralien damit " + australiaRelative + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + australiaGrowth + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " +  australiaGrowthAbsolute + "kg CO2");