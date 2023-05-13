import { useEffect, useState } from "react";
import { CountryInfoView } from "./CountryInfoView";

export function CountryInfo(props) {
  const [data, setData] = useState({});

  const countryData = props.countryData;
  const keyword = props.keyword;

  useEffect(() => {
    countryData.map((item) => {
      item.map((item) =>
        item.country_nm == keyword ? dataSetter(item) : null
      );
    });
  }, [keyword]);

  const dataSetter = (item) => {
    setData(item);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <CountryInfoView data={data}></CountryInfoView>;
}
