import Tasks from "./js/Tasks.js";

document.addEventListener("DOMContentLoaded", (e) => {
  const submitForm = document.querySelector(".submitForm");
  const submitBtn = document.querySelector(".submitBtn");
  const parentOL = document.querySelector(".taskOL");
  const taskNameInput = document.querySelector("#name");
  const taskDueDateInput = document.querySelector("#dueDate");
  let url = `http://localhost:3000/tasks`;
  let $li = [];

  const getApi = async () => {
    try {
      const response = await axios.get(url);
      //   console.log(response.data.tasks);
      showTasks(response.data.tasks);
    } catch (error) {
      console.error(error);
    }
  };

  const showTasks = (array) => {
    parentOL.innerHTML = "";
    $li = array.map((item) => {
      let newTask = new Tasks(parentOL, item);
      return newTask.render();
    });
    $li.forEach((li) => {
      const editBtn = document.querySelector(".editBtn");
      const rmvBtn = document.querySelector(".removeBtn");

      editBtn.addEventListener("click", async (e) => {
        console.log("clickedEdit");
      });
      rmvBtn.addEventListener("click", async (e) => {
        console.log("rmvBtnClicked");
      });
    });
  };

  submitForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let taskBody = {
      name: taskNameInput.value,
      dueDate: taskDueDateInput.value,
    };
    console.log(taskBody);
    reqApi(taskBody, "POST");
  });

  const reqApi = async (body, method) => {
    try {
      let response = await axios({
        url,
        method,
        data: body,
      });
      //   console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  getApi();
});
