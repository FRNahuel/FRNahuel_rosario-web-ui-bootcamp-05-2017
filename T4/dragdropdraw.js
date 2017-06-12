draw = () => {
  var element=document.getElementById('picture');
  picture=element.getContext('2d');
  picture.beginPath();
  picture.moveTo(100,100);
  picture.lineTo(100,200);
  picture.lineTo(150,200);
  picture.lineTo(150,100);
  picture.stroke();
  picture.fill();
};

dragstart = (box, event) => {
  event.dataTransfer.setData('Data', box.id);
}

drop= (target, event) => {
  var box = event.dataTransfer.getData('Data');
  target.appendChild(document.getElementById(box));
};

window.requestAnimationFrame(draw);
