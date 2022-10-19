const initialState = {
  lists: [
    {
      id: 1,
      title: 'My bucket list',
      description: 'Interesting things I want to check out'
    },
   {
      id: 2,
      title: 'Keepin Zen list',
      description: 'Ways of staying calm'
   }
 ],
  columns: [
    {
      listId: 1,
      id: 1,
      title: "Books",
      icon: "book",
    },
    {
      listId: 1,
      id: 2,
      title: "Programming",
      icon: "code",
    },
    {
      listId: 1,
      id: 3,
      title: "Handcraft",
      icon: "camera",
    },
    {
      listId: 2,
      id: 4,
      title: "Songs",
      icon: "music",
    },
    {
      listId: 2,
      id: 5,
      title: "Psychological exercises",
      icon: "tasks",
    },
  ],

  cards: [
    { id: 1, columnId: 1, title: "Pomnik Cesarzowej Achai" },
    { id: 2, columnId: 1, title: "Szogun" },
    { id: 3, columnId: 2, title: "JavaScript" },
    { id: 4, columnId: 2, title: "Python" },
    { id: 5, columnId: 3, title: "Skrzynia skarbów" },
    { id: 6, columnId: 3, title: "Pudełko na kosmetyki do łazienki" },
    { id: 7, columnId: 4, title: "Gregorian" },
    { id: 8, columnId: 4, title: "Nightwish" },
  ],

  searchString: '', // why here, not separately? Is it because we need to access other data from same state? or it's just a construction to thor everything in one place?
};

export default initialState;
