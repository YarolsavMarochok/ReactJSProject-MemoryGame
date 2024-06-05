import React, { Component } from "react";
import CorrectPairSelectedSound from './sounds/soundWin.mp3'
import InCorrectPairSelectedSound from './sounds/soundLose.mp3'


class GameBase extends React.Component {
  constructor(props) {
    super(props);
  }

  getCardHtml = (cardId) => {
    return (
      <div
        id={cardId}
        key={`card-${cardId}`}
        onClick={() => this.handleClick(cardId)}
        className="card"
      ></div>
    );
  };

  restartGame = () => {
    this.setState({ ...this.state, gameRestarted: true });
  };

  componentDidMount = () => {
    this.resetData(true);
  };

  componentDidUpdate = () => {
    this.resetData();
  };



  resetData = (gameRestarted = false) => {
    if (gameRestarted || this.state.gameRestarted) {
      this.resetCardsColorById(this.arrClickedCardIds);
      this.cardsCount = this.props.cardsCount;
      this.lastCardClicked = undefined;
      this.arrayOfNumbers = this.getArrayOfNumbers();
      this.allColors = undefined;
      this.gameGoing = true;
      this.arrClickedCardIds = [];
      this.allColors = this.getAllColors();
      this.setState({
        ...this.state,
        gameRestarted: false,
        availableClicks: this.props.availableClicks,
        resultText: 'Game is going'
      });
    }
  };

  resetCardsColorById = (cardIds) => {
    if (!cardIds) return;

    cardIds.map((cardId) => {
      this.changeCardColorById(cardId, "var(--background-card-color)");
    });
  };

  render() {
    return null;
  }

  setCardsCount = (newCardsCount) => {
    this.cardsCount = newCardsCount;
    this.lastCardClicked = undefined;
    this.arrClickedCardIds = [];
    this.allColors = this.getAllColors();
  };

  getArrayOfNumbers = () => {
    let arr = [];
    for (let i = 0; i < this.cardsCount; i++) {
      arr.push(i);
    }

    return this.shuffle(arr);
  };

  shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  handleClick = (cardId) => {
    if (this.isCardOpened(cardId)) return;
    if(!this.gameGoing) return;

    this.changeCardColorById(cardId, this.getColorForCardById(cardId));

    if (this.lastCardClicked === undefined) this.lastCardClicked = cardId;
    else {
      let pairCardId = this.getCardPairId(cardId);

      if (this.lastCardClicked == pairCardId) 
        this.CorrectPairSelected([cardId, this.lastCardClicked]);
      else 
        this.IncorrectPairSelected([cardId, this.lastCardClicked]);

      let newAvailableClicks = this.state.availableClicks - 1;
      console.log(newAvailableClicks);

      this.setState({
        ...this.state,
        availableClicks: newAvailableClicks,
        resultText: newAvailableClicks <= 0 ? 'Game Over' : 'Game is going',
        gameRestarted: false,
      });

      if(newAvailableClicks <= 0){
        this.gameGoing = false;
      }
  
      this.lastCardClicked = undefined;
    }
  };

  isCardOpened = (cardId) => {
    return this.arrClickedCardIds.find((x) => x == cardId) !== undefined;
  };

  CorrectPairSelected = (cardIds) => {

    cardIds.map((cardId) => {
      this.arrClickedCardIds.push(cardId);
    });

    this.playSound(CorrectPairSelectedSound);
  };

  IncorrectPairSelected = (cardIds) => {
    cardIds.map((cardId) => {
      this.changeCardColorById(cardId,   'var(--background-card-color)');
    });

    this.playSound(InCorrectPairSelectedSound);
  };


  getCardPairId = (cardId) => {
    if (cardId % 2 == 0) return cardId + 1;

    return cardId - 1;
  };

  getRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 3; i++)
      color += (
        "0" +
        Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
      ).slice(-2);
    return color;
  };

  getColorForCardById = (cardId) => {
    let color = this.getAllColors()[Math.floor(cardId / 2)];
    return `${color}`;
  };

  getAllColors = () => {
    if (this.allColors == undefined || this.allColors.length == 0)
      this.allColors = this.generateColorsForAllCards();

    return this.allColors;
  };

  // generateColorsForAllCards = () => {
  //   let allColors = [];
  //   for (let i = 0; i < this.cardsCount / 2; i++) {
  //     while (true) {
  //       let newColor = this.getRandomColor();
  //       if (!allColors.includes(newColor)) {
  //         allColors.push(newColor);
  //         break;
  //       }
  //     }
  //   }

  //   return allColors;
  // };

  generateColorsForAllCards = () => {
    let allColors = ['red', 'orange', 'yellow', 'green', ' #00ff99', 'blue', 'violet', 'pink'];
    return allColors;
  }

  changeCardColorById = (cardId, color) => {
    let card = document.getElementById(cardId);
    card.style.backgroundColor = color;
  };



  // ------------- sounds section

  playSound = (sound) => {
    (new Audio(sound)).play();
  }
}

export default GameBase;
