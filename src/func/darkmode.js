export default function darkMode(mode) {
  
  let backgroudColor = '';
  let contrast = '';
  let fontColor = '';

  if ( mode === 'dark') {
    backgroudColor = '#202124';
    contrast = '#303134';
    fontColor = 'white';
  }
  if ( mode === 'white') {
    backgroudColor = 'white';
    contrast = 'white';
    fontColor = 'black';
  }

  const backgroud = document.getElementById('root');
  backgroud.style = `background-color: ${backgroudColor}; color: ${fontColor};`;

  
  const header = document.getElementsByClassName('header nav')[0];
  header.style = `background-color: ${contrast};`;
  
  const footer = document.getElementsByClassName('footer nav')[0];
  footer.style = `background-color: ${contrast};`;
}

