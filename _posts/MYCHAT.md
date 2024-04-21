---
title: MYCHAT
date: 2024-04-21
categories: Project
excerpt: 一个基于大模型的类GPT的SPA应用
---

# 项目截图

<img src="/imgs/MYCHAT/project0.png" alt="项目截图1"/>
<img src="/imgs/MYCHAT/project1.png" alt="项目截图2"/>

# 技术选型

1. React
2. Typescript
3. Tailwind
4. Axios
5. Zustand
6. marked-react,dayjs,file-saver

# 项目亮点

1. **不同语料库的对话：** 可选择更贴切提问者问题内容的语料库主题，联系上下文，做出切合问题的优质回答。

2. **类GPT流的回答：** GPT流式回答与等待，自动转化md格式。

3. **优秀的用户体验：** 无痛刷新，最大程度减少加载，一键导出对话为word，一键删除以及自定义会话标题。

# 实现难点

## 核心功能-AI对话

**流式对话：** 对于普通的get或者post请求，简单采用`axios`封装进行网络请求。而GPT对话流式数据，`axios`因为基于XHR没法做到post流式请求，改用`fetch`进行数据请求。

```javascript
//基本封装双token无痛刷新
export const service = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
});
service.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

service.interceptors.response.use(async (response) => {
  if (response.data.info === "token invalid") {
    if (response.config.url === "/user/refresh") {
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_id");
    } else {
      const newAccessToken = await postRefreshPost({
        refresh_token: localStorage.getItem("refresh_token"),
      });

      localStorage.setItem("access_token", newAccessToken.data.access_token);
      const originalRequest = response.config;
      originalRequest.headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`;
      return service(originalRequest);
    }
  }
  return response;
});
```

对于特殊请求：

```typescript
const rep = await new_chat({
  session_id: id,
  category: identity,
  content: words_human,
}); //new_chat是基于fetch封装的一个数据请求函数。
const reader = rep.body.getReader();
const decoder = new TextDecoder();

// eslint-disable-next-line no-constant-condition
while (true) {
  const { done, value } = await reader.read();
  // 结果包含两个属性：
  // done  - 如果为 true，表示流已经返回所有的数据。
  // value - 一些数据，done 为 true 时，其值始终为 undefined。
  const decoded = decoder.decode(value, { stream: true });
  renderAIRes.current += decoded;
}
```

因为XHR没法读取post流式数据，所以改用fetch。总所周知，fetch在请求成功发送的时候返回一个内建的Response对象，我们可以通过不同的格式来访问其body。

> Response的body可以是一个可读的字节数据流`ReadableStream`。

`rep.body.getReader()`就是创建一个`reader`对象锁定该流，调用`read()`方法读取内容。

**MD格式转化以及打字机样式：**
个人博客对于md格式的转化是利用`marked`转化为html再进一步进行正则匹配改为适配next的tsx，但这一步已经有人封装好了就是[marked-react](https://github.com/sibiraj-s/marked-react)。这个库的优点在于底层并非`dangerouslySetInnerHTML`实现，避免了XSS攻击，更安全。同时也支持不同语法高亮库进行`code`的高亮显示。~~不用自己库库手搓~~

打字机样式实现的难点在于判断是否正在输出以及正在输出的内容是什么，判断单次输出完毕与否进行下个内容的读取。

```javascript
const renderAIRes = useRef("");
// data读取
const decoded = decoder.decode(value, { stream: true });
setConversation([
  ...conversations,
  { HUMAN: words_human, time: askTime },
  {
    AI: [
      {
        answer: renderAIRes.current,
        isChatting: false,
      },
      { answer: decoded, isChatting: true },
    ],
    time: getCurrentTime(),
  },
]);
renderAIRes.current += decoded;
```

isChatting判断是否是当前流式数据，非当前流式数据通过ref进行保存避免多次重新渲染。

```tsx
//伪代码实现
<div className="">
  {(word as AIType).map((item) => {
    return item.isChatting ? (
      <Typist
        avgTypingDelay={60}
        cursor={{ show: false }}
        key={item.answer}
        onTypingDone={() => {
          oneContentTypingOver(true);
        }}
        className="inline"
      >
        <Markdown>{item.answer}</Markdown>
      </Typist>
    ) : (
      <>{<Markdown>{item.answer}</Markdown>}</>
    );
  })}
</div>
```

根据isChatting选择是否打字机，控制打字机结束后再重新获取新内容进行渲染。
实现GPT打字机样式。

## 用户体验

**零痛更新：**
在先前的项目中，对于后台表单数据的增删查改，都是全部依赖数据请求进行页面重新渲染。这样会导致一个用户体验不行，每次数据更新都要再次请求数据进行渲染，网络请求量大，页面加载慢，用户体验不行。
于是在这个项目中，采用了`Zustand`进行全局数据管理，获取数据复制到本地数据，每次数据更新时同时更新本地数据。利用本地数据进行渲染，实现无痛页面更新渲染。

```tsx
<Button
  className="h-[47px] w-[165px] px-3 py-1"
  style={{
    backgroundColor: "#8C7BF7",
    color: "white",
    border: "none",
  }}
  onClick={() => {
    setIsTaking(true);
    setSession([
      ...sessions,
      {
        created_at: "",
        id: newId,
        metadata: {
          title: "新对话",
          category: "",
        },
        session_id: `${newId}`,
        updated_at: "",
        user_id: "",
        uuid: "",
      },
    ]);
    handleClick(newId + "", "新对话");
    handleChooseIdentity(false);
    setNewId((newId) => newId + 1);
  }}
  disabled={talking}
>
  创建新对话
</Button>
```

新对话创建，删除，以及历史会话记录的删除，更新，都是依赖于本地数据而非请求数据。
但是这样也会有一定的问题，比如首次请求量大，导致瀑布流等等

> RSC(react-serve-component)解决了数据渲染问题，因为它采用服务端生成组件绑定数据返回到客户端进进行渲染。

# 总结

项目写的比较急，加上一个人开发，所以对一些组件封装不足，基本都写在一起。规范程度不够
Typescript也因为项目体积小，开发不规范使用的少。
主要还是解决网络请求以及数据处理上的难点，着力于样式以及用户体验
