export const unitGroups={
 Length:{m:1,km:1000,cm:.01,mm:.001,mi:1609.344,yd:.9144,ft:.3048,in:.0254},
 Mass:{kg:1,g:.001,mg:.000001,lb:.45359237,oz:.028349523125},
 Data:{B:1,KB:1000,MB:1_000_000,GB:1_000_000_000,KiB:1024,MiB:1_048_576,GiB:1_073_741_824}
} as const;
export type UnitGroup=keyof typeof unitGroups;
export function convertUnit(value:number,group:UnitGroup,from:string,to:string){if(!Number.isFinite(value))throw new Error("Enter a valid number.");if(group==="Length"||group==="Mass"||group==="Data"){const units=unitGroups[group] as Record<string,number>;if(!(from in units)||!(to in units))throw new Error("Choose valid units.");return value*units[from]/units[to];}throw new Error("Unsupported unit group.");}
export function convertTemperature(value:number,from:string,to:string){if(!Number.isFinite(value))throw new Error("Enter a valid temperature.");const c=from==="F"?(value-32)*5/9:from==="K"?value-273.15:value;return to==="F"?c*9/5+32:to==="K"?c+273.15:c;}