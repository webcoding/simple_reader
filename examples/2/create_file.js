var fs = require('fs')

function write_chapter(chapter, content){
  content = content.replace('[笔趣库手机版 m.biquku.com]', '')

  fs.writeFile('dist/i am mkdir folder/' + chapter + '.html', content, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
}

var content = "&nbsp;&nbsp;&nbsp;&nbsp;第一千两百五十二章<br><br>&nbsp;&nbsp;&nbsp;&nbsp;轰轰！<br><br>&nbsp;&nbsp;&nbsp;&nbsp;灵战子的低吼声，犹如雷鸣一般在这天地之间回荡，一股股磅礴浩瀚的灵力，也是犹如洪流一般，不断的从其体内呼啸而出，引得空间震荡。◇↓，<br><br>&nbsp;&nbsp;&nbsp;&nbsp;此时的灵战子，双目精光涌动，神采飞扬，再没了先前的那种虚弱之感，显然，借助着那所谓的“战祭”，他直接是在顷刻间就将自身状态恢复到了巅峰。<br><br>&nbsp;&nbsp;&nbsp;&nbsp;之前消耗的灵力，也是再度充盈了他的身躯";

write_chapter('1', content)
