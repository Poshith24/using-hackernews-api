// const fetchData = async () => {
//     const data = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then((response) => response.json());
//     const best_stories = await fetch("https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty").then((response)=>response.json());

//       console.log("Here are the top 10 stories")
//     // Run the loop for the first 10 items
//     for (let i = 0; i < 10; i++) {
//       const id = data[i];
//       const itemResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
//       const itemData = await itemResponse.json();

//       // Replace this with your desired handling of the itemData, for example, logging title and URL
//       console.log(`Title: ${itemData.title}`);
//       console.log(`URL: ${itemData.url}`);
//     }
//       console.log("Here are the top 10 best stories");
//       for (let i = 0; i < 10; i++) {
//       const id = best_stories[i];
//       const itemResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
//       const itemData = await itemResponse.json();

//       // Replace this with your desired handling of the itemData, for example, logging title and URL
//       console.log(`Title: ${itemData.title}`);
//       console.log(`URL: ${itemData.url}`);
//     }
//   };

const topStoriesContainer = document.getElementById("top-stories");
const bestStoriesContainer = document.getElementById("best-stories");

const fetchData = async () => {
  // Fetch top and best stories data
  const topStories = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  ).then((resp) => resp.json());
  const bestStories = await fetch(
    "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty"
  ).then((resp) => resp.json());
  console.log(topStories);

  for (let i = 0; i < 10; i++) {
    const id = topStories[i];
    const itemResponse = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );
    const itemData = await itemResponse.json();

    const storyElement = document.createElement("div");

    const titleElement = document.createElement("h3");
    titleElement.innerText = itemData.title;

    const urlElement = document.createElement("a");
    urlElement.href = itemData.url;
    urlElement.innerText = itemData.url;

    storyElement.appendChild(titleElement);
    storyElement.appendChild(urlElement);

    topStoriesContainer.appendChild(storyElement);

    // Replace this with your desired handling of the itemData, for example, logging title and URL
    console.log(`Title: ${itemData.title}`);
    console.log(`URL: ${itemData.url}`);
  }

  console.log("Here are the top 10 best stories");

  for (let i = 0; i < 10; i++) {
    const id = bestStories[i];
    const itemResponse = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );
    const itemData = await itemResponse.json();

    const storyElement = document.createElement("div");

    const titleElement = document.createElement("h3");
    titleElement.innerText = itemData.title;

    const urlElement = document.createElement("a");
    urlElement.href = itemData.url;
    urlElement.innerText = itemData.url;

    storyElement.appendChild(titleElement);
    storyElement.appendChild(urlElement);

    bestStoriesContainer.appendChild(storyElement);

    // Replace this with your desired handling of the itemData, for example, logging title and URL
    // console.log(`Title: ${itemData.title}`);
    // console.log(`URL: ${itemData.url}`);
  }
   
};

fetchData();
