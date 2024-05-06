import Image from "next/image";
import dynamic from "next/dynamic";
//@ts-ignore
import axiosWeak from "@/public/imgs/XHRvsFetch/axiosWeak.png";
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
      <div className="mt-8 flex flex-col items-start rounded-sm bg-white text-lg shadow-lg">
        <span className="px-4 pt-12 text-left text-4xl font-bold text-visit-font md:px-[2.5vw] lg:px-20">
          XHRvsFetch
        </span>
        <span className="mb-5 break-words px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          <div className="mb-3 mr-4 md:inline ">Categories: Technology </div>
          <div className="text-start md:inline ">2024-03-17</div>
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <h1>前言</h1>
          <p>
            这段时间做的ai-qa平台，遇到了一个业务需求，就是类gpt的post流式响应：通过post问题到后端，后端采用流式响应，即一段一段的返回数据，我再进行样式的渲染。
            在此我却遇到了问题，axios没法对post流式响应。
          </p>
          <Image
            src={axiosWeak}
            alt="github上的closed-issue"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <p>相反原生的Fetch却能做到post流式处理。</p>
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
            于是我去查了查相关资料，发现<code>Axios</code>好像有些地方真不如
            <code>Fetch</code>
          </p>
          <h1>XHR(XMLHttpRequests)</h1>
          <p>
            <code>Axios</code>是基于<code>Promise</code>
            的网络请求库，在node端使用nodejs自带的http模块，在浏览器端采用的是XMLHttpRequests。它的功能包括但不仅限于拦截请求和响应，自动转化JSON数据以及取消请求。
          </p>
          <p>
            更多内容可以直接查看
            <a href="https://axios-http.com/zh/docs/intro">官网</a>。
          </p>
          <p>
            这里主要是关于什么是<strong>XHR(XMLHttpRequests)</strong>:
          </p>
          <p>
            XHR是古早的浏览器内建对象，虽然名字里有XML，它不仅仅能够操作XML格式的数据，其他数据也能够操作，例如图片，文档等等。
            但随着更新的Fetch的出现，XHR渐渐消失，唯一留下的它的理由估计就是为了兼容旧浏览器,适配旧脚本,以及做到跟踪上传进度(Fetch做不到)。
          </p>
          <h2>XMLHttpRequests基础</h2>
          <p>
            XMLHttpRequest
            有两种执行模式：同步（synchronous）和异步（asynchronous）
          </p>
          <p>先来看看最常使用的异步：</p>
          <p>
            <strong>
              1. 创建 <code>XMLHttpRequest</code>
            </strong>
          </p>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`let xhr \= new XMLHttpRequest\(\)\;
`}</SyntaxHighlighter>
          <p>
            <strong>2. 初始化它</strong>
          </p>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`xhr\.open\(method\, URL\, \[async\, user\, password\]\)\;
`}</SyntaxHighlighter>
          <ul>
            <li>
              method —— HTTP 方法。通常是 &quot;GET&quot; 或 &quot;POST&quot;。
            </li>
            <li>URL —— 要请求的 URL，通常是一个字符串，也可以是 URL 对象。</li>
            <li>
              async —— 如果显式地设置为
              false，那么请求将会以同步的方式处理，我们稍后会讲到它。
            </li>
            <li>
              user，password —— HTTP
              基本身份验证（如果需要的话）的登录名和密码。
            </li>
          </ul>
          <p>
            <strong>3. 发送请求</strong>
          </p>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`xhr\.send\(\[body\]\)\;
`}</SyntaxHighlighter>
          <p>
            <strong>4. 监听xhr事件获取响应</strong>
          </p>
          <ul>
            <li>
              load —— 当请求完成（即使 HTTP 状态为 400 或 500
              等），并且响应已完全下载。
            </li>
            <li>error —— 当无法发出请求，例如网络中断或者无效的 URL。</li>
            <li>progress —— 在下载响应期间定期触发，报告已经下载了多少。</li>
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
          <p>关于XHR的Get请求的典型代码(估计现在也用不上了)：</p>
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
          <h3>上传进度</h3>
          <p>前面提到过，XML可以做到Fetch做不到的跟踪上传进度——xhr.upload</p>
          <p>它会生成事件，类似于 xhr，但是 xhr.upload 仅在上传时触发它们：</p>
          <ul>
            <li>loadstart —— 上传开始。</li>
            <li>progress —— 上传期间定期触发。</li>
            <li>abort —— 上传中止。</li>
            <li>error —— 非 HTTP 错误。</li>
            <li>load —— 上传成功完成。</li>
            <li>timeout —— 上传超时（如果设置了 timeout 属性）。</li>
            <li>loadend —— 上传完成，无论成功还是 error。</li>
          </ul>
          <p>示例：</p>
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
          <h1>Fetch</h1>
          <p>Fetch是一个现代通用的JS网络请求方法</p>
          <p>它的优点在于：</p>
          <ul>
            <li>支持async/await</li>
            <li>写法简单，api易上手</li>
            <li>脱离了XHR，是ES规范里的实现方法</li>
          </ul>
          <p>但它依旧有缺点：</p>
          <ul>
            <li>浏览器不支持，需要polyfill</li>
            <li>默认无cookie</li>
            <li>HTTP错误不会导致Promise返回reject</li>
            <li>不支持查看上传进度</li>
            <li>不支持超时控制</li>
          </ul>
          <p>接下来让我们看看Fetch的相关流程</p>
          <h2>Fetch基础</h2>
          <p>基本语法：</p>
          <SyntaxHighlighter
            language="js"
            style={oneLight}
            showLineNumbers
          >{`let promise \= fetch\(url\, \[options\]\)\;
`}</SyntaxHighlighter>
          <p>
            浏览器立即启动请求，并返回一个该调用代码应该用来获取结果的 promise。
            获取响应通常需要经过两个阶段。
          </p>
          <p>
            <strong>
              第一阶段，当服务器发送了响应头（response header），fetch 返回的
              promise 就使用内建的 Response class 对象来对响应头进行解析。
            </strong>
          </p>
          <p>
            在这个阶段，我们可以通过检查响应头的状态来确认请求是否成功，如果fetch没法成功建立，也就是遇到网络问题等网络本身问题，promise就会reject。
          </p>
          <blockquote>
            <p>
              因此一切服务器的返回：404or500等等，都不会导致Promise返回reject，从而难以追踪错误。
            </p>
          </blockquote>
          <p>
            <strong>
              第二阶段，为了获取 response body，我们需要使用一个其他的方法调用。
            </strong>
          </p>
          <p>
            Response 提供了多种基于 promise 的方法，来以不同的格式访问 body：
          </p>
          <ul>
            <li>
              <p>
                response.text() —— 读取 response，并以文本形式返回 response，
              </p>
            </li>
            <li>
              <p>response.json() —— 将 response 解析为 JSON 格式，</p>
            </li>
            <li>
              <p>
                response.formData() —— 以 FormData 对象（在 下一章
                有解释）的形式返回 response，
              </p>
            </li>
            <li>
              <p>
                response.blob() —— 以 Blob（具有类型的二进制数据）形式返回
                response，
              </p>
            </li>
            <li>
              <p>
                response.arrayBuffer() —— 以
                ArrayBuffer（低级别的二进制数据）形式返回 response，
              </p>
              <p>
                另外，response.body 是 ReadableStream 对象，它允许你逐块读取
                body，GPTpost响应流就是基于此进行流式响应:
              </p>
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
            <p>
              我们只能选择一种读取 body 的方法。 如果我们已经使用了
              response.text() 方法来获取 response，那么如果再用
              response.json()，则不会生效，因为 body 内容已经被处理过了。
            </p>
          </blockquote>
          <h1>其他</h1>
          <p>
            XML：可扩展标记语言（Extensible Markup
            Language，XML）是一种标记语言。XML是从标准通用标记语言（SGML）中简化修改出来的。
          </p>
          <p>
            AJAX: AJAX（Asynchronous JavaScript And XML，异步 JavaScript 和
            XML）是一种使用 XMLHttpRequest
            技术构建更复杂，动态的网页的编程实践。
            其中实现方法有古早的XHR以及新的Fetch。
          </p>
          <p>HTTP模块： Http模块指的是node中Http模块，包括：</p>
          <ul>
            <li>http.createServer 担当web服务器</li>
            <li>http.createClient，担当客户端，实现爬虫之类的工作。</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 bg-white px-6 py-8">
        <Comment />
      </div>
    </div>
  );
}
