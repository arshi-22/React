import confetti from "canvas-confetti";

var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
};

export function shoot() {
  confetti({
    ...defaults,
    particleCount: 200,
    scalar: 1.2,
    shapes: ["star"],
    origin: {
      y: 0.25,
    },
  });

  confetti({
    ...defaults,
    particleCount: 100,
    scalar: 0.75,
    shapes: ["circle"],
    origin: {
      y: 0.25,
    },
  });
}

export var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

export function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    ...defaults,
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      y: -0.1,
    },
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    shapes: ["star"],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4),
  });

  if (timeLeft > 10) {
    requestAnimationFrame(frame);
  }
}
