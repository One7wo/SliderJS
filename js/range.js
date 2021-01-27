const progress = () => {
    // Input line
    trackElem = document.getElementsByClassName('stripe')[0];
    valueElem = document.getElementsByClassName('value')[0];
    //Current value on line
    let value = trackElem.value;
    //Change progeress
    trackElem.style = `background: -webkit-linear-gradient(left, #fee600 0%, #fee600 ${value}%, #e1e1e3 ${value}%, #e1e1e3 100%)`;
    valueElem.textContent = value * 10;

}