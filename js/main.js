var temp = 0;
function demo() {
  var quotes = [
    {
      quote: `“Be yourself; everyone else is already taken.”`,
      author: `--Oscar Wilde`,
    },
    {
      quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
      author: `--Marilyn Monroe`,
    },
    {
      quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
      author: `--Albert Einstein`,
    },
    {
      quote: `“A room without books is like a body without a soul.”`,
      author: `--Marcus Tullius Cicero`,
    },
    {
      quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
      author: `--Ernard M. BaruchB`,
    },
    {
      quote: `“You've gotta dance like there's nobody watching,
      Love like you'll never be hurt,`,
      author: `--William W. Purkey`,
    },
    {
      quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
      author: `--Dr. Seuss`,
    },
    {
      quote: `You only live once, but if you do it right, once is enough.”`,
      author: `--Mae West`,
    },
    {
      quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
      author: `--J.K. Rowling, Harry Potter and the Goblet of Fire`,
    },
    {
      quote: `“Don’t walk in front of me… I may not follow
      Don’t walk behind me… I may not lead
      Walk beside me… just be my friend”`,
      author: `--Albert Camus, The Stranger`,
    },
  ];

  var rnd = Math.floor(Math.random() * 10);
  while (temp == rnd) {
    rnd = Math.floor(Math.random() * 10);
  }
  console.log(rnd);
  document.getElementById("target-Q").innerHTML = quotes[rnd].quote;
  document.getElementById("target-A").innerHTML = quotes[rnd].author;
  temp = rnd;
}
