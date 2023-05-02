import http from 'http';
import fs from 'fs';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const extension = file.mimetype.split('/')[1]
    cb(null, "pic" + '.' + "jpg")
  }
})

const upload = multer({ storage: storage });

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
  } 
  else if (req.url.startsWith('/foo')) {
    if (req.method === 'GET') {
      const query = new URL(req.url, `http://${req.headers.host}`).searchParams;
      const bar = query.get('bar');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Hello, ${bar}\n`);
    } 
    else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const { bar } = JSON.parse(body);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello, ${bar}\n`);
      });
    }
  } 
  else if (req.url === '/pic/upload' && req.method === 'POST') {
    // let body = [];
    // req.on('data', chunk => {
    //   body.push(chunk);
    // }).on('end', () => {
    //   body = Buffer.concat(body);
    //   const filename = `pic.jpg`;
    //   fs.writeFile(filename, body, err => {
    //     if (err) throw err;
    //     console.log(`File ${filename} uploaded successfully!`);
    //     res.writeHead(200, { 'Content-Type': 'text/plain' });
    //     res.end(`File ${filename} uploaded successfully!\n`);
    //   });
    // });
    upload.single('image')(req, res, (err) => {
      if (err) {
        res.writeHead(500);
        res.end(err.message);
        return;
      }
      const filename = 'pic.jpg';
      console.log(`File ${filename} uploaded successfully!`);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`File ${filename} uploaded successfully!\n`);
    });
  } 
  else if (req.url === '/pic/show' && req.method === 'GET') {
    fs.readFile('uploads/pic.jpg', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(data);
    });
  } 
  else if (req.url === '/pic/download' && req.method === 'GET') {
    fs.readFile('uploads/pic.jpg', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
        return;
      }
      res.setHeader('Content-disposition', 'attachment; filename=pic.jpg');
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(data);
    });
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});