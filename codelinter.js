let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

//Your code below

//Split string into words as separate elements
const storyWords = story.split(" ");

//Remove words that match unnecessaryWords
const betterWords = storyWords.filter(
  (word) => !unnecessaryWords.includes(word)
);

//Count the number of times words in overusedWords were used.
const countWordUsage = (overusedWords, sentenceArray) => {
  let wordCount = {};
  overusedWords.forEach((wordInArray) => {
    wordCount[wordInArray] = 0;
    sentenceArray.forEach((word) => {
      if (word === wordInArray) {
        wordCount[wordInArray]++;
      }
    });
  });
  return wordCount;
};

//Count number of sentences
const sentenceCounter = (sentenceArray) => {
  let numberOfSentences = 0;
  sentenceArray.forEach((element) => {
    if (
      element[element.length - 1] === "." ||
      element[element.length - 1] === "!"
    ) {
      numberOfSentences++;
    }
  });
  return numberOfSentences;
};

//log them all in a function and template literals
const numberOfWordsSentencesAndOverusedWords = (
  wordArrayToCheck,
  sentenceArray
) => {
  const wordCount = countWordUsage(wordArrayToCheck, sentenceArray);
  console.log(
    `In this chunk of text, we have ${
      sentenceArray.length
    } words, ${sentenceCounter(
      sentenceArray
    )} sentences, and the words 'really' ${wordCount.really} times, 'very' ${
      wordCount.very
    } times, and 'basically' ${wordCount.basically} times.`
  );
};

//numberOfWordsSentencesAndOverusedWords(overusedWords, betterWords)
//console.log(betterWords.join(" "))

//Remove duplicates of overused words, after first
const removeOverused = (overusedWords, sentenceArray) => {
  let cleanTextChunk = [...sentenceArray];
  const wordCount = {};
  overusedWords.forEach((wordInArray) => {
    wordCount[wordInArray] = 0;
    cleanTextChunk.forEach((word, index) => {
      if (word === wordInArray && wordCount[wordInArray] === 0) {
        wordCount[wordInArray]++;
      } else if (word === wordInArray && wordCount[wordInArray] !== 0) {
        cleanTextChunk.splice(index, 1);
      }
    });
  });
  const joinedText = cleanTextChunk.join(" ");
  return joinedText;
};

//console.log(removeOverused(overusedWords, betterWords));

//Remove every second instance of overused words
const removeOtherInstanceOfOverused = (overusedWords, sentenceArray) => {
  let cleanTextChunk = [...sentenceArray];
  const wordCount = {};
  overusedWords.forEach((wordInArray) => {
    wordCount[wordInArray] = 0;
    cleanTextChunk.forEach((word, index) => {
      if (word === wordInArray && wordCount[wordInArray] % 2 === 0) {
        wordCount[wordInArray]++;
      } else if (word === wordInArray && wordCount[wordInArray] % 2 !== 0) {
        cleanTextChunk.splice(index, 1);
        wordCount[wordInArray]++;
      }
    });
  });
  const joinedText = cleanTextChunk.join(" ");
  return joinedText;
};

//console.log(removeOtherInstanceOfOverused(overusedWords,betterWords));

//Return most used word
const mostUsed = (textChunkArray) => {
  const wordCount = {};
  textChunkArray.forEach((word) => {
    wordCount[word] = 0;
  });
  textChunkArray.forEach((word) => {
    wordCount[word]++;
  });
  const sortable = [];
  for (word in wordCount) {
    sortable.push([word, wordCount[word]]);
  }
  sortable.sort((a, b) => {
    return a[1] - b[1];
  });
  const mostUsedWord = sortable[sortable.length - 1];
  return `The most used word is "${mostUsedWord[0]}" with ${mostUsedWord[1]} counts`;
};
//console.log(mostUsed(betterWords));

//Replace overused words with 'like'
const replaceOverused = (overusedWords, sentenceArray) => {
  let cleanTextChunk = [...sentenceArray];
  overusedWords.forEach((wordInArray) => {
    cleanTextChunk.forEach((word, index) => {
      if (wordInArray === word) {
        cleanTextChunk.splice(index, 1, "like");
      }
    });
  });
  const joinedText = cleanTextChunk.join(" ");
  return joinedText;
};

//console.log(replaceOverused(overusedWords, betterWords))
