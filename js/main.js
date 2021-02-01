fetch("https://sujitha-04.github.io/Ecommerce/data/data.json").then(response=>{
    return response.json()
}).then(data=>{
    console.log(data)
    displayData(data)
})
// function  displayData(info){
//     console.log(info.mobiles[info.mobiles.length-1])

// unction displayData(info){
//     var div=document.getElementsByClassName("div");
//     console.log(div[0])
//     function displayData(info){
//         var element=document.getElementsByTagName("div");
//         console.log(element[1].innerHTML);
// }
// function displayData(info){
//     var element=document.querySelectorAll("element");
//     console.log(element[1];
//     }
//     function displayData(info){
//         var nodeData=document.querySelectorAll()
//         console.log(div[0]);
//    }
    function displayData(info){
        // var bodyElement=document.querySelector("body")
        // var newElement=document.createElement("p")
        // newElement.textContent="Suji"
        // console.log(newElement)
        // bodyElement.append(newElement)
        //     var sampleElement=document.createElement("img")
        //     sampleElement.src="img/5-pro.jpg";
        //     // sampleElement.setAttribute("alt","image")
        //     sampleElement.classList.add("class1","class2","class3")
        //     // sampleElement.setAttribute("class","image")
        //     sampleElement.classList.remove("class3")
        //     var bodyElement=document.querySelector("body");

        //     bodyElement.append(sampleElement)
        var bodyElement=document.querySelector("body");
        var row=document.createElement("section")
        row.classList.add("row","justify-content-center")
        bodyElement.append(row)
        info.mobiles.map(value=>{
            var column=document.createElement("article")
            column.classList.add("col-sm-10","col-md-6","col-lg-3")
            row.append(column)
            
            // Card
            var card=document.createElement("div");
            card.classList.add("card","mt-5");
            // Card Body
            var cardBody=document.createElement("div");
            cardBody.classList.add("card-body","text-center");
            card.append(cardBody);

            // Image
            var imageElement=document.createElement("img");
            imageElement.src=value.image;
            imageElement.classList.add("img-responsive");
            imageElement.alt=value.name;
            cardBody.append(imageElement);

            // ImageName
            var name=document.createElement("h2");
            name.textContent=value.name;
            name.classList.add("text-center", "text-secondary");
            cardBody.append(name);

            // Price
            var price=document.createElement("p");
            price.classList.add("text-secondary","text-center");
            price.innerHTML="<s><b>₹ "+value.price+" /-</s></b>";

            cardBody.append(price);

            //  OriginalPrice
            var oprice=document.createElement("p");
            oprice.classList.add("text-success","text-center");
            oprice.innerHTML="<b>₹ "+value.originalprice+" /-</b>";
            cardBody.append(oprice);

            // Button
            var button=document.createElement("button");
            button.classList.add("btn", "btn-primary");
            button.textContent="Add to Cart";
            cardBody.append(button);

            // ButNow Button
            var bbutton=document.createElement("button");
            bbutton.classList.add("btn", "btn-warning","m-2");
            bbutton.textContent="Buy Now";
            cardBody.append(bbutton);

            column.append(card);

            
        })
        }
