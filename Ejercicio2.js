function getFormvalue(event){
    event.preventDefault();
    var form = document.getElementById("form1");
    // var fname = form["fname"].value;
    // var lname = form["lname"].value;

    var fname = form.getElementsByTagName("input")[0].value;
    var lname = form.getElementsByTagName("input")[1].value;

    console.log(fname +" "+ lname);
}