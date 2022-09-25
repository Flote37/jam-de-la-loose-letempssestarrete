setTimeout(startPlayer, 8000);
setTimeout(startObstacle, 3000, 310);

var playerPosition = -100;
var slowMotion = false;
var megaSlowMotion = false;
var zeroAbsolue = false;

var miracleWidth = 0;
var miracleObtained = false;

var obstacleInterval;

function startObstacle(limit){
    obstacleInterval = setInterval(moveObstacle, 100, limit);
}

function startPlayer(limit){
    setInterval(movePlayer, 100, limit);
}

function movePlayer() {
    if(miracleObtained) return;
    if(zeroAbsolue) return;
    if(playerPosition > 1500) return;

    if(megaSlowMotion){
        playerPosition += 1;
    }
    else if(slowMotion) {
        playerPosition += 3;
    } else {
        playerPosition += 10;
    }
    
    document.getElementById('player').style.left = playerPosition + "px";
}

var obstaclePosition = 0;
function moveObstacle(limit) {
    
    if(obstaclePosition > limit) { 
        clearInterval(obstacleInterval); 
        slowMotion = true;
        return;
    }

    obstaclePosition += 3;
    document.getElementById('obstacle1').style.top = obstaclePosition + "px";
}

setTimeout(updateText, 2000, "Youpi! Le jeune maître arrive!");
setTimeout(updateText, 5000, "Oh non! Une de ces maudites boîtes de conserves arrive à toute allure!");
setTimeout(updateText, 9000, "Attention jeune maître!");
setTimeout(updateText, 15000, "Oh non il a trébuché!");
setTimeout(updateText, 18000, "Il faudrait un miracle pour le sauver!", true);
setTimeout(updateText, 21000, "Vite au secours!");
setTimeout(updateText, 22000, "Aaaaaaaah!");
setTimeout(updateText, 23000, "Naaaaaaaon!");
setTimeout(updateText, 24000, "La réponse D!");
setTimeout(updateText, 25000, "Arhfkahkakakttakat!");
setTimeout(enableMegaSlowMotion, 25000);
setTimeout(updateText, 26000, "Sbidiboui!");
setTimeout(updateText, 27000, "Vite!");
setTimeout(updateText, 28000, "Spammez-moi cette touche!");
setTimeout(updateText, 29000, "Encore!");
setTimeout(updateText, 30000, "J'aurais pas de croquettes si ça passe pas!");
setTimeout(updateText, 32000, "Tu peux y arriver!");
setTimeout(updateText, 33000, "Crois-en le moi qui croit en toi!");
setTimeout(updateText, 35000, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!");
setTimeout(enableZeroAbsolue, 35000);
setTimeout(updateText, 38000, "En vrai là j'ai gelé la voiture en attendant que tu retrouves ta touche 'Espace'.");
setTimeout(updateText, 41000, "Le jeu ne pouvait pas être vendu en PEGI 3 sinon.");
setTimeout(updateText, 45000, "Et puis si ça se trouve tu es parti aller donner des croquettes à ton chat.");
setTimeout(updateText, 48000, "Bon bah là on va attendre que tu reviennes du coup...");

function updateText(text, enableMiracle){
    document.getElementById('text').textContent = text;

    if(enableMiracle){
        addEventListener('keypress', (event) => {
            if(event.code !== 'Space') return;
        });
        
        addEventListener('keyup', (event) => {
            if(event.code !== 'Space') return;
        
            if(miracleWidth < 100){
                miracleWidth += 10;
                document.getElementById('miracle').style.width = miracleWidth + "vw";
            } else {
                miracleObtained = true;
                megaSlowMotion = false;
                zeroAbsolue = false;
                updateGodText("MIRACLE EN COURS...");
                setTimeout(updateText, 1000, "Mais...");
                setTimeout(updateText, 2000, "Le temps s'est arrêté!");
                setTimeout(updateText, 5000, "Jeune maître relevez-vous!");
                setTimeout(startObstacle, 6000, 600);
                setTimeout(updateText, 8000, "Oui! Il est reparti");
                setTimeout(updateText, 11000, "Oui! Il est reparti");
                setTimeout(disableMiracle, 12500);
                setTimeout(updateText, 14000, "Ouf, tout est bien qui fini bien!");
                setTimeout(updateGodText, 16000, "");
                setTimeout(updateGodText, 17000, "Merci d'avoir joué :)");
            }
        });
    }
}

setTimeout(updateGodText, 20000, "Appuyez de façon répétée sur la touche 'Espace' pour créer un miracle!");
function updateGodText(text){
    document.getElementById('godText').textContent = text;
}

function disableMiracle(){
    miracleObtained = false;
}

function enableMegaSlowMotion(){
    megaSlowMotion = true;
}

function disableMegaSlowMotion(){
    megaSlowMotion = true;
}

function enableZeroAbsolue(){
    zeroAbsolue = true;
}