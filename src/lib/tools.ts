export type Tool = {
  slug: string; name: string; description: string; category: string; icon: string; tags: string[];
  status: "available" | "coming-soon";
};
export const tools: Tool[] = [
  { slug:"word-counter", name:"Word Counter", description:"Count words, characters, sentences and paragraphs as you write.", category:"Text", icon:"Aa", tags:["words","characters","writing"], status:"available" },
  { slug:"case-converter", name:"Case Converter", description:"Convert text to uppercase, lowercase, title case or sentence case.", category:"Text", icon:"Aa", tags:["text","uppercase","lowercase"], status:"available" },
  { slug:"json-formatter", name:"JSON Formatter", description:"Format and validate JSON with readable indentation and clear errors.", category:"Developer", icon:"{}", tags:["json","format","validate"], status:"available" },
  { slug:"base64", name:"Base64 Encoder / Decoder", description:"Encode text to Base64 or decode Base64 back to text in your browser.", category:"Developer", icon:"64", tags:["base64","encode","decode"], status:"available" },
  { slug:"password-generator", name:"Password Generator", description:"Generate a random password locally with configurable length and character sets.", category:"Security", icon:"••", tags:["password","random","security"], status:"available" },
  { slug:"percentage-calculator", name:"Percentage Calculator", description:"Calculate percentages, percentage changes and values from a percentage.", category:"Calculators", icon:"%", tags:["math","percentage"], status:"available" },
  { slug:"qr-code", name:"QR Code Generator", description:"Create QR codes for links and text, with a downloadable image.", category:"QR & Codes", icon:"▦", tags:["qr","code","url"], status:"coming-soon" },
  { slug:"image-compressor", name:"Image Compressor", description:"Reduce image file size using browser-based image processing.", category:"Images", icon:"▧", tags:["image","compress","photo"], status:"coming-soon" },
  { slug:"pdf-merge", name:"PDF Merger", description:"Combine multiple PDF documents in a simple workflow.", category:"PDF", icon:"PDF", tags:["pdf","merge","documents"], status:"coming-soon" },
  { slug:"unit-converter", name:"Unit Converter", description:"Convert common length, mass, temperature and digital storage units.", category:"Calculators", icon:"↔", tags:["units","convert","measurement"], status:"coming-soon" }
];
export const categories = [
  { name:"PDF", description:"Organize and convert documents", icon:"▤" },
  { name:"Images", description:"Resize, convert and optimize images", icon:"▧" },
  { name:"Text", description:"Clean, compare and transform text", icon:"Aa" },
  { name:"Developer", description:"Format, encode and inspect data", icon:"{}" },
  { name:"Security", description:"Privacy-conscious security utilities", icon:"◇" },
  { name:"QR & Codes", description:"Create useful scannable codes", icon:"▦" },
  { name:"Calculators", description:"Quick everyday calculations", icon:"∑" }
];