document.querySelector("img").style.display = "none"
document.querySelector("iframe").style.display = "none" 
document.querySelector("button").addEventListener('click', getInfo)

function getInfo(){
    document.querySelector("img").src = ""
    document.querySelector("iframe").src = ""
    document.querySelector("img").style.display = "none"
    document.querySelector("iframe").style.display = "none" 
    let date = document.getElementById("date").value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=toCDXuZtcPHC3GuTKpPIzJSe1josaf9HTBJDGAlI&date=${date}`)
        .then(res => res.json() )
        .then(data => {
            console.log(data)
            if(data.media_type == "image"){
                document.querySelector("img").style.display = "block"
                document.querySelector("img").src = data.hdurl
            }else{
                document.querySelector("iframe").style.display = "block"
                document.querySelector("iframe").src = data.url
            }
            document.querySelector("#info").innerHTML = data.explanation

            
        })
        .catch(err => console.log(`error: ${err}`));
}
