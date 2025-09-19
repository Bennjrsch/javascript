const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const viewFile = path.join(rootDir, "view.html");

let links = "";

// Loop all items in rootDir
fs.readdirSync(rootDir, { withFileTypes: true }).forEach(dir => {
  if (dir.isDirectory()) {
    const folderPath = path.join(rootDir, dir.name);

    fs.readdirSync(folderPath).forEach(file => {
      if (file.endsWith(".html")) {
        const relPath = path.join(dir.name, file);
        links += `<li><a href="${relPath}">${relPath}</a></li>\n`;
      }
    });

    links += "\n<p></p>\n";
  }
});

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>All Tasks</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 1.5;
    }
    
  </style>
</head>
<body>
  <h1>Task Index</h1>
  <ul>
    ${links}
  </ul>
</body>
</html>
`;

fs.writeFileSync(viewFile, html, "utf8");
console.log("view.html generated!");