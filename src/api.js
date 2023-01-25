const BASE_URL = "https://www.reddit.com/r/memes";
const LOAD_POST_URL = `${BASE_URL}/.json`;

("https://www.reddit.com/r/memes/comments/10k9g5g/sadwe_dont_have_an_ability/");

const loadPosts = async () => {
  return fetch(LOAD_POST_URL).then((response) => response.json());
};

const loadPostComments = async (post) => {
  const { id, title } = post;
  const LOAD_POST_COMMENTS_URL = `${BASE_URL}/comments/${id}/${title}/.json`;
  return fetch(LOAD_POST_COMMENTS_URL).then((response) => response.json());
};

export { loadPosts, loadPostComments };
