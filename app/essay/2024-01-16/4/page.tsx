import "../../essay.css";
import Image from "next/image";
// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
export default function Page() {
  return (
    <div className=" mt-8 bg-white w-[60vw] flex flex-col items-start text-lg">
      <span className="text-4xl text-left px-24 pt-12 text-visit-font font-bold">
        testImg
      </span>
      <span className=" text-[#86909C] px-24 pt-5 text-xl mb-5">
        Categories: 123 &nbsp; &nbsp; 2024-01-16
      </span>
      <div className="flex text-start flex-col pb-12 px-24 w-[50vw]">
        <Image
          src="/imgs/武汉之行/gudexuegao.JPG"
          alt="古德寺特色雪糕"
          width="700"
          height="450"
        />

        <SyntaxHighlighter
          language="javascript"
          style={oneLight}
          showLineNumbers
        >{`import dayjs from "dayjs"\;

const thisYear \= dayjs\(\)\.format\("YYYY"\)\;

export const yearRange \= \`2023 \- \$\{thisYear\}\`\;

export function UTCToString\(date\: string\)\: string \{
  return dayjs\(date\)\.format\("YYYY\-MM\-DD"\)\;
\}
`}</SyntaxHighlighter>
        <p>
          <strong>加粗呢</strong>
        </p>
        <p>
          <del>删除线呢</del>
        </p>
        <p>
          <code>help</code>
        </p>
        <blockquote>
          <p>引用</p>
        </blockquote>
        <p>
          <a href="https://github.com/">外部链接</a>
        </p>
        <h1>1</h1>
        <h2>2</h2>
        <h3>3</h3>
        <h4>4</h4>
        <p>还有标签：</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>
            3
            <ol>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
  );
}
