const bookInfo = [
  {
    id: '01',
    title: 'The Language Of Love',
    category: 'Love & Romance',
  },

  {
    id: '02',
    title: 'Stop Copy & Paste',
    category: 'Programming',
  },
];

const populateChapter = () => Math.floor(Math.random() * 50);
const populateProgress = () => Math.floor(Math.random() * 100) + 1;

export { bookInfo, populateChapter, populateProgress };
