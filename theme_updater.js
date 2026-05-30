const fs = require('fs');

const files = [
  'app/blog/create/page.tsx',
  'app/admin/page.tsx',
  'app/admin/login/page.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Backgrounds
  content = content.replace(/bg-zinc-950\/80/g, 'bg-white');
  content = content.replace(/bg-zinc-950\/50/g, 'bg-slate-50');
  content = content.replace(/bg-zinc-950\/40/g, 'bg-slate-50');
  content = content.replace(/bg-zinc-950/g, 'bg-slate-50');
  content = content.replace(/bg-zinc-900\/60/g, 'bg-white border-slate-200 shadow-sm');
  content = content.replace(/bg-zinc-900\/40/g, 'bg-white');
  content = content.replace(/bg-zinc-900\/20/g, 'bg-slate-100');
  content = content.replace(/bg-zinc-900/g, 'bg-white');
  content = content.replace(/bg-zinc-800/g, 'bg-slate-100');

  // Borders
  content = content.replace(/border-zinc-850\/60/g, 'border-slate-200');
  content = content.replace(/border-zinc-850/g, 'border-slate-200');
  content = content.replace(/border-zinc-800/g, 'border-slate-200');
  content = content.replace(/border-zinc-750/g, 'border-slate-300');
  content = content.replace(/border-zinc-700/g, 'border-slate-300');
  content = content.replace(/divide-zinc-850\/60/g, 'divide-slate-200');

  // Text
  content = content.replace(/text-zinc-100/g, 'text-slate-900');
  content = content.replace(/text-zinc-200/g, 'text-slate-800');
  content = content.replace(/text-zinc-300/g, 'text-slate-700');
  content = content.replace(/text-zinc-350/g, 'text-slate-700');
  content = content.replace(/text-zinc-400/g, 'text-slate-600');
  content = content.replace(/text-zinc-450/g, 'text-slate-500');
  content = content.replace(/text-zinc-500/g, 'text-slate-500');
  content = content.replace(/text-zinc-650/g, 'text-slate-400');
  content = content.replace(/placeholder-zinc-650/g, 'placeholder-slate-400');
  content = content.replace(/placeholder-zinc-600/g, 'placeholder-slate-400');
  
  // Hover states
  content = content.replace(/hover:text-white/g, 'hover:text-brand-purple');
  content = content.replace(/hover:bg-zinc-950\/80/g, 'hover:bg-slate-100');
  content = content.replace(/hover:bg-zinc-900/g, 'hover:bg-slate-50');

  // Text white globally to text-slate-900
  content = content.replace(/text-white/g, 'text-slate-900');
  
  // Restore text-white in buttons and labels that need it
  content = content.replace(/bg-orange-600(.*?)text-slate-900/g, 'bg-orange-600$1text-white');
  content = content.replace(/text-slate-900(.*?)bg-orange-600/g, 'text-white$1bg-orange-600');
  content = content.replace(/bg-brand-purple(.*?)text-slate-900/g, 'bg-brand-purple$1text-white');
  content = content.replace(/text-slate-900(.*?)bg-brand-purple/g, 'text-white$1bg-brand-purple');
  content = content.replace(/bg-rose-500\/10(.*?)text-slate-900/g, 'bg-rose-500/10$1text-rose-500');
  content = content.replace(/bg-emerald-500\/10(.*?)text-slate-900/g, 'bg-emerald-500/10$1text-emerald-500');
  content = content.replace(/bg-orange-600 border border-orange-500 text-slate-900/g, 'bg-orange-600 border border-orange-500 text-white');

  fs.writeFileSync(file, content, 'utf8');
});
console.log('Theme successfully converted to light mode.');
