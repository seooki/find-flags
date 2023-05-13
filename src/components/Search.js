import React, { useEffect, useState } from "react";
import "../styles/Search.scss";

export function Search({ getInputValue }) {
  const [inputValue, setInputValue] = useState("");
  const [keyword, setKeyword] = useState("");

  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const submitInputValue = () => {
    setKeyword(inputValue);
    getInputValue(keyword);
    setInputValue("");
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      submitInputValue(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <div className="inputBox">
      <input
        className="inputCountry"
        onChange={onChangeInputValue}
        value={inputValue}
        placeholder="국가명을 입력하세요"
        onKeyDown={handleOnKeyPress}
      ></input>
      <button className="submit" onClick={submitInputValue}>
        검색
      </button>
    </div>
  );
}
