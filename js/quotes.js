const quotes = [
    {
        quote: "Everything that I understand, I understand only because I love.",
        author: "Leo Tolstoy"
    },
    {
        quote: "Wish not so much to live long as to live well.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Life is not fair; get used to it.",
        author: "Bill Gates"
    },
    {
        quote: "He not busy being born is busy dying.",
        author: "Bob Dylan"
    },
    {
        quote: "He whom you cannot teach to fly, teach to fall faster!",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "Victory belongs to the most persevering.",
        author: "Napoleon Bonaparte"
    },
    {
        quote: "Men are not prisoners of fate, but only prisoners of their own minds.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Kites rise highest against the wind - not with it.",
        author: "Sir Winston Churchill"
    },
    {
        quote: "Hope sees the invisible, feels the intangible, and achieves the impossible.",
        author: "Helen Keller"
    },
    {
        quote: "We are advertis'd by our loving friends.",
        author: "William Shakespeare"
    },
    {
        quote: "Without friends no one would choose to live, though he had all other goods.",
        author: "Aristotle"
    },
    {
        quote: "Talent wins games, but teamwork wins championships.",
        author: "Michael Jordan"
    },
    {
        quote: "Only in the agony of parting do we look into the depths of love.",
        author: "George Eliot"
    },
    {
        quote: "Early morning hath gold in its mouth.",
        author: "Benjamin Franklin"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author