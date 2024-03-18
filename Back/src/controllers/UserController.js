
const fs =require('fs')
const getUsersController = async (req,res) => {
    fs.readFile('users.json', 'utf8', async (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading file');
            return;
        }
        try {
            // Parse the JSON data
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error parsing JSON');
        }
    });
  }
  module.exports= {getUsersController}