import { splitPathname } from "@/utils/dealPathname";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const MyTypeWrite = () => {
  const pathname = usePathname();
  const title = splitPathname(pathname);
  if (title === "About") {
    return (
      <TypeAnimation
        sequence={["About me"]}
        wrapper="div"
        cursor={true}
        repeat={1}
        speed={50}
        style={{
          fontSize: "4em",
          textAlign: "center",
          color: "white",
          lineHeight: "250px",
        }}
      />
    );
  } else if (title === "Categories") {
    return (
      <TypeAnimation
        sequence={["Categories"]}
        wrapper="div"
        cursor={true}
        repeat={1}
        speed={50}
        style={{
          fontSize: "4em",
          textAlign: "center",
          color: "white",
          lineHeight: "250px",
        }}
      />
    );
  } else if (title === "404") {
    return (
      <TypeAnimation
        sequence={["404"]}
        wrapper="div"
        cursor={true}
        repeat={1}
        speed={50}
        style={{
          fontSize: "4em",
          textAlign: "center",
          color: "white",
          lineHeight: "250px",
        }}
      />
    );
  } else {
    return (
      <TypeAnimation
        sequence={[title]}
        wrapper="div"
        cursor={true}
        repeat={1}
        speed={50}
        style={{
          fontSize: "4em",
          textAlign: "center",
          color: "white",
          lineHeight: "250px",
        }}
      />
    );
  }
};
