/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("newDom").innerHTML = generateDom();
};

const generateDom = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".pt", ".es"];

  return (
    pronoun[Math.floor(Math.random() * 2)] +
    adj[Math.floor(Math.random() * 2)] +
    noun[Math.floor(Math.random() * 2)] +
    extensions[Math.floor(Math.random() * 4)]
  );
};



/*window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};*/
