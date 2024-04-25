console.log("H W")

let Valami = ["alma", "körte", "kutya", "macska"]

let div = document.createElement("div")
div.innerHTML = "Hello World"
document.body.appendChild(div)

for (let i = 0; i < Valami.length; i++) {
  let div = document.createElement("div")
  div.innerHTML = Valami[i]
  document.body.appendChild(div)
}

const kepek = ["delfin.png", "kutya.webp", "macska.jpg"]

for (const kep of kepek) {
  let img = document.createElement("img")
  img.src = "img/" + kep
  img.width = "200"
  document.body.appendChild(img)
}
