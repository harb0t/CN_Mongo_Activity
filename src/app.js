// import yargs
const yargs = require("yargs");

// secure password connection to database using .env (dotenv module)
const { connection, client } = require("./db/connection");


// import functions
const { addFilm, listFilms, updateFilm, deleteFilm } = require("./utils");



// async awaits for function before finishing


const app = async ( yargsObj) => {
    const collection = await connection();
    if (yargsObj.add) {
        await addFilm(collection, {title: yargsObj.title, actor: yargsObj.actor,});
            console.log("success, entry added");

    } else if (yargsObj.list) {
        await listFilms (collection)

// UPDATING ENTRY //

    } else if(yargsObj.update){
        await updateFilm(collection,yargsObj.update, {title:yargsObj.title,actor:yargsObj.actor});
        console.log("Entry updated!");


// DELETE

    } else if (yargsObj.delete) {
        await deleteFilm(collection, {title: yargsObj.title});
        console.log("Entry deleted");

    
//WRONG COMMAND

    } else {
        console.log("Incorrect command");
        }
        // closes connection to database
    await client.close();
};

app(yargs.argv);