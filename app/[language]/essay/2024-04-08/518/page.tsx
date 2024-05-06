
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import host from "@/public/imgs/YBG-第九期/host.png"
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
      YBG-第九期
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Weekly &nbsp; &nbsp; 2024-04-08
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>“一个终日思考的人，得不到除了思想以外的任何东西”</p>
</blockquote>
<h2>Technology/Study</h2>
<ol>
<li><p>做前端开发，难免要与各种APP（qq微信）内置浏览器打交道，如何调试不同的WEBVIEW成了一个难题。</p>
<p>正常的移动端页面只需要打开控制台转化为手机视窗即可，但是不同APP内置的WebView是魔改的引擎，需要真机调试。这个时候就有几种办法进行调试</p>
<ol>
<li><p>远程调试页面WEBVIEW，Chrome提供了内置的办法<a href="https://developer.chrome.com/docs/devtools/remote-debugging/webviews?hl=zh-cn">远程调试 WebView</a></p>
</li>
<li><p>想要手机查看本地开发环境的页面，起一个本机服务器让手机端访问。</p>
<p>如果你使用vite的话，可以用<code>vite dev --host</code>起一个服务器。</p>
<Image src={host} alt="本地服务器" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} />
访问172即可。</li>
</ol>
</li>
<li><p><a href="https://blog.vuejs.org/posts/vitepress-1.0">vitepress发布1.0</a>：vitepress是近几年来很火的博客框架，如果你是一个不想动手自定义一个个人博客的话，vitepress是一个很好的上手博客框架</p>
</li>
<li><p><a href="https://joyeecheung.github.io/blog/2024/03/18/require-esm-in-node-js/">require esm in nodejs</a>: 本该早几年就实现的功能，最近才发出实现性功能，作者表示很无奈。</p>
</li>
</ol>
<h2>Reading</h2>
<ol>
<li><p>来自少数派的一篇文章-<a href="https://sspai.com/post/86697">现代打工人如何获得幸福？</a></p>
<p>在这个卷到窒息的时代，我们是否已经忘记怎么去寻求内心的幸福。</p>
<blockquote>
<p>渴望财富自由的穷人，对财富自由的幻想，来自一部分财富自由的富人在过自己想过的生活。富人并不是因为做这些事一定能获得快乐，而是因为他刚好做这件事快乐，而他又很有钱</p>
</blockquote>
</li>
<li><p>同样一篇来自少数派的文章-<a href="https://sspai.com/post/87551">也许学校根本没有教你如何学习：论什么是真正的自学</a></p>
<p>不管是学习编程，绘画，唱歌，95%的时间你都要靠你自己自学。中国的应试教育只教会了你对付考试，没教会你如何去学习。</p>
</li>
<li><p>来自陈皓大佬的两篇文章：</p>
<p><a href="https://coolshell.cn/articles/19085.html">1. 何为三观</a></p>
<p><a href="https://coolshell.cn/articles/17972.html">2. 对绩效制度的批判</a></p>
</li>
</ol>

    </div>
    
  </div>
  <div className="mt-12 py-8 bg-white px-6">
  <Comment />
</div>
    </div>
  );
}