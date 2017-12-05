var user = prompt("The ogre comes towards you. What will you do? Run, attack, sneak past or pay him?").toLowerCase();

switch(user) {
  case 'run':
    var speed = prompt("How fast can you run? Fast, average or slow?").toLowerCase();
      switch(speed){
        case 'fast':
          console.log("You turn around and make a run for it. The ogre tries to grab you, but fast as you are, you outrun him. The ogre gives up and let's you run free.");
        break;
                
        case 'average':
          console.log("As you turn around to run away the ogre makes the first attempt to grab you. Just in time you duck and avoid being grabbed. You make a run for it! The ogre comes running after you. Gladly you are smarter then the ogre and hide behind the tree. The ogre stops near you and looks around; he can't find you anymore, loses interest and walks back. Phew...that was a close call!");
        break;
               
        case 'slow':
          console.log("The ogre looks at you and sees you want to run. He tries to grab you but misses. You where able to duck just in time, but the ogre uses his other hand to grab you again. That one you didn't see...... The ogre lifts you up, holds you close to his face and starts sniffling you. As he sniffles you a sneeze comes up. The ogre takes a deep breath and sneezes BIG TIME! You get covered with snot. Now the ogre doensn't want you anymore and throws you away. You land against a tree and die.");
        break;
      }
  break;
            
  case 'attack':
    var weapon = prompt("With what will you fight? Sword or bare hands?").toLowerCase();
      switch(weapon){
        case 'sword':
          console.log("You draw your sword and show him your most angry face. 'Allright, allright, you win!' says the ogre. 'But that's not really a surprize, you've allready got a ugly face to start with.' The ogre starts to laugh and let's you pass.");
        break;
                
        case 'bare hands':
          var hands = prompt("What will you do with your bare hands? Are you gonna fight or tickle the ogre?").toLowerCase();
            switch(hands){
              case 'fight':
                console.log("As you run up at the ogre, the ogre looks at you with amusement in his eyes. You start to punch the ogres legs. 'Whahahahaha, that tickles!!' cries the ogre.'Whahahaha!' As you figure out you bare hands won't do the trick, you give up. 'Thank you for that laugh, i didn't had one in quite some time. Thank you!' The ogre steps aside and lets you through.");
              break;
                      
              case 'tickle':
                console.log("you run up to the ogre to give him a fine piece of tickle. As the ogre sees you run up to him he thinks you want to play tag and makes a run for it. As your legs are far more smaller then his, he outruns you BIG TIME and in a matter of moments he is completely out of sight. Well...that worked! Kinda...");
              break;
            }
        break;
      }
  break;
    
  case "sneak":
    var stealth = prompt("Are you gonna use camouflage? Yes or no?").toLowerCase();
      switch(stealth){
        case "yes":
          if(stealth && "yes"){
            console.log("On your tippy toes you try to walk past the giant. Luckely he's standing with his back towards you and you pass him safely.");}
          else if(stealth || "no"){
            console.log("You roll yourself throught the mud and cover yourself with leaves and everything foresty. As you are doing you camouflagemagic the ogre notices you and comes to have a look. He asks what you're doing. Shocked you turn around and make a run for it.")}
          else{
            console.log("You obviously didn't know what you were doing. The ogre grabs you and eats you. -the end-");}
        break;
      }
  break;
                            
  case 'pay':
    var pocket = prompt("You empty your pockets and check out what you have to pay the ogre. Hmmm.... a coin, a button and a wooden stick. What will you give to the ogre?").toLowerCase();
      switch(pocket){
        case 'coin':
          console.log("The ogre takes the coins and checks if it's real. Gladly it is! He puts it in his sachel, looks happy and lets you pass.");
        break;
          
        case 'button':
          console.log("The ogre takes the button and checks if it suits well with his newly bought Pike (the Medievel Nike) shirt which (un)fortunatly already misses a button. The ogre get real angry as the button doesn't match. He grabs you and eats you. - the end-");
        break;
               
        case 'wooden stick':
          console.log("The ogre takes the stick and tries to figure out what he's suppose to do with that. Then a light appears in his eyes. He throws away the stick and looks at you with big expectation. Ehm....does he really want you to fetch the stick?..... Oh what the hell! Happy as a puppy you're off to fetch the stick and after a dozen times the ogre gets bored and wonders off. Gladly nobody ever saw that!");
        break;
      }
  break;
    
  default:
    console.log("You obviously didn't know what you were doing. The ogre grabs you and eats you. -the end-");             
}