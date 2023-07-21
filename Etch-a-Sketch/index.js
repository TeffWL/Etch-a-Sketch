const allblocs = document.getElementsByClassName("item");
for (let i = 0; i < allblocs.length; i++) {
   allblocs[i].onmouseover = function(){
      this.style.background = "green";
   }
}







    const resetButton = document.createElement("restart");
resetButton.textContent = "Сбросить";

    function resetColor() {
        for (let i = 0; i < allblocs.length; i++) {
           allblocs[i].style.background = "white"; // сброс цвета к исходному
        }
     }
     resetButton.onclick = resetColor;
     document.body.appendChild(resetButton);
