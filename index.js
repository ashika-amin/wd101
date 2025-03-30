
function createInitialsFromName(name)  {
  let words=name.trim().split(" ")
  let initials="";
  if(words.length===1)
    initials= words[0].slice(0 , 2).toUpperCase();
  else if(words.length===2)
    initials= (words[0][0]+words[1][0]).toUpperCase();
  else
  initials= (words[0][0]+words[words.length-1][0]).toUpperCase();
return initials;

  // Complete the function
};
let name="ashika ashok bangera"
console.log(createInitialsFromName(name))


module.exports = createInitialsFromName;
