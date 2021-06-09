
//require("dotenv").config({ path: "./config.env" });


//HANDLE UNCAUGHT EXCEPTIONS -synchronous errors such as console.log(undefinedVariable) - at top of code so that all errors that come after are caught (otherwise errors before this will be missed/uncaught!)
//Listen to uncaughtException event
process.on("uncaughtException", (error) => {
    console.log("UNCAUGHT EXCEPTION!..server closing down.");
    console.log(error.name, error.message); //Catch and log the error name and message
    process.exit(1);
});

const app = require('./app');

const port = process.env.port || 3000;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

//HANDLE UNHANDLED PROMISE REJECTIONS/asynchronous errors - Deal with unhandled promise rejections such as a failure to connect to the database etc
//subscribe to the unhandledRejection event listener
process.on("unhandledRejection", (error) => {
    console.log("UNHANDLED REJECTION!..server closing down.");
    console.log(error.name, error.message); //Catch and log the error name and message
    server.close(() => {
        //Server.close gives the server time to finish all the requests that are still processing/pending before closing
        process.exit(1); //Kill server with error code 1(uncaught exception)
    });
});
