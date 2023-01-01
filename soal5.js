function getSplitName(personName) {
    if (!personName)
      return "ERROR : (Teman-teman jelasin ini errornya apa dan kenapa)";
  
    const splitName = { firstName: "", middleName: "", lastName: "" };
  
    const personNameArr = personName.split(" ");
  
    if (personNameArr.length > 3)
      return "Error : This function is only for 3 characters name";
  
    splitName.firstName = personNameArr[0];
    switch (personNameArr.length) {
      case 3:
        splitName.middleName = personNameArr[1];
        splitName.lastName = personNameArr[2];
        break;
      case 2:
        splitName.middleName = null;
        splitName.lastName = personNameArr[1];
        break;
      case 1:
        splitName.middleName = null;
        splitName.lastName = null;
        break;
      default:
        break;
    }
    return splitName;
  }
  
  console.log(getSplitName("Aldi Danielta Pranata"));
  console.log(getSplitName("Dwi Kuncoro"));
  console.log(getSplitName("Aurora"));
  console.log(getSplitName("Aurora Aurelia Sukma Darma"));
  console.log(getSplitName(0));
  