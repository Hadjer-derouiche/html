
var input_liste = document.getElementById("inputliste");
var boutton = document.getElementById("btn");
var liste = document.getElementById("listeul");

boutton.addEventListener("click", ajouter);

function ajouter() {
    if (input_liste.value == "") {
        alert("try to write your task");
    } else {
        var li = document.createElement("li");
        var valeur = input_liste.value;
        var text = document.createElement("span");
        text.textContent = valeur;

        var deleete = document.createElement("button");
        deleete.innerHTML = "Delete";
        deleete.classList.add("butn");
        deleete.addEventListener("click", suprimmer);

        function suprimmer() {
            li.remove();
        }

        var ediit = document.createElement("button");
        ediit.textContent = "Edit";
        ediit.classList.add("butn");
        ediit.addEventListener("click", modifier);

        function modifier() {
            let new_task = prompt("Enter a new task", text.textContent);
            if (new_task !== null) {
                text.textContent = new_task;
            }
        }

        var valid = document.createElement("button");
        valid.textContent = 'Check';
        valid.classList.add("butn");
        valid.addEventListener("click", validerr);

        function validerr() {
            if (text.classList.contains("valider")) 
                text.classList.remove("valider");
            else 
                text.classList.add("valider");
            
        }

        var boutn = document.createElement("div");
        boutn.appendChild(deleete);
        boutn.appendChild(ediit);
        boutn.appendChild(valid);
        li.appendChild(text);
        li.appendChild(boutn);
        liste.appendChild(li);
    }
    input_liste.value = "";
}

