import { useEffect, useState } from "react";
import { getData } from "./components/services/getData";
import { CountryInfo } from "./components/CountryInfo";
import { Search } from "./components/Search";

import "../src/styles/reset.css";
import "../src/styles/App.scss";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const defaultPageNo = 1;
  let totalPage = 0;

  const getPageCount = async () => {
    const [result, totalCount, currentCount] = await getData(
      defaultPageNo
    ).then((res) => {
      return res;
    });
    totalPage = totalCount / currentCount;
  };

  useEffect(() => {
    getPageCount().then(() => {
      setFetchData();
    });
  }, []);

  const setFetchData = async () => {
    const fetchData = [];
    for (let i = 1; i <= totalPage; i++) {
      const response = await getData(i);
      const result = await response[0].data;
      fetchData.push(result);
    }
    setCountryData(fetchData);
  };

  const getInputValue = (item) => {
    setKeyword(item);
  };

  return (
    <div className="App">
      <Search getInputValue={getInputValue}></Search>
      {keyword ? (
        <CountryInfo countryData={countryData} keyword={keyword}></CountryInfo>
      ) : null}
    </div>
  );
}

export default App;
