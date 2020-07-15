function change(event) {
    var parent=event.target.parentNode;
    //event.target refers to the div in which the event took place.
    //each div has a parent div which is refered to using parentNode
    var image=parent.querySelector("img");
    var heading=parent.querySelector(".info");
    //querySelector finds or selects the first element inside the div which matches with the given selector.
    console.log(heading.innerHTML);
    console.log(image.src);
    console.log(event.target.nodeName);
    console.log(parent.nodeName);
    var x=document.createElement("div");
    x.className="cart-element";
    x.innerHTML=`  <img src="${image.src}" alt="image">
    <p class="cart-element-description">${heading.innerHTML}</p>
    <p class="cart-element-price">$15</p>
    <button onclick="remove(event)">X</button>`;
    //the back tick enables the developer to write html code inside javascript file.
    //${} this can be used to extract the elements/value from a variable.
    var remote=document.getElementById("function-div");
    remote.appendChild(x);
}
function remove(event) {
    var x=event.target.parentNode;
    x.remove();
}
function emptyAll(event) {
    var x=document.getElementById("function-div");
    x.innerHTML='';
}