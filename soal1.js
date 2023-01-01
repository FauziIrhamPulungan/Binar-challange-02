function changeWord(selectedText, changedText, text) {
    return text.split(selectedText).join(changedText);
  }
  
  const kalimat1 = "Andini sangat mencintaimu selamanya";
  const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";
  
  console.log(changeWord("mencintaimu", "membencimu", kalimat1));
  console.log(changeWord("bromo", "semeru", kalimat2));
  