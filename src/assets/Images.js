const javascript =  require('./logo/javascript.svg').default;
const react = require('./logo/react.svg').default;
const redux = require('./logo/redux.svg').default;
const html =  require('./logo/html.svg').default;
const css = require('./logo/css.svg').default;
const node = require('./logo/node.svg').default
const mongodb = require('./logo/mongodb.svg').default;
const cpp = require('./logo/cpp.svg').default;
const github = require('./logo/github.svg').default;
const material = require('./logo/material.svg').default;

const Images = {
    logos: [
        {
            title: "Javascript",
            image: javascript,
            color: '#f7df1e'
        },
        {
            title: "REACT",
            image: react,
            color: '#61dafb'
        },
        {
            title: "REDUX",
            image: redux,
            color: '#764abc'
        },
        {
            title: "HTML",
            image: html,
            color: '#ef652a'
        },
        {
            title: "CSS",
            image: css,
            color: '#2965f1'
        },
        {
            title: "NODE",
            image: node,
            color: '#78b262'
        },
        {
            title: "MongoDB",
            image: mongodb,
            color: '#599636'
        },
        {
            title: "C++",
            image: cpp,
            color: '#004482'
        },
        {
            title: "GITHUB",
            image: github,
            color: '#a71d1d'
        }
    ],
    projects: [
        {
            id: 1,
            title: "Web Store MERN Stack",
            desc: "E-commerce Webstore build using MERN stack. Makes searching, viewing and selection of a product easier for user’s specific to their needs.",
            stack: [react,node,mongodb],
            image: "https://user-images.githubusercontent.com/70509358/211279903-1a8a1b5c-7b9e-4c15-97da-c0066dbbe26c.jpg",
            live: "https://webstore-mern.netlify.app",
            github: "https://github.com/Addy-exe/Webstore"
        },
        {
            id: 2,
            title: "Cryptocurrency Price Tracker",
            desc: "Web application to search and find the market-cap , price and price-percentage change (24h) of a cryptocurrency using Coingecko API.",
            stack: [react,javascript,material],
            image: "https://user-images.githubusercontent.com/70509358/209526714-9a7f951c-a0fc-4bee-a26d-3cc878679559.jpg",
            live: "",
            github: "https://github.com/Addy-exe/Crypto-currency-price-tracker"
        }
    ]
}

export default Images