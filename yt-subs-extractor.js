/*
running this on a browser's dev console will extract names of subscribed channels from
"https://www.youtube.com/feed/channels"
*/


function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
};
include("https://cdn.jsdelivr.net/g/filesaver.js");
var s=""

urls=Array.from(document.querySelectorAll("a")).map(x => x.href);
let re=/^(https?):\/\/www\.youtube\.com\/channel\/[a-zA-Z0-9]+/;
let channels=[];

urls.map(x=>re.test(x) && channels.indexOf(x) == -1 && channels.push(x));
for (let channel of channels) {
    //console.log(channel);
    s+=channel ;
    s+='\n';
};

var myFile = new File([s], "channels.txt", {type: "text/plain;charset=utf-8"});
saveAs(myFile);

