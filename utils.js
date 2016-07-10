exports.mkdir = function(folder){
  var mkdirp = require('mkdirp');
    
  mkdirp('dist/' + folder, function (err) {
      if (err) console.error(err)
      else console.log('pow!')
  });
}

var fs = require('fs')

exports.write_total_chapter = function(book){
  var content = " "
  
  fs.writeFile('dist/'+ book.type + '/' + book.num + '.html', content, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
}

exports.write_chapter = function(book, chapter, content){
  fs.writeFile('dist/' + book.type + '/'+ book.num + '/' + chapter + '.html', content, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
}

exports.write_config = function(book){
  var content =  JSON.stringify(book, null, 4); // Indented 4 spaces
  fs.writeFile('dist/'+ book.type + '/' + book.num + '/book.json', content, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
}