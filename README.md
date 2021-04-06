# Sample Blog Application

Deployed here: https://anushblogs.netlify.app/

(Note: Changes aren't persisted between calls because sample json server is being used)
https://github.com/anushpoudel/anush-blogs-json-server

run this after npm start when viewed locally: npx json-server --watch data/db.json --port 8000

change server call path to: http://localhost:8000/blogs in Create.jsx, Home.jsx 
change server call path to: http://localhost:8000/blogs/ in BlogDetails.jsx
