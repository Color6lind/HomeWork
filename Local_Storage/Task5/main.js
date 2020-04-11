let teg_a = document.querySelectorAll('a');
let btn_show = document.getElementById('show');
let del = document.getElementById('del');

let bt = new Date();
let day = bt.getDate();

for (i in teg_a) {
  teg_a[i].onclick = function (e) {
    e.preventDefault();
    text = prompt('Введите задачу', '')
    if (text != '') {
      localStorage.setItem(e.target.text, text);
    }
  }
}

let div = document.createElement('div');
div.className = "list";
let ul = document.createElement('ul');

document.body.append(div)
div.append(ul);

btn_show.onclick = function () {
  ul.innerHTML = "";
  for (var i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let item = localStorage[key]
    let liList = document.createElement('li');
    liList.innerHTML = `${key} Апреля: ${item}`;
    ul.append(liList);
  }
};

del.onclick = function () {
  localStorage.clear()
}