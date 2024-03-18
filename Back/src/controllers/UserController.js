
const fs =require('fs')
const getUsersController =  (req,res) => {
    fs.readFile('users.json', 'utf8',  (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        try {
            // Parse the JSON data
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            res.status(500).send('Error parsing JSON');
        }
    });
  }

  const getUserByIDController = (req, res) => {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error reading file');
            return;
        }
        try {
            const { id } = req.params;
            const jsonData = JSON.parse(data);
            let userById = jsonData.filter(e => e.id == id);
            if (userById.length) {
                res.json(userById);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send('Error processing request');
        }
    });
};

const deleteUserController = (req,res)=>{
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error reading file');
            return;
        }
        try {
            const {id} = req.params
            const jsonData = JSON.parse(data)
            let userById = jsonData.filter(e=>e.id == id)
                if(userById.length){
                    delete(userById)
                    res.json('Usuer deleted')
                }else{
                    res.status(404).send('User not found')
                }
        } catch (error) {
            res.status(500).send('Error processing request');

        }
    })
    }


  module.exports= {getUsersController, getUserByIDController,deleteUserController}