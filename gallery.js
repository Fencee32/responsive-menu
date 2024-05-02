const container = document.querySelector("#container")
const images = document.querySelector("#targetImg")
console.log(container)

const kepek = ["delfin.png", "kutya.webp", "macska.jpg"]

for (const kep of kepek) {
  const img = document.createElement("img")
  img.src = "img/" + kep
  img.width = 200
  container.appendChild(img)
  img.addEventListener("click", function () {
    images.src = img.src
  })
}
