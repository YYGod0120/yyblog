---
title: NewBlog
date: 2024-02-03
categories: Project
excerpt: 有一个由自己打造的博客，是每个前端开发必备项目。我通过半个月时间，尝试Next搭建了一个博客。
---

# 前言

原本，我利用 Hexo 搭建了一个个人博客，刚开始还挺新鲜的，但慢慢就觉得样式单调，而且我想加入评论以及流量监控很麻烦。所以想着要不自己手写一个，更好控制也能自定义样式。于是 yyblog 就孕育而生

# 结构

整个博客，不仅仅由 yyblog 组成，还有 ybg-cli 脚手架，用于自动创建删除文章以及编译文章。

- **yyblog**

  - Nextjs
  - typescript
  - tailwind
  - react-syntax-highlighter

- **ybg-cli**
  - cac
  - gray-matter
  - he

## yyblog

采用`Nextjs`+`Typescript`+`Tailwindw`为主要技术。

效仿 Hexo 采用纯前端，文章编写删除编译都在本地运行，对前端工程师更友好。
Nextjs 同时也支持全栈开发。简单的 sql 语句也能够对文章进行增删改查。

Next 提供的文件路由同时也可以帮我们自定义一些特殊页面，常见的 layout 页面，404 页面以及错误页面等等。

> 避免中文命名文件！！

除了文件路由以外，Next 也提供了很多组件以及优化，比如 `font`，`<Image>`标签还有`<Script>`标签。
这里说一下`<Script>`，博客网站上我放了一些动画(来源于 codepen),而这些动画`script`脚本，放入 `tsx(jsx)` 中只能通过`dangerouslySetInnerHTML`这个极具风险的 attribute
但正好 Nextjs 提供了一个`<Script>`，能够让我们使用脚本组件。

## ybg-cli

采用纯前端的重点就在于文章的生成删除以及编译，麻烦就麻烦在编译成 TSX 代码插入到 yyblog 中形成页面。

光看文字不如上点代码：

```typescript
export async function compileFile(): Promise<mdFile[]> {
  let compiledFiles: mdFile[] = [];
  const fileList = fs.readdirSync(_postFolder);
  for (const file of fileList) {
    const filePath = path.join(_postFolder, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const parsedFile = matter(fileContent);
    const newMatter = {
      ...parsedFile,
      data: { ...parsedFile.data, date: UTCToString(parsedFile.data.date) },
    };
    const picPath = makeImportPic(await marked(parsedFile.content));
    const htmlText = HtmlToNext(await marked(parsedFile.content));
    compiledFiles.push(
      picPath
        ? {
            mdMatter: newMatter,
            mdHtml: htmlText,
            other: {
              picPath: picPath,
            },
          }
        : { mdMatter: newMatter, mdHtml: htmlText },
    );
  }
  return compiledFiles;
}
```

读取文件并且用 gray-matter 解析 md 文件生成对应的内容。
`mdMatter`是文章头部`yaml`格式内容的解析。
`mdHtml`是文章主题部分的解析。
`other`是解析成 Html 后需要插入到最后 TSX 内容的东西。

重点在于`HtmlToNext`函数:

```tsx
import he from "he";
function ImageRepimg(html: string) {
  const processedHtml = html.replace(
    /<img\s+src="(.*?)"\s+alt="(.*?)".*?\/>/g,
    function (match, src, alt) {
      const modifiedSrc = src.split("/");
      const newSrc = modifiedSrc[modifiedSrc.length - 1]; //修改后的SRC

      const modifiedAlt = alt; // 修改后的alt

      return `<Image src={${newSrc.slice(
        0,
        newSrc.lastIndexOf("."),
      )}} alt="${modifiedAlt}" 
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }} />`;
    },
  );
  return processedHtml;
}
function replaceClassName(html: string) {
  const processedHtml = html.replace(/class=/g, "className=");
  return processedHtml;
}
function highLightHtml(html: string) {
  // 在代码块内的特殊字符前加上 \
  const replacedString1 = html.replace(
    /<pre><code className="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
    (_, language, codeContent) => {
      //转义符删除
      const decodeCode = he.decode(codeContent);
      const codeWithBackslash = decodeCode.replace(/([^\w\s"'])/g, "\\$1");
      return `<SyntaxHighlighter language="${language}" style={oneLight} showLineNumbers>{ \`${codeWithBackslash}\` }</SyntaxHighlighter>`;
    },
  );

  return replacedString1;
}
export function HtmlToNext(html: string) {
  //替换img标签
  const step1Html = ImageRepimg(html);
  //替换class为className
  const step2Html = replaceClassName(step1Html);
  //高亮代码
  const step3Html = highLightHtml(step2Html);
  //闭合分割线
  const step4Html = step3Html.replace(/<hr>/g, "<hr />");
  return step4Html;
}
```

通过对解析后 html 的修改，主要是用正则，实现 html 向 TSX(Next)的转化。

# 3月4号更新：

更新了英文版，主要采用的是Next的中间件-`middleware.js`以及`react-i18next`和`i18next`,这两个库i18n转化库。

```javascript
export function middleware(req) {
  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  // 记住用户默认使用的语言
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
    );
  }
  // 跳转页面同时保持语言设置
  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer"));
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`),
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
```

这一段是中间件主要的代码，作用是用户使用不支持语言时自动跳转到默认语言，记住用户每次结束后使用的语言以及页面跳转时记住用户的语言选择。

最后在每个page都使用`useTranslation`转化语言。

```tsx
// About Page
export default async function Page({
  params: { language },
}: {
  params: { language: string };
}) {
  const { t } = await useTranslation(language, "translation");

  return (
    <div className=" mt-8 flex flex-col rounded bg-white px-4 py-3 text-start shadow-lg md:px-14 md:py-10 ">
      <div className="mb-5 cursor-default text-3xl font-bold">
        {t("AboutMe")}
      </div>
      <div className="ml-3 text-lg">
        <li className="mb-5">💬 {t("line1")}</li>
        <li className="mb-5">
          👨‍💻 {t("line2")}
          <a
            href="https://redrock.team/"
            className=" hover-underline-animation text-visit-font no-underline"
          >
            {t("official")}
          </a>
        </li>
        <li className="mb-5">
          🤝{t("line3")}
          <a
            href="https://www.google.com/intl/zh-CN_cn/gmail/about/"
            className=" hover-underline-animation text-visit-font no-underline"
          >
            yeyan308911@gmail.com
          </a>
        </li>
        <li className="mb-5">🌱{t("line4")}</li>
      </div>
    </div>
  );
}
```

# 总结

博客本体不难，主要是动画和移动适配稍微麻烦。
CLI 的难点在于解析文章以及路径问题。

> 一些使用到的库或者代码：

- [gray-matter](https://github.com/jonschlinkert/gray-matter)：解析静态网页元数据
- [marked](https://github.com/markedjs/marked)：转化`md`文件为 HTML
- [rimraf](https://github.com/isaacs/rimraf)：快捷删除文件夹及其内容
- [tsup](https://github.com/egoist/tsup)：快速构建 TypeScript 项目的工具
- [picocolors](https://github.com/alexeyraspopov/picocolors)：命令行颜色
- [cac](https://github.com/cacjs/cac)：构建命令行工具的 JavaScript/TypeScript 框架
- [codepen](https://codepen.io/)： 动画及特别的 404 页面都来源于此
- [react-i18next](https://github.com/i18next/react-i18next) i18n for react
