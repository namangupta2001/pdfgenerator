function createPDF() {

    var x = document.getElementById("nameinput").value;
    var y = document.getElementById("college").value;
    var z = document.getElementById("semester").value;
    var w = document.getElementById("enroll").value;

    var element = x + y + z + w;
    html2pdf(element);
    // .from(element)
    // .from(x)
    // html2pdf(x);

    save();
}