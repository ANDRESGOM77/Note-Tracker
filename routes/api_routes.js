const router = require('express').Router();
const fs = require('fs')
const {v4: uuidv4} = require('uuid');

router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data)=> {
    res.json(JSON.parse(data))
  });
   
});

router.post("/notes", (req, res) => {
  fs.readFile("db/db.json",'utf8', (err, data)=> {

    const dbJson = JSON.parse(data);
    
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };

    dbJson.push(newNote);

    fs.writeFile("db/db.json", JSON.stringify(dbJson), (err, result)=>{
      res.json('file written');
  
    });
  })

});
router.delete('/notes/:id', (req, res) => {
  
  fs.readFile("db/db.json", 'utf8', (err, data)=>{
    
    const dataJSON = JSON.parse(data);
    
    const newNotes = dataJSON.filter((note) =>  note.id !== req.params.id);

    fs.writeFile("db/db.json", JSON.stringify(newNotes), (err, result)=> {

      res.json("Note deleted.");
    });

  })
  


});

module.exports = router; 
