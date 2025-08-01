function toggleMode() {
  const htmlElement = document.querySelector('html');
  htmlElement.classList.toggle('light');
  htmlElement.classList.toggle('dark');
}