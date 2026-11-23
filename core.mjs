export function distance(a,b){const rad=n=>n*Math.PI/180;const h=Math.sin(rad(b[3]-a[3])/2)**2+Math.cos(rad(a[3]))*Math.cos(rad(b[3]))*Math.sin(rad(b[4]-a[4])/2)**2;return Math.round(3440.065*2*Math.asin(Math.sqrt(Math.max(0,Math.min(1,h)))));}
export function band(a,b){const nm=distance(a,b);return {nm,min:Math.max(0,nm-1),max:nm+1};}
export function matches(records,query){return records.filter(a=>a[5].some(c=>c.startsWith(query))).sort((a,b)=>Number(b[5].includes(query))-Number(a[5].includes(query))||Number(b[0]===query)-Number(a[0]===query)||a[7]-b[7]||a[0].localeCompare(b[0]));}

