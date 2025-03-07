
  import Image from "next/image";
import dynamic from "next/dynamic";
  //@ts-ignore
import bddtdd from "@/public/imgs/单元测试/bddtdd.png"
//@ts-ignore
import test from "@/public/imgs/单元测试/test.png"
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
  // const { t } = await useTranslation(language, "essay-单元测试");
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      单元测试
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Project &nbsp;  2025-02-23
    </span>
    <div className="flex text-start break-words flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <blockquote>
<p>来自技术分享会，自己总结的一些东西，可能不够细节或者有所差错</p>
</blockquote>
<p><strong>单元测试（unit testing）</strong>，是指对软件中的最小可测试单元进行检查和验证。对于单元测试中单元的含义，一般来说，要根据实际情况去判定其具体含义，如 C 语言中单元指一个函数，Java 里单元指一个类，图形化的软件中可以指一个窗口或一个菜单等。总的来说，单元就是人为规定的最小的被测功能模块。单元测试是在软件开发过程中要进行的最低级别的测试活动，软件的独立单元将在与程序的其他部分相隔离的情况下进行测试。
而针对前端来说，我们可以简单的分为逻辑单元测试和UI单元测试</p>
<h2>逻辑单元测试</h2>
<p>一个逻辑单元测试最重要的部分就是断言库。他能够让我们去调用匹配器对一个简单的函数进行测试，测试内容可以是简单的字符串比较，对象的深度比较甚至是判断函数的调用次数以及错误捕获。断言库的优秀与否是一个单元测试框架是否流行的重要因素。</p>
<h3>断言风格</h3>
<p>目前前端单测框架中，不管是内置的还是Chai等业界流行的断言库，写法风格大概分为两类：
TDD(Test-driven Development)和BDD(Behavior-driven Development )
二者算是一个递进的关系，TDD 指的是测试驱动开发，先编写单测去检验业务代码的实现。而 BDD 在此之上更具有语义化，更类似于说明文档。
就拿Chai来说，他有明显的写法风格。</p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `\/\/Chai
assert\.equal\(add\(1\,2\)\, 3\)\; \/\/TDD
\/\/\基\本\等\同\于
expect\(add\(1\,2\)\)\.to\.equal\(3\)\; \/\/BDD
add\(1\,2\)\.should\.equal\(3\)
` }</SyntaxHighlighter>
<p>而Jest内置的断言库，目前只存在一种TDD的写法，利用expect和匹配器对被测函数进行测试，最终通过or抛出错误。</p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `\/\/ Jest
test\('two plus two is four'\, \(\) \=\> \{
  expect\(2 \+ 2\)\.toBe\(4\)\;
\}\)\;
` }</SyntaxHighlighter>
<h3>Chai</h3>
<p>作为业界最流行的断言库之一，相较于其他断言库，它的优势在于：</p>
<ul>
<li>
<p>支持 TDD 和 BDD 两种风格</p>
</li>
<li>
<p>断言 api 功能强大，使用简单</p>
</li>
<li>
<p>错误捕获隐藏内部函数堆栈，利于使用者查看报错</p>
<h4>内部实现</h4>
<p>首先，Chai 定义了一个 Assertion 对象：</p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `export function Assertion \(obj\, msg\, ssfi\, lockSsfi\) \{
util\.flag\(this\, 'ssfi'\, ssfi \|\| Assertion\)\;
util\.flag\(this\, 'lockSsfi'\, lockSsfi\)\;
util\.flag\(this\, 'object'\, obj\)\;
util\.flag\(this\, 'message'\, msg\)\;
util\.flag\(this\, 'eql'\, config\.deepEqual \|\| util\.eql\)\;
return util\.proxify\(this\)\;
\}
` }</SyntaxHighlighter>
<p>这里面有两个比较重要的点，一个是 util.flag 这个工具函数，可以理解为在一个实例对象上设置和检索私有的属性（键值对），避免污染原对象上原本的属性。</p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `export function flag\(obj\, key\, value\) \{
var flags \= obj\.__flags \|\| \(obj\.__flags \= Object\.create\(null\)\)\;
if \(arguments\.length \=\=\= 3\) \{
  flags\[key\] \= value\;
\} else \{
  return flags\[key\]\;
\}
\}
` }</SyntaxHighlighter>
<p>另一个是 ssfi ，全称叫做&quot;Start Stack Function Indicator&quot;，配合上lockSsfi，Chai就可以在单测函数未通过测试抛出的错误的堆栈追踪中剪去没必要的函数内容，比如 Chai 内部的实现以及一些库函数。</p>
<blockquote>
<p>更具体的 Chai 相关部分可以看&gt; <a href="https://lucasfcosta.com/2017/02/17/JavaScript-Errors-and-Stack-Traces.html">https://lucasfcosta.com/2017/02/17/JavaScript-Errors-and-Stack-Traces.html</a></p>
</blockquote>
</li>
</ul>
<p>然后 Chai 内部针对不同的写法定义了三种断言链的<code>起点</code>:</p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `export function assert\(express\, errmsg\) \{
  var test \= new Assertion\(null\, null\, chai\.assert\, true\)\;
  test\.assert\(
      express
    \, errmsg
    \, '\[ negation message unavailable \]'
  \)\;
\} \/\/ assert\('foo' \!\=\= 'bar'\, 'foo is not bar'\)\; 
\/\/assert\.equal\(3\, '3'\, '\=\= coerces values to strings'\)\;
` }</SyntaxHighlighter>
<p>assert 对象用于TDD写法，既可以直接调用也可以跟上 chai 内部定义的各种 api</p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `\/\/ expect
function expect\(val\, message\) \{
  return new Assertion\(val\, message\)\;
\}
\/\/ should
function shouldGetter\(\) \{
    if \(this instanceof String
        \|\| this instanceof Number
        \|\| this instanceof Boolean
        \|\| typeof Symbol \=\=\= 'function' \&\& this instanceof Symbol
        \|\| typeof BigInt \=\=\= 'function' \&\& this instanceof BigInt\) \{
      return new Assertion\(this\.valueOf\(\)\, null\, shouldGetter\)\;
    \} \/\/\相\当\于\做\一\个\类\型\转\化
    return new Assertion\(this\, null\, shouldGetter\)\;
  \}
` }</SyntaxHighlighter>
<blockquote>
<p>foo.should.be.a(&apos;string&apos;),foo.should.equal(&apos;bar&apos;)
expect(answer).to.equal(42),expect(answer, &apos;topic [answer]&apos;).to.equal(42);</p>
</blockquote>
<p>should和expect的写法更加的语义化，更符合 BDD 风格。自然写法也比assert来的繁琐一些。
接下来就是很重要的 API 部分的内容，也是区分 BDD 和 TDD 的一大特点。</p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `\在\此\讲\各\个 api \之\前\还\有\一\个\函\数\需\要\介\绍\一\下\。
Assertion\.addProperty \= function \(name\, fn\) \{
  util\.addProperty\(this\.prototype\, name\, fn\)\;
\}\;
export function addProperty\(ctx\, name\, getter\) \{
  getter \= getter \=\=\= undefined \? function \(\) \{\} \: getter\;
  Object\.defineProperty\(ctx\, name\,
    \{ get\: function propertyGetter\(\) \{
        if \(\!isProxyEnabled\(\) \&\& \!flag\(this\, 'lockSsfi'\)\) \{
          flag\(this\, 'ssfi'\, propertyGetter\)\;
        \}
        var result \= getter\.call\(this\)\;
        if \(result \!\=\= undefined\)
          return result\;
        var newAssertion \= new Assertion\(\)\;
        transferFlags\(this\, newAssertion\)\;
        return newAssertion\;
      \}
    \, configurable\: true
  \}\)\;
\}
` }</SyntaxHighlighter>
<p>addProperty 这个函数主要有两点作用，一个是定义目标访问时根据 lockSsfi 更新 ssfi，利于用户报错时的堆栈追踪。
另外一个就是返回新的 Assertion 对象，实现断言的链式调用。</p>
<p>在 BDD 风格下，大概可以把相关的 api 分为三种：语义类型API，辅助类型API以及判断类型API。
语义化API顾名思义就是没有什么效果，只是为了你的断言写起来更好理解，更语义化。</p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `\/\/api\相\关\实\现
\[ 'to'\, 'be'\, 'been'\, 'is'
\, 'and'\, 'has'\, 'have'\, 'with'
\, 'that'\, 'which'\, 'at'\, 'of'
\, 'same'\, 'but'\, 'does'\, 'still'\, "also" \]\.forEach\(function \(chain\) \{
  Assertion\.addProperty\(chain\)\;
\}\)\;
` }</SyntaxHighlighter>
<p>辅助类型API一般都是配合逻辑判断来使用，例如deep，not等等。具有一定作用但是不作为逻辑判断，一般需要配合判断类型API”食用“。</p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `Assertion\.addProperty\('not'\, function \(\) \{
  flag\(this\, 'negate'\, true\)\;
\}\)\;
Assertion\.addProperty\('deep'\, function \(\) \{
  flag\(this\, 'deep'\, true\)\;
\}\)\;
` }</SyntaxHighlighter>
<p>逻辑判断类型API是断言库API中内容最多也是最重要的一个部分，配合辅助类型API进行逻辑判断是否符合预期。</p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `function assertEqual \(val\, msg\) \{
  if \(msg\) flag\(this\, 'message'\, msg\)\;
  var obj \= flag\(this\, 'object'\)\;
  if \(flag\(this\, 'deep'\)\) \{
    var prevLockSsfi \= flag\(this\, 'lockSsfi'\)\;
    flag\(this\, 'lockSsfi'\, true\)\;
    this\.eql\(val\)\;
    flag\(this\, 'lockSsfi'\, prevLockSsfi\)\;
  \} else \{
    this\.assert\(
        val \=\=\= obj
      \, 'expected \#\{this\} to equal \#\{exp\}'
      \, 'expected \#\{this\} to not equal \#\{exp\}'
      \, val
      \, this\._obj
      \, true
    \)\;
  \}
\}
` }</SyntaxHighlighter>
<p>简单来说BDD写法的单测就是通过语义以及逻辑串起来的测试，好处是一眼就知道这个单测的内容关于什么，也有助于非开发人员来了解被测函数的作用。坏处就是写起来稍微麻烦。
而TDD的实现在 Chai 中就比较简单，将语义化内容打包写成一个api，类似于再封装一层。</p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `\/\/ TDD api
assert\.isNotOk \= function \(val\, msg\) \{
  new Assertion\(val\, msg\, assert\.isNotOk\, true\)\.is\.not\.ok\;
\}\;
assert\.isAtLeast \= function \(val\, atlst\, msg\) \{
  new Assertion\(val\, msg\, assert\.isAtLeast\, true\)\.to\.be\.least\(atlst\)\;
\}\;
` }</SyntaxHighlighter>
<p><Image src={bddtdd} alt="断言库" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} /></p>
<h2>UI组件测试</h2>
<h3>React/Vue传统Web组件</h3>
<p>一个前端项目，除了相关的JS逻辑，还存在UI的渲染，而UI渲染有的时候是由一块一块的组件组合渲染而成，比如某个按钮，某个输入框。针对这些组件的渲染，仅靠简单的断言库是没法实现的。
首先，渲染一般都跑在浏览器上，node环境是不支持dom等的操作的，所以我们需要模拟浏览器环境
目前市面上用于模拟浏览器环境的node包还是有不少的，比如puppeteer，JSDOM等等，而JSDOM算是一个最常见的模拟浏览器进行单元测试的工具。</p>
<blockquote>
<p>jsdom不同于puppeteer，他不会启动一个headless浏览器实现模拟浏览器环境，而是通过js模拟一些api，比如document和window，以及一些简单的事件比如click，通过parse5解析传递的html字符串。
因为只是轻量级的模拟所以存在一些缺陷：没法完全模拟比如键盘鼠标事件，fetch/xhr等网络请求需要polyfill，无法计算css样式等等。。</p>
</blockquote>
<p>我们可以通过Jest配合Jsdom可以让我们创建一个UI的单元测试。以下是一个简单的事例：</p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `\/\*\*
 \* \@jest\-environment jsdom
 \*\/
test\('use jsdom in this test file'\, \(\) \=\> \{
  const element \= document\.createElement\('div'\)\;
  expect\(element\)\.not\.toBeNull\(\)\;
\}\)\;
` }</SyntaxHighlighter>
<blockquote>
<p>jest 默认是node环境的单元测试，你可以在config文件下指定也可以直接写在单测文件开头</p>
</blockquote>
<p>其次目前绝大多数的Web项目，基本都要由框架如react和vue来编写，而这些框架编写的组件本质上还是js，依旧做不到利用dom去操作，所以我们可以借助一些工具来进一步的操作，比如，等等。
这是一个简单的jest配合testing-library的单测例子：</p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `\/\/ hidden\-message\.js
import \* as React from 'react'

\/\/ NOTE\: React Testing Library works well with React Hooks and classes\.
\/\/ Your tests will be the same regardless of how you write your components\.
function HiddenMessage\(\{children\}\) \{
  const \[showMessage\, setShowMessage\] \= React\.useState\(false\)
  return \(
    \<div\>
      \<label htmlFor\="toggle"\>Show Message\<\/label\>
      \<input
        id\="toggle"
        type\="checkbox"
        onChange\=\{e \=\> setShowMessage\(e\.target\.checked\)\}
        checked\=\{showMessage\}
      \/\>
      \{showMessage \? children \: null\}
    \<\/div\>
  \)
\}

export default HiddenMessage

import '\@testing\-library\/jest\-dom'
\/\/ NOTE\: jest\-dom adds handy assertions to Jest and is recommended\, but not required
\/\*\*
 \* \@jest\-environment jsdom
 \*\/

import \* as React from 'react'
import \{render\, fireEvent\, screen\} from '\@testing\-library\/react'
import HiddenMessage from '\.\.\/hidden\-message'

test\('shows the children when the checkbox is checked'\, \(\) \=\> \{
  const testMessage \= 'Test Message'
  render\(\<HiddenMessage\>\{testMessage\}\<\/HiddenMessage\>\)
  expect\(screen\.queryByText\(testMessage\)\)\.toBeNull\(\)
  fireEvent\.click\(screen\.getByLabelText\(\/show\/i\)\)
  expect\(screen\.getByText\(testMessage\)\)\.toBeInTheDocument\(\)
\}\)
` }</SyntaxHighlighter>
<p>test-library做了些什么呢，最核心的部分就是render函数，他模拟了react的挂载流程，借助jsdom实现的浏览器环境，test-library直接将你的组件挂载到document（你也可以自定义挂载对象）上，借此你就可以像操作html一样利用他提供的一些query函数来进行操作从而进行单元测试。</p>
<h3>小程序组件</h3>
<p>如果是小程序组件呢？
以微信小程序为例子，它提供了一个和来处理小程序组件的单测问题。
这里先看一个微信小程序官方文档的组件单测例子：</p>
<SyntaxHighlighter language="javascript" style={oneLight} showLineNumbers>{ `\/\/ \/test\/components\/index\.test\.js
\/\*\*
 \* \@jest\-environment jsdom
 \*\/

const simulate \= require\('miniprogram\-simulate'\)

test\('components\/index'\, \(\) \=\> \{
    const id \= simulate\.load\('\/components\/index'\) 
    const comp \= simulate\.render\(id\) \/\/ \渲\染\成\自\定\义\组\件\树\实\例
    const parent \= document\.createElement\('parent\-wrapper'\) \/\/ \创\建\父\亲\节\点
    comp\.attach\(parent\) 
    const view \= comp\.querySelector\('\.index'\) \/\/ \获\取\子\组\件 view
    expect\(view\.dom\.innerHTML\)\.toBe\('index\.properties'\) \/\/ \测\试\渲\染\结\果
    expect\(window\.getComputedStyle\(view\.dom\)\.color\)\.toBe\('green'\) \/\/ \测\试\渲\染\结\果
\}\)
` }</SyntaxHighlighter>
<p>从例子上看出其实本质上和React等框架的组件单测实现思路上是一致的，都是将一个组件转化为一个自定义组件实例，再通过工具库内部实现的一些方法来模拟操作。
但是因为小程序组件是基于多个文件的（wxml，wxss，js，json）而非一个函数/一个对象。所以我们需要额外的一个load操作-通过传递的路径获取wxss，wxml文件内容进行编译，然后执行j-components的注册一个组件函数，返回一个组件id。
然后通过render函数向全局注入样式以及创建一个自定义组件树实例，再挂载到父节点上就可以进行dom操作进行单元测试。</p>
<p><Image src={test} alt="UI测试" 
      sizes="100vw"
      style={{
        width: "100%",
        height: 'auto',
      }} /></p>
<h4>缺陷</h4>
<p>因为组件测试的运行环境不存在wx对象，所以一些wx的api是没法用的，需要用户自己去实现。
一些wx内置的组件也未实现功能，仅做渲染。</p>
    </div>
    
  </div>
    </div>
  );
}