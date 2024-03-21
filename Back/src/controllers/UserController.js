const fs =require('fs');
const getUsersController =  (req,res) => {
    fs.readFile('users.json', 'utf8',  (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        try {
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

const deleteUserController = (req, res) => {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error reading file');
            return;
        }
        try {
            const { id } = req.params;
            const jsonData = JSON.parse(data);
            let userIndex = jsonData.findIndex(e => e.id == id);

            if (userIndex !== -1) {
                jsonData.splice(userIndex, 1);
                fs.writeFile('users.json', JSON.stringify(jsonData), 'utf8', (err) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('Error writing file');
                        return;
                    }
                    res.json('User deleted');
                });
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send('Error processing request');
        }

    });
};
const postUserController = (req, res) => {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        try {
            const { nombre, apellido, pw, mail, tipo } = req.body
            const jsonData = JSON.parse(data);
            let id = jsonData.length > 0 ? jsonData[jsonData.length - 1].id + 1 : 1;
            let userIndex = jsonData.findIndex(e => e.mail == mail);
            if (userIndex === -1) {
                let newUser = {id, nombre, apellido, pw, mail, tipo }
                jsonData.push(newUser)
                fs.writeFile('users.json', JSON.stringify(jsonData), (err) => {
                    if (err) {
                        res.status(500).send('Error writing file');
                        return;
                    }
                    res.json('User created successfully');
                });
            } else {
                res.json('User with this email address already exists');
            }
        } catch (error) {
            res.status(500).send('Error parsing JSON');
        }
    });
}

const putUserController = (req, res) => {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        try {
            const { id } = req.params;
            const { nombre, apellido, pw, mail, tipo } = req.body;
            const jsonData = JSON.parse(data);

            const userIndex = jsonData.findIndex(e => e.id == id);
            if (userIndex !== -1) {
                jsonData[userIndex].nombre = nombre || jsonData[userIndex].nombre;
                jsonData[userIndex].apellido = apellido || jsonData[userIndex].apellido;
                jsonData[userIndex].pw = pw || jsonData[userIndex].pw;
                jsonData[userIndex].mail = mail || jsonData[userIndex].mail;
                jsonData[userIndex].tipo = tipo || jsonData[userIndex].tipo;

                fs.writeFile('users.json', JSON.stringify(jsonData), (err) => {
                    if (err) {
                        res.status(500).send('Error writing file');
                        return;
                    }
                    res.status(200).send('User updated successfully');
                });
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send('Error updating user');
        }
    });
};


  module.exports= {getUsersController, getUserByIDController,deleteUserController,postUserController,putUserController}