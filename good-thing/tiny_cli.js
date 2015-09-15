var readline = require('readline'),
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      completer: function(line) {
        var completions = 'hello world'.split(' ');
        var hits = completions.filter(function(c) { return c.indexOf(line) == 0 });
        return [hits.length ? hits : completions, line]
      }
    });

rl.setPrompt('OHAI> ');
rl.prompt();

rl.on('line', function(line) {
  switch(line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log('Say what? I might have heard `' + line.trim() + '`');
      break;
  }
  rl.prompt();
}).on('close', function() {
  console.log('Have a great day!');
  process.exit(0);
}).on('SIGCONT', function() {
  rl.prompt();
});
