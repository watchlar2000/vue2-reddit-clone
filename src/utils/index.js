const SORTING_OPTIONS = [
  {
    key: "default",
    param: "created",
    value: "Date posted",
  },
  {
    key: "most_upvoted",
    param: "ups",
    value: "Most upvoted",
  },
  {
    key: "most_commented",
    param: "num_comments",
    value: "Most Commented",
  },
];

const customSortDescending = (arr, sortingParam) => {
  return arr.sort((a, b) => b.data[sortingParam] - a.data[sortingParam]);
};

export { SORTING_OPTIONS, customSortDescending };
