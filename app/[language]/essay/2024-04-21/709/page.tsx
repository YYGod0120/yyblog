import Image from "next/image";
import dynamic from "next/dynamic";
//@ts-ignore
import project0 from "@/public/imgs/MYCHAT/project0.png";
//@ts-ignore
import project1 from "@/public/imgs/MYCHAT/project1.png";
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(language, "essay-MYCHAT");
  return (
    <div>
      <div className="mt-8 flex flex-col items-start rounded-sm bg-white text-lg shadow-lg">
        <span className="px-4 pt-12 text-left text-4xl font-bold text-visit-font md:px-[2.5vw] lg:px-20">
          MYCHAT
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Project &nbsp; &nbsp; 2024-04-21
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <h1>{t("项目截图")}</h1>
          <Image
            src={project0}
            alt="项目截图1"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <Image
            src={project1}
            alt="项目截图2"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <h1>{t("技术选型")}</h1>
          <ol>
            <li>React</li>
            <li>Typescript</li>
            <li>Tailwind</li>
            <li>Axios</li>
            <li>Zustand</li>
            <li>marked-react,dayjs,file-saver</li>
          </ol>
          <h1>{t("项目亮点")}</h1>
          <ol>
            <li>
              <p>
                <strong>{t("不同语料库的对话：")}</strong>{" "}
                {t(
                  "可选择更贴切提问者问题内容的语料库主题，联系上下文，做出切合问题的优质回答。",
                )}
              </p>
            </li>
            <li>
              <p>
                <strong>{t("类GPT流的回答：")}</strong>{" "}
                {t("GPT流式回答与等待，自动转化md格式。")}
              </p>
            </li>
            <li>
              <p>
                <strong>{t("优秀的用户体验：")}</strong>{" "}
                {t(
                  "无痛刷新，最大程度减少加载，一键导出对话为word，一键删除以及自定义会话标题。",
                )}
              </p>
            </li>
          </ol>
          <h1>{t("实现难点")}</h1>
          <h2>{t("核心功能-AI对话")}</h2>
          <p>
            <strong>{t("流式对话：")}</strong>{" "}
            {t(
              "对于普通的get或者post请求，简单采用axios封装进行网络请求。而GPT对话流式数据，axios因为基于XHR没法做到post流式请求，改用fetch进行数据请求。",
            )}
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={oneLight}
            showLineNumbers
          >{`\/\/\基\本\封\装\双token\无\痛\刷\新
export const service \= axios\.create\(\{
  baseURL\: BASE_URL\,
  timeout\: 100000\,
\}\)\;
service\.interceptors\.request\.use\(\(config\) \=\> \{
  const token \= localStorage\.getItem\("access_token"\)\;
  if \(token\) \{
    config\.headers\.Authorization \= \`Bearer \$\{token\}\`\;
  \}
  return config\;
\}\)\;

service\.interceptors\.response\.use\(async \(response\) \=\> \{
  if \(response\.data\.info \=\=\= "token invalid"\) \{
    if \(response\.config\.url \=\=\= "\/user\/refresh"\) \{
      localStorage\.removeItem\("refresh_token"\)\;
      localStorage\.removeItem\("access_token"\)\;
      localStorage\.removeItem\("user_id"\)\;
    \} else \{
      const newAccessToken \= await postRefreshPost\(\{
        refresh_token\: localStorage\.getItem\("refresh_token"\)\,
      \}\)\;

      localStorage\.setItem\("access_token"\, newAccessToken\.data\.access_token\)\;
      const originalRequest \= response\.config\;
      originalRequest\.headers\.Authorization \= \`Bearer \$\{localStorage\.getItem\("access_token"\)\}\`\;
      return service\(originalRequest\)\;
    \}
  \}
  return response\;
\}\)\;
`}</SyntaxHighlighter>
          <p>{t("对于特殊请求：")}</p>
          <SyntaxHighlighter
            language="typescript"
            style={oneLight}
            showLineNumbers
          >{`const rep \= await new_chat\(\{
  session_id\: id\,
  category\: identity\,
  content\: words_human\,
\}\)\; \/\/new_chat\是\基\于fetch\封\装\的\一\个\数\据\请\求\函\数\。
const reader \= rep\.body\.getReader\(\)\;
const decoder \= new TextDecoder\(\)\;

\/\/ eslint\-disable\-next\-line no\-constant\-condition
while \(true\) \{
  const \{ done\, value \} \= await reader\.read\(\)\;
  \/\/ \结\果\包\含\两\个\属\性\：
  \/\/ done  \- \如\果\为 true\，\表\示\流\已\经\返\回\所\有\的\数\据\。
  \/\/ value \- \一\些\数\据\，done \为 true \时\，\其\值\始\终\为 undefined\。
  const decoded \= decoder\.decode\(value\, \{ stream\: true \}\)\;
  renderAIRes\.current \+\= decoded\;
\}
`}</SyntaxHighlighter>
          <p>
            {t(
              "因为XHR没法读取post流式数据，所以改用fetch。总所周知，fetch在请求成功发送的时候返回一个内建的Response对象，我们可以通过不同的格式来访问其body。",
            )}
          </p>
          <blockquote>
            <p>
              {t("Response的body可以是一个可读的字节数据流")}
              -ReadableStream
            </p>
          </blockquote>
          <p>
            <code>rep.body.getReader()</code>
            {t("就是创建一个reader对象锁定该流，调用read()方法读取内容。")}
          </p>
          <p>
            <strong>{t("MD格式转化以及打字机样式：")}</strong>
            {t("个人博客对于md格式的转化是利用")}
            <code>marked</code>
            {t("转化为html再进一步进行正则匹配改为适配next的tsx")}
          </p>
          <p>
            <a href="https://github.com/sibiraj-s/marked-react">marked-react</a>
            {t("这个库的优点在于底层并非")}
            <code>dangerouslySetInnerHTML</code>
            {t(
              "实现，避免了XSS攻击，更安全。同时也支持不同语法高亮库进行code的高亮显示。",
            )}
            <del>{t("不用自己库库手搓")}</del>
          </p>
          <p>
            {t(
              "打字机样式实现的难点在于判断是否正在输出以及正在输出的内容是什么，判断单次输出完毕与否进行下个内容的读取。",
            )}
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={oneLight}
            showLineNumbers
          >{`const renderAIRes \= useRef\(""\)\;
\/\/ data\读\取
const decoded \= decoder\.decode\(value\, \{ stream\: true \}\)\;
setConversation\(\[
  \.\.\.conversations\,
  \{ HUMAN\: words_human\, time\: askTime \}\,
  \{
    AI\: \[
      \{
        answer\: renderAIRes\.current\,
        isChatting\: false\,
      \}\,
      \{ answer\: decoded\, isChatting\: true \}\,
    \]\,
    time\: getCurrentTime\(\)\,
  \}\,
\]\)\;
renderAIRes\.current \+\= decoded\;
`}</SyntaxHighlighter>
          <p>
            {t(
              "isChatting判断是否是当前流式数据，非当前流式数据通过ref进行保存避免多次重新渲染。",
            )}
          </p>
          <SyntaxHighlighter
            language="tsx"
            style={oneLight}
            showLineNumbers
          >{`\/\/\伪\代\码\实\现
\<div className\=""\>
  \{\(word as AIType\)\.map\(\(item\) \=\> \{
    return item\.isChatting \? \(
      \<Typist
        avgTypingDelay\=\{60\}
        cursor\=\{\{ show\: false \}\}
        key\=\{item\.answer\}
        onTypingDone\=\{\(\) \=\> \{
          oneContentTypingOver\(true\)\;
        \}\}
        className\="inline"
      \>
        \<Markdown\>\{item\.answer\}\<\/Markdown\>
      \<\/Typist\>
    \) \: \(
      \<\>\{\<Markdown\>\{item\.answer\}\<\/Markdown\>\}\<\/\>
    \)\;
  \}\)\}
\<\/div\>
`}</SyntaxHighlighter>
          <p>
            {t(
              "根据isChatting选择是否打字机，控制打字机结束后再重新获取新内容进行渲染。",
            )}
            {t("实现GPT打字机样式。")}
          </p>
          <h2>{t("用户体验")}</h2>
          <p>
            <strong>{t("零痛更新：")}</strong>
            {t(
              "在先前的项目中，对于后台表单数据的增删查改，都是全部依赖数据请求进行页面重新渲染。这样会导致一个用户体验不行，每次数据更新都要再次请求数据进行渲染，网络请求量大，页面加载慢，用户体验不行。",
            )}
            {t("于是在这个项目中")}，{t("采用了")}
            <code>Zustand</code>
            {t(
              "进行全局数据管理，获取数据复制到本地数据，每次数据更新时同时更新本地数据。利用本地数据进行渲染，实现无痛页面更新渲染。",
            )}
          </p>
          <SyntaxHighlighter
            language="tsx"
            style={oneLight}
            showLineNumbers
          >{`\<Button
  className\="h\-\[47px\] w\-\[165px\] px\-3 py\-1"
  style\=\{\{
    backgroundColor\: "\#8C7BF7"\,
    color\: "white"\,
    border\: "none"\,
  \}\}
  onClick\=\{\(\) \=\> \{
    setIsTaking\(true\)\;
    setSession\(\[
      \.\.\.sessions\,
      \{
        created_at\: ""\,
        id\: newId\,
        metadata\: \{
          title\: "\新\对\话"\,
          category\: ""\,
        \}\,
        session_id\: \`\$\{newId\}\`\,
        updated_at\: ""\,
        user_id\: ""\,
        uuid\: ""\,
      \}\,
    \]\)\;
    handleClick\(newId \+ ""\, "\新\对\话"\)\;
    handleChooseIdentity\(false\)\;
    setNewId\(\(newId\) \=\> newId \+ 1\)\;
  \}\}
  disabled\=\{talking\}
\>
  \创\建\新\对\话
\<\/Button\>
`}</SyntaxHighlighter>
          <p>
            {t(
              "新对话创建，删除，以及历史会话记录的删除，更新，都是依赖于本地数据而非请求数据。",
            )}
            {t("但是这样也会有一定的问题，比如首次请求量大，导致瀑布流等等")}
          </p>
          <blockquote>
            <p>
              {t(
                "RSC(react-serve-component)解决了数据渲染问题，因为它采用服务端生成组件绑定数据返回到客户端进进行渲染。",
              )}
            </p>
          </blockquote>
          <h1>{t("总结")}</h1>
          <p>
            {t(
              "项目写的比较急，加上一个人开发，所以对一些组件封装不足，基本都写在一起。",
            )}
          </p>
          <p>{t("Typescript也因为项目体积小，开发不规范使用的少。")}</p>
          <p>
            {t(
              "主要还是解决网络请求以及数据处理上的难点，着力于样式以及用户体验",
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
