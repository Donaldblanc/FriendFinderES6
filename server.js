import express from 'express';
import data from './app/data/friends';
import bodyparser from 'body-parser';
import path from 'path';
import  apiRoutes from './app/routing/apiRoutes';
import htmlRoutes from './app/routing/htmlRoutes';


//require("./app/routing/apiRoutes")(app); 



const app = express();
const PORT = process.env.PORT || 3000;



apiRoutes(app);
htmlRoutes(app);
// app.get('/', (req,res) =>{
//     res.send(` A route on the / route on port ${PORT} `);

// });

app.listen(PORT, () =>{ 
 console.log(`Server listening on: http://localhost:${PORT} `);
 console.log(data);

});