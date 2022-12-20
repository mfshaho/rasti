
let http = new XMLHttpRequest();

http.open('get', 'data/photos/data.json', true);

http.send();

http.onload = function(){

	if(this.readyState == 4 && this.status == 200){

		let photos = JSON.parse(this.responseText);

		let output = "";

		for(let p of photos){
    
    let card = document.createElement("div");
    card.classList.add("g-item");
	card.setAttribute("key", p.id);
	
	let text = document.createElement("div");
	text.classList.add("g-text")

    let title = document.createElement("div");
    title.classList.add("g-title");
	title.innerText = p.title.toUpperCase();
	text.appendChild(title);

	let desc = document.createElement("div");
	desc.classList.add("g-desc");
	desc.innerText = p.desc;
	text.appendChild(desc);

	let dlc = document.createElement("a");
	dlc.innerText = "download"
	dlc.setAttribute("href", p.img);
	dlc.setAttribute("download", p.img);
	text.appendChild(dlc);

	card.appendChild(text);

	let img = document.createElement("img");
	img.classList.add("g-img");
	img.setAttribute("src", p.img);

	card.appendChild(img);
	
	document.querySelector("#p").appendChild(card);
		}
	}
};