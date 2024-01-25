// fetch Data


async function getData() {
    let cards = document.querySelectorAll(".card")
    let responce = await fetch("https://dummyjson.com/products");
    let data = await responce.json();
    console.log(data.products)
    cards.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = data.products[i].images[0]
        element.getElementsByTagName("span")[0].innerHTML = data.products[i].title;
        element.getElementsByTagName("p")[0].innerHTML = data.products[i].description.slice(0,20);
        element.getElementsByTagName("b")[0].innerHTML ="Price: $" + data.products[i].price
    });
}

getData()
