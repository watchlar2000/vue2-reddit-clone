const URL = "https://www.reddit.com/r/memes/.json";

const loadPosts = async () => {
  return fetch(URL).then((response) => response.json());
};

export default loadPosts;
