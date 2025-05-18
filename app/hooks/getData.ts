export const getData = async (chart: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CHART_URL}/${chart}`);
  if (!response.ok) {
    throw new Error(`데이터를 불러오는 데 실패했습니다.`);
  }
  const data = await response.json();
  return data;
};
