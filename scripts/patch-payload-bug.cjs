// Fix Payload bug: isPublicAdminRoute fails because routeWithoutAdmin has leading /
// "/login".startsWith("login") === false → public routes never detected!
const fs = require('fs');
const f = '/app/node_modules/@payloadcms/next/dist/utilities/isPublicAdminRoute.js';
let content = fs.readFileSync(f, 'utf8');
const old = 'if (routeWithoutAdmin.startsWith(segment))';
const replacement = 'if (routeWithoutAdmin.startsWith("/" + segment) || routeWithoutAdmin.startsWith(segment))';
if (content.includes(replacement)) {
  console.log('Already patched');
} else if (content.includes(old)) {
  content = content.replace(old, replacement);
  fs.writeFileSync(f, content);
  console.log('PATCHED isPublicAdminRoute.js');
} else {
  console.log('Pattern not found!');
  process.exit(1);
}
