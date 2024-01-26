import React from "react";

export default function page() {
  return (
    <div className=" bg-white px-14 py-10 flex flex-col text-start mt-8 shadow-lg rounded w-[53vw]">
      <div className="text-3xl mb-5 font-bold cursor-default">About me</div>
      <div className="ml-3 text-lg">
        <li className="mb-5">
          💬 Welcome here, I am YYGod. This is my personal blog where I share my
          study,life technology, and some of my funny thoughs.
        </li>
        <li className="mb-5">
          👨‍💻 I am a front-end engineer from CQUPT. I currently work for the
          school-level organization RedRock Team.
          <a
            href="https://redrock.team/"
            className=" no-underline hover-underline-animation text-visit-font"
          >
            Click to visit our official website.
          </a>
        </li>
        <li className="mb-5">
          🤝 I like fitness, code, travel and games.This is my{" "}
          <a
            href="https://steamcommunity.com/id/WANGPUMING/"
            className=" no-underline hover-underline-animation text-visit-font"
          >
            steam.
          </a>
          You also can contact me with 2569630663@qq.com
        </li>
        <li className="mb-5">
          🌱 This blog was built through next and is not perfect, but if you
          like it, you can click below to go to github and give it a thumbs up.
          (The style comes from the blog of{" "}
          <a
            href="https://github.com/tw93"
            className=" no-underline hover-underline-animation text-visit-font"
          >
            tw93
          </a>
          ){" "}
        </li>
      </div>
    </div>
  );
}
