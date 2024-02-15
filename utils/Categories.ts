import { FileData } from "@/types/essay";
type CountedCategories = {
  [x: string]: number;
};
export function countCategories(jsonArray: FileData[]): CountedCategories {
  const categoryCount: CountedCategories = {};
  // 遍历JSON数组
  jsonArray.forEach((jsonObject) => {
    const category = jsonObject.categories;
    // 如果类别已经存在，增加计数；否则，初始化为1
    if (categoryCount[category]) {
      categoryCount[category]++;
    } else {
      categoryCount[category] = 1;
    }
  });

  return categoryCount;
}
