import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    // console.log(term); //入力してEnterを押した時の文字を出力
    try {
      const params = {
        key: "31180839-141fc33c2f41f224379d913bf",
        q: term, //「q」は検索キーワードに入力された文字
      };
      const response = await axios.get("https://pixabay.com/api/", { params });
      console.log(response);
      setImages(response.data.hits); //検索でヒットした画像の配列をimagesにセット

      //ヒットした画像がなかった場合
      if (response.data.total === 0) {
        window.alert("Not Found");
      }
    } catch {
      window.alert("Error!"); //エラーが出た場合
    }
  };

  return (
    <div className='ui container' style={{ marginTop: "20px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
    </div>
  );
};

export default App;
