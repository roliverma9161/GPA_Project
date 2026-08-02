< html >
    <
    head >
    <
    style >
    table, tr, td {
        border: 1 px solid silver;
        border - collapse: collapse;
    }
table {
    margin: 0 px auto;
    text - align: center;
}
button {
    width: 30 px;
    height: 30 px;
    font - size: 16 px;
    text - align: center;
    padding: 5 px;
    margin: 5 px;
    box - shadow: 0 px 0 px 5 px silver;
    border - radius: 10 px;
    border: 1 px solid silver;

}
button: hover {
    background - color: navy;
    color: white;
}
input {
    text - align: right;
    font - size: 16 px;
    padding: 5 px;
    margin: 5 px;

} <
/style>  <
script >
    function btnpress(x) {
        document.getElementById("t1").value += x;

    }

function cleardata() {
    document.getElementById("t1").value = "";
}

function result() {
    var a = document.getElementById("t1").value;
    var b = eval(a);
    document.getElementById("t1").value = b;
}

function backpress() {
    var a = document.getElementById("t1").value;
    var b = a.length;
    var c = a.substr(0, b - 1);
    document.getElementById("t1").value = c;
}

<
/script>  <
/head>  <
body >
    <
    table border = "1" >
    <
    tr >
    <
    td colspan = "4" > < input id = "t1"
readonly / > < /td>  <
    /tr> 

<
tr >
    <
    td > < button onclick = "cleardata('C')" > C < /button></td >
    <
    td > < button onclick = "backpress()" > & larr; < /button></td >
<
td > < button onclick = "btnpress('%')" > % < /button></td >
    <
    td > < button onclick = "btnpress('/')" > /</button > < /td>  <
    /tr> 

<
tr >
    <
    td > < button onclick = "btnpress('7')" > 7 < /button></td >
    <
    td > < button onclick = "btnpress('8')" > 8 < /button></td >
    <
    td > < button onclick = "btnpress('9')" > 9 < /button></td >
    <
    td > < button onclick = "btnpress('*')" > * < /button></td >
    <
    /tr 

<
tr >
    <
    td > < button onclick = "btnpress('4')" > 4 < /button></td >
    <
    td > < button onclick = "btnpress('5')" > 5 < /button></td >
    <
    td > < button onclick = "btnpress('6')" > 6 < /button></td >
    <
    td > < button onclick = "btnpress('-')" > - < /button></td >
    <
    /tr> 

<
tr >
    <
    td > < button onclick = "btnpress('1')" > 1 < /button></td >
    <
    td > < button onclick = "btnpress('2')" > 2 < /button></td >
    <
    td > < button onclick = "btnpress('3')" > 3 < /button></td >
    <
    td > < button onclick = "btnpress('+')" > + < /button></td >
    <
    /tr> 

<
tr >
    <
    td > < button onclick = "btnpress('0')" > 0 < /button></td >
    <
    td > < button onclick = "btnpress('.')" > . < /button></td >
    <
    td > < button onclick = "btnpress('00')" > 00 < /button></td >
    <
    td > < button onclick = "result('=')" >= < /button></td >
    <
    /tr> 

<
/table> 

<
/body>  <
/html>