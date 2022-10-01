var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("ide_div");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"}

function openfile(openthis,elmnt,color) {

    if (openthis === 'start_ide_div'){
      document.getElementById('br_tags_clock').innerHTML = ""
    }else{
      document.getElementById('br_tags_clock').innerHTML = "<br><br>"
    }

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("ide_div");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("btn");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "rgb(71, 71, 71)";
    }
    document.getElementById(openthis).style.display = "block";
    elmnt.style.backgroundColor = color;

  }
document.getElementById('start_ide_div').style.display = "block"
//document.getElementById('htmlfilebtn').style.backgroundColor = "rgb(31, 31, 31)"
document.getElementById('startbtn').style.backgroundColor = "rgb(31, 31, 31)"
// * function colouring

/*
function functionclouring(el)
{
if (!
  document.getElementById('html_ide').value.match (/<\/html>/gi),(/<\/body>/gi))
{
  el.style.color='#F00'
}else{el.style.color = colorstate_s}
if (!
el.value.match (/const|var|let|function|if|document|.|=|>|{/gi))
{
  document.getElementById('js_ide').style.color='#F00'
}else{el.style.color = colorstate_s}
if (!
  document.getElementById('css_ide').value.match (/./g))
{
  el.style.color='#F00'
}else{el.style.color = colorstate_s}
}
*/


// * defult html code
document.getElementById('html_ide').value = `<!DOCTYPE html>
<!--K.Prabhasha-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Red-Dragon</title>
</head>
<body>

  <h1 id="Myhead" class="textstyle">SImple Online IDE</h1>
  <p id="Mypara" class="textstyle">Powered By RED DRAGON</p>
    
</body>
</html>`
// * defult css code
document.getElementById('css_ide').value = `/*CSS file*/

.textstyle {
  font-family: Verdana, Geneva, Tapoma, sans-serif;
  text-align: center;
  text-shadow: 00 2px 11px rgb(0, 255, 10);
}
.textstyle:hover {
  font-family: cursive;
}`
// * defult javascript code
document.getElementById('js_ide').value = `//JavaScript

document.getElementById('Myhead').style.color = 'red'
document.getElementById('Mypara').style.color = 'rgb(0, 200, 255)'`

// * script making
function proccess() {
var html_code = document.getElementById('html_ide').value
var css_code  = "<style>\n"+document.getElementById('css_ide').value+"\n</style>"
var js_code   = "<scri"+"pt>\n"+document.getElementById('js_ide').value+"\n</scri"+"pt>"
var terminal  = document.getElementById('terminal').contentWindow.document
terminal.open()
terminal.write(html_code+css_code+js_code)
terminal.close()
}
const terminalclear = () => {
  var terminal  = document.getElementById('terminal').contentWindow.document
terminal.open()
terminal.write()
terminal.close()
}

// * color change bar hidden / un****
var fileselect = document.getElementById('fileselect')
var bg_color = document.getElementById('txtcolor')
var txt_color = document.getElementById('bgcolor')
bg_color.style.display = "none"
txt_color.style.display = "none"
fileselect.style.display = "block"
var menu_bar_state = 1

const settingbtnbar = () => {
  if (menu_bar_state == 0){
    bg_color.style.display = "none"
    txt_color.style.display = "none"
    fileselect.style.display = "block"
  }
  if (menu_bar_state == 1){
    bg_color.style.display = "block"
    txt_color.style.display = "none"
    fileselect.style.display = "none"
  }
  if (menu_bar_state == 2){
    bg_color.style.display = "none"
    txt_color.style.display = "block"
    fileselect.style.display = "none"
  }
  menu_bar_state++
  if (menu_bar_state == 3){
    menu_bar_state = 0
  }
}

// * terminal colour change
var html_bg = document.getElementById('inter')
var css_bg = document.getElementById('css_ide')
var js_bg = document.getElementById('js_ide')
var terminals = document.getElementById('run')

const terminalcolor = (junk0,junk1,colorstate) => {
  html_bg.style.backgroundColor = colorstate
  css_bg.style.backgroundColor = colorstate
  js_bg.style.backgroundColor = colorstate
}
const programscolor = (junk0,junk1,colorstate) => {
  var colorstate_s = colorstate
  html_bg.style.color = colorstate
  css_bg.style.color = colorstate
  js_bg.style.color = colorstate
}
const rterminalcolor = (junk0,junk1,colorstate) => {
  terminals.style.backgroundColor = colorstate
}

// * live clock
setInterval(() => {
  let date = new Date()
  let clock = document.getElementById('times')
  var s_space = ""
  var m_space = ""
  if(date.getSeconds() <= 9){s_space = " : 0"}else{s_space = " : "}
  if(date.getMinutes() <= 9){m_space = " : 0"}else{m_space = " : "}
  clock.innerHTML = ''+
  date.getHours()+m_space+
  date.getMinutes()+s_space+
  date.getSeconds()+""

}, 1000)

var i = 0
function timecolor() {
  var aud = document.getElementById('err')
  aud.play()
  let clock = document.getElementById('times')
  const colourlibrary = ['black','rgb(121, 5, 5)','rgb(9, 255, 0)','rgb(0, 0, 255)','rgb(196, 40, 255)','pink','rgb(169, 255, 88)','yellow','orange','rgb(255, 228, 228)']
// * changing 10 colors
  clock.style.color = colourlibrary[i]
  i = i+1
  if(i == 10){i = 0}
  
}
// * audio
function auds() {
  var aud = document.getElementById('err')
  aud.play()
}

// * mobile screen fix
if (screen.width <= 840) {
  document.getElementById('headline_a').innerHTML = "RD IDE"
  document.getElementById('headline_b').innerHTML = "RD RUN"
  document.getElementById('startbtntxt').innerHTML = ` Start`
}

// * easy_darkmode

function easy_darkmode(){
  document.getElementById('easy_darkmode').href = "./system/syntax3.css"
}