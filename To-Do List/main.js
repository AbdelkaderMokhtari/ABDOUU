const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// استرجاع المهام من التخزين المحلي أو إنشاء مصفوفة فارغة إذا لم توجد مهام محفوظة
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// دالة لعرض المهام على الصفحة
function renderTasks() {
  taskList.innerHTML = ""; // تفريغ قائمة المهام أولاً

  tasks.forEach((task, index) => {
    const li = document.createElement("li"); // إنشاء عنصر مهمة
    li.className = "task" + (task.completed ? " completed" : ""); // إضافة كلاس إذا كانت مكتملة

    const span = document.createElement("span"); // عنصر النص
    span.textContent = task.text; // وضع نص المهمة
    span.addEventListener("click", () => toggleTask(index)); // عند الضغط يتم تبديل حالة المهمة


    const delBtn = document.createElement("button"); // زر الحذف
    delBtn.innerHTML = "&times;"; // رمز ×
    delBtn.addEventListener("click", () => deleteTask(index)); // حذف المهمة عند الضغط

    const checkBtn = document.createElement("p");
    checkBtn.innerHTML = "&#10003;";
    checkBtn.className = "checkBtn";
    checkBtn.addEventListener("click", () => chanch_color(checkBtn));
    li.appendChild(checkBtn);
    

    li.appendChild(span); // إضافة النص لعنصر المهمة
    li.appendChild(delBtn); // إضافة زر الحذف
    li.appendChild(checkBtn); // إضافة زر الحذف
    taskList.appendChild(li); // إضافة المهمة للقائمة
  });
}

function chanch_color(button) {
  if (button.style.color === "green") {
    button.style.color = "red";
  } else {
    button.style.color = "green";
  }
}



// دالة لإضافة مهمة جديدة
function addTask() {
  const text = taskInput.value.trim(); // أخذ النص وإزالة الفراغات

  if (text !== "") {
    tasks.push({ text, completed: false }); // إضافة المهمة للمصفوفة
    updateTasks(); // تحديث التخزين والعرض
    taskInput.value = ""; // تفريغ الحقل بعد الإضافة
  }
}

// دالة لحذف مهمة بناءً على رقمها
function deleteTask(index) {
  tasks.splice(index, 1); // حذف عنصر واحد من المصفوفة
  updateTasks(); // تحديث التخزين والعرض
}

// دالة لتبديل حالة المهمة (مكتملة أو غير مكتملة)
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed; // قلب القيمة
  updateTasks(); // تحديث التخزين والعرض
}

// دالة لحفظ المهام في التخزين المحلي وإعادة عرضها
function updateTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks)); // حفظ المهام
  renderTasks(); // عرض المهام
}

// تنفيذ دالة إضافة المهمة عند الضغط على الزر
addTaskBtn.addEventListener("click", addTask);

// تنفيذ دالة الإضافة عند الضغط على زر Enter من لوحة المفاتيح
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// عرض المهام عند تحميل الصفحة
renderTasks();
