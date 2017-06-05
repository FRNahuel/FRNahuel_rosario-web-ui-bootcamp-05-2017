let show = () => {
  change=document.getElementsByClassName("hid")[0];
  change.setAttribute("class","visible");  // visible on load and fade in
  ajoke=document.getElementById("joke");
  rep=document.getElementById("repobutton")
  edit=document.getElementById("jcontainer");
  table=document.getElementById("table");
  tablecont=document.getElementById("stable");
  ajoke.addEventListener("click",jk,false);
  rep.addEventListener("click",repsearch,false);
  table.addEventListener("click",gettable,false);
}

//promise
let promise = (config) => {
    return new Promise(function(answ,err) {
        let xhttp = new XMLHttpRequest();
        xhttp.open(config.type, config.url, true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (this.readyState == this.DONE && this.status == 200) {
                answ(xhttp);
            }
        };
        xhttp.onerror = function () {
          err();
        };
    });
}

// joke
let jk = () => {
    change=document.getElementsByClassName("visible")[0];
    config = {
        url: 'http://api.icndb.com/jokes/random', type: 'GET'
    };

    let answ (xhttp) => {
        response = JSON.parse(xhttp.responseText);
        edit.innerText = response.value.joke;
    };

    let err () => {
      edit.innerText = "Something goes wrong!!";
      change.setAttribute("class","error");

    };
    promise(config).then(answ).catch(err);
}

// repo
let repsearch = () => {
  let repo = (document.querySelector(".repo")).value;
  let name = (document.querySelector(".name"));
  let config = {
    url: 'https://api.github.com/search/repositories?q='+repo,
    type: 'GET'
  };

  let answ = (xhttp) =>
    let response = JSON.parse(xhttp.responseText);
    for (let i=0; i < response.items.length; i++){
      let li = document.createElement("li");
      li.innerText = "Full Name: ";
      li.appendChild(document.createTextNode((response.items[i]).full_name));
      name.appendChild(li);
      name.setAttribute("class","list");
    }
  };

  function err(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Something Goes Wrong!!"));
    name.appendChild(li);
    name.setAttribute("class","error");
  };
  promise(config).then(answ).catch(err);
}

const continents = ["America","Europa","Africa","Asia","Oceania"];

const countrys = [
  ["Mexico","Francia" ,"Egipto","Rusia","Australia" ],
  ["Argentina","España","Nigeria","China","Fiyi" ],
  ["Canada","Italia","Zimbabue","Japon","Tonga"],
];

let gettable = () =>{
let tr = document.createElement("tr");
  for(let data of continents) {
    let th = document.createElement("th");
    tablecont.appendChild(tr);
    let text = document.createTextNode(data);
    tr.appendChild(th);
    th.appendChild(text);
  }
  for(let data2 of countrys) {
    let tr = document.createElement("tr");
    tablecont.appendChild(tr);
    for (let data3 of data2) {
      let td = document.createElement("td");
      let text = document.createTextNode(data3);
      td.appendChild(text);
      tr.appendChild(td)
    }
  }
}

window.addEventListener("load",show,false);
