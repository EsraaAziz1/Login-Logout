// (التطبيق) محاضره 30

//1- stup variables
var productBtn = document.getElementById("productBtn");
var productCotainer = document.getElementById("productCotainer");
data = [
  { id: 1, name: "Ali", desc: "my Name" },
  { id: 2, name: "Mostafa", desc: "my Name" },
  { id: 3, name: "Ahmed", desc: "my Name" },
  { id: 4, name: "Mohammed", desc: "my Name" },
];
//console.log(data);
//2-  draw element---->هرسم يعني وظيفه 
function draw(items) {
  productCotainer.innerHTML = "";
  // console.log(items)

  items.forEach(function (ele) {
    //console.log(ele)
    productCotainer.innerHTML += `<div onclick= deleteItem(${ele.id})> ${ele.name} </div>`;//-->لو عاوزه اضيف المنتج في الموقع ويكون ظاهر
  });
  /*
  for(var i=0 ;i<items.length;i++){
     console.log(items[i])
      
  }*/

}
//3- load data
window.onload = function () {
  draw(data);
};
//4- add item
productBtn.addEventListener("click", additem);
function additem() {
  var productinpt = document.getElementById("productinput");
  if (productinput.value == "") alert("enter your value");

  //data[data.length-1].id------>catch the last id
  //var lastId=data.length ? data[data.length-1].id : 0; //---->شكل جافا العاديه
  //--.لو الشرط اتحقق يبقى اللي بعد علامة الاستفهام علطول هو اللي يتنفذ اما لو متحققش يبقى اللي بعد : هة اللي يتحقق
  var lastId = data[data.length - 1].id
  /*console.log(lastId++ )//4 ---5
  console.log(++lastId )//6
  console.log(lastId )//6*/
  //data.push({id : ++lastId , name:productinpt.value ,desc: "my Name"  })//--كده انا ضفته في الكونسول عاوزه بقى اضيفه في الموقع و يكون ظاهر
  // console.log(data)
  //----.عشان اضيفه في الموقع و يكون ظاهر 

  var addItem = data[data.length - 1]
  // console.log(addItem)
  productCotainer.innerHTML += "<div>" + addItem.name + "</div>";


  /// لو عاوزه احذف يعني مجرد ما اضيف يحذف الكلام من البوكس بتاع الانبوت

  productinpt.value = "";

}  //additem()  
//5- delet item
////لو عاوزه احذف بقى
function deleteItem(id) {
  // console.log(id)   
  data.splice()
}
/////////////////////////////////////////////////////////////////////////////////////////