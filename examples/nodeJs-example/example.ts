import fs from "fs";
import { Tajweed } from "../../src";

let string = "۞ ٱللَّهُ نُورُ [h:9421[ٱ][l[ل]سَّمَ[n[ـٰ]و[n[َٲ]"; //
let parseTajweed = new Tajweed();
let parseString = parseTajweed.parse(string, true);

console.log(parseString);
fs.writeFileSync("index.txt", parseString);
