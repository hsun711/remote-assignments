function ajax(src, callback){

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${src}`);

    xhr.onreadystatechange = function(){
	    if(xhr.readyState === 4) {
	        let data = JSON.parse(this.responseText);
            callback(data);
      }
    };
	xhr.send();
}

function render(data){

    data.forEach( obj => {

        let div = document.querySelector("div");
        let title = document.createElement("h1");
        let price = document.createElement("p");
        let desc = document.createElement("p");
        
        title.append(`${obj.name}`);
        price.append(`Price：$${obj.price}`);
        desc.append(`Description：${obj.description}`)

        div.append(title, price, desc);
    })
}

ajax("http://13.230.176.178:4000/api/1.0/remote-w4-data",function(response){
    render(response);
}); // you should get product information in JSON format and render data in the page
