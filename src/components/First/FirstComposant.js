import React from "react";

export function FirstComponent({message}) {
    const title = 'Mes articles';

    const articles = [
        {title: 'Apprendre le HTLM', description: 'Ce cours va vous présenter les bases du HTML', author: 'Jérémie'},
        {title: 'Apprendre le CSS', description: 'Ce cours va vous présenter les bases du CSS', author: 'Jérémie'},
        {title: 'Apprendre le Javascript', description: 'Ce cours va présenter vous les bases du Javascript', author: 'Jérémie'},
        {title: 'Apprendre le React', description: 'Ce cours va vous présenter les bases du React', author: 'Jérémie'}
    ];

    const article = articles.map((article) =>
        <article key={article.title}>
           <h2>{article.title}</h2>
           <em>{article.author}</em>
           <p>{article.description}</p>
       </article>
    );
    return <div className="test"><h1>{title}</h1>{article}</div>
}

export function Exo2() {
    const [counter, setCounter] = React.useState(0);
    const handleClick = () => {
        setCounter(prevData => prevData + 1);
    };
    return <div>
        <p>Count: {counter}</p>
        <button onClick={handleClick}>+</button>
    </div>
}

export function RandomWord({words}) {
    const [currentWord, setCurrentWord] = React.useState("");
    const handleClick = () => {
        setCurrentWord(prevWord => words[Math.floor(Math.random() * words.length)]);
    };

    return <div>
        <p>Your word is {currentWord}</p>
        <button onClick={handleClick}>Randomize</button>
    </div>
}



