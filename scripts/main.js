;(function(){
	'use strict';
	var playList = [
 {
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
 },
 {
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
 },
 {
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
 },
 {
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
 },
 {
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
 },
 {
 author: "AC/DC",
 song:"BACK IN BLACK"
 },
 {
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
 },
 {
 author: "METALLICA",
 song:"ENTER SANDMAN"
 }
];

 function getListSong(arr) {
  if(typeof arr == 'object' && arr.length > 0 ){
   var ul = document.createElement('ul');
   document.querySelector('#main').insertBefore(ul, document.querySelector('h1').nextElementSibling);
   for(var i = 0 ; i< arr.length ; i++){

     var li = document.createElement('li');
     li.innerText =(i+1) + '. ' + arr[i].author + ' - ' + arr[i].song;
     ul.appendChild(li);

  }
 } else {
  var span= document.createElement('span');
  span.innerText = 'Sory, Song List Empty! =(';
  document.querySelector('#main').insertBefore(ul, document.querySelector('h1').nextElementSibling);
 }
 };
   getListSong(playList);
   console.log(document.querySelector('#main'))
})();