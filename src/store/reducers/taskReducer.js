const initState = {
  tasks: [
    {
      date: "July 18, 2019 at 6:00:00 AM UTC+2",
      desc: "This is the description",
      status: "INPR",
      title: "Task title",
      user: "someone"
    },
    {
      date: "July 18, 2019 at 6:00:00 AM UTC+2",
      desc: "This is the description",
      status: "COMP",
      title: "Task title",
      user: "someone"
    },
    {
      date: "July 18, 2019 at 6:00:00 AM UTC+2",
      desc: "This is the description",
      status: "BEND",
      title: "Task title",
      user: "someone"
    },
    {
      date: "July 18, 2019 at 6:00:00 AM UTC+2",
      desc: "This is the description",
      status: "BEND",
      title: "Task title",
      user: "someone"
    },
    {
      date: "July 18, 2019 at 6:00:00 AM UTC+2",
      desc: "This is the description",
      status: "COMP",
      title: "Task title",
      user: "someone"
    }
  ]
};

const taskReducer = (state = initState, action) => {
  return state;
};

export default taskReducer;
