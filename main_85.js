menu_list_array = ["Veg Margherita Pizza", "Margherita Pizza", "Double Cheese Margherita Pizza", "Farm House Pizza", "Peppy Paneer Pizza", "Mexican Green Wave Pizza", "Deluxe Veggie Pizza", "Veg Extravaganza Pizza", "CHEESE N CORN Pizza", "FRESH VEGGIE Pizza", "VEGGIE PARADISE Pizza", "PANEER MAKHANI PIZZA", "Indi Tandoori Paneer PIZZA", "Moroccan Spice Pasta Pizza - Veg Pizza", "Achari Do Pyaza Pizza", "THE 4 CHEESE PIZZA", "Chicken Golden Delight Pizza", "Non Veg Supreme Pizza", "Chicken Dominator Pizza", "PEPPER BARBECUE & ONION Pizza", "PEPPER BARBECUE CHICKEN", "PEPPER BARBECUE CHICKEN Pizza", "CHICKEN SAUSAGE PIZZA", "CHICKEN FIESTA PIZZA", "INDI CHICKEN TIKKA PIZZA", "Chicken Pepperoni Pizza", "CREAMY TOMATO PASTA PIZZA - NON VEG PIZZA", "KEEMA DO PYAZA PIZZA", "Moroccan Spice Pasta Pizza - Non Veg Pizza", "Moroccan Spice Pasta Pizza -  Veg Pizza"
];

function getmenu() {
    var htmldata = "";
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion() {
    //Give the appropriate id name as add_item
    var item = document.getElementById("add_item").value;
    //Use the push() function to push the item into menu_list_array
    menu_list_array.push()(item);
}

