function getAngkaTerbesarKedua(personName) {
    if (!personName) return "ERROR : (Kamu jelasin ini errornya apa dan kenapa)";
  
    const sorted = personName.sort((a, b) => b - a);
    return sorted[1];
  }
  
  const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
  
  console.log(getAngkaTerbesarKedua(dataAngka));
  console.log(getAngkaTerbesarKedua(0));
  console.log(getAngkaTerbesarKedua());
  