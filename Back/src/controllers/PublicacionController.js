
const fs =require('fs');
const getPublicacionesController = async (req,res) => {
    fs.readFile('publicaciones.json', 'utf8', async (err, data) => {
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

  const deletePublicacionController = (req,res)=>{
    fs.readFile('publicaciones.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading file');
            return;
        }
        try {
            let {id} = req.params
            const jsonData = JSON.parse(data);
            console.log(jsonData);
            let postIndex = jsonData.findIndex(e => e.id == id)
            if(postIndex !== -1){
                jsonData.splice(postIndex,1)
                fs.writeFile('publicaciones.json',JSON.stringify(jsonData),'utf8',(err)=>{
                    if(err){
                        res.status(500).send("Error writing file")
                        return;
                    }
                    res.json('Post deleted')

                })
               
            }else{
                res.status(404).send('Post not found');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Error parsing JSON');
        }
    });
  }

  const postPublicacionController = async(req,res)=>{
    fs.readFile('publicaciones.json', 'utf8', async (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading file');
            return;
        }
        try {
            const {titulo, descripcion, ubicacion, salario} = req.body;
            const jsonData = JSON.parse(data);
            let id = jsonData.length > 0 ? jsonData[jsonData.length - 1].id + 1 : 1;
            
            let newPost = {id, titulo,descripcion,ubicacion,salario}
            jsonData.push(newPost)
            fs.writeFile('publicaciones.json', JSON.stringify(jsonData), (err) => {
                if (err) {
                    res.status(500).send('Error writing file');
                    return;
                }
                res.json('Post created successfully');
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error parsing JSON');
        }
    });
  }
  module.exports = {getPublicacionesController, postPublicacionController,deletePublicacionController}