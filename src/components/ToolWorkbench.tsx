"use client";
import { useState } from "react";
import { countText, convertCase, formatJson, encodeBase64, decodeBase64, generatePassword } from "@/lib/utils";
function CopyButton({ value }: { value: string }) {
  const [copied,setCopied]=useState(false);
  return <button type="button" onClick={async()=>{try{await navigator.clipboard.writeText(value);setCopied(true);setTimeout(()=>setCopied(false),1200)}catch{setCopied(false)}}} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-50">{copied?"Copied":"Copy result"}</button>;
}
export function ToolWorkbench({slug,available}:{slug:string;available:boolean}) {
  const [text,setText]=useState("");
  const [result,setResult]=useState("");
  const [error,setError]=useState("");
  const [mode,setMode]=useState("upper");
  const [length,setLength]=useState(20);
  const [upper,setUpper]=useState(true),[lower,setLower]=useState(true),[numbers,setNumbers]=useState(true),[symbols,setSymbols]=useState(true);
  function run() {
    setError(""); setResult("");
    try {
      if(slug==="word-counter"){setResult(JSON.stringify(countText(text),null,2));return;}
      if(slug==="case-converter"){setResult(convertCase(text,mode));return;}
      if(slug==="json-formatter"){setResult(formatJson(text));return;}
      if(slug==="base64"){setResult(mode==="encode"?encodeBase64(text):decodeBase64(text));return;}
      if(slug==="password-generator"){setResult(generatePassword(length,{upper,lower,numbers,symbols}));return;}
      if(slug==="percentage-calculator"){
        const [a,b]=text.split(",").map(v=>Number(v.trim()));
        if(!text.includes(",")||!Number.isFinite(a)||!Number.isFinite(b))throw new Error("Enter two numbers separated by a comma, for example: 15, 200.");
        setResult(`${a}% of ${b} = ${(a/100*b).toLocaleString()}\n${a} is ${b===0?"undefined":(a/b*100).toLocaleString()+"%"} of ${b}`);return;
      }
      setError("This tool is listed for discovery but is not implemented yet.");
    } catch(e) { setError(e instanceof Error?e.message:"Could not process this input."); }
  }
  if(!available) return <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6"><h2 className="font-semibold">This tool is coming soon</h2><p className="mt-2 text-sm text-amber-900">It is not functional yet. We list it so you can find it when implementation is available.</p></div>;
  const password=slug==="password-generator";
  return <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
    {password?<div className="space-y-5"><div><label htmlFor="length" className="mb-2 block text-sm font-semibold">Password length: {length}</label><input id="length" type="range" min="8" max="128" value={length} onChange={e=>setLength(Number(e.target.value))} className="w-full"/></div><div className="grid gap-3 sm:grid-cols-2">{[[upper,setUpper,"Uppercase letters"],[lower,setLower,"Lowercase letters"],[numbers,setNumbers,"Numbers"],[symbols,setSymbols,"Symbols"]].map(([checked,setter,label])=><label key={String(label)} className="flex items-center gap-2 text-sm"><input type="checkbox" checked={checked as boolean} onChange={e=>(setter as (v:boolean)=>void)(e.target.checked)}/>{label as string}</label>)}</div></div>:<><div className="mb-4 flex flex-wrap items-center justify-between gap-3"><label htmlFor="input" className="text-sm font-semibold">{slug==="percentage-calculator"?"Enter two numbers separated by a comma":slug==="json-formatter"?"JSON input":slug==="base64"?"Text input":"Your text"}</label>{(slug==="case-converter"||slug==="base64")&&<select aria-label="Conversion mode" value={mode} onChange={e=>setMode(e.target.value)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm">{(slug==="case-converter"?[["upper","UPPERCASE"],["lower","lowercase"],["title","Title Case"],["sentence","Sentence case"]]:[["encode","Encode Base64"],["decode","Decode Base64"]]).map(([v,l])=><option key={v} value={v}>{l}</option>)}</select>}</div><textarea id="input" value={text} onChange={e=>setText(e.target.value)} rows={slug==="json-formatter"?10:7} placeholder={slug==="percentage-calculator"?"15, 200":slug==="json-formatter"?'{"hello":"world"}':"Type or paste text here..."} className="w-full resize-y rounded-xl border border-slate-300 bg-slate-50 p-4 font-mono text-sm outline-none focus:border-brand focus:ring-2 focus:ring-indigo-100"/></>}
    <div className="mt-4 flex flex-wrap gap-3"><button type="button" onClick={run} className="rounded-xl bg-brand px-5 py-3 font-semibold text-white hover:bg-indigo-700">{password?"Generate password":"Process"}</button><button type="button" onClick={()=>{setText("");setResult("");setError("");}} className="rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-50">Clear</button></div>
    {slug==="word-counter"&&text.length>0&&<div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">{Object.entries(countText(text)).map(([k,v])=><div key={k} className="rounded-xl bg-slate-50 p-3"><p className="text-xs capitalize text-slate-500">{k.replace(/([A-Z])/g," $1")}</p><p className="text-xl font-bold">{v}</p></div>)}</div>}
    {error&&<p role="alert" className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    {result&&<div className="mt-6"><div className="mb-2 flex items-center justify-between gap-3"><h2 className="font-semibold">Result</h2><CopyButton value={result}/></div><pre className="max-h-[32rem] overflow-auto whitespace-pre-wrap break-words rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">{result}</pre></div>}
    <p className="mt-6 text-xs leading-5 text-slate-500">Input is processed in your browser by this tool. Do not paste sensitive information into third-party websites unless you trust their handling practices.</p>
  </div>;
}