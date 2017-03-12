function updateHealth(){
  game.health -= game.speed*deltaTime*game.ratioSpeedhealth;
  game.health = Math.max(0, game.health);
  healthBar.style.right = (100-game.health)+"%";
  healthBar.style.backgroundColor = (game.health<50)? "#f25346" : "#68c3c0";

  if (game.health<30){
    healthBar.style.animationName = "blinking";
  }else{
    healthBar.style.animationName = "none";
  }

  if (game.health <1){
    game.status = "gameover";
  }
}

function addhealth(){
  game.health += game.coinValue;
  game.health = Math.min(game.health, 100);
}

function removehealth(){
  game.health -= game.ennemyValue;
  game.health = Math.max(0, game.health);
}


/*


health - heealth obj (1 per level )