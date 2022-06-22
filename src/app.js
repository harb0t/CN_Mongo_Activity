const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { addFilm, listFilms, editFilm, deleteFilm } = require("./utils");

// async awaits for function before finishing
const app = async ( yargsObj) => {
    const collection = await connection();
    if (yargsObj.add) {
        await addFilm(collection, {title: yargsObj.title, actor: yargsObj.actor,});
            console.log("success, entry added");

    } else if (yargsObj.list) {
        await listFilms (collection)

// UPDATING ENTRY // Doesn't work :P

} else if (yargsObj.edit) {
    await editFilm(collection,
    {
        title: yargsObj.title,
        actor: yargsObj.actor,
    },
    { $set: { title: yargsObj.title, actor: yargsObj.actor } }
    );

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