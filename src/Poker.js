import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  body {
    margin: 0px;
  }

  header {
    text-align: center;
    margin: auto;
    overflow: hidden;
    width: 100%;
  }

  #header {
    overflow: hidden;
    width: 80%;
    margin: auto;
    padding: 0px 20px 20px 20px;
  }


  #newGameButton {
    height: 40px;
    border: outset 5px;
    border-radius: 10px;
    text-overflow: hidden;
    margin-left: 5px;
    padding-bottom: 25px;
  }

  .diamonds, .hearts {
    color: red;
  }

  .spades, .clubs {
    color: black;
  }

  .none {
    background-color: black;
  }

  #gameContainer {
    display: flex;
    flex-direction: column;
    background-color: darkgreen;
    height: auto;
    border-radius: 20px;
    border: black 2px solid;
    padding: 10px;
  }

  #scoreContainer {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    border: black solid 2px;
    padding: 20px;
    margin: 10px;
  }

  #speed {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
  }

  #ngBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  #score {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
  }

  #handContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  #drawContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }

  .flip {
    display: flex;
    flex-direction: column;
    height: 140px;
    width: 100px;
    cursor: pointer;
    margin: 10px;
    border-radius: 5px;
    align-items: stretch;
    padding: 0px;
    background-color: white;
  }

  .noFlip {
    display: flex;
    flex-direction: column;
    height: 140px;
    width: 100px;
    margin: 10px;
    border-radius: 5px;
    align-items: stretch;
    padding: 0px;
    border-color: gray;
    background:
      linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
      linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
      linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
      linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
      linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
      linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
      background-color: #131313;
      background-size: 20px 20px;
  }

  .flip: enabled: hover, .holdButton: enabled: hover, .drawButton: enabled: hover {
    box-shadow: 0px 0px 10px black;
  }

  #newGameButton: hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  .heldButton: enabled: hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.4);
  }

  .drawButton: disabled, .holdButton: disabled {
    background-color: white;
    opacity: 0.8;
  }


  .cardValueTop {
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
    padding-left: 10px;
  }

  .cardValueBottom {
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    padding-right: 10px;
  }

  .cardSuit {
    display: flex;
    justify-content: center;
    font-size: 50px;
  }

  .cardContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
  }

  .holdButton {
    display: flex;
    width: 100px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: outset 5px;
    border-radius: 50px;
  }

  .heldButton {
    display: flex;
    width: 100px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: inset 5px;
    border-radius: 50px;
    color: white;
    background-color: black;
    padding-top: 5px;
  }

  .drawButton {
    width: 200px;
    height: 70px;
    border: outset 5px;
    border-radius: 20px;
    margin-top: 20px;
  }

  .holdButton: active, .drawButton: active, #newGameButton: active {
    border-style: inset;
    padding-top: 5px;
  }

  .heldButton: active {
    box-shadow: 0px 0px 10px green;
  }

  #scoreRow1 {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    border-bottom: black 2px solid;
    margin-bottom: 20px;
  }

  #scoreRow2 {
    display: flex;
    flex-direction: row;
  }

  #scoring1 {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
  }

  #scoring2 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
  }

  #scoring3 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
  }

  #bestHand {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
    color: white;
    font-size: 20px;
  }

  .winner {
    color: red;
  }

  button {
    outline: none;
    user-select: none;
  }

  ul {
    list-style-type: none;
  }

  @media only screen and (max-width: 450px) {
    .flip, .noFlip {
      height: 98px;
      width: 50px;
      margin: 0;
    }

    .heldButton, .holdButton {
      width: 50px;
    }

    #scoreRow2 {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    }

    #newGameButton {
      margin: 10px;
    }
  }

  @media only screen and (max-width: 992px) {
    
    .cardContainer {
      margin: 0;
    }

    .flip, .noFlip {
      height: 98px;
      width: 70px;
    }

    #speed {
      flex-wrap: wrap;
    }

    .heldButton, .holdButton {
      width: 70px;
      font-size: 14px;
    }

    .drawButton {
      width: 140px;
      height: 50px;
    }

    .cardSuit {
      font-size: 35px;
    }

    .cardValueTop, .cardValueBottom {
      font-size: 14px;
    }

    #scoreRow1 {
      margin: 0;
      padding: 0;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      font-size: 14px;
    }

    #scoreRow2 {
      flex-wrap: wrap;
      font-size: 14px;
      margin-top: 15px;
    }

    #newGameButton {
      width: 60px;
      height: 60px;
    }

  }
`;

class Poker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameRunning: false,
      deck: [],
      hand: [
        {Suit: 'none', Value: '', Flipped: 'noFlip'},
        {Suit: 'none', Value: '', Flipped: 'noFlip'},
        {Suit: 'none', Value: '', Flipped: 'noFlip'},
        {Suit: 'none', Value: '', Flipped: 'noFlip'},
        {Suit: 'none', Value: '', Flipped: 'noFlip'},
      ],
      score: 100,
      bet: 5,
      gameOver: false,
      dealOver: false,
      roundEnd: true,
      dealingCards: false,
      speed: 350,
    };

    this.newGame = this.newGame.bind(this);
    this.newHand = this.newHand.bind(this);
    this.buildDeck = this.buildDeck.bind(this);
    this.evalHand = this.evalHand.bind(this);
    this.holdCard = this.holdCard.bind(this);
    this.drawCards = this.drawCards.bind(this);
    this.handleSpeed = this.handleSpeed.bind(this);
    this.handleBet = this.handleBet.bind(this);
  }

  componentDidMount() {
      window.addEventListener('keyup', event => {
        if (event.keyCode >= 49 && event.keyCode <= 53) {
          this.holdCard(event.keyCode-49);
        }
        if (event.keyCode === 13) {
          this.drawCards();
        }
      });
  }

  newGame() {
    document.activeElement.blur();
    if (!this.state.dealingCards) {
      this.setState(
        () => ({
          score: 100,
          bet: 5,
          gameRunning: true,
          gameOver: false,
          hand: [
            {Suit: 'none', Value: '', Flipped: 'noFlip'},
            {Suit: 'none', Value: '', Flipped: 'noFlip'},
            {Suit: 'none', Value: '', Flipped: 'noFlip'},
            {Suit: 'none', Value: '', Flipped: 'noFlip'},
            {Suit: 'none', Value: '', Flipped: 'noFlip'},
          ],
        }),
        () => {
          this.newHand();
        }
      );
    };
  }

  newHand() {
    this.setState(
      prevState => ({
        deck: [],
        hand: [
          {Suit: 'none', Value: '', Flipped: 'noFlip'},
          {Suit: 'none', Value: '', Flipped: 'noFlip'},
          {Suit: 'none', Value: '', Flipped: 'noFlip'},
          {Suit: 'none', Value: '', Flipped: 'noFlip'},
          {Suit: 'none', Value: '', Flipped: 'noFlip'},
        ],
        bestHand: '',
        roundEnd: false,
        dealOver: false,
        score: prevState.score - this.state.bet,
      }),
      () => {
        this.buildDeck();
      }
    );
  };
  

  buildDeck() {
  const { deck } = this.state;
    for (let i = 2; i <= 14; i++) {
      if (i <= 10) {
        deck.push({Suit: 'hearts', Value: i});
        deck.push({Suit: 'diamonds', Value: i});
        deck.push({Suit: 'spades', Value: i});
        deck.push({Suit: 'clubs', Value: i});
      }
      if (i === 11) {
        deck.push({Suit: 'hearts', Value: 'J'});
        deck.push({Suit: 'diamonds', Value: 'J'});
        deck.push({Suit: 'spades', Value: 'J'});
        deck.push({Suit: 'clubs', Value: 'J'});
      }
      if (i === 12) {
        deck.push({Suit: 'hearts', Value: 'Q'});
        deck.push({Suit: 'diamonds', Value: 'Q'});
        deck.push({Suit: 'spades', Value: 'Q'});
        deck.push({Suit: 'clubs', Value: 'Q'});
      }
      if (i === 13) {
        deck.push({Suit: 'hearts', Value: 'K'});
        deck.push({Suit: 'diamonds', Value: 'K'});
        deck.push({Suit: 'spades', Value: 'K'});
        deck.push({Suit: 'clubs', Value: 'K'});
      }
      if (i === 14) {
        deck.push({Suit: 'hearts', Value: 'A'});
        deck.push({Suit: 'diamonds', Value: 'A'});
        deck.push({Suit: 'spades', Value: 'A'});
        deck.push({Suit: 'clubs', Value: 'A'});
      }
    }
    deck.map(card => card.Held = false);
    this.drawCards();
  }
  
  drawCards() {
    if (!this.state.dealingCards && !this.state.gameOver) {
      const { deck, hand, } = this.state;

      if (this.state.roundEnd === false) {
        this.setState(
          () => ({
            dealingCards: true,
            })
          );
        for (let i = 0; i <= 4; i++) {
          if (hand[i].Held !== true) {
            hand[i].Value = '';
            hand[i].Suit = 'none';
            hand[i].Flipped = 'noFlip';
            this.setState(
              () => ({
                hand: hand,
                })
              );
          }
        }
          let i = 1;
          let newCard = (() => {
            let time = hand[i-1].Held === true ? 0 : this.state.speed;
            setTimeout(() => {
              if (hand[i-1].Held !== true) {
                let randomIndex = Math.floor(Math.random() * deck.length);
                hand[i-1] = (deck[randomIndex]);
                hand[i-1].Flipped = 'flip';
                deck.splice(randomIndex, 1);
                this.setState(
                  () => ({
                    hand: hand,
                    deck: deck,
                  })
                  );
              }
              if (i === 5 && this.state.dealOver) {
                this.evalHand();
              }
  
              if (i === 5) {
                this.setState(
                  () => ({
                    dealOver: true,
                    dealingCards: false,
                    })
                  );
              }
              i++;
              if (i <= 5) {
                newCard();            
              }
             
            }, time)
        })
        newCard();      
      }
  
      else {
        this.newHand();
      }
    }
  }

 

  holdCard(i) {
    if (this.state.roundEnd === false) {
      this.setState(prevState => ({
        hand: [...prevState.hand].map((card, index) => {
          if (index === i) {
            card.Held = !card.Held;
            document.activeElement.blur();
          }
            return card;
        })
      }))
    }
  }
  
  evalHand() {
    const { hand, score, bet } = this.state;
		let bestHand = [
			{Hand: 'Royal Flush', Multiplier: 1000, InHand: false},
			{Hand: 'Straight Flush', Multiplier: 50, InHand: false},
			{Hand: 'Four of a Kind', Multiplier: 25, InHand: false},
			{Hand: 'Full House', Multiplier: 8, InHand: false},
			{Hand: 'Flush', Multiplier: 5, InHand: false},
			{Hand: 'Straight', Multiplier: 4, InHand: false},
			{Hand: 'Three of a Kind', Multiplier: 3, InHand: false},
			{Hand: 'Two Pair', Multiplier: 2, InHand: false},
			{Hand: 'Jacks or Better', Multiplier: 1, InHand: false},
			{Hand: 'Nothing', Multiplier: 0, InHand: true},
			];

		//Counts Cards With Same Value
		let uniqueValues = Array.from(new Set(hand.map(x => x.Value))).map(x => Object.assign({Value: x, Count: 0}));
		for (let i = 0; i < hand.length; i++) {
			let uniqueIndex = uniqueValues.findIndex(x => x.Value === hand[i].Value);
			uniqueValues[uniqueIndex].Count++;
		}

		//Check for Straight
		if (uniqueValues.length === 5) {
			uniqueValues.map(x => {
				switch (x.Value) {
					case 'J':
						return x.Value = 11;
					case 'Q':
						return x.Value = 12;
					case 'K':
						return x.Value = 13;
					case 'A':
						return x.Value = 14;
					default:
						return x.Value;
				}
			});
			uniqueValues.sort((a, b) => (a.Value) - (b.Value));

			//Tries Ace as high card
			if (uniqueValues.reduce((a, x) => x.Value === a + 1 ? x.Value : false, uniqueValues[0].Value - 1) !== false) {
				bestHand[bestHand.findIndex(x => x.Hand === 'Straight')].InHand = true;
			}

			//Tries Ace as low card
			else {
				uniqueValues.map(x => {
					if (x.Value === 14) {
						return x.Value = 1;
					}
					else {
						return x.Value;
					}
				});
				uniqueValues.sort((a, b) => (a.Value) - (b.Value));

				if (uniqueValues.reduce((a, x) => x.Value === a + 1 ? x.Value : false, uniqueValues[0].Value - 1) !== false) {
				bestHand[bestHand.findIndex(x => x.Hand === 'Straight')].InHand = true;
				}
			}
		}

		//Check for Flush
		if (hand.every(val => val.Suit === hand[0].Suit)) {
			bestHand[bestHand.findIndex(x => x.Hand === 'Flush')].InHand = true;
		}

		//Check for Royal Flush
		if (new Set(hand.filter( x => ['A', 'K', 'Q', 'J', 10].includes(x.Value)).map(x => x.Value)).size === 5 && bestHand[bestHand.findIndex(x => x.Hand === 'Flush')].InHand === true) {
			bestHand[bestHand.findIndex(x => x.Hand === 'Royal Flush')].InHand = true;
		}

		//Check for Straight Flush
		if (bestHand[bestHand.findIndex(x => x.Hand === 'Flush')].InHand === true && bestHand[bestHand.findIndex(x => x.Hand === 'Straight')].InHand === true) {
			bestHand[bestHand.findIndex(x => x.Hand === 'Straight Flush')].InHand = true;
		}

		//Check for Four of a Kind
		if (uniqueValues.findIndex(x => x.Count === 4) > -1) {
			bestHand[bestHand.findIndex(x => x.Hand === 'Four of a Kind')].InHand = true;
		}

		//Check for Full House
		if (uniqueValues.findIndex(x => x.Count === 3) > -1 && uniqueValues.findIndex(x => x.Count === 2) > -1) {
			bestHand[bestHand.findIndex(x => x.Hand === 'Full House')].InHand = true;
		}

		//Check for Three of a Kind
		if (uniqueValues.findIndex(x => x.Count === 3) > -1) {
			bestHand[bestHand.findIndex(x => x.Hand === 'Three of a Kind')].InHand = true;
		}

		//Check for Two Pair
		if (uniqueValues.findIndex(x => x.Count === 2) > -1 && Math.abs([...uniqueValues].reverse().findIndex(x => x.Count === 2) - uniqueValues.length + 1) !== uniqueValues.findIndex(x => x.Count === 2)) {
			bestHand[bestHand.findIndex(x => x.Hand === 'Two Pair')].InHand = true;
		}

		//Check for Jacks or Better
		if (uniqueValues.findIndex(x => x.Count === 2 && ['A', 'K', 'Q', 'J'].includes(x.Value)) > -1) {
			bestHand[bestHand.findIndex(x => x.Hand === 'Jacks or Better')].InHand = true;
    }
    
      this.setState(
        () => ({
          bestHand: bestHand[bestHand.findIndex(x => x.InHand === true)].Hand,
          score: score + bestHand[bestHand.findIndex(x => x.InHand === true)].Multiplier * bet,
          roundEnd: true,
        })
      );
      if (this.state.score === 0) {
        this.setState(
          () => ({
            gameOver: true,
          })
        );
      }
    };

  handleSpeed(event) {
    this.setState({speed: Number(event.target.value)});
  }

  handleBet(event) {
    this.setState({bet: Number(event.target.value)});
  }

  handleEnter(event) {
    if (event.keyCode === 13) {
      this.handleSearch();
    }
  }

  render() {
    const { hand, bestHand, score, } = this.state;

    const suits = [
      {Suit: 'hearts', Symbol: '♥️'},
      {Suit: 'diamonds', Symbol: '♦️'},
      {Suit: 'spades', Symbol: '♠️'},
      {Suit: 'clubs', Symbol: '♣️'},
      {Suit: 'none', Symbol: ''},
  ];

    const NewGame =
      <button id="newGameButton" onClick={this.newGame}>
        New Game
      </button>
      ;

    const Draw =
      <button className = "drawButton" disabled = {this.state.gameOver || this.state.dealingCards} onClick={this.drawCards}>
        {this.state.roundEnd ? 'New Hand' : 'Draw Cards'}
      </button>
      ;

 
    const board =
      <div id = 'gameContainer'>
        <div id = 'scoreContainer'>
          <div id = "scoreRow1">
            <div id="scoring1">
              <ul>
                <li className = {this.state.bestHand === 'Royal Flush' ? 'winner' : ''}> Royal Flush: {1000*this.state.bet} </li>
                <li className = {this.state.bestHand === 'Straight Flush' ? 'winner' : ''}> Straight Flush: {50*this.state.bet} </li>
                <li className = {this.state.bestHand === 'Four of a Kind' ? 'winner' : ''}> Four of a Kind: {25*this.state.bet} </li>
              </ul>
            </div>
            <div id="scoring2">
              <ul>
                <li className = {this.state.bestHand === 'Full House' ? 'winner' : ''}> Full House: {8*this.state.bet} </li>
                <li className = {this.state.bestHand === 'Flush' ? 'winner' : ''}> Flush: {5*this.state.bet} </li>
                <li className = {this.state.bestHand === 'Straight' ? 'winner' : ''}> Straight: {4*this.state.bet} </li>
              </ul>
            </div>
            <div id="scoring3">
              <ul>
                <li className = {this.state.bestHand === 'Three of a Kind' ? 'winner' : ''}> Three of a Kind: {3*this.state.bet} </li>
                <li className = {this.state.bestHand === 'Two Pair' ? 'winner' : ''}> Two Pair: {2*this.state.bet} </li>
                <li className = {this.state.bestHand === 'Jacks or Better' ? 'winner' : ''}> Jacks or Better: {1*this.state.bet} </li>
              </ul>
            </div>
          </div>
          <div id = "scoreRow2">
            <div id = 'speed'>
              Draw Speed &nbsp;
              <select onChange={this.handleSpeed}>
                <option value='300'>Normal</option>
                <option value='200'>Fast</option>
                <option value='100'>Faster</option>
              </select>
            </div>
            <div id = 'ngBtn'>
              {NewGame}
            </div>
            <div id = 'score'>
              Score: {score} 💰
            </div>
          </div>
        </div>
        <div id = 'bestHand'>
          <p>
            {!this.state.gameOver ? bestHand : 'GAME OVER'} <br/>
          </p>
        </div>
        <div id = 'handContainer'>
          {hand.map((card, i) => (
            <div className = 'cardContainer' key = {i}>
              <button className = {card.Flipped} disabled = {card.Flipped === 'noFlip' || this.state.roundEnd || this.state.dealingCards} onClick={this.holdCard.bind(this, i)}>
                <div className = {card.Suit}>
                  <div className = 'cardValueTop'>
                    {card.Value}
                  </div>
                  <div className = 'cardSuit'>
                    {suits[(suits.findIndex(x => x.Suit === card.Suit))].Symbol}
                  </div>
                  <div className = 'cardValueBottom'>
                    {card.Value}
                  </div>
                </div>
              </button>
              <button className = {!card.Held ? 'holdButton' : 'heldButton'} disabled = {card.Flipped === 'noFlip' || this.state.roundEnd || this.state.dealingCards} onClick={this.holdCard.bind(this, i)}>{card.Held? 'HELD' : 'Hold'}</button>
            </div>
          ))}
        </div>
        <div id = "drawContainer">
          {Draw}
        </div>
      </div>
    ;
    
    return (
      <Styles>
        <div className="main-content">
          <div>
            <header>
              <div id="header">
                <h1>Poker</h1>
              </div>
            </header>
          </div>
          <div>
            {board}
          </div>
        </div>
        <div className="main-content">
          <p>
          This poker project is designed as a single player video poker game. Each round costs 5 points to play. Each hand is drawn randomly from a new deck of cards, and any new cards drawn are randomly added from the remaining deck. The types of scoring hands are shown at the top, along with the score earned by hand.
          </p>
        </div>
      </Styles>
    );
  }
}

export default Poker;
