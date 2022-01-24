const testList = [
   "HTML",
   "HTML",
   "CSS",
   "Blabla",
   "Untextehasardeux",
   "Bonjour !",
   "Bonjour !",
   "Haskell",
   "WASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "ASM",
   "MOBO",
   "Fonctions",
   "Virtualbox",
   "Web",
   "Yolo",
   "SQL",
   "PHP",
   "MindFuck",
   "Whatever?",
   "What?",
];
const icon = document.querySelector("input[name='search'] + button");

//== TODO: Send resulting input to server -> DB
(function suggestionHandler() {
   const suggBox = document.querySelector(".autocomplete_box");
   const inputBox = document.querySelector("input[name='search']");

   inputBox.addEventListener("input", (key) => {     
      suggBox.innerHTML = "";  

      if(inputBox.value !== "") {
         const suggestions = filterList(inputBox.value, testList);
         console.log("suggestions : ", suggestions)

         for (let li of suggestions) {
            li.addEventListener("click", () => {
               inputBox.value = li.textContent;
            });
            suggBox.appendChild(li);
         }
      }
   });
})();

function filterList(input, list) {
   let arr = [];
   arr = list.filter((data) => {
      return data.toLowerCase().startsWith(input.toLowerCase());
   });
   arr = arr.map((data) => {
      let li = document.createElement("li");
      li.textContent = data;
      return li;
   });
   return arr;
}

