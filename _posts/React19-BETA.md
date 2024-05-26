---
title: React19-BETA
date: 2024-05-26
categories: Technology
excerpt: React19
---

# React19

4月25日，React官方宣布React19在NPM上推出，可以先行下载使用。
正好此博客也是NextJS搭建的，尝试一下React19带来哪些变化。

## 准备

官方的建议是先安装稳定版本的React18.3,以在更新到19前发现一些潜藏的问题。
检查无误后，就可以安装React-19（还处于BETA）使用新API。
[React-v19的升级指南](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#typescript-changes)

## 变化

React在沉寂一长段时间后，听取社区的意见，改掉许多开发痛点以及优化框架。重磅推出了React19

**重大的改变有以下几点：**

- React-Compiler：帮助开发人员自动优化页面，减少甚至抛弃useMemo和useCallback。
- Actions：新的`<form>`标签以及配套的Hooks表单操作。
- New Hooks：新的增强操作钩子如`use()`等等。
- Document Metadata：现在可以直接在单个组件里编写Meta数据。
- Web components：React 代码现在将使我们能够合并 Web 组件。

### React-Compiler

ReactCompiler可以说是19里最让人激动的东西，它是一个新的编译器，用于帮程序员优化React代码。
比如说先前的useMemo，useCallback等等这一系列的优化钩子，不说使用起来麻烦，使用不当甚至还会造成负优化。于是React推出了Compiler直接自动处理代码，避免了负优化的现象。

简单来说，Compiler做到的事情就是将组件中每个元素，每一个函数都进行缓存，只有当发生变化的时候才会重新缓存，不然就接着使用。
本文主要是说使用而非原理，具体可以查看这篇文章[我已彻底拿捏 React Compiler](https://mp.weixin.qq.com/s/7XFn56O3ia5vHPqSaeo6GA)

对于React-Compiler的启用，我们首先要对我们的项目做一个检测。

```shell
npx react-compiler-healthcheck
```

> 该脚本主要用于检测
> 1、项目中有多少组件可以成功优化：越多越好
> 2、是否使用严格模式，使用了优化成功率更高
> 3、是否使用了与 Compiler 不兼容的三方库

这个框架的检测效果如下：
<img src="/imgs/React19-BETA/test.png" alt="react-server-components"  />
对于不同的框架使用Compiler的方法不同，Next启用Compiler需要先下载Next-canary版以及babel-plugin-react-compiler

```shell
npm install next@canary babel-plugin-react-compiler
```

然后在`next.config.js`:

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
};

module.exports = nextConfig;
```

便可以启动compiler对项目进行优化。
成功优化后，可以在React-dev-tool就会看到Memo星星。
<img src="/imgs/React19-BETA/compiler.png" alt="react-server-components"/>

> 值得一说的是Compiler还在测试中，存在不少问题，比如与i18n的客户端组件存在一些冲突等，所以有待观望

### New Hooks

React19更新许多新的Hooks，包括`use()`,`useOptimistic()`,`useFormStatus()`,绝大多是都是为了Action也就是`<form>`标签所适配的。

因为没用到表单，所以我只先使用`use()`。

use用于获取资源的值，比如说Promise或者Context。和其他钩子不同，它可以在if语句中使用。

他的具体原理如下(取自官方文档)：

> 当使用 Promise 调用时， use API 会集成 和 Suspense 错误边界。当传递给的 use Promise 处于挂起状态时，组件调用 use 将挂起。如果调用 use 的组件包装在 Suspense 边界中，则将显示回退。 解析 Promise 后，Suspense 回退将替换为使用 use API 返回的数据呈现的组件。如果传递给 use 的 Promise 被拒绝，则将显示最近的错误边界的回退。

基础用法如下：

```js
const value = use(resource);
```

**值得注意的是：**

- use 必须在 Component 或 Hook 中调用 API。
- 首选在服务器组件中创建 Promise 并将其传递给客户端组件，而不是在客户端组件中创建 Promise。在客户端组件中创建的 Promise 会在每次渲染时重新创建。从服务器组件传递到客户端组件的 promise 在重新渲染时是稳定的。
- 像useContext一样， use(context)总是在调用它的组件上方寻找最接近的上下文提供程序。它会向上搜索，并且不考虑要从中调用 use(context) 的组件中的上下文提供程序。
- 将 Promise 从服务器组件传递到客户端组件时，其解析值必须可序列化才能在服务器和客户端之间传递。函数等数据类型不可序列化，并且不能是此类 Promise 的解析值。

在此项目中的使用如下：

```jsx
"use client";
import { Suspense } from "react";
import { GhostPointer } from "./GhostPointer";
import { MyTypeWrite } from "./TypeWrite";
import { DailyWord } from "@/utils/getDailyWord";
import ErrorBoundary from "./ErrorBoundary";

export function Banner({
  language,
  isGetDailyWord,
  wordsFetch,
}: {
  wordsFetch?: Promise<DailyWord>;
  language: string;
  isGetDailyWord: boolean;
}) {
  return (
    <ErrorBoundary
      fallback={
        <GhostPointer>
          <span
            style={{
              display: "flex",
              lineHeight: "250px",
              fontSize: "4rem",
              justifyContent: "center",
              color: "white",
            }}
          >
            ⚠️Something went wrong
          </span>
        </GhostPointer>
      }
    >
      <Suspense
        fallback={
          <GhostPointer>
            <span
              style={{
                display: "flex",
                lineHeight: "250px",
                fontSize: "4rem",
                justifyContent: "center",
                color: "white",
              }}
            >
              Loading...
            </span>
          </GhostPointer>
        }
      >
        <GhostPointer>
          <MyTypeWrite
            language={language}
            wordsFetch={wordsFetch}
            isGetDailyWord={isGetDailyWord}
          />
        </GhostPointer>
      </Suspense>
    </ErrorBoundary>
  );
}
```

利用ErrorBoundary以及Suspense包裹目标组件，在解析中以及解析失败后有相对应的UI呈现。
再从服务端传入wordsFetch函数再进行use解析。

```tsx
//layout
import { Banner } from "../components/Banner";
import { getDailyWord } from "@/utils/getDailyWord";

export default async function FrontLayout({
  children,
  params: { language },
}: {
  children: React.ReactNode;
  params: { language: string };
}) {
  const wordsFetch = getDailyWord();
  return (
    <div className="flex flex-col items-center">
      <div className="w-[100vw]">
        <Banner
          language={language}
          isGetDailyWord={true}
          wordsFetch={wordsFetch}
        ></Banner>
      </div>
      <section className="w-full">{children}</section>
    </div>
  );
}
//TypeWrite
("use client");
import { usePathname } from "next/navigation";
import { ReactTyped } from "react-typed";
import { getDailyWord } from "@/utils/getDailyWord";
import { Suspense, use, useState } from "react";
import { DailyWord } from "@/utils/getDailyWord";
import { splitPathname } from "@/utils/dealPathname";
import { useTranslation } from "@/app/i18n/client";
export function MyTypeWrite({
  language,
  isGetDailyWord,
  wordsFetch,
}: {
  language: string;
  isGetDailyWord: boolean;
  wordsFetch?: Promise<DailyWord>;
}) {
  let word;
  const pathName = usePathname();
  const title = splitPathname(pathName);
  const { t } = useTranslation(language, "translations");
  if (isGetDailyWord && wordsFetch) {
    const words = use(wordsFetch);
    word = language === "zh-CN" ? words.note : words.content;
  }
  return (
    <ReactTyped
      strings={!word ? [t(title)] : [word]}
      typeSpeed={50}
      style={{
        display: "flex",
        lineHeight: "250px",
        fontSize: "4rem",
        justifyContent: "center",
        color: "white",
      }}
    />
  );
}
```

最终效果可见博客首页(代码存放于github)

### 其他

React19的更新远不止于此，目前我只用上这两个方法。

还有关于乐观更新，表单操作等等的钩子尚未使用。

以及令人诟病的Ref转发也得到了优化。

报错提示更人性化等等等等。

在未来会慢慢投入使用，投入生产。

[React19官方博客](https://react.dev/blog/2024/04/25/react-19)

[关于USE](https://react.dev/reference/react/use)

[关于Compiler](https://react.dev/learn/react-compiler#)
