import Image from "next/image";
import dynamic from "next/dynamic";
//@ts-ignore
import test from "@/public/imgs/React19-BETA/test.png";
//@ts-ignore
import compiler from "@/public/imgs/React19-BETA/compiler.png";
// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "@/app/[language]/essay/essay.css";

//i18n
import { useTranslation } from "@/app/i18n";

export default async function Page({
  params: { language },
}: {
  params: { language: string };
}) {
  const { t } = await useTranslation(language, "essay-React19");
  const Comment = dynamic(() => import("@/app/[language]/components/Comment"), {
    ssr: false,
  });
  return (
    <div>
      <div className="mt-8 flex flex-col items-start rounded-sm bg-white text-lg shadow-lg">
        <span className="px-4 pt-12 text-left text-4xl font-bold text-visit-font md:px-[2.5vw] lg:px-20">
          React19-BETA
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Technology &nbsp; 2024-05-26
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <h1>React19</h1>
          <p>{t("ReactPublish")}</p>
          <p>{t("tryIt")}</p>
          <h2>{t("Prepare")}</h2>
          <p>
            {t("Advice")}
            {t("checkOver")}
            <a href="https://react.dev/blog/2024/04/25/react-19-upgrade-guide#typescript-changes">
              {t("Guide")}
            </a>
          </p>
          <h2>{t("difference")}</h2>
          <p>{t("rollout")}</p>
          <p>
            <strong>{t("majorchanges")}</strong>
          </p>
          <ul>
            <li>{t("change1")}</li>
            <li>
              Actions：{t("new")}
              <code>&lt;form&gt;</code>
              {t("change2")}
            </li>
            <li>
              New Hooks：{t("change3")}
              <code>use()</code>
              {t("andsoon")}。
            </li>
            <li>Document Metadata：{t("change4")}</li>
            <li>Web components：{t("change5")}</li>
          </ul>
          <h3>React-Compiler</h3>
          <p>
            {t("compiler")}
            {t("simple")}
          </p>
          <p>{t("easily")}</p>
          <p>
            {t("eaasy1")}
            <a href="https://mp.weixin.qq.com/s/7XFn56O3ia5vHPqSaeo6GA">
              {t("eassay1title")}
            </a>
          </p>
          <p>{t("check")}</p>
          <SyntaxHighlighter
            language="shell"
            style={oneLight}
            showLineNumbers
          >{`npx react\-compiler\-healthcheck
`}</SyntaxHighlighter>
          <blockquote>
            <p>{t("shell")}</p>
          </blockquote>
          <p>
            {t("result")}
            <Image
              src={test}
              alt="react-server-components"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            {t("ways")}
          </p>
          <SyntaxHighlighter
            language="shell"
            style={oneLight}
            showLineNumbers
          >{`npm install next\@canary babel\-plugin\-react\-compiler`}</SyntaxHighlighter>
          <p>
            {t("then")}
            <code>next.config.js</code>:
          </p>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`\/\/ next\.config\.js
\/\*\* \@type \{import\('next'\)\.NextConfig\} \*\/
const nextConfig \= \{
  experimental\: \{
    reactCompiler\: true\,
  \}\,
\}\;

module\.exports \= nextConfig\;
`}</SyntaxHighlighter>
          <p>
            {t("start")}
            {t("end")}
            <Image
              src={compiler}
              alt="react-server-components"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </p>
          <blockquote>
            <p>{t("problems")}</p>
          </blockquote>
          <h3>New Hooks</h3>
          <p>
            {t("hooks")}
            <code>use()</code>,<code>useOptimistic()</code>,
            <code>useFormStatus()</code>
            {t("foraction")}
            <code>&lt;form&gt;</code>
            {t("foraction2")}。
          </p>
          <p>
            {t("use1")}
            <code>use()</code>。
          </p>
          <p>{t("use2")}</p>
          <p>{t("principle")}</p>
          <blockquote>
            <p>{t("mainpri")}</p>
          </blockquote>
          <p>{t("basicUsage")}</p>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`const value \= use\(resource\)\;
`}</SyntaxHighlighter>
          <p>
            <strong>{t("notice")}</strong>
          </p>
          <ul>
            <li>{t("inHook")}</li>
            <li>{t("inService")}</li>
            <li>{t("principle2")}</li>
            <li>{t("principle3")}</li>
          </ul>
          <p>{t("usage2")}</p>
          <SyntaxHighlighter
            language="jsx"
            style={oneLight}
            showLineNumbers
          >{`"use client"\;
import \{ Suspense \} from "react"\;
import \{ GhostPointer \} from "\.\/GhostPointer"\;
import \{ MyTypeWrite \} from "\.\/TypeWrite"\;
import \{ DailyWord \} from "\@\/utils\/getDailyWord"\;
import ErrorBoundary from "\.\/ErrorBoundary"\;

export function Banner\(\{
  language\,
  isGetDailyWord\,
  wordsFetch\,
\}\: \{
  wordsFetch\?\: Promise\<DailyWord\>\;
  language\: string\;
  isGetDailyWord\: boolean\;
\}\) \{
  return \(
    \<ErrorBoundary
      fallback\=\{
        \<GhostPointer\>
          \<span
            style\=\{\{
              display\: "flex"\,
              lineHeight\: "250px"\,
              fontSize\: "4rem"\,
              justifyContent\: "center"\,
              color\: "white"\,
            \}\}
          \>
            \⚠\️Something went wrong
          \<\/span\>
        \<\/GhostPointer\>
      \}
    \>
      \<Suspense
        fallback\=\{
          \<GhostPointer\>
            \<span
              style\=\{\{
                display\: "flex"\,
                lineHeight\: "250px"\,
                fontSize\: "4rem"\,
                justifyContent\: "center"\,
                color\: "white"\,
              \}\}
            \>
              Loading\.\.\.
            \<\/span\>
          \<\/GhostPointer\>
        \}
      \>
        \<GhostPointer\>
          \<MyTypeWrite
            language\=\{language\}
            wordsFetch\=\{wordsFetch\}
            isGetDailyWord\=\{isGetDailyWord\}
          \/\>
        \<\/GhostPointer\>
      \<\/Suspense\>
    \<\/ErrorBoundary\>
  \)\;
\}
`}</SyntaxHighlighter>
          <p>{t("principle4")}</p>
          <SyntaxHighlighter
            language="tsx"
            style={oneLight}
            showLineNumbers
          >{`\/\/layout
import \{ Banner \} from "\.\.\/components\/Banner"\;
import \{ getDailyWord \} from "\@\/utils\/getDailyWord"\;

export default async function FrontLayout\(\{
  children\,
  params\: \{ language \}\,
\}\: \{
  children\: React\.ReactNode\;
  params\: \{ language\: string \}\;
\}\) \{
  const wordsFetch \= getDailyWord\(\)\;
  return \(
    \<div className\="flex flex\-col items\-center"\>
      \<div className\="w\-\[100vw\]"\>
        \<Banner
          language\=\{language\}
          isGetDailyWord\=\{true\}
          wordsFetch\=\{wordsFetch\}
        \>\<\/Banner\>
      \<\/div\>
      \<section className\="w\-full"\>\{children\}\<\/section\>
    \<\/div\>
  \)\;
\}
\/\/TypeWrite
\("use client"\)\;
import \{ usePathname \} from "next\/navigation"\;
import \{ ReactTyped \} from "react\-typed"\;
import \{ getDailyWord \} from "\@\/utils\/getDailyWord"\;
import \{ Suspense\, use\, useState \} from "react"\;
import \{ DailyWord \} from "\@\/utils\/getDailyWord"\;
import \{ splitPathname \} from "\@\/utils\/dealPathname"\;
import \{ useTranslation \} from "\@\/app\/i18n\/client"\;
export function MyTypeWrite\(\{
  language\,
  isGetDailyWord\,
  wordsFetch\,
\}\: \{
  language\: string\;
  isGetDailyWord\: boolean\;
  wordsFetch\?\: Promise\<DailyWord\>\;
\}\) \{
  let word\;
  const pathName \= usePathname\(\)\;
  const title \= splitPathname\(pathName\)\;
  const \{ t \} \= useTranslation\(language\, "translations"\)\;
  if \(isGetDailyWord \&\& wordsFetch\) \{
    const words \= use\(wordsFetch\)\;
    word \= language \=\=\= "zh\-CN" \? words\.note \: words\.content\;
  \}
  return \(
    \<ReactTyped
      strings\=\{\!word \? \[t\(title\)\] \: \[word\]\}
      typeSpeed\=\{50\}
      style\=\{\{
        display\: "flex"\,
        lineHeight\: "250px"\,
        fontSize\: "4rem"\,
        justifyContent\: "center"\,
        color\: "white"\,
      \}\}
    \/\>
  \)\;
\}
`}</SyntaxHighlighter>
          <p>{t("final")}</p>
          <h3>{t("other")}</h3>
          <p>{t("more")}</p>
          <p>{t("otherway")}</p>
          <p>{t("badref")}</p>
          <p>{t("moremore")}</p>
          <p>{t("forProduction")}</p>
          <p>
            <a href="https://react.dev/blog/2024/04/25/react-19">{t("blog")}</a>
          </p>
          <p>
            <a href="https://react.dev/reference/react/use">{t("aboutUse")}</a>
          </p>
          <p>
            <a href="https://react.dev/learn/react-compiler#">
              {t("aboutCompiler")}
            </a>
          </p>
        </div>
      </div>
      <div className="mt-12 bg-white px-6 py-8">
        <Comment />
      </div>
    </div>
  );
}
