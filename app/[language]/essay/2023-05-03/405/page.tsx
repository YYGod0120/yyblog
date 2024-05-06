import Image from "next/image";
import dynamic from "next/dynamic";
//@ts-ignore
import day1_station from "@/public/imgs/武汉之行/day1_station.jpg";
//@ts-ignore
import me_girlfriend from "@/public/imgs/武汉之行/me_girlfriend.jpg";
//@ts-ignore
import bridge0 from "@/public/imgs/武汉之行/bridge0.jpg";
//@ts-ignore
import bridge1 from "@/public/imgs/武汉之行/bridge1.jpg";
//@ts-ignore
import guozao1 from "@/public/imgs/武汉之行/guozao1.jpg";
//@ts-ignore
import guozao2 from "@/public/imgs/武汉之行/guozao2.jpg";
//@ts-ignore
import gude from "@/public/imgs/武汉之行/gude.jpg";
//@ts-ignore
import jianghang from "@/public/imgs/武汉之行/jianghang.jpg";
//@ts-ignore
import huanghelou from "@/public/imgs/武汉之行/huanghelou.jpg";
//@ts-ignore
import day3_m from "@/public/imgs/武汉之行/day3_m.jpg";
//@ts-ignore
import donhu1 from "@/public/imgs/武汉之行/donhu1.jpg";
//@ts-ignore
import donhu2 from "@/public/imgs/武汉之行/donhu2.jpg";
//@ts-ignore
import donhu3 from "@/public/imgs/武汉之行/donhu3.jpg";
//@ts-ignore
import cha from "@/public/imgs/武汉之行/cha.jpg";
//@ts-ignore
import chucai1 from "@/public/imgs/武汉之行/chucai1.jpg";
//@ts-ignore
import chucai2 from "@/public/imgs/武汉之行/chucai2.jpg";
//@ts-ignore
import zhongshan from "@/public/imgs/武汉之行/zhongshan.jpg";
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
          武汉之行
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Life &nbsp; &nbsp; 2023-05-03
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <blockquote>
            <p>
              人真的多多多，酒店真的远远远；希望下次能避开大假期，酒店定的
              <del>贵一点</del>好一点
            </p>
          </blockquote>
          <h1>Day1</h1>
          <p>
            早上八点快九点的动车，5 点钟我就从学校出发了
            昨天买的零食还丢在了车上，硬生生饿七个多小时到武汉
          </p>
          <Image
            src={day1_station}
            alt=""
            sizes="100vw"
            style={{
              width: "740",
              height: "auto",
            }}
          />

          <p>
            人多到 6 点排队吃小龙虾要排上 130
            桌，换了一家偏僻角落的店铺才能吃上。
          </p>
          <p>吃完饭坐上了轮渡，一路坐到长江大桥桥下。</p>
          <Image
            src={me_girlfriend}
            alt="轮渡上合照一张"
            sizes="100vw"
            style={{
              width: "740",
              height: "auto",
            }}
          />

          <p>从船上看长江大桥不如在路上看</p>
          <Image
            src={bridge0}
            alt="桥头小亭子"
            sizes="100vw"
            style={{
              width: "360",
              height: "auto",
            }}
          />
          <Image
            src={bridge1}
            alt="长江大桥"
            sizes="100vw"
            style={{
              width: "360",
              height: "auto",
            }}
          />

          <h1>Day2</h1>
          <p>
            来武汉听说不能不过早 兰陵路离我们酒店算最近的(一样很远)
            武汉本地热干面真的和别的地方的武汉热干面不一样，香太多了。
          </p>
          <Image
            src={guozao1}
            alt="热干面，烧卖，绿豆汤"
            sizes="100vw"
            style={{
              width: "360",
              height: "auto",
            }}
          />
          <Image
            src={guozao2}
            alt="三鲜豆皮"
            sizes="100vw"
            style={{
              width: "360",
              height: "auto",
            }}
          />

          <blockquote>
            <p>这家三鲜豆皮不好吃</p>
          </blockquote>
          <p>下午去了古德寺，和以前去过的寺庙不太一样，带有点欧洲的风格。</p>
          <Image
            src={gude}
            alt="古德寺"
            sizes="100vw"
            style={{
              width: "740",
              height: "auto",
            }}
          />

          <p>
            本来打算再去长江大桥上看看日落，低估了我们的行进速度，美美的在路上看着太阳落下。
          </p>
          <Image
            src={jianghang}
            alt="路经江汉桥"
            sizes="100vw"
            style={{
              width: "740",
              height: "auto",
            }}
          />

          <p>
            而且今晚的人流量，少说也有昨天的 2
            倍。大桥上黑压压的都是人，根本没法走。
            想挤地铁回家，误打误撞挤到户部巷中，到了拍黄鹤楼的绝美点。
          </p>
          <Image
            src={huanghelou}
            alt="封面来源"
            sizes="100vw"
            style={{
              width: "740",
              height: "auto",
            }}
          />

          <h1>Day3</h1>
          <p>早上要换酒店，干脆睡吃一点，在酒店过早了</p>
          <Image
            src={day3_m}
            alt="锅贴，热干面，绿豆汤米酒和燕麦豆浆"
            sizes="100vw"
            style={{
              width: "740",
              height: "auto",
            }}
          />

          <p>
            下午去东湖，坐地铁转了无数个站，在下午太阳最大的时候来到了东湖
            原来省博和省美术馆也在这里，可惜没预约也进不去
          </p>
          <Image
            src={donhu1}
            alt="东湖"
            sizes="100vw"
            style={{
              width: "240",
              height: "auto",
            }}
          />
          <Image
            src={donhu2}
            alt="屈原纪念馆"
            sizes="100vw"
            style={{
              width: "240",
              height: "auto",
            }}
          />
          <Image
            src={donhu3}
            alt="美女在东湖"
            sizes="100vw"
            style={{
              width: "240",
              height: "auto",
            }}
          />

          <p>
            挺讨厌吃饭要排队的，但楚采这家店上的快，价格便宜，主要是好吃，特别是虾和红烧肉。
            可惜在五一踩着开门的时间去排队也得等上一个小时。
          </p>
          <Image
            src={cha}
            alt="心心念念的茶颜悦色"
            sizes="100vw"
            style={{
              width: "240",
              height: "auto",
            }}
          />
          <Image
            src={chucai1}
            alt="楚采的红烧肉"
            sizes="100vw"
            style={{
              width: "240",
              height: "auto",
            }}
          />
          <Image
            src={chucai2}
            alt="楚采的虾"
            sizes="100vw"
            style={{
              width: "240",
              height: "auto",
            }}
          />

          <p>吃完去中山公园散个步</p>
          <Image
            src={zhongshan}
            alt="路过旋转木马"
            sizes="100vw"
            style={{
              width: "740",
              height: "auto",
            }}
          />

          <p>四天武汉之行就要结束咯</p>
          <h1>Day4</h1>
          <p>
            下次车票订一个站，时间差不多，不然分开太痛苦了，又在车站等三个多小时才上车
          </p>
          <p>回到重庆太晚了，在学长的别墅留宿一晚</p>
          <h1>总结</h1>
          <p>
            看来我俩旅游不适合特种兵玩法，就喜欢吃吃吃，不喜欢走走走
            酒店别因为便宜就定在鸟不拉屎的地方，啥也没有打车费还高，加上打车费和位置好的酒店价格没差
            人实在太多，大伙疫情关了 3
            年，现在刚放开的一个小长假，出行人数简直爆炸，希望下次能避开高峰期
          </p>
        </div>
      </div>
      <div className="mt-12 bg-white px-6 py-8">
        <Comment />
      </div>
    </div>
  );
}
