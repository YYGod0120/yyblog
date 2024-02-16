---
title: DataHub
date: 2023-12-01
categories: Project
excerpt: 红岩网校数据中台
---

# 数据中台

这个项目是用于展示一些产品以及运营的数据，也便于记录运营数据

## 技术栈

- Vite + React + TS + Arco-design
- Tailwind
- SWR
- recharts
- husky,commitelint,eslint 等等规范配置

## 项目结构

总的来说分为可视化图表页以及后台数据页

```shell
├─dtable
│  ├─operations
│  └─product
│      ├─tracking
│      └─untracking
├─dvisualization
└─login
```

我负责的就是 dvisualization 部分

## 项目难点以及亮点

### 侧边栏

后台总体框架的搭建和交通局的类似，但是我这次采用了重邮帮后台的路由以及侧边栏渲染，这里就不多谈了，有兴趣可以看[交通局](https://www.yygod0120.com/2023/10/24/%E2%88%A0%E7%97%9B%E5%B1%80/)

### 数据可视化界面

数据可视化界面中的图表，我采用的是[Rechart](https://recharts.org/en-US/),易上手，类型丰富，最重要的是有中文翻译

因为涉及到数据的展示，所以我采用数据与组件分离的设计模式，将组件和数据抽离开

- service 中获取数据
- Chart 组件中展示数据

#### service

先说 service，我们技术选型的时候选择了 SWR 作为网络请求库,原因有以下几点：

1. SWR 具有自动重新请求以及用户重新聚集时请求，这有助于数据实时更新以及展示
2. SWR 能避免很多 useEffect 中编写网络请求遇到的问题，比如说请求顺序和返回顺序的不一致以及依赖相关的问题。
3. 完美符合了数据组件分离政策
4. 相比于 React Query，SWR 更容易上手

但是 SWR 同样也具有一些缺点

```typescript
export function useGetPv() {
  const { data, error, isLoading } = useSWR(
    `/data-middle-office/pvuv?type=pv&periods=${xAxis["days"]}`,
    fetcher,
  );
  if (!isLoading && !error) {
    const cqappPv = data.products.cqapp;
    const cqhelperPv = data.products.cqhelper;
    return [cqappPv, cqhelperPv];
  }
  //   return [null, null];
}
```

像这样一个 swr 获取 PV 数据，在 isLoading 阶段是不会有返回值的，这样就会导致`const [cqappPv, cqhelperPv] = useGetPv()`报错 undefined
所以我采用`return [null,null]`来处理,像这样的空值处理在数据组件分离中很常见，感觉我这样的写法也不算是最优的。

另外一点关于 service 数据处理的是关于类型的处理
早在[暑假的场地申请](https://www.yygod0120.com/2023/09/18/TheFirstRedrockProject/)中遇到两个模块类似的数据的处理，当时我的做法是直接拆开为两个部分，但是这样会有一些问题：

- 类型重复度高，无用代码数量多，维护起来困难

```ts
//，其余场地
export interface DataType {
  application_id: number;
  location_id: number;
  place?: string;
  apply_date: number;
  periods?: boolean[];
  use_date?: string;
  application: string;
  applicant_id: string;
  organization?: string;
  is_org: boolean;
  state: number;
  reason: string;
  phone: string;
}
//科技会堂
export interface techologyHallDataType {
  application_id: number;
  location_id: number;
  place?: string;
  apply_date: number;
  payloads: payload[];
  periods?: boolean[];
  use_date?: string;

  application: string;
  applicant_id: string;
  organization_name?: string;
  is_org: boolean;
  state: number;
  reason: string;
  phone: string;
}
```

- 对应模块代码重复度高,cv 过多

而这次的运营数据也遇到了对应的问题，但这次我选择不分开而是联合起来
数据类型部分：

```ts
export type OperationData = {
  id: string;
  name: string;
  periods: string;
  purpose: string;
  users: string;
  price: string;
};

export type helperOperationData = OperationData & {
  reading: number;
  transmit: number;
};

export type qqOperationData = OperationData & {
  reading: number;
  comment: number;
};

export type otherData = OperationData & {
  way: string;
  result: string;
};
```

获取数据部分：

```ts
export type Operations<T extends "qq" | "helper" | "other"> = T extends "qq"
  ? qqOperationData[]
  : T extends "helper"
    ? helperOperationData[]
    : T extends "other"
      ? otherData[]
      : never;
export function getOperationData<T extends "qq" | "helper" | "other">(
  project: T,
  periods?: string,
): Operations<T> | undefined {
  const url = periods
    ? `/data-middle-office/runtimes/${project}?periods=${periods}`
    : `/data-middle-office/runtimes/${project}`;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (isLoading) {
    console.log("Loading...");
    return undefined;
  } else if (error) {
    console.log("Error:", error);
    return undefined;
  } else {
    console.log("Data:", data);
    return data as Operations<T>;
  }
}
```

采取对应参数返回对应数据模式，一开始采用的是函数重载方式，但是过于臃肿，于是换成这种泛型模式

#### Charts

图表部分我采用的是二层封装的思路

- 第一层：对 Rechart 中的折线图，饼图以及柱状图进行封装，让图本身符合要求
- 第二层：对封装后的 Rechart 再进行 Header 以及 Bottom 的封装，让图"更完整"

为了文章的大小就不在这展示了。

## 总结

这算是第 4 次做项目，可能也是因为项目本身也不大，做起来还是很快的，只是在后端接口上耽误了时间

debug 能力也有所提高，对于一些小 bug 比如跨域以及图片路径丢失等等，解决起来比暑假快上不少

重点收获是图表的封装以及对网络请求的一些理解，还有 React Design 的一些想法

> 记得关注 RRFE-CLI
