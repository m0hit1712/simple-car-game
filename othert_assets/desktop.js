document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      document.getElementById("left_arr").style.backgroundColor = "red";
      setTimeout(function () {
        document.getElementById("left_arr").style.backgroundColor =
          "rgb(25, 248, 81)";
      }, 300);
      reverse();
      break;
    case 38:
      document.getElementById("up_arr").style.backgroundColor = "red";
      setTimeout(function () {
        document.getElementById("up_arr").style.backgroundColor =
          "rgb(25, 248, 81)";
      }, 300);
      speedup();
      break;
    case 39:
      document.getElementById("right_arr").style.backgroundColor = "red";
      setTimeout(function () {
        document.getElementById("right_arr").style.backgroundColor =
          "rgb(25, 248, 81)";
      }, 300);
      forward();
      break;
    case 40:
      document.getElementById("down_arr").style.backgroundColor = "red";
      setTimeout(function () {
        document.getElementById("down_arr").style.backgroundColor =
          "rgb(25, 248, 81)";
      }, 300);
      speeddown();
      break;
    case 32:
      document.getElementById("space_bar").style.backgroundColor = "red";
      setTimeout(function () {
        document.getElementById("space_bar").style.backgroundColor =
          "rgb(25, 248, 81)";
      }, 300);
      stop();
  }
};
move = document.getElementById("move");
w = document.getElementsByClassName("wheels");
back = document.getElementById("back");
var i = 0,
  j = 0,
  speed = 0;
var reverseit, runit;
function forward() {
  if (!runit && !reverseit) {
    stop();
    runit = setInterval(run, 10);
    clearInterval(reverseit);
  }
}
function run() {
  if (speed == 0) {
    speedup();
  }
  digital_set();
  move.style.left = i;
  back.style.width = i + 1400;
  i = i + speed;
  w[0].style.transform = "rotate(" + i * 1.8 + "deg)";
  w[1].style.transform = "rotate(" + i * 1.8 + "deg)";
  scroller.style.width = "100%";
  scroller.scrollLeft = i + 1000;
}
function speedup() {
  if (speed > 19) {
    document.getElementById("speed_lab").style.color = "red";
    document.getElementById("digital_speed").style.color = "red";
  }
  digital_set();
  speedometer();
  if (speed < 30 && (runit || reverseit)) {
    speed++;
  }
}
function speeddown() {
  if (speed <= 20) {
    document.getElementById("speed_lab").style.color = "white";
    document.getElementById("digital_speed").style.color = "rgb(0, 195, 255)";
  }
  digital_set();
  speedometer();
  if (speed > 1 && (runit || reverseit)) {
    speed--;
  }
}
function reverse() {
  if (!runit && !reverseit) {
    stop();
    if (move.style.left != 0) {
      reverseit = setInterval(reverser, 10);
    }
  }
}
function reverser() {
  if (speed == 0) {
    speedup();
  }
  digital_set();
  move.style.left = i;
  i = i - speed;
  back.style.width = i + 1400;
  w[0].style.transform = "rotate(" + i * 1.8 + "deg)";
  w[1].style.transform = "rotate(" + i * 1.8 + "deg)";
  scroller.style.width = "100%";
  scroller.scrollRight = i - 100;
  if (i < 0) {
    stop();
  }
}
function stop() {
  if (runit) {
    var st = speed * 10;
    stopact = setInterval(stopitact, 50);
    function stopitact() {
      move.style.transform = "rotate(" + st / 10 + "deg)";
      move.style.bottom = st / 5;
      move.style.left = move.style.left + st / 2;
      st = st - speed;
      if (st == 0) {
        move.style.transform = "rotate(0deg)";
        clearInterval(stopact);
        move.style.bottom = "0";
        speed = 0;
        speedometer();
        digital_set();
      }
    }
  }
  if (reverseit) {
    var st = speed * 10;
    stopact = setInterval(stopitact, 50);
    function stopitact() {
      move.style.transform = "rotate(" + -st / 10 + "deg)";
      move.style.bottom = st / 30;
      move.style.left = move.style.left + -st / 2;
      st = st - speed;
      if (st == 0) {
        move.style.transform = "rotate(0deg)";
        clearInterval(stopact);
        move.style.bottom = "0";
        speed = 0;
        speedometer();
        digital_set();
      }
    }
  }
  for (var i = 0; i < reverseit; i++) {
    window.clearInterval(i);
  }
  for (var i = 0; i < runit; i++) {
    window.clearInterval(i);
  }
  clearInterval(runit);
  runit = null;
  clearInterval(reverseit);
  reverseit = null;
}
function carchanger(choice) {
  carimg = document.getElementById("car2");
  wheellimg = document.getElementsByClassName("ww");
  wheels = document.getElementsByClassName("wheels");
  w2 = document.getElementById("w2");
  car = document.getElementById("car2");
  selected1 = document.getElementById("c1");
  selected2 = document.getElementById("c2");
  selected3 = document.getElementById("c3");
  if (choice == 1) {
    carimg.src = "./othert_assets/car1.png";
    wheellimg[0].src = "./othert_assets/wheel1.png";
    wheellimg[1].src = "./othert_assets/wheel1.png";
    wheels[0].style.marginLeft = "30px";
    wheels[0].style.marginTop = "-24px";
    wheels[1].style.marginTop = "-24px";
    w2.style.marginLeft = "112px";
    car.style.marginTop = "14px";
    car.style.height = "80px";
    selected1.style.border = "4px red solid";
    selected1.style.marginTop = "-15px";
    selected1.style.backgroundColor = "grey";
    selected2.style.marginTop = "0px";
    selected2.style.border = "none";
    selected3.style.marginTop = "0px";
    selected3.style.border = "none";
  } else if (choice == 2) {
    carimg.src = "./othert_assets/car2.png";
    wheellimg[0].src = "./othert_assets/wheel2.png";
    wheellimg[1].src = "./othert_assets/wheel2.png";
    wheels[0].style.marginLeft = "45px";
    wheels[0].style.marginTop = "-25px";
    wheels[1].style.marginTop = "-25px";
    w2.style.marginLeft = "92px";
    car.style.marginTop = "10px";
    car.style.height = "80px";
    selected2.style.border = "4px red solid";
    selected2.style.marginTop = "-15px";
    selected2.style.backgroundColor = "grey";
    selected1.style.marginTop = "0px";
    selected1.style.border = "none";
    selected3.style.marginTop = "0px";
    selected3.style.border = "none";
  } else if (choice == 3) {
    carimg.src = "./othert_assets/car3.png";
    wheellimg[0].src = "./othert_assets/wheel3.png";
    wheellimg[1].src = "./othert_assets/wheel3.png";
    wheels[0].style.marginLeft = "39px";
    wheels[0].style.marginTop = "-25px";
    wheels[1].style.marginTop = "-25px";
    w2.style.marginLeft = "85px";
    car.style.marginTop = "-10px";
    car.style.height = "115px";
    selected3.style.backgroundColor = "grey";
    selected3.style.marginTop = "-15px";
    selected3.style.border = "4px red solid";
    selected2.style.border = "none";
    selected2.style.marginTop = "0px";
    selected1.style.marginTop = "0px";
    selected1.style.border = "none";
  }
}
function selchanger() {
  btn = document.getElementById("changeselector");
  cselect = document.getElementById("carselectors");
  bselect = document.getElementById("backselectors");
  if (btn.innerHTML == "Background") {
    bselect.style.display = "block";
    cselect.style.display = "none";
    btn.innerHTML = "Vehicles";
  } else {
    bselect.style.display = "none";
    cselect.style.display = "block";
    btn.innerHTML = "Background";
  }
}
function backchanger(choice) {
  selected1 = document.getElementById("ba1");
  selected2 = document.getElementById("ba2");
  selected3 = document.getElementById("ba3");
  back = document.getElementById("back");
  if (choice == 1) {
    selected1.style.border = "4px red solid";
    selected1.style.marginTop = "-15px";
    selected1.style.backgroundColor = "grey";
    selected2.style.marginTop = "0px";
    selected2.style.border = "none";
    selected3.style.marginTop = "0px";
    selected3.style.border = "none";
    back.style.backgroundImage = "url('./othert_assets/background.png')";
  } else if (choice == 2) {
    selected2.style.border = "4px red solid";
    selected2.style.marginTop = "-15px";
    selected2.style.backgroundColor = "grey";
    selected1.style.marginTop = "0px";
    selected1.style.border = "none";
    selected3.style.marginTop = "0px";
    selected3.style.border = "none";
    back.style.backgroundImage = "url('./othert_assets/background2.jpg')";
  } else {
    selected3.style.backgroundColor = "grey";
    selected3.style.marginTop = "-15px";
    selected3.style.border = "4px red solid";
    selected2.style.border = "none";
    selected2.style.marginTop = "0px";
    selected1.style.marginTop = "0px";
    selected1.style.border = "none";
    back.style.backgroundImage = "url('./othert_assets/background3.png')";
  }
}
function speedometer() {
  document.getElementById("pointer").style.transform =
    "rotate(" + speed * 6 + "deg)";
}
function digital_set() {
  if ((speed * 10) / 3 < 10) {
    document.getElementById("speed_lab").innerHTML =
      "speed: 00" + Math.floor((speed * 10) / 3);
    document.getElementById("digital_speed").innerHTML =
      "00" + Math.floor((speed * 10) / 3);
  } else if ((speed * 10) / 3 < 100) {
    document.getElementById("speed_lab").innerHTML =
      "speed: 0" + Math.floor((speed * 10) / 3);
    document.getElementById("digital_speed").innerHTML =
      "0" + Math.floor((speed * 10) / 3);
  } else {
    document.getElementById("speed_lab").innerHTML =
      "speed: " + Math.floor((speed * 10) / 3);
    document.getElementById("digital_speed").innerHTML = Math.floor(
      (speed * 10) / 3
    );
  }
}
