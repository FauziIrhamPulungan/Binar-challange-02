function isValidPassword(email) {
    if (!email)
      return "ERROR : (Teman-teman jelasin ini errornya apa dan kenapa)";
  
    const min8Characters = email.length >= 8;
  
    let min1UpperCase = false;
    let min1LowerCase = false;
  
    for (let i = 0; i < email.length; i++) {
      if (isNaN(email[i]) && email[i] == email[i].toUpperCase())
        min1UpperCase = true;
  
      if (isNaN(email[i]) && email[i] == email[i].toLowerCase())
        min1LowerCase = true
    }
  
    if (min8Characters && min1UpperCase && min1LowerCase) return true;
  
    return false;
  }
  
  console.log(isValidPassword("Meong2021"));
  console.log(isValidPassword("meong2021"));
  console.log(isValidPassword("@eong"));
  console.log(isValidPassword("Meong2"));
  console.log(isValidPassword(0));
  console.log(isValidPassword());
  