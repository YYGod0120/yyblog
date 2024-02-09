"use client";
import { useEffect } from "react";

export default function Comments() {
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
  }

  useEffect(() => {
    componentDidMount();
  }, []);

  return <div id="inject-comments-for-uterances" className="w-[900px]" />;
}
