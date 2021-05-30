function addUser() {
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player1_name").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location = "project2.html";
}