const initialState = {
  columns: [
    {
      id: 1,
      title: "Books",
      icon: "book",
    },
    {
      id: 2,
      title: "Programming",
      icon: "code",
    },
    {
      id: 3,
      title: "Handcraft",
      icon: "camera",
    },
  ],

  cards: [
    { id: 1, columnId: 1, title: "Pomnik Cesarzowej Achai" },
    { id: 2, columnId: 1, title: "Szogun" },
    { id: 3, columnId: 2, title: "JavaScript" },
    { id: 4, columnId: 2, title: "Python" },
    { id: 5, columnId: 3, title: "Skrzynia skarbów" },
    { id: 6, columnId: 3, title: "Pudełko na kosmetyki do łazienki" },
  ],

  searchString: '', // why here, not separately? Is it because we need to access other data from same state? or it's just a construction to thor everything in one place?
};

export default initialState;
