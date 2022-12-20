let videos = new XMLHttpRequest();

videos.open('get', 'data/videos/data.json', true);

videos.send();

videos.onload = function(){

	if(this.readyState == 4 && this.status == 200){

		let videos = JSON.parse(this.responseText);
		let ndq = replace(body(videos)?['foo']: '"', '\"');
		console.log(ndq);
		let output = "";

		for(let v of videos){
    
    let card = document.createElement("div");
    card.classList.add("g-item");
	card.setAttribute("key", v.id);
	card.innerHTML = v.em;
	
	document.querySelector("#v").appendChild(card);
		}
	}
};