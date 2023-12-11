import React from 'react';

function Buttons({ items, articles, setarticles }) {
  function handleButtonClick(category) {
    const filteredArticles = articles.filter((article) =>
      article.category.includes(category)
    );
    setarticles(filteredArticles);
  }

  return (
    <div>
      {items.map((category, index) => (
        <div className='btns' key={index}>
          <button onClick={() => handleButtonClick(category)}>{category}</button>
        </div>
      ))}
      
    </div>
  );
}

export default Buttons;
