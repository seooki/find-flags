import axios from "axios";

export async function getData(pageNo) {
  const url = `https://apis.data.go.kr/1262000/CountryFlagService2/getCountryFlagList2?serviceKey=${process.env.REACT_APP_KEY}&returnType=JSON&numOfRows=20&pageNo=${pageNo}`;
  const response = await axios.get(url);
  const result = await response.data;
  const totalCount = await result.totalCount;
  const currentCount = await result.currentCount;
  const error = await response.error;

  if (error) {
    console.log(error);
  }

  console.log(result);

  return [result, totalCount, currentCount];
}
