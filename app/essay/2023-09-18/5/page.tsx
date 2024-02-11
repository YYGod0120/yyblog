
  
import "../../essay.css";
import Image from "next/image";
import dynamic from "next/dynamic";

// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
export default function Page() {
  const Comment = dynamic(() => import("@/components/Comment"), {
    ssr: false,
  });
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      TheFirstRedrockProject
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Project &nbsp; &nbsp; 2023-09-18
    </span>
    <div className="flex text-start flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>第一个团队合作项目</p>
</blockquote>
<p>收获：</p>
<ul>
<li>git</li>
<li>团队协作</li>
</ul>
<p><a href="http://fe-prod.redrock.cqupt.edu.cn/venue-application-backstage/">项目地址</a></p>
<h1>技术栈</h1>
<ol>
<li>React</li>
<li>Typescript</li>
<li>Vite</li>
<li>Recoil</li>
<li>ANTD</li>
<li>Mock</li>
<li>module.less</li>
<li>pnpm</li>
</ol>
<h1>拆分模块</h1>
<ol>
<li><p>其余场地申请</p>
<ul>
<li>申请列表</li>
<li>时间表</li>
</ul>
</li>
<li><p>科技会堂场地申请 - 申请列表 - 时间表</p>
</li>
</ol>
<p>二者差异不大，主要是在一些弹窗以及内容上的区别</p>
<h1>实现思路</h1>
<ul>
<li>申请列表：</li>
</ul>
<ol>
<li>接受后端传的 data，通过 ANTD 渲染表格。</li>
<li>不同状态的场地的筛选就是对 data 筛选完成为新的 data 通通过 ANTD 渲染。</li>
<li>搜索同理，注意就是搜索要在不同状态的场地筛选完的新 data 再搜索筛选。</li>
<li>详情弹窗就是点击详情将这一条数据传递给弹窗组件。</li>
</ol>
<ul>
<li>时间表：</li>
</ul>
<ol>
<li>时间表稍微有难度一点，首先是表格没有使用 ANTD，使用原生的 table 和 tr td 标签</li>
<li>将每块场地为每一行的行头，将当天的每一段时间作为每一列的列头。</li>
<li>然后是表格内容的数据的处理，以其余场地申请为例子，是通过日期查询当天的场地申请数据，然后进行数据的处理，将某块场地设为 parent，他全部时间段设为一个 children，里面的每一个 child 通过申请的或者待审批的就是被占用的，flag 为 ture，其余的为 flase，条件渲染到表格中。</li>
<li>再对每一个表格格子做一点动画，也以其余场地申请为例子，鼠标移入出现编辑图标，移除图标消失，点击图标出现编辑弹窗，传入选中时间以及场地，以及其他需要编辑的表单。</li>
<li>点击占用的部分，跳出详情弹窗，内容为当前格的数据</li>
<li>科技会堂申请的时间表有些许不同，每一行的行头是日期，列头也是每段时间，时间段也不同，只用对数据处理做一些修改。</li>
<li>鼠标移入移除动画也不同，是点击移动相应的表格颜色变化，松开跳出编辑弹窗。</li>
</ol>
<p>难点：
一个在于 ts 的运用，数据类型麻烦且多，需要仔细琢磨不然很容易出错
二个就是对原生表格的运用，时间表数据的处理也是一大难点</p>

    </div>
    
  </div>
  <div className="mt-12 pt-8 bg-white">
  <Comment />
  </div>
    </div>
  );
}