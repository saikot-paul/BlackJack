# BlackJack
In order to learn JavaScript I decided to build the game of BlackJack. The game consists of a simple UI. There is a name for the game, text for the cards the current player holds, text for the current sum of their hand and three buttons. In order to start a new game, click START GAME, after starting a game this button is disabled. To get a new card, click the NEW CARD buttton. Each click will check the game rules, if the player wins then a winning text will appear, if lost then a losing text will appear, and if the player can continue you have the option to get a new card. In the case where a player wins or loses, both the START GAME and NEW CARD button are disabled, the user can only press the RESTART button. Should the player not press the RESTART button another text will appear reminding them to. After RESTART button is pressed, START GAME is enabled once again but NEW CARD remains disabled until a new game is started. 

Link to game: 
* https://main.d1zooye0x5kmvu.amplifyapp.com/ 

# FILES:
* index.css -> contains all the stylings for the game 
* index.html -> contains all the presentation portion of the game 
* index.js -> contains all the code functions for the game: 
   * startGame()
     * function that starts the game when the start button is press, uses the initialized variables to start the game and is disabled while a game is in progress 
   * checkGameRules()
     * function that checks whether the current state of the game can be continued, or is won/lost 
   * newCard() 
     * function activated when the new card button is pressed 
     * used to add new card to player's hand 
   * restart()
     * function activated when restart button is pressed 
     * starts the game over and cleans the interface to beginning 
     * users must press the start game button in order for a new game to commence 
   * getRandomInt() 
     * helper function used to get integer value between 2 and 11 
   * getSum()
     * helper function used to get current sum of player's hand 
   * getCardString()
     * helper function used to format the current belonging to the player 

    
    
  
# BUGS 
* Can press START button multiple times without following game context/rules

  * Before:
    
    <img width="280" alt="image" src="https://user-images.githubusercontent.com/79386282/210188226-bc28f2dd-5de7-40dc-a8b4-c88b3d3d5161.png">
    
   
  * After: 
    
    <img width="280" alt="image" src="https://user-images.githubusercontent.com/79386282/210188247-e82076eb-abbf-4d1d-a441-536661262015.png">
    
  * Solution: 
    * Added boolean condition for start button, such that when game starts the button text is changed to DISABLED and also function is disabled
    * Only when the game is over and after the RESTART button is pressed should the START GAME button be enabled again 
  
    
* Can press NEW CARD button multiple times without following game context/rules 

  * Before: 
   
    <img width="280" alt="image" src="https://user-images.githubusercontent.com/79386282/210188503-9e90ecee-9ee8-4b24-9a4d-e562abb0e063.png">
    
   * After: 

     <img width="280" alt="image" src="https://user-images.githubusercontent.com/79386282/210188517-f3a21198-ff67-4109-9bb4-369c5e91ed0d.png">
     
   * Solution: 
     * Added boolean condition such that when the game is over, the button is also diabled
     * Only when a new game is started should the button be enabled again 

# ENHANCEMENTS 

* Code:
  * Create classes (i.e. player/dealer classes)
  * Figure out how to use A for either 1, or 10
  * Allow player to play against automated dealer 
 
* Interface: 
  * Make a better looking interface 
  * Show actual cards instead of numbers 
  
* Deployment:
  * ~Figure out how to deploy on AWS/GCP~
    * Solution: Used AWS Amplify to host, by linking existing GitHub Repo    






