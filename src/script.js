function szamol() {
    var telek1_oldal = parseFloat(document.getElementById("telek1_oldal").value);
    var telek2_oldal = parseFloat(document.getElementById("telek2_oldal").value);
  
    var tegla_meret = 0.09;
  
    var telek1_terulet = 3 * Math.sqrt(3) * Math.pow(telek1_oldal, 2) / 2;
    var telek2_terulet = 3 * Math.sqrt(3) * Math.pow(telek2_oldal, 2) / 2;
  
    var haz_terulet = telek1_oldal * telek1_oldal / 2;
    telek1_terulet -= haz_terulet;
  
    var telek1_tegla = Math.ceil(telek1_terulet / tegla_meret);
    var telek2_tegla = Math.ceil(telek2_terulet / tegla_meret);
  
    document.getElementById("eredmeny").innerHTML = telek1_tegla + telek2_tegla;
  }