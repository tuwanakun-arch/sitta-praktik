function login(){

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    let berhasil = false;

    for(let i=0; i<dataPengguna.length; i++){

        if(
            email === dataPengguna[i].email &&
            password === dataPengguna[i].password
        ){

            berhasil = true;

            localStorage.setItem(
                "nama",
                dataPengguna[i].nama
            );

            window.location.href = "dashboard.html";
        }
    }

    if(!berhasil){
        alert("Email atau Password salah!");
    }
}

function lupaPassword(){
    alert("Silakan hubungi admin SITTA.");
}

function logout(){

    localStorage.clear();

    alert("Berhasil Logout");

    window.location.href = "index.html";

}

function darkMode(){

    document.body.classList.toggle("dark");

}

function bukaModal(){

    document.getElementById("modal")
    .style.display = "block";

}

function tutupModal(){

    document.getElementById("modal")
    .style.display = "none";

}

window.onload = function(){

    const loading =
    document.getElementById("loading");

    if(loading){
        loading.style.display = "none";
    }

}