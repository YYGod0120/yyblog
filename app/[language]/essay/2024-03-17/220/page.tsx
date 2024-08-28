import Image from "next/image";
import dynamic from "next/dynamic";

// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "@/app/[language]/essay/essay.css";
import { useTranslation } from "@/app/i18n";
export default async function Page({
  params: { language },
}: {
  params: { language: string };
}) {
  const Comment = dynamic(() => import("@/app/[language]/components/Comment"), {
    ssr: false,
  });
  const { t } = await useTranslation(language, "essay-XHRvsFetch");
  return (
    <div>
      <div className="mt-8 flex flex-col items-start rounded-sm bg-white text-lg shadow-lg">
        <span className="px-4 pt-12 text-left text-4xl font-bold text-visit-font md:px-[2.5vw] lg:px-20">
          XHRvsFetch
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Technology &nbsp; 2024-03-17
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <h1>{t("0")}</h1>
          <p>{t("1")}</p>
          <p>{t("2")}</p>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`\/\/\核\心\代\码
async function run\(\) \{
  aborter\.abort\(\)\; \/\/ cancel previous request
  outputEl\.innerText \= ""\;
  aborter \= new AbortController\(\)\;
  const prompt \= new FormData\(formEl\)\.get\("prompt"\)\;
  try \{
    const response \= await fetch\("http\:\/\/192\.168\.223\.26\:5000\/chain"\, \{
      signal\: aborter\.signal\,
      method\: "POST"\,
      headers\: \{ "Content\-Type"\: "application\/json" \}\,
      body\: JSON\.stringify\(\{
        prompt\,
      \}\)\,
    \}\)\;
    const reader \= response\.body\.getReader\(\)\;
    const decoder \= new TextDecoder\(\)\;
    while \(true\) \{
      const \{ done\, value \} \= await reader\.read\(\)\;
      if \(done\) \{
        break\;
      \}
      const decoded \= decoder\.decode\(value\, \{ stream\: true \}\)\;
      console\.log\(decoded\)\;
      outputEl\.innerText \+\= decoded\;
    \}
  \} catch \(err\) \{
    console\.error\(err\)\;
  \}
\}
`}</SyntaxHighlighter>
          <p>
            {t("3")}
            <code>Axios</code>
            {t("4")}
            <code>Fetch</code>
          </p>
          <h1>{t("5")}</h1>
          <p>
            <code>Axios</code>
            {t("6")}
            <code>Promise</code>
            {t("7")}
          </p>
          <p>
            {t("8")}
            <a href="https://axios-http.com/zh/docs/intro">{t("9")}</a>
            {t("10")}
          </p>
          <p>
            {t("11")}
            <strong>{t("12")}</strong>
            {t("13")}
          </p>
          <p>{t("14")}</p>
          <h2>{t("15")}</h2>
          <p>{t("16")}</p>
          <p>{t("17")}</p>
          <p>
            <strong>
              {t("18")}
              <code>XMLHttpRequest</code>
            </strong>
          </p>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`let xhr \= new XMLHttpRequest\(\)\;
`}</SyntaxHighlighter>
          <p>
            <strong>{t("19")}</strong>
          </p>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`xhr\.open\(method\, URL\, \[async\, user\, password\]\)\;
`}</SyntaxHighlighter>
          <ul>
            <li>{t("20")}</li>
            <li>{t("21")}</li>
            <li>{t("22")}</li>
            <li>{t("23")}</li>
          </ul>
          <p>
            <strong>{t("24")}</strong>
          </p>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`xhr\.send\(\[body\]\)\;
`}</SyntaxHighlighter>
          <p>
            <strong>{t("25")}</strong>
          </p>
          <ul>
            <li>{t("26")}</li>
            <li>{t("27")}</li>
            <li>{t("28")}</li>
          </ul>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`xhr\.onload \= function \(\) \{
  alert\(\`Loaded\: \$\{xhr\.status\} \$\{xhr\.response\}\`\)\;
\}\;

xhr\.onerror \= function \(\) \{
  \/\/ \仅\在\根\本\无\法\发\出\请\求\时\触\发
  alert\(\`Network Error\`\)\;
\}\;

xhr\.onprogress \= function \(event\) \{
  \/\/ \定\期\触\发
  \/\/ event\.loaded \—\— \已\经\下\载\了\多\少\字\节
  \/\/ event\.lengthComputable \= true\，\当\服\务\器\发\送\了 Content\-Length header \时
  \/\/ event\.total \—\— \总\字\节\数\（\如\果 lengthComputable \为 true\）
  alert\(\`Received \$\{event\.loaded\} of \$\{event\.total\}\`\)\;
\}\;
`}</SyntaxHighlighter>
          <p>{t("29")}</p>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`let xhr \= new XMLHttpRequest\(\)\;

xhr\.open\("GET"\, "\/my\/url"\)\;

xhr\.send\(\)\;

xhr\.onload \= function \(\) \{
  if \(xhr\.status \!\= 200\) \{
    \/\/ HTTP error\?
    \/\/ \处\理 error
    alert\("Error\: " \+ xhr\.status\)\;
    return\;
  \}

  \/\/ \获\取\来\自 xhr\.response \的\响\应
\}\;

xhr\.onprogress \= function \(event\) \{
  \/\/ \报\告\进\度
  alert\(\`Loaded \$\{event\.loaded\} of \$\{event\.total\}\`\)\;
\}\;

xhr\.onerror \= function \(\) \{
  \/\/ \处\理\非 HTTP error\（\例\如\网\络\中\断\）
\}\;
`}</SyntaxHighlighter>
          <h3>{t("30")}</h3>
          <p>{t("31")}</p>
          <p>{t("32")}</p>
          <ul>
            <li>{t("33")}</li>
            <li>{t("34")}</li>
            <li>{t("35")}</li>
            <li>{t("36")}</li>
            <li>{t("37")}</li>
            <li>{t("38")}</li>
            <li>{t("39")}</li>
          </ul>
          <p>{t("40")}</p>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`xhr\.upload\.onprogress \= function \(event\) \{
  alert\(\`Uploaded \$\{event\.loaded\} of \$\{event\.total\} bytes\`\)\;
\}\;

xhr\.upload\.onload \= function \(\) \{
  alert\(\`Upload finished successfully\.\`\)\;
\}\;

xhr\.upload\.onerror \= function \(\) \{
  alert\(\`Error during the upload\: \$\{xhr\.status\}\`\)\;
\}\;
`}</SyntaxHighlighter>
          <h1>{t("41")}</h1>
          <p>{t("42")}</p>
          <p>{t("43")}</p>
          <ul>
            <li>{t("44")}</li>
            <li>{t("45")}</li>
            <li>{t("46")}</li>
          </ul>
          <p>{t("47")}</p>
          <ul>
            <li>{t("48")}</li>
            <li>{t("49")}</li>
            <li>{t("50")}</li>
            <li>{t("51")}</li>
            <li>{t("52")}</li>
          </ul>
          <p>{t("53")}</p>
          <h2>{t("54")}</h2>
          <p>{t("55")}</p>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`let promise \= fetch\(url\, \[options\]\)\;
`}</SyntaxHighlighter>
          <p>{t("56")}</p>
          <p>
            <strong>{t("57")}</strong>
          </p>
          <p>{t("58")}</p>
          <blockquote>
            <p>{t("59")}</p>
          </blockquote>
          <p>
            <strong>{t("60")}</strong>
          </p>
          <p>{t("61")}</p>
          <ul>
            <li>
              <p>{t("62")}</p>
            </li>
            <li>
              <p>{t("63")}</p>
            </li>
            <li>
              <p>{t("64")}</p>
            </li>
            <li>
              <p>{t("65")}</p>
            </li>
            <li>
              <p>{t("66")}</p>
              <p>{t("67")}</p>
            </li>
          </ul>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`const response \= await fetch\("http\:\/\/192\.168\.223\.26\:5000\/chain"\, \{
  signal\: aborter\.signal\,
  method\: "POST"\,
  headers\: \{ "Content\-Type"\: "application\/json" \}\,
  body\: JSON\.stringify\(\{
    prompt\,
  \}\)\,
\}\)\;
const reader \= response\.body\.getReader\(\)\;
`}</SyntaxHighlighter>
          <blockquote>
            <p>{t("68")}</p>
          </blockquote>
          <h1>{t("69")}</h1>
          <p>{t("70")}</p>
          <p>{t("71")}</p>
          <p>{t("72")}</p>
          <ul>
            <li>{t("73")}</li>
            <li>{t("74")}</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 bg-white px-6 py-8">
        <Comment />
      </div>
    </div>
  );
}
