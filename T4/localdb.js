show = () => {
  let buttonS = document.getElementsByClassName('button')[0];
  let buttonR = document.getElementsByClassName('button')[1];
  let buttonDBsave = document.getElementsByClassName('button')[2];
  let buttonDBremove = document.getElementsByClassName('button')[3];
  buttonS.addEventListener('click',Save,false);
  buttonR.addEventListener('click',Remove,false);
  let request = indexedDB.open("database");
  request.onsuccess = (event) => {
    db = event.target.result;
    content();
  }
  request.onupgradeneeded = (event) => {
    db = event.target.result;
    db.createObjectStore("data",{autoIncrement: true});
  }
  buttonDBsave.addEventListener('click',DBsave,false);
  buttonDBremove.addEventListener('click',DBremove,false);
};

Save = () => {
  let key = document.getElementById('value').value;
  let value = document.getElementById('value').value;
  localStorage.setItem(key,value);
  content();
  document.getElementById('value').value = '';
};

Remove = () => {
  if(confirm('are you sure?')) {
    localStorage.clear();
    content();
  }
}

content = () => {
  let box = document.getElementById('box');
  box.innerHTML='';
  for (let i=0;i<localStorage.length;i++) {
    let id=localStorage.key(i);
    let item=localStorage.getItem(id);
    box.innerHTML+='<div class="local">LocalStorage '+i+': </div><div class="local">'+item+'</div>';
  }
  let transaction = db.transaction(['data'], 'readonly');
  let store = transaction.objectStore('data');
  let cursor = store.openCursor();
  cursor.addEventListener('success',showdata,false);
};

showdata = (event) => {
  let cursor = event.target.result;
  if (cursor) {
    box.innerHTML+='<div class="index">IndexedDB '+cursor.key+':</div><div class="index">'+cursor.value.value+'</div>';
    cursor.continue();
  }
}

DBsave = () => {
  let value = document.getElementById('value').value;
  let transaction = db.transaction(['data'], 'readwrite');
  let store = transaction.objectStore('data');
  let add = store.add({value: value});
  document.getElementById('value').value = '';
  add.addEventListener('success',content,false);
}

DBremove = () => {
  let transaction = db.transaction(['data'], 'readwrite');
  let store = transaction.objectStore('data');
  if (confirm('are you sure?')) {
    let storerequest = store.clear();
    content();
  }
}
window.addEventListener('load', show, false);
