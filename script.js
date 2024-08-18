let terminalBox = document.querySelector(".box2")
async function creatTerminalText(text, loading, speed, time) {
  terminalBox.innerHTML += `<div class="box3">
    <div class="text">${text}</div>
    <div class="loading">${loading}</div>
    </div>`
  l = document.getElementsByClassName("loading").length
  for (let index = 1; index < 30; index++) {
    var TIME = (time + index) * speed
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(TIME)
      }, TIME);
    })
    promise.then((message) => {
      console.log(message);
      loading += (index + 1)
      document.getElementsByClassName("loading")[l - 1].innerHTML = loading
    }
    )
  }
  return promise
}

async function main() {
  await creatTerminalText("Hacking Initiated", ".", 20, 2)
  await creatTerminalText("Files Decrypting", ".", 100, 4)
  await creatTerminalText("Passwords cracking", ".", 100, 4)
  await creatTerminalText("Uploading data to server side", ".", 100, 4)
  await creatTerminalText("Cleaning up", ".", 100, 4)
  terminalBox.innerHTML += `<div class="box3">
    <div class="task">Task Completed</div>
    <div class="task-load">hjsachjksbhvhjdbvhjdbvhjdvjbdvdvdvdvd</div>
    </div>`
  setTimeout(() => {
    document.head.innerHTML = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hackers Terminal</title>
    <link rel="stylesheet" href="end.css">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">`
    // document.body.innerHTML = ""
    // document.body.style.backgroundColor="#ff000061"
    document.body.innerHTML = `<div class="End">
    <audio id="myAudio" src="spooky.mp3"></audio>
    <div class="endtext">You are Hacked Buddy!</div>
    </div>`
    document.body.addEventListener("mouseover",() => {
      
      document.getElementById("myAudio").play()
    }
    )
  }, 2000);
}
main()

