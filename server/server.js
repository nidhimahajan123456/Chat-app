const app = require('./app');
const conntectDatabase = require('./config/database');
const dotenv = require('dotenv');


//Setting up config file

const s = dotenv.config({ path: process.cwd() + '/config/.env' });



//Connecting Database
conntectDatabase();



app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})