function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5fqC5eNYhCJ":
        Script1();
        break;
      case "6hoB6iTvSPI":
        Script2();
        break;
      case "5xvxIUOhJbV":
        Script3();
        break;
      case "6dvEtNaENNl":
        Script4();
        break;
      case "6BahmXU7EuX":
        Script5();
        break;
      case "5rs2eXQYET4":
        Script6();
        break;
      case "69HVHu7LSft":
        Script7();
        break;
      case "5wpfoBNmJy9":
        Script8();
        break;
      case "5cT8pZtGYT2":
        Script9();
        break;
      case "5g6iiSzlXF9":
        Script10();
        break;
      case "5VGYRDyPUyt":
        Script11();
        break;
      case "62O63O1qun8":
        Script12();
        break;
      case "5pCI7MgMOq2":
        Script13();
        break;
      case "5aa1SJvr4Z0":
        Script14();
        break;
  }
}

function Script1()
{
  function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

}

function Script2()
{
  if (!document.getElementById('bgSong')) {
    var audio = document.createElement('audio');
    audio.id = 'bgSong';
    audio.src = "story_content/external_files/bgm.mp3";
    audio.preload = "auto";
    document.body.appendChild(audio);
}

}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.src="story_content/external_files/bgm.mp3";
audio.load();
audio.play();
}

function Script4()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script6()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script9()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script11()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script12()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script13()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();
}
}

function Script14()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

