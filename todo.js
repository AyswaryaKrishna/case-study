 function ajax() {
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             var response = JSON.parse(this.responseText);
             var out = "<table cellpadding='20' border='1' id='Table1'><tr><th> Select </th><th> title </th></tr>";
             for (var i = 0; i < response.length; i++) {
                 out += "<tr><td><input class='hello' type='checkbox' value=i>" + "</td><td>" + response[i].title + "</td></tr>";
             }

             document.getElementById("shopList").innerHTML = out + "</table>" + "<br><button class='btn btn-lg btn-light' onclick='proceed()'>Proceed</button>";

         }
     }
     xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
     xhttp.send();

     document.querySelector('#shopList').addEventListener('click', clickContent);
 }



 function clickContent(e) {

     let p = new Promise((resolve, reject) => {

         let child = e.target;

         $(document).ready(function() {

             var $checkboxes = $('#shopList td input[type="checkbox"]');

             $checkboxes.change(function() {
                 var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
                 console.log(countCheckedCheckboxes)
                 if (countCheckedCheckboxes <= 5) {
                     resolve("success")
                 } else {
                     reject("failed")
                 }
             });
         });
     })
     p.then((message) => {
         console.log("success");

     }).catch((message) => {
         console.log("completed");

         alert("congrats daily tasks completed");

         error1();

     })
     var child = e.target;


     function error1() {
         child.checked = false;



     }



 }