function checkNumber() {
    let input = document.getElementById("numInput");
    let result = document.getElementById("formResult");

    if (!input.checkValidity()) {
        result.textContent = input.validationMessage;
    } else {
        result.textContent = "Valid number!";
    }
}

function saveData() {
    localStorage.setItem("username", "Dara");
    document.getElementById("storageResult").textContent = "Saved!";
}

function loadData() {
    let name = localStorage.getItem("username");
    document.getElementById("storageResult").textContent = name;
}

function getLocation() {
    let output = document.getElementById("geoResult");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            output.innerHTML =
            "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
        });
    }
}

function getUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.json())
        .then(data => {
            document.getElementById("apiResult").textContent =
                JSON.stringify(data, null, 2);
        });
}