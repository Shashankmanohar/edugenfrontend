const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'app/components/ContactForm.tsx',
  'app/blog/page.tsx',
  'app/blog/create/page.tsx',
  'app/admissions/page.tsx',
  'app/admin/page.tsx',
  'app/admin/login/page.tsx'
];

const apiFallback = '${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}';

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace double-quoted URL
    content = content.replace(/"http:\/\/localhost:5000\/api/g, '`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api');
    // We also need to fix closing quotes since we used a template literal starting with backtick
    content = content.replace(/process\.env\.NEXT_PUBLIC_API_URL \|\| "http:\/\/localhost:5000"}\/api([^"]*)"/g, 'process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api$1`');

    // Replace backtick-quoted URL (e.g. for dynamic paths)
    // Currently, there's `http://localhost:5000/api/enquiries/${enquiryId}/status`
    content = content.replace(/`http:\/\/localhost:5000\/api/g, '`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + file);
  }
});
