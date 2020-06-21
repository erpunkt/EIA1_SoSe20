
/*GESAMTWERTE*/
let africaAbsolute: number = 1028 + 1041.9 + 1072.1 + 1073.7 + 1107.1 + 1134.4 + 1167.1 + 1174.5 + 1192.1 + 1207 + 1235.5;
let southamericaAbsolute: number = 1132.6 + 1093.1 + 1164.2 + 1215.5 + 1262 + 1308.9 + 1331.3 + 1321.7 + 1294.7 + 1279.2 + 1261.5;
let europeAbsolute: number = 4965.7 + 4616.4 + 4705.8 + 4615.2 + 4541.5 + 4436.9 + 4202 + 4191.6 + 4247.3 + 4278.7 + 4209.3;
let northamericaAbsolute: number = 6600.4 + 6139.9 + 6375.8 + 6262.8 + 5998.9 + 6167 + 6268.9 + 6048.7 + 5938.3 + 5920.5 + 6035.6;
let asiaAbsolute: number = 12954.7 + 13246.6 + 13986.8 + 14860.1 + 15308.8 + 15660.2 + 15787.7 + 15877 + 15984 + 16274.3 + 16274.1;
let australiaAbsolute: number = 1993 + 1875.7 + 1939.1 + 2035.2 + 2063.2 + 2014.7 + 2027.6 + 1986.8 + 1997.4 + 2001.3 + 2100.5;
let worldAbsolute: number = africaAbsolute + southamericaAbsolute + europeAbsolute + northamericaAbsolute + australiaAbsolute + australiaAbsolute ;
/*WERTE08*/
let africa08: number = 1028;
let southamerica08: number = 1132.6;
let europe08: number = 4965.7;
let northamerica08: number = 6600.4;
let asia08: number = 12954.7;
let australia08: number = 1993;

/*WERTE18*/
let africa18: number = 1235.5;
let southamerica18: number = 1261.5;
let europe18: number = 4209.3;
let northamerica18: number = 6035.6;
let asia18: number = 16274.1;
let australia18: number = 2100.5;
let world18: number = africa18 + southamerica18 + europe18 + northamerica18 + asia18 + australia18;

/*Relativ zur Gesamtemission*/
let africaRelative: number = (africa18 / world18) * 100;
let southamericaRealtive: number = (southamerica18 / world18) * 100;
let europeRelative: number = (europe18 / world18) * 100;
let northamericaRelative: number = (northamerica18 / world18) * 100;
let asiaRelative: number = (asia18 / world18) * 100;
let australiaRelative: number = (australia18 / world18) * 100;

/*Veränderung 2008 - 2018 in kg*/
let africaGrowthAbsolute: number = africa18 - africa08;
let southamericaGrowthAbsolute: number = southamerica18 - southamerica08;
let europeGrowthAbsolute: number = europe18 - europe08 ;
let northamericaGrowthAbsolute: number = northamerica18 - northamerica08;
let asiaGrowthAbsolute: number = asia18 - asia08;
let australiaGrowthAbsolute: number = australia18 - australia08;

/*Veränderung 2008 -2018 in %*/
let africaGrowth: number = (africaAbsolute / africa08) * 100;
let southamericaGrowth: number = (southamericaAbsolute / southamerica08) * 100;
let europeGrowth: number = (europeGrowthAbsolute / europe08) * 100;
let northamericaGrowth: number = (northamericaGrowthAbsolute / northamerica08) * 100;
let asiaGrowth: number = (asiaGrowthAbsolute / asia08) * 100;
let australiaGrowth: number = (australiaGrowthAbsolute / australia08) * 100;

window.addEventListener("load", function() {
    /*oncklick picture*/
    let africaImg: HTMLElement = <HTMLElement> document.querySelector(".africa");
    africaImg.addEventListener("click", africaFunction);
document.querySelector(".europe").addEventListener("click", europeFunction);
document.querySelector(".northamerica").addEventListener("click", northAmericaFunction);
document.querySelector(".southamerica").addEventListener("click", southAmericaFunction);
document.querySelector(".asia").addEventListener("click", asiaFunction);
document.querySelector(".australia").addEventListener("click", australiaFunction);

   
/*Africa*/
console.log("Die Emission von Afrika ist: " + africa18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + africaRelative + " %");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + africaGrowth + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " +  africaGrowthAbsolute + " kg CO2");

function africaFunction(): void  {
    let titleRegion: HTMLElement = <HTMLElement> document.querySelector("#titleRegion");
    titleRegion.innerHTML = "Africa";
document.querySelector("#headlineEmAbsolute").innerHTML = africa18 + " kg CO2";
document.querySelector("#textEmAbsolute").innerHTML = "Emission absolute of Africa in 2018";
document.querySelector("#headlineRelative").innerHTML = africaRelative + " %";
document.querySelector("#headlineGrowth").innerHTML = africaGrowth + " %";
document.querySelector("#headlineGrowthAbsolute").innerHTML = africaGrowthAbsolute;
document.querySelector(".chart").setAttribute("style", "height: 3.754%");
}

/*SouthAmerica*/
console.log("Die Emission von Südamerika ist: " + southamericaAbsolute + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + southamericaRealtive + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + southamericaGrowth + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " +  southamericaGrowthAbsolute + "kg CO2");

function southAmericaFunction(): void {
    document.querySelector("#titleRegion").innerHTML = "South America";
    document.querySelector("#headlineEmAbsolute").innerHTML = southamerica18 + " kg CO2";
    document.querySelector("#textEmAbsolute").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#headlineRelative").innerHTML = southamericaRealtive + " %";
    document.querySelector("#headlineGrowth").innerHTML = southamericaGrowth + " %";
    document.querySelector("#headlineGrowthAbsolute").innerHTML = southamericaGrowthAbsolute;
    document.querySelector(".chart").setAttribute("style", "height: 4.126%");
    }

/*Europe*/
console.log("Die Emission von Europa ist: " + europeAbsolute + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + europeRelative + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + europeGrowth + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " +  europeGrowthAbsolute + "kg CO2");

function europeFunction() {
    document.querySelector("#titleRegion").innerHTML = "Europe";
    document.querySelector("#headlineEmAbsolute").innerHTML = europe18 + " kg CO2";
    document.querySelector("#textEmAbsolute").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#headlineRelative").innerHTML = europeRelative + " %";
    document.querySelector("#headlineGrowth").innerHTML = europeGrowth + " %";
    document.querySelector("#headlineGrowthAbsolute").innerHTML = europeGrowthAbsolute;
    document.querySelector(".chart").setAttribute("style", "height: 8.882%");
    }

/*NorthAmerica*/
console.log("Die Emission von Nordamerika ist: " + northamericaAbsolute + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + northamericaRelative + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + northamericaGrowth + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " +  northamericaGrowthAbsolute + "kg CO2");

function northAmericaFunction() {
    document.querySelector("#titleRegion").innerHTML = "North America";
    document.querySelector("#headlineEmAbsolute").innerHTML = northamerica18 + " kg CO2";
    document.querySelector("#textEmAbsolute").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#headlineRelative").innerHTML = northamericaRelative + " %";
    document.querySelector("#headlineGrowth").innerHTML = northamericaGrowth + " %";
    document.querySelector("#headlineGrowthAbsolute").innerHTML = northamericaGrowthAbsolute;
    document.querySelector(".chart").setAttribute("style", "height: 12.735%");
    }

/*Asia*/
console.log("Die Emission von Asien ist: " + asiaAbsolute + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + asiaRelative + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asiaGrowth + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " +  asiaGrowthAbsolute + "kg CO2");

function asiaFunction() {
    document.querySelector("#titleRegion").innerHTML = "Asia";
    document.querySelector("#headlineEmAbsolute").innerHTML = asia18 + " kg CO2";
    document.querySelector("#textEmAbsolute").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#headlineRelative").innerHTML = asiaRelative + " %";
    document.querySelector("#headlineGrowth").innerHTML = asiaGrowth + " %";
    document.querySelector("#headlineGrowthAbsolute").innerHTML = asiaGrowthAbsolute;
    document.querySelector(".chart").setAttribute("style", "height: 50.197%");
    }

/*Australia*/
console.log("Die Emission von Australien ist: " + australiaAbsolute + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asutralien damit " + australiaRelative + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + australiaGrowth + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " +  australiaGrowthAbsolute + "kg CO2");

function australiaFunction() {
    document.querySelector("#titleRegion").innerHTML = "Australia";
    document.querySelector("#headlineEmAbsolute").innerHTML = australia18 + " kg CO2";
    document.querySelector("#textEmAbsolute").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#headlineRelative").innerHTML = australiaRelative + " %";
    document.querySelector("#headlineGrowth").innerHTML = australiaGrowth + " %";
    document.querySelector("#headlineGrowthAbsolute").innerHTML = australiaGrowthAbsolute;
    document.querySelector(".chart").setAttribute("style", "height: 6.654%");
    }
});
    
    
