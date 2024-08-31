export type DailyWord = {
  sid: string;
  note: string;
  content: string;
};

export async function getDailyWord(): Promise<DailyWord> {
  const url = "http://open.iciba.com/dsapi/";

  try {
    const response = await fetch(url);

    // 检查 HTTP 响应状态
    if (!response.ok) {
      // 处理 HTTP 错误
      const errorDetails = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorDetails}`,
      );
    }

    // 解析 JSON 响应
    const data: DailyWord = await response.json();
    return data;
  } catch (error) {
    // 捕获和处理任何其他错误
    console.error("Failed to fetch daily word:", error);
    throw new Error("Failed to fetch daily word");
  }
}
