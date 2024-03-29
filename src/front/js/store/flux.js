const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

      roles: [],
      users: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      validate: async () => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/validate",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        return data.validate;
      },
      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }));
      },

      loadUser: () => {
        fetch(process.env.BACKEND_URL + "/api/user")
          .then((resp) => resp.json())
          .then((data) => setStore({ users: data }))
          .catch((error) => console.log("Error loading users list", error));
      },
    },
  };
};

export default getState;
