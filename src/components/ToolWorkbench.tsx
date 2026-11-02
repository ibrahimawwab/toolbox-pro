"use client";

import { useState } from "react";
import { countText, convertCase, formatJson, encodeBase64, decodeBase64, generatePassword } from "@/lib/utils";
import { convertTemperature, convertUnit, type UnitGroup } from "@/lib/units";
import { ToolExtras } from "@/components/ToolExtras";

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return <button type="button" onClick={async () => {
    try { await navigator.clipboard.writeText(value); setCopied(true); window.setTimeout(() => setCopied(false), 1200); }
    catch { setCopied(false); }
  }} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-50">{copied ? "Copied" : "Copy result"}</button>;
}

export function ToolWorkbench({ slug, available }: { slug: string; available: boolean }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState("upper");
  const [length, setLength] = useState(20);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [unitGroup, setUnitGroup] = useState<UnitGroup>("Length");
  const [fromUnit, setFromUnit] = useState("km");
  const [toUnit, setToUnit] = useState("m");
  const [temperatureFrom, setTemperatureFrom] = useState("C");
  const [temperatureTo, setTemperatureTo] = useState("F");

  function run() {
    setError(""); setResult("");
    try {
      if (slug === "word-counter") { setResult(JSON.stringify(countText(text), null, 2)); return; }
      if (slug === "case-converter") { setResult(convertCase(text, mode)); return; }
      if (slug === "json-formatter") { setResult(formatJson(text)); return; }
      if (slug === "base64") { setResult(mode === "encode" ? encodeBase64(text) : decodeBase64(text)); return; }
      if (slug === "password-generator") { setResult(generatePassword(length, { upper, lower, numbers, symbols })); return; }
      if (slug === "percentage-calculator") {
        const [a, b] = text.split(",").map(v => Number(v.trim()));
        if (!text.includes(",") || !Number.isFinite(a) || !Number.isFinite(b)) throw new Error("Enter two numbers separated by a comma, for example: 15, 200.");
        setResult(`${a}% of ${b} = ${(a / 100 * b).toLocaleString()}\n${a} is ${b === 0 ? "undefined" : (a / b * 100).toLocaleString() + "%"} of ${b}`); return;
      }
      if (slug === "unit-converter") {
        const value = Number(text.trim());
        if (!text.trim() || !Number.isFinite(value)) throw new Error("Enter a valid number.");
        const converted = unitGroup === ("Temperature" as UnitGroup)
          ? convertTemperature(value, temperatureFrom, temperatureTo)
          : convertUnit(value, unitGroup, fromUnit, toUnit);
        setResult(`${value} ${unitGroup === ("Temperature" as UnitGroup) ? temperatureFrom : fromUnit} = ${Number(converted.toPrecision(12))} ${unitGroup === ("Temperature" as UnitGroup) ? temperatureTo : toUnit}`);
        return;
      }
      setError("This tool is not implemented yet.");
    } catch (e) { setError(e instanceof Error ? e.message : "Could not process this input."); }
  }

  if (!available) return <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold">This tool is coming soon</h2><p className="mt-2 text-sm text-amber-900">It is not functional yet.</p></div>;
  if (["qr-code", "image-compressor", "pdf-merge"].includes(slug)) return <ToolExtras slug={slug} />;

  const password = slug === "password-generator";
  const caseTool = slug === "case-converter";
  const base64Tool = slug === "base64";
  const unitTool = slug === "unit-converter";
  const choices = unitGroup === "Length"
    ? [["m","Meters"],["km","Kilometers"],["cm","Centimeters"],["mm","Millimeters"],["mi","Miles"],["yd","Yards"],["ft","Feet"],["in","Inches"]]
    : unitGroup === "Mass"
      ? [["kg","Kilograms"],["g","Grams"],["mg","Milligrams"],["lb","Pounds"],["oz","Ounces"]]
      : [["B","Bytes"],["KB","Kilobytes"],["MB","Megabytes"],["GB","Gigabytes"],["KiB","Kibibytes"],["MiB","Mebibytes"],["GiB","Gibibytes"]];
  const options: { key: string; label: string; checked: boolean; change: (value: boolean) => void }[] = [
    { key: "upper", label: "Uppercase letters", checked: upper, change: setUpper },
    { key: "lower", label: "Lowercase letters", checked: lower, change: setLower },
    { key: "numbers", label: "Numbers", checked: numbers, change: setNumbers },
    { key: "symbols", label: "Symbols", checked: symbols, change: setSymbols },
  ];

  return <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
    {password ? <div className="space-y-5">
      <div><label htmlFor="length" className="mb-2 block text-sm font-semibold">Password length: {length}</label><input id="length" type="range" min="8" max="128" value={length} onChange={e => setLength(Number(e.target.value))} className="w-full" /></div>
      <div className="grid gap-3 sm:grid-cols-2">{options.map(option => <label key={option.key} className="flex items-center gap-2 text-sm"><input type="checkbox" checked={option.checked} onChange={e => option.change(e.target.checked)} />{option.label}</label>)}</div>
    </div> : unitTool ? <div className="space-y-4">
      <label className="block text-sm font-semibold" htmlFor="unit-group">Measurement</label>
      <select id="unit-group" value={unitGroup} onChange={e => { const group = e.target.value as UnitGroup; setUnitGroup(group); setFromUnit(group === "Length" ? "km" : group === "Mass" ? "kg" : "MB"); setToUnit(group === "Length" ? "m" : group === "Mass" ? "lb" : "KB"); }} className="w-full rounded-lg border border-slate-300 p-3">
        <option value="Length">Length</option><option value="Mass">Mass</option><option value="Data">Digital storage</option><option value={"Temperature" as UnitGroup}>Temperature</option>
      </select>
      <label htmlFor="input" className="block text-sm font-semibold">Value</label><input id="input" inputMode="decimal" value={text} onChange={e => setText(e.target.value)} placeholder="Enter a number" className="w-full rounded-xl border border-slate-300 bg-slate-50 p-3" />
      {unitGroup === ("Temperature" as UnitGroup) ? <div className="grid grid-cols-2 gap-3"><select aria-label="Convert from" value={temperatureFrom} onChange={e => setTemperatureFrom(e.target.value)} className="rounded-lg border p-3"><option value="C">Celsius</option><option value="F">Fahrenheit</option><option value="K">Kelvin</option></select><select aria-label="Convert to" value={temperatureTo} onChange={e => setTemperatureTo(e.target.value)} className="rounded-lg border p-3"><option value="C">Celsius</option><option value="F">Fahrenheit</option><option value="K">Kelvin</option></select></div> : <div className="grid grid-cols-2 gap-3"><select aria-label="Convert from" value={fromUnit} onChange={e => setFromUnit(e.target.value)} className="rounded-lg border p-3">{choices.map(([v,l]) => <option key={v} value={v}>{l}</option>)}</select><select aria-label="Convert to" value={toUnit} onChange={e => setToUnit(e.target.value)} className="rounded-lg border p-3">{choices.map(([v,l]) => <option key={v} value={v}>{l}</option>)}</select></div>}
    </div> : <>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><label htmlFor="input" className="text-sm font-semibold">{slug === "percentage-calculator" ? "Enter two numbers separated by a comma" : slug === "json-formatter" ? "JSON input" : base64Tool ? "Text input" : "Your text"}</label>
      {(caseTool || base64Tool) && <select aria-label="Conversion mode" value={mode} onChange={e => setMode(e.target.value)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm">{(caseTool ? [["upper","UPPERCASE"],["lower","lowercase"],["title","Title Case"],["sentence","Sentence case"]] : [["encode","Encode Base64"],["decode","Decode Base64"]]).map(([v,l]) => <option key={v} value={v}>{l}</option>)}</select>}</div>
      <textarea id="input" value={text} onChange={e => setText(e.target.value)} rows={slug === "json-formatter" ? 10 : 7} placeholder={slug === "percentage-calculator" ? "15, 200" : slug === "json-formatter" ? '{"hello":"world"}' : "Type or paste text here..."} className="w-full resize-y rounded-xl border border-slate-300 bg-slate-50 p-4 font-mono text-sm outline-none focus:border-brand focus:ring-2 focus:ring-indigo-100" />
    </>}
    <div className="mt-4 flex flex-wrap gap-3"><button type="button" onClick={run} className="rounded-xl bg-brand px-5 py-3 font-semibold text-white hover:bg-indigo-700">{password ? "Generate password" : "Process"}</button><button type="button" onClick={() => { setText(""); setResult(""); setError(""); }} className="rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-50">Clear</button></div>
    {slug === "word-counter" && text.length > 0 && <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">{Object.entries(countText(text)).map(([key,value]) => <div key={key} className="rounded-xl bg-slate-50 p-3"><p className="text-xs capitalize text-slate-500">{key.replace(/([A-Z])/g, " $1")}</p><p className="text-xl font-bold">{value}</p></div>)}</div>}
    {error && <p role="alert" className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    {result && <div className="mt-6"><div className="mb-2 flex items-center justify-between gap-3"><h2 className="font-semibold">Result</h2><CopyButton value={result} /></div><pre className="max-h-[32rem] overflow-auto whitespace-pre-wrap break-words rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">{result}</pre></div>}
    <p className="mt-6 text-xs leading-5 text-slate-500">Input is processed in your browser by this tool. Do not paste sensitive information into third-party websites unless you trust their handling practices.</p>
  </div>;
}