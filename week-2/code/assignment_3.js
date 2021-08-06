function avg(data){

    let total = 0;
    
    for(let i=0; i<data.products.length; i++){

        let price = data.products[i].price;
        total = total + price;
    }
    console.log(total/data.size);
}

avg({
    size:3,
    products:[
        {
            name:"Product 1",
            price:100
        },
        {
            name:"Product 2",
            price:700
        },
        {
            name:"Product 3",
            price:250
        }
    ]
});