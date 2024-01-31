
    import "../../essay.css";
    import Image from "next/image";
    // @ts-ignore
      import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
    // @ts-ignore
    import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
    export default function Page() {
      return (
        <div className=" mt-8 bg-white flex flex-col items-start text-lg shadow-lg rounded-sm">
          <span className="text-4xl text-left px-20 pt-12 text-visit-font font-bold">
            交通局
          </span>
          <span className=" text-[#86909C] px-20 pt-5 text-xl mb-5">
            Categories: Project &nbsp; &nbsp; 2023-10-24
          </span>
          <div className="flex text-start flex-col pb-12 px-20 w-[740px]">
          <h1>丰都县交通局</h1>
<blockquote>
<p>记得下次好好评审项目以及拉黑胡*</p>
</blockquote>
<p><a href="http://47.108.56.37:8080/">项目地址</a>
市民端：账 123456 密 123456</p>
<h2>项目概述</h2>
<p>一个基本的后台管理，但是内容极其恶心，既要打车又要货拉拉还要 12306 买票</p>
<p>最恶心的就是没有正规的 12306，都是自己爬的接口用。<del>不会被抓吧</del></p>
<h2>技术栈</h2>
<ol>
<li>React + Vite + arcodesign</li>
<li>tailwind</li>
<li>recoil</li>
<li>moment</li>
</ol>
<p>属于是只用上了基本的东西</p>
<h2>负责模块</h2>
<ol>
<li>布局以及侧边栏</li>
<li>信息栏的用户端以及管理端</li>
<li>权限管理端</li>
</ol>
<h3>侧边栏</h3>
<p>这个项目采用的是文件路由的方式，类似于 Next.js 的文件路由
所以通过将文件也就是路由扁平化，递归判断是否为父文件还是子文件来进行侧边栏渲染
通过权限判断一些选项是否渲染，从而达到隐藏的作用</p>
<SyntaxHighlighter language="js" style={oneLight} showLineNumbers>{ `\/\/\文\件\路\由\实\现
const layout\: Record\<string\, FC\<any\> \| null\> \= \{
  default\: \(props\) \=\> \(
    \<Layout\>
      \<\>\{props\.children\}\<\/\>
    \<\/Layout\>
  \)\,
  login\: \(props\) \=\> \<\>\{props\.children\}\<\/\>\,
  systemManage\: \(props\) \=\> \(
    \<Layout\>
      \<SystemLayout\>\{props\.children\}\<\/SystemLayout\>
    \<\/Layout\>
  \)\,
  companyManage\: \(props\) \=\> \(
    \<Layout\>
      \<CompanyLayout\>\{props\.children\}\<\/CompanyLayout\>
    \<\/Layout\>
  \)\,
\}\;
layout\;
const routeModule\: Record\<number\, \(\) \=\> JSX\.Element\> \= import\.meta\.glob\(
  "\.\/routes\/\*\*\/\*\.tsx"\,
  \{
    eager\: true\,
    import\: "default"\,
  \}\,
\)\;
const modules \= Object\.entries\(routeModule\)\;
const pathRegExp \= \/\\\.\\\/routes\(\.\*\)\.tsx\/\;
const defaultRoutes\: RouteObject\[\] \= modules
  \.filter\(\(\[path\]\) \=\> \!path\.includes\("children"\)\)
  \.map\(\(v\) \=\> \{
    const \[path\, Element\] \= v\;
    const pathLike \= path\.replace\(pathRegExp\, "\$1"\)\;
    let routePath \= \/\\\/index\/\.test\(pathLike\)
      \? pathLike\.replace\(\/\\\/index\/\, ""\)
      \: pathLike\;
    if \(\/\\\[\\w\+\\\]\/\.test\(pathLike\)\) \{
      const slug \= pathLike\.replace\(\/\.\*\\\[\(\\w\+\)\\\]\/\, "\$1"\)\;
      routePath \= pathLike\.replace\(\/\\\[\\w\+\\\]\/\, \`\:\$\{slug\}\`\)\;
    \}
    \/\/ console\.log\(path\.split\("\/"\)\.filter\(Boolean\)\)\;
    const \[\, \, login\, key\] \= path\.split\("\/"\)\.filter\(Boolean\)\;
    let Layout \= layout\[key\]\;
    Layout \?\?\= layout\["default"\]\;
    \/\/ console\.log\(login\)\;
    if \(login \=\=\= "login"\) \{
      Layout \= layout\["login"\]\;
    \}
    const route\: RouteObject \= \{
      path\: routePath\,
      element\: Layout \? \(
        \<Layout\>
          \<Element \/\>
        \<\/Layout\>
      \) \: \(
        \<Element \/\>
      \)\,
      errorElement\: \<NotFoundPage \/\>\,
    \}\;
    return route\;
  \}\)\;
const childrenRoutes \= createChildren\(routeModule\)\;
const \{ children \= \[\] \} \= childrenToArray\(childrenRoutes\)\;
defaultRoutes\.forEach\(\(v1\) \=\> \{
  children\.forEach\(\(v2\) \=\> \{
    if \(v1\.path\?\.endsWith\(v2\.path\!\)\) v1\.children \= v2\.children\;
  \}\)\;
\}\)\;
export const routes\: RouteObject\[\] \= \[\.\.\.defaultRoutes\]\;
export const router \= createHashRouter\(routes\)\;
` }</SyntaxHighlighter>
<SyntaxHighlighter language="js" style={oneLight} showLineNumbers>{ `\/\/\/\侧\边\栏\渲\染
export default function Side\(\) \{
  const \[selectKey\, setSelectKey\] \= useState\<string\[\]\>\(\[\]\)
  function renderMenu\(
    routes\: IRoutes\[\]\,
    menu\: MenuType\,
    routerFather\: string\,
    isFirstSubmenu\: boolean\,
  \) \{
    return routes\.map\(\(route\) \=\> \{
      const key \= routerFather
        \? \`\$\{routerFather\}\.\$\{route\.RouterFather\}\`
        \: \`menu\.\$\{route\.RouterFather\}\`\;
      const path \= key
        \.replace\(\/\^menu\\\.\/\, ""\)
        \.split\("\."\)
        \.join\("\/"\)\;
      if \(route\.RoutesChildren\.length \> 0\) \{
        \/\/ console\.log\(route\.RouterFather\!\)\;
        return \(
          \<SubMenu
            style\=\{showSystem\(localStorage\.getItem\('role'\)\!\)\.includes\(key\) \? undefined \: \{ display\: 'none' \}\}
            key\=\{key\}
            title\=\{
              isFirstSubmenu \? \(
                \<div className\=" flex items\-center"\>
                  \<div className\=" w\-3 h\-3 bg\-circle rounded\-full mr\-4"\>\<\/div\>
                  \<div className\=" "\>\{menu\[key\]\}\<\/div\>
                \<\/div\>
              \) \: \(
                menu\[key\]
              \)
            \}
          \>
            \{renderMenu\(route\.RoutesChildren as IRoutes\[\]\, menu\, key\, false\)\}
          \<\/SubMenu\>
        \)\;
      \} else \{
        return \(
          \<Menu\.Item key\=\{key\} style\=\{showSystem\(localStorage\.getItem\('role'\)\!\)\.includes\(key\) \? undefined \: \{ display\: 'none' \}\} onClick\=\{\(\) \=\> \{
            setSelectKey\(\[key\]\)
          \}\}\>
            \<Link to\=\{"\/" \+ path\} style\=\{\{ color\: "\#424B5E99" \}\}\>
              \{menu\[key\]\}
            \<\/Link\>
          \<\/Menu\.Item\>
        \)\;
      \}
    \}\)\;
  \}
  const Routes \= splitRoutes\(menu\)\;
  const url \= useLocation\(\)\;
  \/\/ if\(url\.pathname\.startsWith\('\/reservation\/user'\)\)\{
  \/\/   const key \= \['menu\.reservation\.'\]
  \/\/ \}


  return \(
    \<div className\="text\-white overflow\-hidden overflow\-y\-scroll hide\-scrollbar h\-\[92vh\]"\>
      \<Menu
        className\=""
        levelIndent\=\{30\}
        selectedKeys\=\{selectKey\}
        defaultOpenKeys\=\{url\.pathname\.split\('\/'\)\}
      \>
        \{renderMenu\(Routes\, menu\, ""\, true\)\}
      \<\/Menu\>
    \<\/div\>
  \)\;
\}
` }</SyntaxHighlighter>
<p>优点：</p>
<ol>
<li>方便，不需要编写路由表，只需要创建文件就会自动生成对应路由。</li>
<li>后期渲染侧边栏的 menu 文件相比路由表配置起来也简单</li>
</ol>
<p>缺点：</p>
<ol>
<li>文件一创建就会生成路由，先前通过文件渲染侧边栏就会导致不想渲染的子路由也出现在侧边栏。
解决方案是通过 menu 配置进行筛选渲染，但是如此一来就和配置路由表大差不差。</li>
</ol>
<p>总结就是：想使用文件路由，可以直接上手<code>Next.js</code>，能方便很多。加上设置侧边栏也是通过<code>menu.ts</code>来进行配置,倒不如直接使用路由表来渲染</p>
<p>例子：</p>
<SyntaxHighlighter language="ts" style={oneLight} showLineNumbers>{ `\/\/\路\由\类\型
type Auth \= \{
  resource\: string \| RegExp\;
  actions\?\: string\[\]\;
\}\;
export interface AuthParams \{
  \/\/ \某\操\作\需\要\的\权\限\数\组
  requiredPermissions\?\: Array\<Auth\>\;
  \/\/ \是\否\需\要\满\足\一\个\即\可\，\即\是\或\还\是\且\。
  oneOfPerm\?\: boolean\;
\}
export type IRoute \= AuthParams \& \{
  name\: string\;
  key\: string\;
  breadcrumb\?\: boolean\;
  children\?\: IRoute\[\]\;
  hideInMenu\?\: boolean\; \/\/ \是\否\在\菜\单\中\隐\藏\子\路\由\，\为\了\实\现\某\些\三\级\路\由\不\展\示\在\菜\单\中\的\需\求
  icon\?\: React\.ForwardRefExoticComponent\<
    IconProps \& React\.RefAttributes\<unknown\>
  \>\;
\}\;
` }</SyntaxHighlighter>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `export const generatePermission \= \(level\: string\) \=\> \{
  const actions \= level \=\=\= "3" \? \[\] \: \["\*"\]\;
  const result \= \{\}\;
  routes\.forEach\(\(item\) \=\> \{
    if \(item\.children\) \{
      item\.children\.forEach\(\(child\) \=\> \{
        result\[child\.name\] \= actions\;
      \}\)\;
    \}
  \}\)\;
  return result\;
\}\;
const useRoute \= \(userPermission\)\: \[IRoute\[\]\, string\] \=\> \{
  const filterRoute \= \(routes\: IRoute\[\]\, arr \= \[\]\)\: IRoute\[\] \=\> \{
    if \(\!routes\.length\) \{
      return \[\]\;
    \}
    for \(const route of routes\) \{
      const \{ requiredPermissions\, oneOfPerm \} \= route\;
      let visible \= true\;
      if \(requiredPermissions\) \{
        visible \= auth\(\{ requiredPermissions\, oneOfPerm \}\, userPermission\)\;
      \}
      if \(\!visible\) \{
        continue\;
      \}
      if \(route\.children \&\& route\.children\.length\) \{
        const newRoute \= \{ \.\.\.route\, children\: \[\] \}\;
        filterRoute\(route\.children\, newRoute\.children\)\;
        if \(newRoute\.children\.length\) \{
          arr\.push\(newRoute\)\;
        \}
      \} else \{
        arr\.push\(\{ \.\.\.route \}\)\;
      \}
    \}

    return arr\;
  \}\;
  const \[permissionRoute\, setPermissionRoute\] \= useState\(routes\)\;
  useEffect\(\(\) \=\> \{
    const newRoutes \= filterRoute\(routes\)\;
    setPermissionRoute\(newRoutes\)\;
    \/\/ eslint\-disable\-next\-line react\-hooks\/exhaustive\-deps
  \}\, \[userPermission\]\)\;

  const defaultRoute \= useMemo\(\(\) \=\> \{
    const first \= permissionRoute\[0\]\;
    if \(first\) \{
      const firstRoute \= first\?\.children\?\.\[0\]\?\.key \|\| first\.key\;
      return firstRoute\;
    \}
    return ""\;
  \}\, \[permissionRoute\]\)\;

  return \[permissionRoute\, defaultRoute\]\;
\}\;

export default useRoute\;
` }</SyntaxHighlighter>
<SyntaxHighlighter language="tsx" style={oneLight} showLineNumbers>{ `\/\/\渲\染
function renderRoutes\(locale\: \{ \[x\: string\]\: any \}\) \{
  routeMap\.current\.clear\(\)\;
  return function travel\(_routes\: IRoute\[\]\, level\: number\, parentNode \= \[\]\) \{
    return _routes\.map\(\(route\) \=\> \{
      const \{ breadcrumb \= true\, hideInMenu \} \= route\;
      const iconDom \= getIcon\(route\)\;
      const titleDom \= \(
        \<\>
          \{iconDom\} \{locale\[route\.name\] \|\| route\.name\}
        \<\/\>
      \)\;
      routeMap\.current\.set\(
        \`\/\$\{route\.key\}\`\,
        breadcrumb \? \[\.\.\.parentNode\, route\.name\] \: \[\]
      \)\;
      const visibleChildren \= \(route\.children \|\| \[\]\)\.filter\(\(child\) \=\> \{
        const \{ hideInMenu\, breadcrumb \= true \} \= child\;
        if \(hideInMenu \|\| route\.hideInMenu\) \{
          routeMap\.current\.set\(
            \`\/\$\{child\.key\}\`\,
            breadcrumb \? \[\.\.\.parentNode\, route\.name\, child\.name\] \: \[\]
          \)\;
        \}
        return \!hideInMenu\;
      \}\)\;
      \/\/ console\.log\(visibleChildren\)\;
      if \(hideInMenu\) \{
        return \[\]\;
      \}
      if \(visibleChildren\.length\) \{
        return \(
          \<SubMenu key\=\{route\.key\} title\=\{titleDom\}\>
            \{travel\(visibleChildren\, level \+ 1\, \[\.\.\.parentNode\, route\.name\]\)\}
          \<\/SubMenu\>
        \)\;
      \}
      return \(
        \<MenuItem key\=\{route\.key\}\>
          \<Link to\=\{\`\/\$\{route\.key\}\`\}\>\{titleDom\}\<\/Link\>
        \<\/MenuItem\>
      \)\;
    \}\)\;
  \}\;
\}
` }</SyntaxHighlighter>
<p>通过配置路由，可以分权配置，细分到页面和操作，适用于大型的后台管理</p>
<p>直接通过文件配置路由，适用于简单的后台，不需要配置路由表的情况下，用起来方便
当然你可以自己选择 Next.js</p>
<p><del>鄙人浅显的见解，大佬轻喷</del></p>
<h3>剩下两个模块</h3>
<p>简单的表格组件使用而已，没什么亮点</p>
<h2>收获</h2>
<p>对这种路由布局理解提高了一点
帮他们写 12306 的时候，学会了抓包工具 Fiddler Classic。<del>说不定哪天能写一个有趣的东西</del></p>

          </div>
          </div>
        );
      }
    