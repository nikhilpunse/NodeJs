const mongoose =  require('mongoose');

// creating new connection and creating db
mongoose.connect('mongodb://localhost:27017/Nikhilpunse')
.then(()=>console.log('connection succesfull...'))
.catch((err)=>console.log(err));

// Schema
// mongoose schema define structure of the document,
// default values , validator etc

const playlistSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        // unique : true,
        // lowercase : true,
        //// uppercase or lowercase will work in inserMany method
        // trim: true,
        // minlength: [2,' min to letters are required'],
        // maxlength: 30,
    },
    ctype : {
        type : String,
        required : true,
        lowercase : true,
        enum : ['frontend', 'backend','database']
    } ,
    // videos : Number ,
    videos : {
        type : Number,
        //custome validation in mongoose
        validate(value){
            if(value < 0){
                throw new Error("video length should not be negative.");
            }
        }
    },
    author : String ,
    active : Boolean ,
    date : {
        type : Date ,
        default : Date.now
    }
})

// A mongoose model is a wrapper of Mongoose schema.
// A Mongoose defines the structure of the document,
// default values, validator . etc.. where as a mongoose model
// provide an interface to database for creating
// quering, updating , deleting records etc

// collection creation
const Playlist = new mongoose.model("Playlist",playlistSchema);

// creating new document 
const createDocument = async ()=>{
    try {
        const reactPlaylist = new Playlist({
            name : "React Js",
            ctype : "FrontEnd" ,
            videos : 80 ,
            author : "Nikhil punse" ,
            active : true ,
           
        })

        const jstPlaylist = new Playlist({
            name : "Javascript",
            ctype : "Front End" ,
            videos :150 ,
            author : "Nikhil punse" ,
            active : true ,
           
        })

        const nodeJsPlaylist = new Playlist({
            name : "Node Js",
            ctype : "Back End" ,
            videos : 20 ,
            author : "Nikhil punse" ,
            active : true ,
           
        })

        const expressPlaylist = new Playlist({
            name : "Express Js",
            ctype : "Back End" ,
            videos : 15 ,
            author : "Nikhil punse" ,
            active : true ,
           
        })

        const mongoPlaylist = new Playlist({
            name : "MongoDb",
            ctype : "Database" ,
            videos : 10 ,
            author : "Nikhil punse" ,
            active : true ,
           
        })

        const mongoosePlaylist = new Playlist({
            name : "mongoose",
            ctype : "Database" ,
            videos : 24 ,
            author : "Nikhil punse" ,
            active : true ,
           
        })
        //saving single document into collection of database
        // const result =await reactPlaylist.save();


        //saving multiple document into collection of db
        const result = Playlist.insertMany([reactPlaylist])

        // , jstPlaylist,
        //      nodeJsPlaylist, expressPlaylist, mongoPlaylist, mongoosePlaylist]);
    

    } catch (error) {
        console.log(error);
    }
}
createDocument();

const getData = async ()=>{
    try {
        // display all data
    // const result = await Playlist.find();
    // console.log(result);

    //display conditional Data
    const result = await Playlist
    .find({ctype :"Back End"})
    .select({_id:0, name:1})
    .limit(1);
    console.log(result);
        
    } catch (error) {
        console.log(error);
    }
    
}
// getData();

//Logical operator in mongoose ($gt,$gte,$lt,$lte,$in,$nin,$or,$and,$not,$nor)

const getLogicalData = async ()=>{
    try {
      
    const result = await Playlist
    // .find({videos : {$gte : 50} })
    // .find({ videos : {$lte : 50} })
    // .find({ ctype: {$in : ['Back End', 'Database']}})
    // .find({$or : [ {ctype : "Back End"},{author : "Nikhil punse"} ]})
    // .find({$and : [ {ctype : "Back End"},{author : "Nikhil punse"} ]})
    // .find({ctype: "Back End"}).countDocuments()
    .find().sort({name : 1})
    // In sort method use 1 for ascending and -1 for decending order
    .select({_id:0, name:1});
    
    console.log(result);
        
    } catch (error) {
        console.log(error);
    }
    
}
// getLogicalData();


// update document
const updateDocument = async (_id)=>{
    try {
        const result = await Playlist.
        findByIdAndUpdate
        // updateOne
        //updateMany
        ({_id}, {
            $set : {name : 'JavaScript'}
        },
        {new : true, useFindAndModify : false});
        console.log(result);
    } catch (error) {
        console.log(error);
    }

}
// updateDocument('62a202cc718b5465ac5714c0');


// delete document operation
const deleteDocument = async (_id)=>{
    const result = await Playlist
    // .deleteOne
    .findByIdAndDelete
    ({_id});
    console.log(result);
}
// deleteDocument("62a47fb7c62081a46943f8ad");