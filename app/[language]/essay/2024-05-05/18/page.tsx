import Image from "next/image";
import dynamic from "next/dynamic";
//@ts-ignore
import flower from "@/public/imgs/爱在川渝/flower.jpg";
//@ts-ignore
import flower1 from "@/public/imgs/爱在川渝/flower1.jpg";
//@ts-ignore
import ciqikou from "@/public/imgs/爱在川渝/ciqikou.jpg";
//@ts-ignore
import ciqikou1 from "@/public/imgs/爱在川渝/ciqikou1.jpg";
//@ts-ignore
import chaotianmen from "@/public/imgs/爱在川渝/chaotianmen.jpg";
//@ts-ignore
import laifushi from "@/public/imgs/爱在川渝/laifushi.jpg";
//@ts-ignore
import nanshan from "@/public/imgs/爱在川渝/nanshan.jpg";
//@ts-ignore
import nanshan2 from "@/public/imgs/爱在川渝/nanshan2.jpg";
//@ts-ignore
import laojundon from "@/public/imgs/爱在川渝/laojundon.jpg";
//@ts-ignore
import binqilin1 from "@/public/imgs/爱在川渝/binqilin1.jpg";
//@ts-ignore
import naicha from "@/public/imgs/爱在川渝/naicha.jpg";
//@ts-ignore
import chuanglou from "@/public/imgs/爱在川渝/chuanglou.gif";
//@ts-ignore
import honyadon from "@/public/imgs/爱在川渝/honyadon.jpg";
// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "@/app/[language]/essay/essay.css";
export default function Page() {
  return (
    <div>
      <div className="mt-8 flex flex-col items-start rounded-sm bg-white text-lg shadow-lg">
        <span className="px-4 pt-12 text-left text-4xl font-bold text-visit-font md:px-[2.5vw] lg:px-20">
          爱在川渝
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Life &nbsp; &nbsp; 2024-05-05
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <blockquote>
            <p>
              本身在重庆读书，但是对重庆也没咋探索过，仅限于学校周边。这次五一以一个游客的视角探索一下重庆
            </p>
          </blockquote>
          <h1>第一天</h1>
          <p>
            因为本身在重庆，所以并不需要像去年旅游那样早早赶高铁，一觉睡到8点半准备去办酒店入住。
          </p>
          <p>
            酒店本身还有点远，从一号线头坐到尾巴，住在沙坪坝附近。好在酒店附近就是天街广场，还有一个小夜市，夜宵问题解决了。
          </p>
          <blockquote>
            <p>Flower for love</p>
          </blockquote>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <Image
              src={flower}
              alt="flower for love"
              sizes="100vw"
              style={{
                width: "360",
                height: "auto",
              }}
            />
            <Image
              src={flower1}
              alt="flower for love"
              sizes="100vw"
              style={{
                width: "360",
                height: "auto",
              }}
            />
          </div>
          <p>2点钟接到女朋友，3点半到酒店，四点半出门吃了第一顿重庆火锅。</p>
          <p>正好离磁器口近，晚上就逛逛磁器口了。</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Image
              src={ciqikou}
              alt="磁器口"
              sizes="100vw"
              style={{
                width: "360",
                height: "auto",
              }}
            />
            <Image
              src={ciqikou1}
              alt="磁器口"
              sizes="100vw"
              style={{
                width: "360",
                height: "auto",
              }}
            />
          </div>

          <p>只可惜天气不是那么完美，带着一点细雨。</p>
          <h1>第二天</h1>
          <p>早早的八点起床，但是还是整理到了9点多才出门。</p>
          <p>
            这次不得不说一下男女生出门的区别了，男生洗漱拉屎穿衣服10min轻松搞定，女生化妆就要化45min，七七八八的事情够我睡一个回笼觉。
          </p>
          <p>早上天气还行，我们直接去了朝天门和来福士。</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Image
              src={chaotianmen}
              alt="朝天门"
              sizes="100vw"
              style={{
                width: "360",
                height: "auto",
              }}
            />
            <Image
              src={laifushi}
              alt="来福士"
              sizes="100vw"
              style={{
                width: "360",
                height: "auto",
              }}
            />
          </div>
          <blockquote>
            <p>
              上次被剪纸画坑了188，这次被流水线拍照拍了100块钱。真的是随意拍加流水线工程。
            </p>
          </blockquote>
          <p>中午到2点多才吃午饭，上了南山到我学校门口吃顿串串。</p>
          <p>
            吃饱喝足去逛了逛老街一路逛到老君洞。爬坡爬坡还是爬坡。最后老君洞人也一样还是好多。
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Image
              src={nanshan}
              alt="南山"
              sizes="100vw"
              style={{
                width: "240",
                height: "auto",
              }}
            />
            <Image
              src={nanshan2}
              alt="南山"
              sizes="100vw"
              style={{
                width: "240",
                height: "auto",
              }}
            />
            <Image
              src={laojundon}
              alt="老君洞"
              sizes="100vw"
              style={{
                width: "240",
                height: "auto",
              }}
            />
          </div>

          <p>不得不说南山上风景还是在线的。</p>
          <p>
            晚上想着去一下洪崖洞，但是脚也是实在受不了就放弃了，直接回酒店休息了。
            点了一顿也是唯一一顿烧烤外卖。
          </p>
          <h1>第三天</h1>
          <p>一样的八点起床，一样的九点半出门。</p>
          <p>
            目的地山城步道和十八梯。这两个地方本来应该是挺不错的徒步的路线，从居民楼穿来穿去，体验一下那种山城的氛围。但是五一人流量太大了，只能感受到人感受不到城。
          </p>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <Image
              src={binqilin1}
              alt="山城冰淇淋"
              sizes="100vw"
              style={{
                width: "360",
                height: "auto",
              }}
            />
            <Image
              src={naicha}
              alt="七分甜"
              sizes="100vw"
              style={{
                width: "360",
                height: "auto",
              }}
            />
          </div>

          <blockquote>
            <p>除了价格不美丽，其他很满意。</p>
          </blockquote>
          <p>中午吃豌杂面，然后准备去李子坝看看穿楼电车，还有鹅岭二厂。</p>
          <p>
            穿楼电车其实一般，甚至说下面看电车穿楼还不如在电车上看下面的人挤成一团。
          </p>
          <Image
            src={chuanglou}
            alt="李子坝穿楼"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <p>
            二厂的涂鸦墙挺有意思的，风格很不错。<del>时代少年团粉丝狂喜</del>
          </p>
          <blockquote>
            <p>应该先去二厂再去李子坝，这样不用爬上鹅厂了。</p>
          </blockquote>
          <p>晚上去洪崖洞了，但是没去到洪崖洞里面，而是去了江对面。</p>
          <p>好多人拍照，可惜没有相机拍的不是很好看。</p>
          <Image
            src={honyadon}
            alt="洪崖洞"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <blockquote>
            <p>人实在太多，回去排队坐轻轨排了45分钟多。</p>
          </blockquote>
          <h1>第四天</h1>
          <p>不用早起了，但是还是早醒了。</p>
          <p>离开的这一天虽然是下午的高铁，但是也没啥心情玩了。</p>
          <p>酒店门口有一家很火的舒家大院，就当作重庆旅游的尾音吧。</p>
          <h1>总结</h1>
          <p>
            重庆，是一个充满热情的城市。它会用滚烫的火锅招待你，用骄阳似火的天气迎接你。住在山城里的人，无论男女老少都操着一口重庆话帮你指路。
          </p>
          <p>
            重庆更是一座适合旅游的城市，消费水平远低于北上广深。它有不同于其他城市的垂直高度，会教训每一个不运动的人。
          </p>
          <p>火锅串串烤苕皮冰粉更是站在美食的山顶，代表重庆的特色美食。</p>
          <blockquote>
            <p>
              “我喜欢重庆，也许是因为你在，也许是因为美食，也许是因为这的人热情。不管怎样，我就是喜欢这里”
              -最爱的人
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
