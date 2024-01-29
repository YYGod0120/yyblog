import { splitPathname } from "@/utils/dealPathname";
import { usePathname } from "next/navigation";
import { ReactTyped } from "react-typed";
export const MyTypeWrite = () => {
  const pathname = usePathname();
  const title = splitPathname(pathname);
  return (
    <ReactTyped
      strings={[title]}
      typeSpeed={50}
      style={{
        display: "flex",
        lineHeight: "250px",
        fontSize: "4rem",
        justifyContent: "center",
        color: "white",
      }}
    />
  );
};
