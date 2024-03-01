// Dovednosti v HTML, CSS a JS

const updateSkill = (id, level) => {
        let skillId = document.getElementById(id)
        let progress = skillId.querySelector(".skill__progress")
        progress.style.width = level + "%"
        let value = skillId.querySelector(".skill__value")
        value.textContent = level + " / 100"
}

const skillHTML = Number(prompt("Zadejte svou úroveň v HTML na škále od 0 - 100:"))
const skillCSS = Number(prompt("Zadejte svou úroveň v CSS na škále od 0 - 100:"))
const skillJS = Number(prompt("Zadejte svou úroveň v JavaScriptu na škále od 0 - 100:"))

updateSkill("skill1", skillHTML)
updateSkill("skill2", skillCSS)
updateSkill("skill3", skillJS)

/* 
ŘEŠENÍ:

1. Vytvořila jsem funkci se dvěma vstupními parametry. První na určení id. Druhý na změnu progresu.
2. Věděla jsem, že musím vybrat element id, proto jsem použila getElementById.
3. Další vybraný element musela být třída .skill__progress, ve které se stanovilo, že šířka posuvníku se bude měnit podle proměnné level (podle úrovně schopností).
4. Potom jsem si všimla, že se text na stránce nemění (50 / 100) spolu s levelem. Vybrala jsem tedy třídu .skill__value a zadala jsem, že se text bude měnit spolu s hodnou level.
5. Prompty jsem uložila, a pak je ve funkci stačilo zavolat spolu s id.

Trvalo mi dlouho, než jsem pochopila, jak to celé poskládat. Protože mi ze začátku nedocházelo, že do -document.getElementById(id)- mohu vložit přímo vstupní hodnotu. A pal mi nedocházelo, jak spojit id s posuvníkem/levelem.
 
*/