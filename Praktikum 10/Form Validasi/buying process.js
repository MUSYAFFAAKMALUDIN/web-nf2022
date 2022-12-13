function buy() {
    event.preventDefault();

    let Name = document.getElementById("Name").value;
    let email = document.getElementById("email").value;
    let time = document.getElementById("time").value;
    let Tujuan = document.getElementById("Tujuan").value;
    let jumlah = document.getElementById("jumlah").value;


    if (Name == "Akmal" && email == "akmal120103@gmail.com" && time == "05:00") {
        location.replace("succsess.html")
    } else {
        alert("Masukkan input dengan benar");
    }
}