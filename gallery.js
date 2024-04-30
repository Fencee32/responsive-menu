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
const container = document.querySelector("#container")
const targetImage = document.querySelector("#targetImage")

for (const kep of kepek) {
  const img = document.createElement("img")
  img.src = "img/" + kep
  img.width = 200
  console.log("kép:", img.src)
  container.appendChild(img)
  img.addEventListener("click", function () {
    console.log(this.src)
    targetImage.src = this.src
  })
}
