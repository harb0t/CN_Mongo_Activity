// functions /// 
// async due to working with database


// add film function //

exports.addFilm = async (collection, filmObj) => {
    try {
        // add database entry using built in method of insertOne and passing the filmObj entered by the user
        const addEntry = await collection.insertOne(filmObj);
        console.log(addEntry);
    } catch (error) {
        console.log(error);
    }
};

// list films function // 

exports.listFilms = async (collection) => {
    try {
        const filmList = await collection.find().toArray();
        console.log(filmList);
    } catch (error) {
        console.log(error)
    }
};

// Update film entry function // 


exports.updateFilm = async (collection, oldTitle, newFilm) => {
    try{
        const checkTitle = {title:oldTitle};
        const updateTo = {$set:{title:newFilm.title,actor:newFilm.actor}};
        const filmUpdate = await collection.updateOne(checkTitle,updateTo);
        console.log(filmUpdate);
    }
    catch (error){
        console.log(error);
    }
};


// Delete film function // 

exports.deleteFilm = async (collection, filmObj) => {
    try {
    const deleteFilm = await collection.deleteOne({ title: filmObj.title});
    console.log(deleteFilm);
    } catch (error) {
    console.log(error);
    }
};



// notes:
// keys on the left /// values on right