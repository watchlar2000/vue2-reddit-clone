const sortPosts = (currentPostsList, param) => {
  return currentPostsList.sort((a, b) => b.data[param] - a.data[param]);
};

export { sortPosts };
