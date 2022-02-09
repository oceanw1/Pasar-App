
// To remove stuff from the cart
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


//To enter ready state
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeitem)
    }

    var quantinputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantinputs.length; i++) {
        var input = quantinputs[i]
        input.addEventListener('change', quantitychae.getItem(fish1[i])

    }

    updatetot()

}
    

function quantitychange(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0 ){
        input.parentElement.parentElement.remove()
    }
    updatetot()
}

// Delete shit
function removeitem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updatetot()
}

function updatetot() {

    var cartitemcon = document.getElementsByClassName('cart-items')[0]
    var cartrows = cartitemcon.getElementsByClassName('cart-row')
    var total = 0
    for (var x = 0; x < cartrows.length; x++){

        var cartrow = cartrows[x]
        var priceelement = cartrow.getElementsByClassName('cart-price cart-column')[0]
        var quantityelement = cartrow.getElementsByClassName('cart-quantity-input')[0]

        // total of all the items

        var price = parseFloat(priceelement.innerText.replace('IDR',''))
        var quantity = quantityelement.value
        total = total + (price * quantity)
        console.log(price * quantity)

    }
    document.getElementsByClassName('cart-total-price')[0].innerText = "IDR " + total + ".000"
}
