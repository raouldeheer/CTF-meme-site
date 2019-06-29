
function OpenPage(password) {
    if (password === "langespeknekfoto") {
        go();
    }else{
        window.location.replace("https://kutjeboef.tk");
    }
}

function go() {
    
    var a = document.getElementById("content");
    a.innerHTML = `<div class="responsive"><div class="gallery"><a href="/langespeknek/img/6.jpeg"><img src="/langespeknek/img/6.jpeg" width="600" height="400"></a></div></div><div class="responsive"><div class="gallery">                <a href="/langespeknek/img/1.jpeg">                    <img src="/langespeknek/img/1.jpeg" width="600" height="400">                </a>                            </div>        </div>                <div class="responsive">            <div class="gallery">                <a href="/langespeknek/img/2.jpeg">                    <img src="/langespeknek/img/2.jpeg" alt="Cinque Terre" width="600" height="400">                </a>                            </div>        </div>  <div class="responsive">            <div class="gallery">                <a href="/langespeknek/img/3.jpeg">                    <img src="/langespeknek/img/3.jpeg" alt="Forest" width="600" height="400">                </a>                            </div>        </div>                <div class="responsive">            <div class="gallery">                <a href="/langespeknek/img/4.jpeg">                    <img src="/langespeknek/img/4.jpeg" alt="Northern Lights" width="600" height="400">                </a>                            </div>        </div>     <div class="responsive">            <div class="gallery">                <a href="/langespeknek/img/5.jpeg">                    <img src="/langespeknek/img/5.jpeg" alt="Mountains" width="600" height="400">                </a>                            </div>        </div>`;
}

var pass = prompt("Password:");
OpenPage(pass);
