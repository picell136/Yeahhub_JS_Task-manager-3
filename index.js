const task1 = {
    title: "Купить продукты",
    description: "Молоко, хлеб, яйца",
    isCompleted: false,
    createdDate: new Date(),
    completedDate: null
};

const task2 = {
    title: "Сделать домашнее задание",
    description: "Математика, английский",
    isCompleted: false,
    createdDate: new Date(),
    completedDate: null
};

const task3 = {
    title: "Позвонить другу",
    description: "Уточнить планы на выходные",
    isCompleted: false,
    createdDate: new Date(),
    completedDate: null
};

let tasks = [];
let completedTasks = [];
let completedTaskCount = 0;

function setTask(task) {
    tasks.push(task);
}

function deleteTask(index) {
    if (tasks.length == 0) {
        console.log("Задачи отсутствуют");
        return;
    }

    if (tasks[index].isCompleted === false) {
        const answer = confirm("Таска еще не выполнена, удалить?");
        if (answer) {
            tasks.splice(index, 1);
        } else {
            return;
        }
    } else {
        tasks.splice(index, 1);
    }
}

function clearTask() {
    tasks = [];
}

function getTaskDescriptions() {
    tasks.map((task) => {
        console.log(task.description);
    })
}

function getLongTasks() {
    const longTasks = tasks.filter((task) => task.description.length > 10);
    return longTasks;
}

function getTasksByDateRange(startDate, endDate, isCompleted = false) {
    const filteredTasks = tasks.filter((task) => {
        const createdDate = new Date(task.createdDate);
        return createdDate >= startDate && createdDate <= endDate && task.isCompleted === true;
    });
    return filteredTasks;
}
function clearShortTasks() {
    const newTasks = tasks.filter((task) => task.description.length >= 5);
    tasks = newTasks;
}

function refreshTitle(index, newTitle) {
    if (tasks.length == 0) {
        console.log("Задачи отсутствуют");
        return;
    }
    tasks[index].title = newTitle;
}

function completeTask(index) {
    if (tasks.length == 0) {
        console.log("Задачи отсутствуют");
        return;
    }

    if (tasks[index].isCompleted === true) {
        console.log("Задача уже выполнена");
        return;
    }

    tasks[index].isCompleted = true;
    tasks[index].completedDate = new Date();

    completedTaskCount++;
    completedTasks.push(tasks[index]);
}

function showTasks() {
    if (tasks.length == 0) {
        console.log("Задачи отсутствуют");
        return;
    } else {
        tasks.forEach((task) => {
            console.log(task);
        });
    }
}