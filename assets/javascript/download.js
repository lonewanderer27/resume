const downloadBtn = document.getElementById("download-pdf")
downloadBtn.addEventListener('click', () => {
  window.open("https://raw.githubusercontent.com/lonewanderer27/resume/9b1ceb84dfb46145f76b9d218cffc6d39605ba6d/assets/Resume%20-%20Adriane%20James.pdf");
  console.log("Download Resume!")
})