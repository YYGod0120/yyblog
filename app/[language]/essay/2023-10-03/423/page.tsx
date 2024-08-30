import Image from "next/image";
import dynamic from "next/dynamic";
//@ts-ignore
import room from "@/public/imgs/长沙之旅/room.JPG";
//@ts-ignore
import jie from "@/public/imgs/长沙之旅/jie.JPG";
//@ts-ignore
import firstdinner from "@/public/imgs/长沙之旅/firstdinner.JPG";
//@ts-ignore
import firstdinner2 from "@/public/imgs/长沙之旅/firstdinner2.JPG";
//@ts-ignore
import firstdinner3 from "@/public/imgs/长沙之旅/firstdinner3.JPG";
//@ts-ignore
import pic from "@/public/imgs/长沙之旅/pic.JPG";
//@ts-ignore
import me from "@/public/imgs/长沙之旅/me.JPG";
//@ts-ignore
import love from "@/public/imgs/长沙之旅/love.JPG";
//@ts-ignore
import breakfast from "@/public/imgs/长沙之旅/breakfast.JPG";
//@ts-ignore
import lunch from "@/public/imgs/长沙之旅/lunch.JPG";
//@ts-ignore
import yeshi from "@/public/imgs/长沙之旅/yeshi.JPG";
//@ts-ignore
import yeshi2 from "@/public/imgs/长沙之旅/yeshi2.JPG";
//@ts-ignore
import yeshi3 from "@/public/imgs/长沙之旅/yeshi3.JPG";
//@ts-ignore
import tea from "@/public/imgs/长沙之旅/tea.JPG";
//@ts-ignore
import milk from "@/public/imgs/长沙之旅/milk.JPG";
//@ts-ignore
import yexiao1 from "@/public/imgs/长沙之旅/yexiao1.JPG";
//@ts-ignore
import icecream from "@/public/imgs/长沙之旅/icecream.JPG";
//@ts-ignore
import lover_back from "@/public/imgs/长沙之旅/lover_back.JPG";
//@ts-ignore
import laomao from "@/public/imgs/长沙之旅/laomao.JPG";
//@ts-ignore
import seaandyou from "@/public/imgs/长沙之旅/seaandyou.JPG";
//@ts-ignore
import ciba from "@/public/imgs/长沙之旅/ciba.JPG";
//@ts-ignore
import lastlunch from "@/public/imgs/长沙之旅/lastlunch.JPG";
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
          长沙之旅
        </span>
        <span className="mb-5 px-4 pt-5 text-xl text-[#86909C] md:px-[2.5vw] lg:px-20">
          Categories: Life &nbsp; &nbsp; 2023-10-03
        </span>
        <div className="flex w-[95vw] flex-col break-words px-[2.5vw] pb-12 text-start md:w-[90vw] md:px-[2.5vw] lg:w-[740px] lg:px-20">
          <blockquote>
            <p>下次记得国庆多呆一天</p>
          </blockquote>
          <h1>day1</h1>
          <p>
            提前好几天约的师傅不知道是睡过头了还是不想接我这一单，并没有来接我，校门口的黄色法拉利也不见了，只剩下了黑车。一辆车
            8 个人，好在价格也没有多离谱，也按时到了火车站
          </p>
          <p>长沙比武汉近，6 个小时左右，在下午 3 点就到长沙了</p>
          <p>这次吸取武汉的教训，把酒店定在了地铁旁边，还就在高铁站附近</p>
          <Image
            src={room}
            alt="房间"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <p>
            中秋节晚上，五一广场的街上就已经爆满，到处都是网红店的宣传，可能就趁这几天涨涨业绩
            <Image
              src={jie}
              alt="五一广场"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </p>
          <p>
            我们还是受不住各自宣传推销,走近了一家网红店吃小龙虾，但是最后选择了罗氏虾
            不过味道实在一般，甚至不如我妈煮的味道。价格却不一般，差不多 4
            道菜就花掉 300 大洋
            <Image
              src={firstdinner}
              alt="靓虾二哥"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Image
              src={firstdinner2}
              alt="靓虾二哥"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Image
              src={firstdinner3}
              alt="靓虾二哥"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </p>
          <hr />
          <p>
            吃完饭，散散步，一路走到杜甫江阁 路上还被黑心手工艺人骗走
            188，留下一幅<del>大众样</del>剪纸
            <Image
              src={pic}
              alt="188的剪纸"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </p>
          <p>
            杜甫江阁有专门拍照的的，设备挺齐全，会教我们摆
            pose，拍的照片质量高，价格还可以，和剪纸可以说是鲜明对比。
          </p>
          <p>
            <Image
              src={me}
              alt="杜甫江阁"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Image
              src={love}
              alt="杜甫江阁"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </p>
          <h1>day2</h1>
          <p>
            俩个人旅游，主打的就是睡到自然醒 早餐也不可能出酒店吃 早餐
            <Image
              src={breakfast}
              alt="10点的早餐"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            中午逛完博物馆，其实也就看了两个展厅，反正门票不用钱
            直接回酒店吃午餐（外卖） 午餐
            <Image
              src={lunch}
              alt="主打的就是丰富"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            休整一下
          </p>
          <p>
            晚上去了杨帆夜市，唯二两顿不在酒店吃的正餐
            全国美食街估计都这样，就只是去凑凑热闹
            <Image
              src={yeshi}
              alt="杨帆夜市"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Image
              src={yeshi2}
              alt="杨帆夜市"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Image
              src={yeshi3}
              alt="杨帆夜市"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Image
              src={tea}
              alt="杨帆夜市"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Image
              src={milk}
              alt="杨帆夜市"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </p>
          <p>
            逛完美食街还早，想着去渔人码头又太远，就又绕去五一广场了。
            可惜文和友要排队而且人很多，在外面看了看，和福州的 M17
            广场差不了太多，就算了
          </p>
          <p>
            夜市没吃饱，少不了夜宵
            <Image
              src={yexiao1}
              alt="一天四顿"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </p>
          <h1>day3</h1>
          <p>
            早上出门晚 ，差点进不去橘子洲头,12 点的票，11 点 57 分进去
            <Image
              src={icecream}
              alt="每个景区都少不了的纪念雪糕，不如武汉的好吃"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Image
              src={lover_back}
              alt="江边健身道"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Image
              src={laomao}
              alt="青年毛"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </p>

          <p>走到腿断掉,果断选择酒店看电影</p>
          <p>
            晚上的渔人码头，没有想象中的那么好，就是一个靠江边吃小龙虾的地方，甚至不如夜市，如果人多来聚一聚吃个龙虾也不错
          </p>
          <Image
            src={ciba}
            alt="加了红糖的糍粑罢了"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <h1>day4</h1>
          <p>快乐的时光总是很短暂，离别从来都很伤感，四天三夜还是太快</p>
          <p>8 天的假期，应该玩上 5 天 4 夜的</p>
          <Image
            src={lastlunch}
            alt="最后一顿"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <hr />
          <p>
            其实长沙没武汉大，从地铁就能看出来，但我感觉玩的比武汉开心，可能在吃这一方面比上次武汉吃的多得多，基本每一天晚上都吃了夜宵
            靠地铁近，不用每次都打车也省下了一笔交通费
          </p>
        </div>
      </div>
    </div>
  );
}
