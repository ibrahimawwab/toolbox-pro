import {describe,expect,it} from "vitest"; import {countText,convertCase,formatJson,encodeBase64,decodeBase64} from "./utils";
describe("countText",()=>{it("handles empty input",()=>expect(countText("")).toEqual({words:0,characters:0,charactersNoSpaces:0,sentences:0,paragraphs:0,lines:0}));it("counts words",()=>expect(countText("hello world\n\nsecond line").words).toBe(4));});
describe("convertCase",()=>{it("converts title case",()=>expect(convertCase("hello WORLD","title")).toBe("Hello World"));});
describe("JSON",()=>{it("formats JSON",()=>expect(formatJson('{"a":1}')).toBe('{\n  "a": 1\n}'));it("rejects invalid JSON",()=>expect(()=>formatJson("{")).toThrow());});
describe("Base64",()=>{it("round trips Unicode",()=>expect(decodeBase64(encodeBase64("hello 🌍"))).toBe("hello 🌍"));});