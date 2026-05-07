const fs = require('fs');

let content = fs.readFileSync('app/_components/HomePageClient.tsx', 'utf8');

// Replace backgrounds
content = content.replace(/bg-\[#121213\]/g, 'bg-surface-2');
content = content.replace(/bg-white\/5/g, 'bg-surface/60');
content = content.replace(/bg-white\/4/g, 'bg-surface/40');
content = content.replace(/bg-white\/9/g, 'bg-surface');
content = content.replace(/bg-\[#C9A227\]/g, 'bg-gold');
content = content.replace(/bg-\[#B8921F\]/g, 'bg-gold-2');

// Replace text colors
content = content.replace(/text-\[#F6F2E9\]/g, 'text-snow');
content = content.replace(/text-\[#D0B26A\]/g, 'text-gold');
content = content.replace(/text-\[#D7B661\]/g, 'text-gold');

// Replace borders
content = content.replace(/border-white\/12/g, 'border-border');
content = content.replace(/border-white\/10/g, 'border-border');
content = content.replace(/border-white\/16/g, 'border-border');
content = content.replace(/border-white\/20/g, 'border-border');

// Replace text opacity (some text-snow/72 was used for dark mode, text-snow/80 is better for light)
content = content.replace(/text-snow\/72/g, 'text-snow/80');

fs.writeFileSync('app/_components/HomePageClient.tsx', content, 'utf8');
console.log('Fixed colors in HomePageClient');
