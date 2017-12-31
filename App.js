


/* 11 DOM Contentnt Loaded Event =========================
*/
document.addEventListener('DOMContentLoaded',function(){
	alert('yuklendi');
})


/* 10 Tabbed Content========================= 
*/
var tabs = document.querySelector('.tabs');
//console.log(tabs);
var panels = document.querySelectorAll('.panel');
//console.log(panels);

tabs.addEventListener('click',function(e){
	//console.log(e.target.tagName);
	if (e.target.tagName == "LI") {
		var targetPanel = e.target.getAttribute('data-target');
		//console.log(targetPanel);
		targetPanel = targetPanel.substring(1);
		//console.log(targetPanel);

		Array.from(panels).forEach( function(element, index) {
			idd = element.getAttribute('id');
			if (idd == targetPanel) {
				element.classList.add('active');
			} else{
				element.classList.remove('active');
			}
		});
	}
})

//ninja did=-=-=-=-=-=-=-=
// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});
//ninja did=-=-=-=-=-=-=-=




/* 09 Custom Search Filter=========================
*/
const list = document.querySelector('#book-list ul');

const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup',function(e){
	//console.log(e.target);
	const term = e.target.value.toLowerCase();
	const books = list.getElementsByTagName('li');
	Array.from(books).forEach( function(book) {
		const title = book.firstElementChild.textContent;
		if (title.toLowerCase().indexOf(term) != -1) {
			book.style.display = 'block';
		} else {
			book.style.display = 'none';
		}
	});

})




/* 08 Checkbox and Change Events.=========================
*/
var check = document.createElement('input');
check.type = "Checkbox";
check.setAttribute('id', 'hide')

var lbl = document.createElement('label');
lbl.setAttribute('for', 'hide');
lbl.innerHTML = 'Listeyi gizle / goster'
lbl.style.marginLeft = '20px';

gg = document.querySelector('#gizleGoster');
gg.appendChild(check);
gg.appendChild(lbl);

hide = document.querySelector('#hide');
list = document.querySelector('#book-list ul')

hide.addEventListener('change', function(e){
	//console.log(hide.checked);
	if (hide.checked) {
		list.style.display = 'none';
	} else {
		list.style.display = 'initial';
	}
})


/* 08 Attributes.=========================
*/
var book = document.querySelector('li:first-Child .name');
console.log(book);
console.log(book.getAttribute('class')); //output ->//set again'name'
book.setAttribute('class', 'yeniSinif');
console.log(book.getAttribute('class'));//output ->'yeniSinif'


var link = document.querySelector('#page-banner a');
console.log(link);
console.log(link.getAttribute('href'));//output ->http://www.google.com
link.setAttribute('href', 'http://www.128kb.com');
console.log(link.getAttribute('href'));
link.removeAttribute('href'); //removed attr
console.log(link.hasAttribute('href')); //false
link.setAttribute('href', 'http://www.128kb.com'); 
console.log(link.hasAttribute('href')); //true




/* 07 Reacting Forms.=========================
*/

var list = document.querySelector('#book-list ul');
//Delete Books
list.addEventListener('click',function(e){
	if (e.target.className == 'delete') {
		const li = e.target.parentElement;
		li.parentElement.removeChild(li);
	}
})

//addEventListener to books---------------------------------
var addForm = document.forms['add-book'];
	addForm.addEventListener('submit',function(e){
		e.preventDefault();
		
		var val = addForm.querySelector('input[type = "text"]').value;

		//Create Elements--------------
		var li = document.createElement('li');
		var bookName = document.createElement('span');
		var deleteBtn = document.createElement('span');

		//add content--------------
		deleteBtn.textContent = 'delete';
		bookName.textContent = val;

		//Add Classes--------------
		//deleteBtn.className = 'delete'; ////OR
		deleteBtn.classList.add('delete'); // classList.remove('') can be use same case
		bookName.classList.add('name');

		//Append to document--------------
		li.appendChild(bookName);
		li.appendChild(deleteBtn);
		list.appendChild(li);
		addForm.querySelector('input[type = "text"]').value = '';

});

/* 06 Event Bubling =========================
*/
//Asagidaki remove List Item ile ayni isi yapacak, farkli bir sekilde.
//farki dinamik olarak yeni li ogeleri eklense bile
//ul icinden tetiklenecek olay olay kaynaginin ebeveyni li 
//ogesini silecegi icin sonradan eklenen li ler de bile calisacak.
//asagidakinde bu durum soz konusu degil.
const list = document.querySelector('#book-list ul');
	list.addEventListener('click',function(e){
	if (e.target.className == 'delete') {
		const li = e.target.parentElement;
		li.parentElement.removeChild(li);
	}
})


/* 05 Dom Events =========================
*/
const link = document.querySelector('#page-banner a');
link.addEventListener('click',function(e){
	e.preventDefault();
	console.log('google adresine giden baglanti engellendi.')
})

//remove List Item
var buttons = document.querySelectorAll('#book-list .delete');
Array.from(buttons).forEach( function(element, index) {
	element.addEventListener('click',function(e){
		const li = e.target.parentElement;
		li.parentNode.removeChild(li);
		//or
		//e.target.parentElement.parentElement.removeChild(li);
	})
});


var h2 = document.querySelector('#book-list h2');
h2.addEventListener('click',function(e){
console.log(e.target);
console.log(e);
})


/*04 traversing the DOM =========================
*/
var bookList = document.querySelector('#book-list');
console.log('The parent Node is: ', bookList.parentNode);
console.log('The parent Element is: ', bookList.parentElement);
console.log('The parent Element ID is: ', bookList.parentElement.id);
console.log('The parent Elements parent Element is: ', bookList.parentElement.parentElement);
console.log(bookList.childNodes);

/*03 nodes =========================
*/

const banner = document.querySelector('#page-banner');
console.log('#page-banner \'s node type is: ' + banner.nodeType); 
// It gonna log 1. 1 mean element,, 2 mean attribute,, 3 text ...so on.

console.log('#page-banner \'s node name is: ' + banner.nodeName); //gives node name
console.log('#page-banner has child ?: ' + banner.hasChildNodes()); // gives has child elements

var clonedBanner = banner.cloneNode(false); // no child nodes
console.log(clonedBanner);
clonedBanner = banner.cloneNode(true); // include child nodes.
console.log(clonedBanner);


/* 02 =========================
*/
const w = document.querySelector('#book-list li .name ');
console.log(w);
books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach( function(book) {
	console.log(book);
});

Array.from(books).forEach( function(element, index) {
	console.log(element.innerHTML);
});

Array.from(books).forEach( function(element, index) {
	console.log(element.textContent = 'Kitap Adi: ' + element.textContent);
});



/* 01 =========================
*/
var titles = document.getElementsByClassName('title');
//titles is a collection. so array methods ll not gonna work.
//so convert it an array as ==> Array.from(titles)
Array.from(titles).forEach( function(element, index) {
	console.log(index + ': ' + element);
	console.log(element)
});
