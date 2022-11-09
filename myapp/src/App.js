import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

const App = () => {
  const [images, setImages] = useState([]);
  const ApiKey = process.env.REACT_APP_PIXABAY_APIKEY; //.env.localの変数を参照

  const onSearchSubmit = async (term) => {
    // console.log(term); //入力してEnterを押した時の文字を出力
    try {
      const params = {
        key: ApiKey,
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
      <ImageList images={images} />
    </div>
  );
};

export default App;
