function total() {
 var name = document.getElementById('name').value;
 var price =  parseInt(document.getElementById('price').value);
 var quantity =  parseInt(document.getElementById('quantity').value);

 var total_price = price * quantity;
  document.getElementById('total').value = total_price;

 var print = 	      "Name    : "+name+"</br>"+
                    "Price   : "+price+"</br>"+
                    "Quantity  : "+quantity+"</br>"+
                    "Total price  : "+total_price+"</br>"
  document.getElementById("print").innerHTML =print;
}
