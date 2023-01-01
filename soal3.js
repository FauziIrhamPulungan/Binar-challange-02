function checkEmail(email) {
    const hasAt = email
      ?.toString()
      .split("")
      .some((el) => el === "@");
  
    if (!hasAt)
      return "ERROR : (Teman-teman jelasin ini errornya apa dan kenapa)";
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email.match(emailRegex)) return "VALID";
  
    return "INVALID";
  }
  
  console.log(checkEmail("apranata@binar.co.id"));
  console.log(checkEmail("apranata@binar.com"));
  console.log(checkEmail("apranata@binar"));
  console.log(checkEmail("apranata"));
  console.log(checkEmail(322));
  console.log(checkEmail());
  