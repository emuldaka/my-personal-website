const player = document.getElementById("player");
const mouse = document.getElementById("mouse");
const msg = document.getElementById("msg");

let endGame = false;

function movePlayerLeft() {
  const leftNumbers = player.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    player.style.left = `${left - 5}px`;
  }
}

function movePlayerRight() {
  const rightNumbers = player.style.left.replace("px", "");
  const right = parseInt(rightNumbers, 10);

  if (right < 1200 - 80) {
    player.style.left = `${right + 5}px`;
  }
}

function movePlayerUp() {
  const upNumbers = player.style.bottom.replace("px", "");
  const up = parseInt(upNumbers, 10);

  if (up < 800 - 69) {
    player.style.bottom = `${up + 5}px`;
  }
}

function movePlayerDown() {
  const downNumber = player.style.bottom.replace("px", "");
  const down = parseInt(downNumber, 10);

  if (down > 0) {
    player.style.bottom = `${down - 5}px`;
  }
}

function moveMouseRight() {
  const rightNumber = mouse.style.left.replace("px", "");
  const right = parseInt(rightNumber, 10);

  if (right < 1200 - 60) {
    mouse.style.left = `${right + 15}px`;
  }
}
function moveMouseLeft() {
  const leftNumber = mouse.style.left.replace("px", "");
  const left = parseInt(leftNumber, 10);

  if (left > 0) {
    mouse.style.left = `${left - 15}px`;
  }
}
function moveMouseUp() {
  const upNumber = mouse.style.bottom.replace("px", "");
  const up = parseInt(upNumber, 10);

  if (up < 800 - 60) {
    mouse.style.bottom = `${up + 15}px`;
  }
}
function moveMouseDown() {
  const downNumber = mouse.style.bottom.replace("px", "");
  const down = parseInt(downNumber, 10);

  if (down > 0) {
    mouse.style.bottom = `${down - 15}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight" && endGame === false) {
    movePlayerRight();
    mouseIdleMovement();
  }
  if (e.key === "ArrowLeft" && endGame === false) {
    movePlayerLeft();
    mouseIdleMovement();
  }
  if (e.key === "ArrowUp" && endGame === false) {
    movePlayerUp();
    mouseIdleMovement();
  }
  if (e.key === "ArrowDown" && endGame === false) {
    movePlayerDown();
    mouseIdleMovement();
  }
  let mouseBox = mouse.getBoundingClientRect();
  let playerBox = player.getBoundingClientRect();
  let overlapping = !(
    mouseBox.right < playerBox.left ||
    mouseBox.left > playerBox.right ||
    mouseBox.bottom < playerBox.top ||
    mouseBox.top > playerBox.bottom
  );
  if (overlapping) {
    endGame = true;
  }
  if (endGame === true) {
    msg.style.visibility = "visible";
  }
});

function mouseIdleMovement() {
  let randomNumber = Math.floor(Math.random() * 4);

  switch (randomNumber) {
    case 0:
      moveMouseDown();
      break;
    case 1:
      moveMouseUp();
      break;
    case 2:
      moveMouseLeft();
      break;
    case 3:
      moveMouseRight();
      break;
  }
}
