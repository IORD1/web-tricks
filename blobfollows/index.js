const blob = document.getElementById('blob');
window.onpointermove = event => { 
  const { clientX, clientY } = event;
  blob.style.top = `${clientY}px`;
    blob.style.left = `${clientX}px`;

    blob.animate({
        left : `${clientX}px`,
        top :  `${clientY}px`
    },{duration : 3000,fill : 'forwards'})


}