fetch("https://imdb8.p.rapidapi.com/auto-complete?q=harry", {
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "e893271c71mshf1672f5f3ffcc4bp18fd79jsnd08ef60b83bc",
		"X-RapidAPI-Host": "imdb8.p.rapidapi.com"
	} 
})
.then(response => response.json())
.then(data => {
    const list = data.d;

    list.forEach((item) => {
        const name = item.l;
        const poster = item.i ? item.i.imageUrl : "default_poster.jpg";
        const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
        document.querySelector('.movies').innerHTML += movie;
    });
})
.catch(err => {
    console.error(err);
});
