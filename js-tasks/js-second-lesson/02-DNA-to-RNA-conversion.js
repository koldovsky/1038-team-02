//Maksym Zinchuk
function DNAtoRNA(dna) {
    let newDna = "";
    for (let i = 0; i < dna.length; i++) {
      if (dna[i] === "T") {
        newDna = newDna.concat("U");
      } else {
        newDna = newDna.concat(dna[i]);
      }
    }
    return newDna;
  }
  
  function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U");
  }
  //Eremin Slava
function DNAtoRNA(dna) {
  const replaceDNAtoRNA = dna => dna.replace(/T|t/g, "U");
    return replaceDNAtoRNA(dna);
}
