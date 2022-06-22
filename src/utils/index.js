// functions / async due to working with database
exports.addFilm = async (collection, filmObj) => {
    try {
        // add database entry using built in method of insertOne and passing the filmObj entered by the user
        const addEntry = await collection.insertOne(filmObj);
        console.log(addEntry);
    } catch (error) {
        console.log(error);
    }
};

// Update film entry


exports.listFilms = async (collection) => {
    try {
        const filmList = await collection.find().toArray();
        console.log(filmList);
    } catch (error) {
        console.log(error)
    }
};

// Update film entry // Doesn't work :P

exports.editFilm = async (collection, filmObj, edit) => {
    try {
    const editEntry = await collection.updateOne(
        { filmObj },
        { $set: { edit } }
    );
    console.log(editEntry);
    } catch (error) {
    console.log(error);
    }
};

// Delete film function

exports.deleteFilm = async (collection, movieObj) => {
    try {
    const deleteFilm = await collection.deleteOne({ title: movieObj.title});
    console.log(deleteFilm);
    } catch (error) {
    console.log(error);
    }
};