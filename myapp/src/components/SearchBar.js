import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  //inputをフォーカスした状態でEnterを押した時のリロードを無効化
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <>
      <form onSubmit={onFormSubmit} className='ui form' style={{ marginBottom: "30px" }}>
        <div className='field'>
          <label htmlFor=''>Image Search for Pixabay</label>
          <input
            type='text'
            name='search'
            value={term}
            onChange={(event) => {
              setTerm(event.target.value); //文字が入力される度に、valueの値を入力した値に変更
            }}
            placeholder=''
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
