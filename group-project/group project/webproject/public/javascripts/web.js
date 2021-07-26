 function get(event) {
     e = event.srcElement;
     if (e.nodeName == "TD") {
         txt = "<input type='text' onblur='set(event)' size='5' value='" + e.innerHTML + "'/>";
         e.innerHTML = txt;
         e.firstChild.focus();
     }
 }

 function set(event) {
     e = event.srcElement;
     if (e.nodeName == "INPUT") {
         txt = e.value;
         e.parentNode.innerHTML = txt;
     }
 }

 function add() {
     var tr1 = document.getElementById('itable').insertRow();
     var c0 = tr1.insertCell(0);
     var c1 = tr1.insertCell(1);
     var c2 = tr1.insertCell(2);

     var c3 = tr1.insertCell(3);
     c0.innerHTML = "<input type='checkbox' name='ck'/>";
     c1.innerHTML = document.getElementById("hotspot").value;
     c2.innerHTML = document.getElementById("time").value;

     c3.innerHTML = "<input type='button' value=' delete' onclick='del(this)' />";
 }

 function del(r) {
     var i = r.parentNode.parentNode.rowIndex;
     document.getElementById('itable').deleteRow(i);
 }

 function deleteAll() {
     var flag = 0;
     var tb = document.getElementById('itable');
     var ch = document.getElementsByName('ck');
     for (i = ch.length - 1; i >= 0; i--) {
         var tr = ch[i].parentNode.parentNode;
         var index = tr.rowIndex;
         if (ch[i].checked == true) {
             tb.deleteRow(index);
             flag = flag + 1;
         }
     }
     if (flag <= 0) {
         alert("must delete");
     }
 }


 function selectAll() {
     var ch = document.getElementsByName('ck');
     for (i = ch.length - 1; i >= 0; i--) {
         ch[i].checked = true;
     }
 }


 const SPECIALS = [
     { name: '1', price: '1', url: '.jpg' },
     { name: '2', price: '2', url: '.jpg' },
     { name: '3', price: '3', url: '.jpg' },
     { name: '4e', price: '4', url: '.jpg' }
 ];

 var vueinst = new Vue({
     el: '#app',
     data: {
         choose: 'Choose ...',
         special: SPECIALS[0],
         show_ad: false,

         top_menu: [{ title: 'Home', url: '/' },
             { title: 'About', url: '/about' },
             { title: 'Contact Us', url: '/contact' }
         ],
         c_code: 'Enter your code here',
         c_code_arr: [],
     },
     methods: {
         addcomment(text) {
             this.c_code_arr.push(this.c_code);
         }
     },
 })