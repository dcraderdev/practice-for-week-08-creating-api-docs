// Determine an endpoint for each of the following use cases. Don't worry about
// getting it perfect as this is just practice!

// API endpoints use similar routes to a traditional web server's RESTful routes.
// The major difference between API endpoints those of a traditional web server is
// that API endpoints can use all HTTP verbs (`GET`, `POST`, `PUT`, `PATCH`,
// `DELETE`).

// For example, to edit a specific post, the API endpoint could be
// `PATCH /posts/:postId`



const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });


  app.get('/', (req, res) => {
    const data = {
      products: Object.values(products),
      categories
    };
  
    return res.render('products', data);
  });

// - Get all the posts
if(req.method === 'GET' && req.url === '/posts') {
  res.statusCode = 200;
  res.setHeader = ('Content-Type', 'application/json');
  res.write(JSON.stringify(posts));
  return res.end()

}

// - Create a new post
  if(req.method === 'POST' && req.url === '/posts') {
    res.statusCode = 302;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(posts));
    return res.end();
  }
// - Edit a post

// - Create a new user
// - Get the comments for a post
// - Create a comment for a post
// - Edit a comment for a post
// - Delete a comment for a post
// - Add a like for a post
// - Remove a like for a post
// - Get all the posts of a user
// - Submit a search on posts





  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify("Endpoint not found"));
  return res.end();
})


const port = 5005;
server.listen(port, () => console.log('Server is listening on port', port));








// req.on("end", () => {
//   // Parse the body of the request as JSON if Content-Type header is
//     // application/json
//   // Parse the body of the request as x-www-form-urlencoded if Content-Type
//     // header is x-www-form-urlencoded
//   if (reqBody) {
//     req.body = reqBody
//       .split("&")
//       .map((keyValuePair) => keyValuePair.split("="))
//       .map(([key, value]) => [key, value.replace(/\+/g, " ")])
//       .map(([key, value]) => [key, decodeURIComponent(value)])
//       .reduce((acc, [key, value]) => {
//         acc[key] = value;
//         return acc;
//       }, {});

//     // Log the body of the request to the terminal
//     console.log(req.body);
//   }

//   const resBody = {
//     "Hello": "World!"
//   };
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/JSON');
//   res.write(JSON.stringify(resBody))
//   console.log(JSON.stringify(resBody));
//   res.end()
//   // Return the `resBody` object as JSON in the body of the response
// });
// });