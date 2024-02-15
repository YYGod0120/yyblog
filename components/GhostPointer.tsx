import React, { ReactNode } from "react";
import Script from "next/script";
import "@/styles/ghost-pointer.css";

type GhostPointerProps = {
  children?: ReactNode;
};

export function GhostPointer({ children }: GhostPointerProps) {
  return (
    <div className="h-[250px] bg-[#2C3E50] w-[100vw] md:block hidden">
      <div id="ghost" className="ghost">
        <div className="ghost__head">
          <div className="ghost__eyes"></div>
          <div className="ghost__mouth"></div>
        </div>
        <div className="ghost__tail">
          <div className="ghost__rip"></div>
        </div>
      </div>
      {children}

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="ghost-blur"
            />
            <feColorMatrix
              in="ghost-blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 16 -7"
              result="ghost-gooey"
            />
          </filter>
        </defs>
      </svg>

      <Script id="ghost-cursor">
        {`let mouse = { x: window.innerWidth / 2, y: 150, dir: "" };
let clicked = false;

const getMouse = (e) => {
  // 获取鼠标垂直坐标
let mouseY = e.clientY || e.pageY || 0 || window.innerHeight / 2;

// 设置最大和最小高度限制
const maxY = 170;
const minY = 0;

// 限制鼠标垂直坐标在最大值和最小值之间
mouseY = Math.max(minY, Math.min(maxY, mouseY));
  mouse = {
    x: e.clientX || e.pageX  || 0 || window.innerWidth / 2,
    y:mouseY,
    dir: getMouse.x > e.clientX ? "left" : "right",
  };
};
["mousemove", "touchstart", "touchmove"].forEach((e) => {
  window.addEventListener(e, getMouse);
});
window.addEventListener("mousedown", (e) => {
  e.preventDefault();
  clicked = true;
});
window.addEventListener("mouseup", () => {
  clicked = false;
});

/*--------------------
Ghost Follow
--------------------*/
class GhostFollow {
  constructor(options) {
    Object.assign(this, options);

    this.el = document.querySelector("#ghost");
    this.mouth = document.querySelector(".ghost__mouth");
    this.eyes = document.querySelector(".ghost__eyes");
    this.pos = {
      x: 0,
      y: 0,
    };
  }

  follow() {
    this.distX = mouse.x - this.pos.x;
    this.distY = mouse.y - this.pos.y;

    this.velX = this.distX / 8;
    this.velY = this.distY / 8;

    this.pos.x += this.distX / 10;
    this.pos.y += this.distY / 10;

    this.skewX = map(this.velX, 0, 100, 0, -50);
    this.scaleY = map(this.velY, 0, 100, 1, 2.0);
    this.scaleEyeX = map(Math.abs(this.velX), 0, 100, 1, 1.2);
    this.scaleEyeY = map(Math.abs(this.velX * 2), 0, 100, 1, 0.1);
    this.scaleMouth = Math.min(
      Math.max(
        map(Math.abs(this.velX * 1.5), 0, 100, 0, 10),
        map(Math.abs(this.velY * 1.2), 0, 100, 0, 5)
      ),
      2
    );

    if (clicked) {
      this.scaleEyeY = 0.4;
      this.scaleMouth = -this.scaleMouth;
    }

    this.el.style.transform =
      "translate(" +
      this.pos.x +
      "px, " +
      this.pos.y + 
      "px) scale(.5) skew(" +
      this.skewX +
      "deg) rotate(" +
      -this.skewX +
      "deg) scaleY(" +
      this.scaleY +
      ")";
    this.eyes.style.transform =
      "translateX(-50%) scale(" + this.scaleEyeX + "," + this.scaleEyeY + ")";
    this.mouth.style.transform =
      "translate(" +
      (-this.skewX * 0.5 - 10) +
      "px) scale(" +
      this.scaleMouth +
      ")";
  }
}

/*--------------------
Map
--------------------*/
function map(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

/*--------------------
Init
--------------------*/
const cursor = new GhostFollow();

/*--------------------
Render
--------------------*/
const render = () => {
  requestAnimationFrame(render);
  cursor.follow();
};
render();`}
      </Script>
    </div>
  );
}
