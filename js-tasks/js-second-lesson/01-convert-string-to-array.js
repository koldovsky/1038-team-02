//Maksym Zinchuk
function stringToArray(string) {
    return string.split(" ");
  }
  
//Eremin Slava
function stringToArray(string){ 
  string = string.split(" ").map(word => word.trim());
  return string;
}
