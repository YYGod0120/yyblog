import { yaml } from "@/types/essay";

export default function Page(data: yaml) {
  return <h3>{data.title}</h3>;
}
