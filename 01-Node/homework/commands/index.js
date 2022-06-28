var fs = require('fs');
const request = require('request');

module.exports = {

    date: function(input, done) {
        done(Date());
    },
    pwd: function(input, done) { 
        done(process.cwd()); 
    },
    ls: function(input, done){
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            let print = '';
            files.forEach(function(file) {
              //process.stdout.write(file.toString() + "\n");
              print = print + file + "\n";
            })
            done(print);
            process.stdout.write("prompt > ");
          });
    },
    echo: function(input, done){
        done(input.join(' '));
    },
    cat: function(input, done){
        fs.readFile(input[0], 'utf8', function(err, data){
            if(err) throw err;
            // process.stdout.write(data);
            // process.stdout.write(`\nprompt > `);
            done(data);
        })
    },
    head: function(file, done){
        fs.readFile(file[0], 'utf8', function(err, data){
            if(err) throw err;
            const lines = data.split('\n').slice(0,9).join('\n')
            // process.stdout.write(lines);
            // process.stdout.write(`\nprompt > `);
            done(lines);
        })
    },
    tail: function(file, done){
        fs.readFile(file[0], 'utf8', function(err, data){
            if(err) throw err;
            const lines = data.split('\n').slice(-10).join('\n')
            // process.stdout.write(lines);
            // process.stdout.write(`\nprompt > `);
            done(lines);
        })
    },
    curl: function(url, done){
        request(url[0], function(err, response, body){
            if(err) throw err;
            // process.stdout.write(body);
            // process.stdout.write(`\nprompt > `);
            done(body);
        })
    }

}