const fs = require("fs");

const data = fs.readFile("./example.txt", "utf-8", (err, data) => {
    if(err){
        console.log(err);
    }
    fs.writeFile("test-2.txt", "utf-8", (err, data) => {
        if(err){
            fs.appendFile("test-2.txt", "\n\n new content", (err) => {
                if(err){
                    console.log(err);
                }
                console.log("appending to file");
            });
        }
        console.log("test-2.txt is saved!");
    });
})