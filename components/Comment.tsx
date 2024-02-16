"use client";
import { useEffect, useState } from "react";
import "../styles/loading.css";
export default function Comments() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    componentDidMount();
  }, []);
  function componentDidMount() {
    let script = document.createElement("script");
    let anchor = document.getElementById("inject-comments-for-uterances");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "true");
    script.setAttribute("repo", "YYGod0120/yyblog");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light");
    anchor!.appendChild(script);
    script.onload = () => {
      const iframe = document.querySelector("iframe");
      if (iframe) {
        iframe.onload = () => {
          setIsLoading(false);
        };
      } else {
        console.log("iframe not found");
      }
    };
  }

  return (
    <div className="text-3xl font-bold text-visit-font">
      {!isLoading ? <div>欢迎留下意见~</div> : <div className="load"></div>}
      <div id="inject-comments-for-uterances" />
    </div>
  );
}
