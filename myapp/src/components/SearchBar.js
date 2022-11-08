import React from "react";

const SearchBar = () => {
  //inputをフォーカスした状態でEnterを押した時のリロードを無効化
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onFormSubmit} className='ui form'>
        <div className='field'>
          <label htmlFor=''>Image Search for Pixabay</label>
          <input type='text' name='' id='' placeholder='' />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
