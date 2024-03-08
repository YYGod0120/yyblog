
  import Image from "next/image";
import dynamic from "next/dynamic";
  
  // @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "@/app/[language]/essay/essay.css";
export default function Page() {
  const Comment = dynamic(() => import("@/app/[language]/components/Comment"), {
    ssr: false,
  });
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      NewBlog
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Project &nbsp; &nbsp; 2024-02-03
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <h1>前言</h1>
<p>原本，我利用 Hexo 搭建了一个个人博客，刚开始还挺新鲜的，但慢慢就觉得样式单调，而且我想加入评论以及流量监控很麻烦。所以想着要不自己手写一个，更好控制也能自定义样式。于是 yyblog 就孕育而生</p>
<h1>结构</h1>
<p>整个博客，不仅仅由 yyblog 组成，还有 ybg-cli 脚手架，用于自动创建删除文章以及编译文章。</p>
<ul>
<li><p><strong>yyblog</strong></p>
<ul>
<li>Nextjs</li>
<li>typescript</li>
<li>tailwind</li>
<li>react-syntax-highlighter</li>
</ul>
</li>
<li><p><strong>ybg-cli</strong></p>
<ul>
<li>cac</li>
<li>gray-matter</li>
<li>he</li>
</ul>
</li>
</ul>
<h2>yyblog</h2>
<p>采用<code>Nextjs</code>+<code>Typescript</code>+<code>Tailwindw</code>为主要技术。</p>
<p>效仿 Hexo 采用纯前端，文章编写删除编译都在本地运行，对前端工程师更友好。
Nextjs 同时也支持全栈开发。简单的 sql 语句也能够对文章进行增删改查。</p>
<p>Next 提供的文件路由同时也可以帮我们自定义一些特殊页面，常见的 layout 页面，404 页面以及错误页面等等。</p>
<blockquote>
<p>避免中文命名文件！！</p>
</blockquote>
<p>除了文件路由以外，Next 也提供了很多组件以及优化，比如 <code>font</code>，<code>&lt;Image&gt;</code>标签还有<code>&lt;Script&gt;</code>标签。
这里说一下<code>&lt;Script&gt;</code>，博客网站上我放了一些动画(来源于 codepen),而这些动画<code>script</code>脚本，放入 <code>tsx(jsx)</code> 中只能通过<code>dangerouslySetInnerHTML</code>这个极具风险的 attribute
但正好 Nextjs 提供了一个<code>&lt;Script&gt;</code>，能够让我们使用脚本组件。</p>
<h2>ybg-cli</h2>
<p>采用纯前端的重点就在于文章的生成删除以及编译，麻烦就麻烦在编译成 TSX 代码插入到 yyblog 中形成页面。</p>
<p>光看文字不如上点代码：</p>
<SyntaxHighlighter language="typescript" style={oneLight} showLineNumbers>{ `export async function compileFile\(\)\: Promise\<mdFile\[\]\> \{
  let compiledFiles\: mdFile\[\] \= \[\]\;
  const fileList \= fs\.readdirSync\(_postFolder\)\;
  for \(const file of fileList\) \{
    const filePath \= path\.join\(_postFolder\, file\)\;
    const fileContent \= fs\.readFileSync\(filePath\, "utf\-8"\)\;
    const parsedFile \= matter\(fileContent\)\;
    const newMatter \= \{
      \.\.\.parsedFile\,
      data\: \{ \.\.\.parsedFile\.data\, date\: UTCToString\(parsedFile\.data\.date\) \}\,
    \}\;
    const picPath \= makeImportPic\(await marked\(parsedFile\.content\)\)\;
    const htmlText \= HtmlToNext\(await marked\(parsedFile\.content\)\)\;
    compiledFiles\.push\(
      picPath
        \? \{
            mdMatter\: newMatter\,
            mdHtml\: htmlText\,
            other\: \{
              picPath\: picPath\,
            \}\,
          \}
        \: \{ mdMatter\: newMatter\, mdHtml\: htmlText \}\,
    \)\;
  \}
  return compiledFiles\;
\}
` }</SyntaxHighlighter>
<p>读取文件并且用 gray-matter 解析 md 文件生成对应的内容。
<code>mdMatter</code>是文章头部<code>yaml</code>格式内容的解析。
<code>mdHtml</code>是文章主题部分的解析。
<code>other</code>是解析成 Html 后需要插入到最后 TSX 内容的东西。</p>
<p>重点在于<code>HtmlToNext</code>函数:</p>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `import he from "he"\;
function ImageRepimg\(html\: string\) \{
  const processedHtml \= html\.replace\(
    \/\<img\\s\+src\="\(\.\*\?\)"\\s\+alt\="\(\.\*\?\)"\.\*\?\\\/\>\/g\,
    function \(match\, src\, alt\) \{
      const modifiedSrc \= src\.split\("\/"\)\;
      const newSrc \= modifiedSrc\[modifiedSrc\.length \- 1\]\; \/\/\修\改\后\的SRC

      const modifiedAlt \= alt\; \/\/ \修\改\后\的alt

      return \`\<Image src\=\{\$\{newSrc\.slice\(
        0\,
        newSrc\.lastIndexOf\("\."\)\,
      \)\}\} alt\="\$\{modifiedAlt\}" 
      sizes\="100vw"
      style\=\{\{
        width\: '100\%'\,
        height\: 'auto'\,
      \}\} \/\>\`\;
    \}\,
  \)\;
  return processedHtml\;
\}
function replaceClassName\(html\: string\) \{
  const processedHtml \= html\.replace\(\/className\=\/g\, "className\="\)\;
  return processedHtml\;
\}
function highLightHtml\(html\: string\) \{
  \/\/ \在\代\码\块\内\的\特\殊\字\符\前\加\上 \\
  const replacedString1 \= html\.replace\(
    \/\<pre\>\<code className\="language\-\(\\w\+\)"\>\(\[\\s\\S\]\*\?\)\<\\\/code\>\<\\\/pre\>\/g\,
    \(_\, language\, codeContent\) \=\> \{
      \/\/\转\义\符\删\除
      const decodeCode \= he\.decode\(codeContent\)\;
      const codeWithBackslash \= decodeCode\.replace\(\/\(\[\^\\w\\s"'\]\)\/g\, "\\\\\$1"\)\;
      return \`\<SyntaxHighlighter language\="\$\{language\}" style\=\{oneLight\} showLineNumbers\>\{ \\\`\$\{codeWithBackslash\}\\\` \}\<\/SyntaxHighlighter\>\`\;
    \}\,
  \)\;

  return replacedString1\;
\}
export function HtmlToNext\(html\: string\) \{
  \/\/\替\换img\标\签
  const step1Html \= ImageRepimg\(html\)\;
  \/\/\替\换class\为className
  const step2Html \= replaceClassName\(step1Html\)\;
  \/\/\高\亮\代\码
  const step3Html \= highLightHtml\(step2Html\)\;
  \/\/\闭\合\分\割\线
  const step4Html \= step3Html\.replace\(\/\<hr\>\/g\, "\<hr \/\>"\)\;
  return step4Html\;
\}
` }</SyntaxHighlighter>
<p>通过对解析后 html 的修改，主要是用正则，实现 html 向 TSX(Next)的转化。</p>
<h1>3月4号更新：</h1>
<p>更新了英文版，主要采用的是Next的中间件-<code>middleware.js</code>以及<code>react-i18next</code>和<code>i18next</code>,这两个库i18n转化库。</p>
<p>配置的教程在<a href="https://locize.com/blog/next-app-dir-i18n/">这里</a></p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `import \{ NextResponse \} from "next\/server"\;
import acceptLanguage from "accept\-language"\;
import \{ fallbackLng\, languages\, cookieName \} from "\@\/app\/i18n\/setting"\;

acceptLanguage\.languages\(languages\)\;

export const config \= \{
  \/\/ matcher\: '\/\:lng\*'
  matcher\: \["\/\(\(\?\!api\|_next\/static\|_next\/image\|imgs\|favicon\.ico\|sw\.js\)\.\*\)"\]\,
\}\;
export function middleware\(req\) \{
  let lng\;
  if \(req\.cookies\.has\(cookieName\)\)
    lng \= acceptLanguage\.get\(req\.cookies\.get\(cookieName\)\.value\)\;
  if \(\!lng\) lng \= acceptLanguage\.get\(req\.headers\.get\("Accept\-Language"\)\)\;
  if \(\!lng\) lng \= fallbackLng\;

  \/\/ Redirect if lng in path is not supported

  if \(
    \!languages\.some\(\(loc\) \=\> req\.nextUrl\.pathname\.startsWith\(\`\/\$\{loc\}\`\)\) \&\&
    \!req\.nextUrl\.pathname\.startsWith\("\/_next"\)
  \) \{
    return NextResponse\.redirect\(
      new URL\(\`\/\$\{lng\}\$\{req\.nextUrl\.pathname\}\`\, req\.url\)\,
    \)\;
  \}
  if \(req\.headers\.has\("referer"\)\) \{
    const refererUrl \= new URL\(req\.headers\.get\("referer"\)\)\;
    const lngInReferer \= languages\.find\(\(l\) \=\>
      refererUrl\.pathname\.startsWith\(\`\/\$\{l\}\`\)\,
    \)\;
    const response \= NextResponse\.next\(\)\;
    if \(lngInReferer\) response\.cookies\.set\(cookieName\, lngInReferer\)\;
    return response\;
  \}

  return NextResponse\.next\(\)\;
\}
` }</SyntaxHighlighter>
<p>这一段是中间件主要的代码，作用是用户使用不支持语言时自动跳转到默认语言，记住用户每次结束后使用的语言。</p>
<p><strong>注意:</strong></p>
<SyntaxHighlighter language="js" style={oneLight} showLineNumbers>{ `export const config \= \{
  \/\/ matcher\: '\/\:lng\*'
  matcher\: \["\/\(\(\?\!api\|_next\/static\|_next\/image\|imgs\|favicon\.ico\|sw\.js\)\.\*\)"\]\,
\}\;
` }</SyntaxHighlighter>
<p><code>matcher</code>匹配器用于使得中间件在特定的路径上执行。
这个字符串是负向预测先行，用于匹配不包含以上内容的字符串片段，你需要稍微修改正则以匹配你的文件目录。</p>
<h1>附件</h1>
<blockquote>
<p>一些使用到的库或者代码：</p>
</blockquote>
<ul>
<li><a href="https://github.com/jonschlinkert/gray-matter">gray-matter</a>：解析静态网页元数据</li>
<li><a href="https://github.com/markedjs/marked">marked</a>：转化<code>md</code>文件为 HTML</li>
<li><a href="https://github.com/isaacs/rimraf">rimraf</a>：快捷删除文件夹及其内容</li>
<li><a href="https://github.com/egoist/tsup">tsup</a>：快速构建 TypeScript 项目的工具</li>
<li><a href="https://github.com/alexeyraspopov/picocolors">picocolors</a>：命令行颜色</li>
<li><a href="https://github.com/cacjs/cac">cac</a>：构建命令行工具的 JavaScript/TypeScript 框架</li>
<li><a href="https://codepen.io/">codepen</a>： 动画及特别的 404 页面都来源于此</li>
<li><a href="https://github.com/i18next/react-i18next">react-i18next</a> i18n for react</li>
</ul>

    </div>
    
  </div>
  <div className="mt-12 py-8 bg-white px-6">
  <Comment />
</div>
    </div>
  );
}