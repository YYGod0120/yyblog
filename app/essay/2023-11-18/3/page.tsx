
  import Image from "next/image";
import dynamic from "next/dynamic";
  
  // @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "@/app/essay/essay.css";
export default function Page() {
  const Comment = dynamic(() => import("@/components/Comment"), {
    ssr: false,
  });
  return (
    <div>
    <div className="mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
    <span className="text-4xl text-left lg:px-20 md:px-[2.5vw] px-4 pt-12 text-visit-font font-bold">
      React-Design-Patterns
    </span>
    <span className="text-[#86909C] lg:px-20 pt-5 px-4 text-xl mb-5 md:px-[2.5vw]">
      Categories: Techology &nbsp; &nbsp; 2023-11-18
    </span>
    <div className="flex text-start flex-col pb-12 lg:px-20 lg:w-[740px] md:w-[90vw] md:px-[2.5vw] w-[95vw] px-[2.5vw]">
      <p>React 设计模式(译)</p>
<p><a href="https://dev.to/refine/react-design-patterns-230o">原文链接</a></p>
<h1>介绍</h1>
<p>React 开发人员可以通过使用设计模式来节省时间和精力，这些模式提供了一种使用经过测试和信任的解决方案解决问题的快速方法。它们使内聚模块具有较低的耦合性，这反过来又帮助 React 开发人员创建可维护、可扩展和高效的应用程序。在本文中，我们将探讨 React 设计模式，并研究它们如何改进 React 应用程序的开发。</p>
<h1>容器和表示模式</h1>
<p>容器和表示模式是一种模式，旨在将表示逻辑与反应代码中的业务逻辑分离，从而使其模块化、可测试，并遵循关注分离原则。
大多数情况下，在 react 应用程序中，我们需要从后端/存储中获取数据或计算逻辑，并在 react 组件上表示该计算的结果。在这些情况下，容器和表示模式大放异彩，因为它可用于将组件分为两个，即：</p>
<ul>
<li>容器组件，充当负责数据提取或计算的组件。</li>
<li>表示组件，其工作是在 UI（用户界面）上呈现获取的数据或计算值。</li>
</ul>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `\/\/Container\.tsx
import React\, \{ useEffect \} from "react"\;
import CharacterList from "\.\/CharacterList"\;

const StarWarsCharactersContainer\: React\.FC \= \(\) \=\> \{
  const \[characters\, setCharacters\] \= useState\<Character\>\(\[\]\)\;
  const \[isLoading\, setIsLoading\] \= useState\<boolean\>\(false\)\;
  const \[error\, setError\] \= useState\<boolean\>\(false\)\;

  const getCharacters \= async \(\) \=\> \{
    setIsLoading\(true\)\;
    try \{
      const response \= await fetch\(
        "https\:\/\/akabab\.github\.io\/starwars\-api\/api\/all\.json"\,
      \)\;
      const data \= await response\.json\(\)\;
      setIsLoading\(false\)\;
      if \(\!data\) return\;
      setCharacters\(data\)\;
    \} catch \(err\) \{
      setError\(true\)\;
    \} finally \{
      setIsLoading\(true\)\;
    \}
  \}\;

  useEffect\(\(\) \=\> \{
    getCharacters\(\)\;
  \}\, \[\]\)\;

  return \(
    \<CharacterList loading\=\{loading\} error\=\{error\} characters\=\{characters\} \/\>
  \)\;
\}\;

export default StarWarsCharactersContainer\;
` }</SyntaxHighlighter>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `\/\/the component is responsible for displaying the characters
import React from "react"\;
import \{ Character \} from "\.\/types"\;

interface CharacterListProps \{
  loading\: boolean\;
  error\: boolean\;
  users\: Character\[\]\;
\}

const CharacterList\: React\.FC\<CharacterListProps\> \= \(\{
  loading\,
  error\,
  characters\,
\}\) \=\> \{
  if \(loading \&\& \!error\) return \<div\>Loading\.\.\.\<\/div\>\;
  if \(\!loading \&\& error\)
    return \<div\>error occured\.unable to load characters\<\/div\>\;
  if \(\!characters\) return null\;

  return \(
    \<ul\>
      \{characters\.map\(\(user\) \=\> \(
        \<li key\=\{user\.id\}\>\{user\.name\}\<\/li\>
      \)\)\}
    \<\/ul\>
  \)\;
\}\;

export default CharacterList\;
` }</SyntaxHighlighter>
<h1>带有 Hooks 的组件组合</h1>
<p>钩子是 React 16.8 中首次亮相的全新功能。从那时起，他们在开发 react 应用程序方面发挥了至关重要的作用。钩子是基本函数，用于授予功能组件对状态和生命周期方法的访问权限（以前仅供类组件使用）。另一方面，钩子可以专门设计来满足组件要求并具有其他用例。
现在，我们可以隔离所有有状态逻辑（一种需要反应式状态变量的逻辑），并使用自定义钩子在组件中编写或使用它。因此，代码更加模块化和可测试，因为钩子松散地绑定在组件上，因此可以单独测试。
下面显示了带有钩子的组件组合示例：</p>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `\/\/ creating a custom hook that fetches star wars characters
export const useFetchStarWarsCharacters \= \(\) \=\> \{
  const \[characters\, setCharacters\] \= useState\<Character\>\(\[\]\)\;
  const \[isLoading\, setIsLoading\] \= useState\(false\)\;
  const \[error\, setError\] \= useState\(false\)\;
  const controller \= new AbortController\(\)\;

  const getCharacters \= async \(\) \=\> \{
    setIsLoading\(true\)\;
    try \{
      const response \= await fetch\(
        "https\:\/\/akabab\.github\.io\/starwars\-api\/api\/all\.json"\,
        \{
          method\: "GET"\,
          credentials\: "include"\,
          mode\: "cors"\,
          headers\: \{
            "Content\-Type"\: "application\/json"\,
            "Access\-Control\-Allow\-Origin"\: "\*"\,
          \}\,
          signal\: controller\.signal\,
        \}\,
      \)\;
      const data \= await response\.json\(\)\;
      setIsLoading\(false\)\;
      if \(\!data\) return\;
      setCharacters\(data\)\;
    \} catch \(err\) \{
      setError\(true\)\;
    \} finally \{
      setIsLoading\(true\)\;
    \}
  \}\;

  useEffect\(\(\) \=\> \{
    getCharacters\(\)\;
    return \(\) \=\> \{
      controller\.abort\(\)\;
    \}\;
  \}\, \[\]\)\;

  return \[characters\, isLoading\, error\]\;
\}\;
` }</SyntaxHighlighter>
<p>创建自定义钩子后，我们会将其导入到我们的 StarWarsCharactersContainer 组件中并使用它:</p>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `\/\/ importing the custom hook to a component and fetch the characters

import React from "react"\;
import \{ Character \} from "\.\/types"\;
import \{ useFetchStarWarsCharacters \} from "\.\/useFetchStarWarsCharacters"\;

const StarWarsCharactersContainer\: React\.FC \= \(\) \=\> \{
  const \[characters\, isLoading\, error\] \= useFetchStarWarsCharacters\(\)\;

  return \(
    \<CharacterList loading\=\{loading\} error\=\{error\} characters\=\{characters\} \/\>
  \)\;
\}\;

export default StarWarsCharactersContainer\;
` }</SyntaxHighlighter>
<h1>使用 Reducers 进行状态管理</h1>
<p>大多数情况下，处理组件中的许多状态会导致许多未分组状态的问题，这可能很麻烦且难以处理。在这种情况下，Reducers 模式可能是一个有用的选择。我们可以使用 reducer 将状态分类为某些操作，这些操作在执行时可以更改分组状态。
此模式允许使用它的开发人员控制组件和/或钩子的状态管理，让他们在发送事件时管理状态更改。
使用 Reducer 模式的示例如下所示：</p>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `import \{React\, i useReducer \} from 'react'\;
const initstate \= \{
    loggedIn\: false\,user\: null\,
    token\: nuli
\}
function authReducer\(state\,action\) \{
    switch \(action\.type\) \{
        case 'login'\:
            return \{
                loggedIn\: true\,
                user\: action\. payload\.user\,token\: action\. payload\.token
                \}
        case 'logout'\:
            return initState\;
        default\:
            break\;
    \}
\}
const AuthComponent \=\(\)\=\> \{
    const \[state\, dispatch\] \= useReducer\(authReducer\， initstate\)\;
    const logIn \=\(\)\=\>\{
        dispatch\(\{type\:'login'\,payload\:\{
            user\:\{name\:'John Doe'\}\,
            token\:'token'
        \}\}\)\;
    \}
    const logout \= \(\)\=\> \{
        dispatch\(\{ type\: 'logout' \}\)\;
    \}
return \(
    \<div\>
    \{ state\.loggedIn \? \(
        \<div\>
            \<p\> Welcome \{ state\.user\.name \}\<\/ p\>\<button onclick\=\{logout\}\>\<\/ button\>
        \<\/div\>
    \)\:\(
    \<form onSubmit\=\{logIn\}\>
        \<input type\="text"\/\>
        \<input type\="password"\/\>
        \<button type\="submit"\>\<\/button\>
    \<\/form\>
    \)
    \}
    \<\/div\>
\)
\}
` }</SyntaxHighlighter>
<p>在上面的代码中，该组件调度了两个操作：</p>
<ul>
<li>“login”操作类型会触发状态更改，该更改会影响三个状态值，即 loggedIn、user、token。</li>
<li>“注销”操作只是将状态重置为其初始值。</li>
</ul>
<h1>使用提供程序进行数据管理</h1>
<p>提供程序模式对于数据管理非常有用，因为它利用上下文 API 通过应用程序的组件树传递数据。这种模式是 Props drilling 的有效解决方案，Props drilling 一直是 React 开发中常见的问题。
为了实现提供程序模式，我们将首先创建一个提供程序组件。提供程序是 Context 对象提供给我们的高阶组件。我们可以利用 React 提供的 createContext 方法构造一个 Context 对象。</p>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `export const ThemeContext \= React\.createContext\(null\)\;

export function ThemeProvider\(\{ children \}\) \{
  const \[theme\, setTheme\] \= React\.useState\("light"\)\;

  return \(
    \<ThemeContext\.Provider value\=\{\{ theme\, setTheme \}\}\>
      \{children\}
    \<\/ThemeContext\.Provider\>
  \)\;
\}
` }</SyntaxHighlighter>
<p>创建提供程序后，我们将使用创建的提供程序组件将依赖于上下文 API 中数据的组件封闭起来。
为了从上下文 API 获取数据，我们调用 useContext 钩子，它接受上下文作为参数（在本例中为 ThemeContext）。</p>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `import \{ useContext \} from "react"\;
import \{ ThemeProvider\, ThemeContext \} from "\.\.\/context"\;

const HeaderSection \= \(\) \=\> \{
  \<ThemeProvider\>
    \<TopNav \/\>
  \<\/ThemeProvider\>\;
\}\;

const TopNav \= \(\) \=\> \{
  const \{ theme\, setTheme \} \= useContext\(ThemeContext\)\;

  return \(
    \<div style\=\{\{ backgroundColor\: theme \=\=\= "light" \? "\#fff" \: "\#000 " \}\}\>
      \.\.\.
    \<\/div\>
  \)\;
\}\;
` }</SyntaxHighlighter>
<h1>使用 HOC（高阶组件）增强组件</h1>
<p>高阶组件将组件作为参数，并返回注入了附加数据或功能的增压组件。React 中 HOC 的可能性是由于 React 对组合的偏好而不是继承。
高阶组件 （HOC） 模式提供了一种增加或修改组件功能的机制，从而促进了组件重用和代码共享。
HOC 模式的示例如下所示：</p>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `import React from 'react'

const higherOrderComponent \= Component \=\> \{
  return class HOC extends React\.Component \{
    state \= \{
      name\: 'John Doe'
    \}

    render\(\) \{
      return \<Component name\=\{this\.state\.name \{\.\.\.this\.props\}\} \/\>
    \}
 \}\}


const AvatarComponent \= \(props\) \=\> \{
  return \(
    \<div className\="flex items\-center justify\-between"\>
      \<div className\="rounded\-full bg\-red p\-4"\>
          \{props\.name\}
      \<\/div\>
      \<div\>
          \<p\>I am a \{props\.description\}\.\<\/p\>
      \<\/div\>
    \<\/div\>
  \)
\}


const SampleHOC \= higherOrderComponent\(AvatarComponent\)\;


const App \= \(\) \=\> \{
  return \(
    \<div\>
      \<SampleHOC description\="Frontend Engineer" \/\>
    \<\/div\>
  \)
\}

export default App\;
` }</SyntaxHighlighter>
<p>在上面的代码中，由 higherOrderComponent 提供 props，它将在内部使用。</p>
<h1>复合组件</h1>
<p>复合组件模式是一种 React 设计模式，用于管理由子组件组成的父组件。
这种模式背后的原理是将父组件分解为更小的组件，然后使用道具、上下文或其他 React 数据管理技术来管理这些较小组件之间的交互。
当需要创建由较小组件组成的可重用的多功能组件时，此模式会派上用场。它使开发人员能够创建复杂的 UI 组件，这些组件可以轻松自定义和扩展，同时保持清晰简单的代码结构。
复合组件模式的用例示例如下所示：</p>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `import React\, \{ createContext\, useState \} from "react"\;

const ToggleContext \= createContext\(\)\;

function Toggle\(\{ children \}\) \{
  const \[on\, setOn\] \= useState\(false\)\;
  const toggle \= \(\) \=\> setOn\(\!on\)\;

  return \(
    \<ToggleContext\.Provider value\=\{\{ on\, toggle \}\}\>
      \{children\}
    \<\/ToggleContext\.Provider\>
  \)\;
\}

Toggle\.On \= function ToggleOn\(\{ children \}\) \{
  const \{ on \} \= useContext\(ToggleContext\)\;
  return on \? children \: null\;
\}\;

Toggle\.Off \= function ToggleOff\(\{ children \}\) \{
  const \{ on \} \= useContext\(ToggleContext\)\;
  return on \? null \: children\;
\}\;

Toggle\.Button \= function ToggleButton\(props\) \{
  const \{ on\, toggle \} \= useContext\(ToggleContext\)\;
  return \<button onClick\=\{toggle\} \{\.\.\.props\} \/\>\;
\}\;

function App\(\) \{
  return \(
    \<Toggle\>
      \<Toggle\.On\>The button is on\<\/Toggle\.On\>
      \<Toggle\.Off\>The button is off\<\/Toggle\.Off\>
      \<Toggle\.Button\>Toggle\<\/Toggle\.Button\>
    \<\/Toggle\>
  \)\;
\}
` }</SyntaxHighlighter>
<h1>Prop 组合</h1>
<p>这需要从几个相关的 prop 中创建一个对象，并将其作为单个 prop 传递给组件。
这种模式允许我们清理代码并简化道具的管理，这在我们想要将大量相关属性传递给组件时特别有用。</p>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `import React from "react"\;

function P\(props\) \{
  const \{ color\, size\, children\, \.\.\.rest \} \= props\;
  return \(
    \<p style\=\{\{ color\, fontSize\: size \}\} \{\.\.\.rest\}\>
      \{children\}
    \<\/p\>
  \)\;
\}

function App\(\) \{
  const paragraphProps \= \{
    color\: "red"\,
    size\: "20px"\,
    lineHeight\: "22px"\,
  \}\;
  return \<P \{\.\.\.paragraphProps\}\>This is a P\<\/P\>\;
\}
` }</SyntaxHighlighter>
<h1>受控输入</h1>
<p>受控输入模式可用于处理输入字段。此模式涉及使用事件处理程序在输入字段的值发生更改时更新组件状态，以及将输入字段的当前值存储在组件状态中。
由于 React 控制组件的状态和行为，因此这种模式使代码比不受控制的输入模式更具可预测性和可读性，后者不使用组件的状态，而是直接通过 DOM（文档对象模型）来控制它。
受控输入模式的用例示例如下所示：</p>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `import React\, \{ useState \} from "react"\;

function ControlledInput\(\) \{
  const \[inputValue\, setInputValue\] \= useState\(""\)\;

  const handleChange \= \(event\) \=\> \{
    setInputValue\(event\.target\.value\)\;
  \}\;

  return \<input type\="text" value\=\{inputValue\} onChange\=\{handleChange\} \/\>\;
\}
` }</SyntaxHighlighter>
<h1>使用 fowardRefs 管理自定义组件</h1>
<p>称为 ForwardRef 的高阶组件将另一个组件作为输入，并输出一个传递原始组件的 ref 的新组件。通过这样做，子组件的 ref（可用于检索底层 DOM 节点或组件实例）可供父组件访问。
创建与第三方库或应用程序中的其他自定义组件交互的自定义组件时，在工作流中包含 ForwardRef 模式非常有帮助。通过授予对库的 DOM 节点或其他组件的 DOM 实例的访问权限，它有助于将此类组件的控制权转移给您。
下面显示了 forwardRef 模式的用例示例：</p>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `import React from "react"\;

const CustomInput \= React\.forwardRef\(\(props\, ref\) \=\> \(
  \<input type\="text" \{\.\.\.props\} ref\=\{ref\} \/\>
\)\)\;

const ParentComponent \= \(\) \=\> \{
  const inputRef \= useRef\(null\)\;

  useEffect\(\(\) \=\> \{
    inputRef\.current\.focus\(\)\;
  \}\, \[\]\)\;

  return \<CustomInput ref\=\{inputRef\} \/\>\;
\}\;
` }</SyntaxHighlighter>
<p>在上面的代码中，我们 <code>&lt;CustomInput/&gt;</code> <code>&lt;ParentComponent/&gt;</code> 使用 forwardRefs .</p>
<h1>总结</h1>
<p>我们在本文中讨论了 React 设计模式，包括高阶组件、容器表示组件模式、复合组件、受控组件等等。通过将这些设计模式和最佳实践整合到您的 React 项目中，您可以提高代码质量、促进团队协作，并使您的应用程序更具可扩展性、灵活性和可维护性。</p>

    </div>
    
  </div>
  <div className="mt-12 py-8 bg-white px-6">
  <Comment />
</div>
    </div>
  );
}