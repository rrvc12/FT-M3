const commands = require('./commands');

const done = function(output){
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
}

// Output un prompt
process.stdout.write("prompt > ");
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on("data", function (data) {
  let input = data.toString().trim().split(' '); // remueve la nueva línea
  let cmd = input.shift()
  if(commands.hasOwnProperty(cmd)){
    commands[cmd](input, done); 
  }else{
    process.stdout.write("El comando no existe");
    process.stdout.write("\nprompt > ");
  }
  
  //process.stdout.write("You typed: " + cmd);

});
