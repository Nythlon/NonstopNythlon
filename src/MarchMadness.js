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

  .heading {
    text-align: center;
    margin-top: 1em;
    border-bottom: solid gray 2px;
  }

  #bracketContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #FirstFour {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .Quarter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }

  #finalFour {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
  }

  .game {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex: 1;
    margin: 10px;
  }

  .topTeam {
    border-style: hidden hidden solid hidden;
    margin: 0px;    
    line-height: 1em;
    overflow: auto;
    width: 150px;
    height: 2.5em;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px 0px 5px 5px;
  }

  .bottomTeam {
    border-style: hidden solid solid hidden;
    margin: 0px;
    line-height: 1em;
    overflow: auto;
    width: 150px;
    height: 2.5em;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px 0px 5px 5px;
  }

  .teamSeed {
    flex: 1
  }

  .teamName {
    flex: 6
  }

  .gameScore {
    text-align: center;
    flex: 1;
  }

  .invis {
    margin: 0px;
    line-height: 1em;
    overflow: auto;
    width: 150px;
    height: 2.5em;
  }

  .invis4 {
    margin: 0px;
    line-height: 1em;
    overflow: auto;
    width: 50px;
    height: 2.5em;
  }

  .offset {
    margin: 0px;
    line-height: 1em;
    overflow: auto;
    width: 150px;
    height: 1.25em;
  }

  .invisSide {
    margin: 0px;
    line-height: 1em;
    overflow: auto;
    width: 150px;
    height: 2.5em;
    border-style: hidden solid hidden hidden;
  }

  #board {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #boardTop {
    display: flex;
    flex-direction: row;
  }

  #newGameButton {
    width: 50px;
    height: 50px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }

  button {
    outline: none;
    user-select: none;
    background-color: #DCDCDC;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    
  }

  #simulateBtn {
    margin-bottom: 1em;
  }

  #simulateBtn, #resetBtn, #year {
    width: 300px;
  }

  #year {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align-last: center;
    margin-top: 15px;
  }

  select {
    width: 600px;
  }


  @media only screen and (max-width: 450px) {
    #simulateBtn, #resetBtn, #year {
      width: 200px;
    }

    .topTeam, .bottomTeam, .invis, .invisSide {
      width: 56px;
      height: 3.6em;
      font-size: 10px;
      overflow-wrap: break-word;
    }

    .offset {
      width: 56px;
      height: 1em;
    }

    .invis4 {
      width: 20px;
    }

  }

  @media only screen and (min-width: 451px) and (max-width: 992px) {

    .topTeam, .bottomTeam, .invis, .invisSide, .offset {
      width: 80px;
      font-size: 12px;
      height: 3.6em;
      overflow-wrap: break-word;
    }

    .offset {
      width: 80px;
      height: 1.8em;
    }

    .invis4 {
      width: 30px;
    }
  }
`;

let teams2021 = [
  {Name: 'North Carolina A&T', Seed: 16, Offense: 95.7286, Defense: 108.0295, Tempo: 70.962},
  {Name: 'Prairie View A&M', Seed: 16, Offense: 95.5289, Defense: 101.9168, Tempo: 67.9216},
  {Name: 'Stanford', Seed: 11, Offense: 106.887, Defense: 90.818, Tempo: 70.296},
  {Name: 'Maryland', Seed: 11, Offense: 110.156, Defense: 93.539, Tempo: 65.8308},
  {Name: 'Montana St.', Seed: 16, Offense: 99.0227, Defense: 102.1172, Tempo: 68.8166},
  {Name: 'Bryant', Seed: 16, Offense: 102.4161, Defense: 105.5246, Tempo: 76.32},
  {Name: 'Colorado St.', Seed: 11, Offense: 107.675, Defense: 95.364, Tempo: 70.677},
  {Name: 'Seton Hall', Seed: 11, Offense: 114.914, Defense: 97.090, Tempo: 67.4236},

  {Name: 'Gonzaga', Seed: 1, Offense: 124.62, Defense: 90.013, Tempo: 69.0161},
  {Name: 'UMBC', Seed: 16, Offense: 98.8231, Defense: 100.8147, Tempo: 68.4191},
  {Name: 'Boise St.', Seed: 8, Offense: 110.451, Defense: 96.276, Tempo: 69.2151},
  {Name: 'Minnesota', Seed: 9, Offense: 111.340, Defense: 94.551, Tempo: 69.9109},
  {Name: 'Kansas', Seed: 5, Offense: 111.337, Defense: 91.120, Tempo: 68.2200},
  {Name: 'Belmont', Seed: 12, Offense: 110.351, Defense: 102.5184, Tempo: 71.352},
  {Name: 'Tennessee', Seed: 4, Offense: 108.469, Defense: 86.21, Tempo: 65.9304},
  {Name: 'Winthrop', Seed: 13, Offense: 104.1130, Defense: 99.2120, Tempo: 74.68},
  {Name: 'Virginia Tech', Seed: 6, Offense: 111.145, Defense: 93.640, Tempo: 66.4284},
  {Name: 'Indiana', Seed: 11, Offense: 111.243, Defense: 92.327, Tempo: 66.1299},
  {Name: 'Texas', Seed: 3, Offense: 112.526, Defense: 90.315, Tempo: 69.3141},
  {Name: 'Siena', Seed: 14, Offense: 101.8175, Defense: 99.6127, Tempo: 65.7311},
  {Name: 'Florida', Seed: 7, Offense: 113.518, Defense: 94.752, Tempo: 69.9112},
  {Name: 'Oregon', Seed: 10, Offense: 111.636, Defense: 94.958, Tempo: 69.1154},
  {Name: 'Illinois', Seed: 2, Offense: 117.16, Defense: 89.912, Tempo: 70.584},
  {Name: 'Northeastern', Seed: 15, Offense: 99.1223, Defense: 98.2108	, Tempo: 67.6223},

  {Name: 'Alabama', Seed: 1, Offense: 112.132, Defense: 86.82, Tempo: 74.39},
  //TBD
  {Name: 'Oklahoma St.', Seed: 8, Offense: 109.558, Defense: 91.824, Tempo: 70.964},
  {Name: 'Loyola Chicago', Seed: 9, Offense: 111.538, Defense: 88.76, Tempo: 65.1325},
  {Name: 'Creighton', Seed: 5, Offense: 115.611, Defense: 94.956, Tempo: 69.7117},
  {Name: 'UConn', Seed: 12, Offense: 111.341, Defense: 93.742, Tempo: 64.2338},
  {Name: 'Oklahoma', Seed: 4, Offense: 112.327, Defense: 92.328, Tempo: 68.1205},
  {Name: 'Liberty', Seed: 13, Offense: 106.393, Defense: 99.9133, Tempo: 63.3348},
  {Name: 'Purdue', Seed: 6, Offense: 111.834, Defense: 91.823, Tempo: 66.4279},
  //TBD
  {Name: 'Virginia', Seed: 3, Offense: 116.59, Defense: 91.925, Tempo: 59.9357},
  {Name: 'UC Irvine', Seed: 14, Offense: 100.2203, Defense: 93.536, Tempo: 67.1252},
  {Name: 'Colorado', Seed: 7, Offense: 115.013, Defense: 94.046, Tempo: 66.9266},
  {Name: 'Arkansas', Seed: 10, Offense: 110.352, Defense: 91.120, Tempo: 73.021},
  {Name: 'Ohio St.', Seed: 2, Offense: 120.74, Defense: 95.770, Tempo: 66.9268},
  {Name: 'Stephen F. Austin', Seed: 15, Offense: 103.4140, Defense: 103.2196, Tempo: 70.867},

  {Name: 'Baylor', Seed: 1, Offense: 122.63, Defense: 87.22, Tempo: 69.0161},
  //TBD
  {Name: 'Louisville', Seed: 8, Offense: 110.253, Defense: 92.329, Tempo: 66.2291},
  {Name: 'BYU', Seed: 9, Offense: 110.748, Defense: 93.538, Tempo: 68.1203},
  {Name: 'West Virginia', Seed: 5, Offense: 115.312, Defense: 94.550, Tempo: 69.3146},
  {Name: 'North Carolina', Seed: 12, Offense: 108.965, Defense: 92.226, Tempo: 70.388},
  {Name: 'Missouri', Seed: 4, Offense: 111.439, Defense: 92.932, Tempo: 70.0108},
  {Name: 'UAB', Seed: 13, Offense: 104.1131, Defense: 94.753, Tempo: 67.5232},
  {Name: 'UCLA', Seed: 6, Offense: 114.416, Defense: 96.377, Tempo: 63.9345	},
  {Name: 'LSU', Seed: 11, Offense: 116.88, Defense: 100.0135, Tempo: 70.870},
  {Name: 'Iowa', Seed: 3, Offense: 126.11, Defense: 99.8131, Tempo: 70.292},
  {Name: 'Grand Canyon', Seed: 14, Offense: 104.5120, Defense: 99.5125, Tempo: 64.8333},
  {Name: 'Xavier', Seed: 7, Offense: 111.046, Defense: 94.957, Tempo: 68.6178},
  {Name: 'Clemson', Seed: 10, Offense: 106.196, Defense: 90.014, Tempo: 65.4317},
  {Name: 'Houston', Seed: 2, Offense: 114.017, Defense: 88.25, Tempo: 65.7312},
  {Name: 'Cleveland St.', Seed: 15, Offense: 98.4238, Defense: 98.4111, Tempo: 66.3289},
  
  {Name: 'Michigan', Seed: 1, Offense: 116.88, Defense: 88.77, Tempo: 67.9215},
  {Name: 'South Dakota St.', Seed: 16, Offense: 109.063, Defense: 103.1194, Tempo: 70.585},
  {Name: 'Drake', Seed: 8, Offense: 112.033, Defense: 96.784, Tempo: 67.5228},
  {Name: 'San Diego St.', Seed: 9, Offense: 111.342, Defense: 91.321, Tempo: 66.3290},
  {Name: 'Florida St.', Seed: 5, Offense: 114.915, Defense: 93.134, Tempo: 69.7122},
  {Name: 'Toledo', Seed: 12, Offense: 115.810, Defense: 102.0170, Tempo: 68.2201},
  {Name: 'Texas Tech', Seed: 4, Offense: 112.230, Defense: 90.013, Tempo: 66.3288},
  {Name: 'UNC Greensboro', Seed: 13, Offense: 102.4162, Defense: 95.973, Tempo: 68.4188},
  {Name: 'USC', Seed: 6, Offense: 112.723, Defense: 91.522, Tempo: 67.9217},
  //TBD
  {Name: 'Wisconsin', Seed: 3, Offense: 112.328, Defense: 89.29, Tempo: 65.3322},
  {Name: 'Navy', Seed: 14, Offense: 102.7153, Defense: 102.9186, Tempo: 65.8309},
  {Name: 'Rutgers', Seed: 7, Offense: 110.254, Defense: 90.617, Tempo: 68.1207},
  {Name: 'St. Bonaventure', Seed: 10, Offense: 109.260, Defense: 93.943, Tempo: 66.5278},
  {Name: 'Villanova', Seed: 2, Offense: 118.25, Defense: 93.537, Tempo: 64.8332},
  {Name: 'Louisiana', Seed: 15, Offense: 100.4198, Defense: 102.5177, Tempo: 71.252},
];

let teams2020 = [
  {Name: 'Boston University', Seed: 16, Offense: 103.3166, Defense: 102.6186, Tempo: 66.3272},
  {Name: 'Robert Morris', Seed: 16, Offense: 100.5212, Defense: 103.8205, Tempo: 66.1282},
  {Name: 'Indiana', Seed: 11, Offense: 108.565, Defense: 92.726, Tempo: 67.9206},
  {Name: 'Xavier', Seed: 11, Offense: 106.1103, Defense: 92.22, Tempo: 68.1191},
  {Name: 'Prairie View A&M', Seed: 16, Offense: 96.3282, Defense: 100.5131, Tempo: 70.761},
  {Name: 'N.C. Central', Seed: 16, Offense: 94.2319, Defense: 103.2193, Tempo: 66.6263},
  {Name: 'Texas', Seed: 11, Offense: 104.1153, Defense: 92.624, Tempo: 65.9292},
  {Name: 'USC', Seed: 11, Offense: 104.3145, Defense: 92.018, Tempo: 68.9139},

  {Name: 'Kansas', Seed: 1, Offense: 115.88, Defense: 85.52, Tempo: 67.233},
  {Name: 'Siena', Seed: 16, Offense: 107.287, Defense: 105.1236, Tempo: 66.7261},
  {Name: 'Penn St.', Seed: 8, Offense: 110.343, Defense: 92.423, Tempo: 70.954},
  {Name: `Saint Mary's`, Seed: 9, Offense: 113.716, Defense: 98.596, Tempo: 63.9339},
  {Name: 'Wisconsin', Seed: 5, Offense: 110.84, Defense: 91.917, Tempo: 63.7342},
  {Name: 'Liberty', Seed: 12, Offense: 106.107, Defense: 96.469, Tempo: 61.5352},
  {Name: 'Kentucky', Seed: 4, Offense: 112.724, Defense: 95.152, Tempo: 67.7215},
  {Name: 'North Texas', Seed: 13, Offense: 111.234, Defense: 101.2146, Tempo: 62.935},
  {Name: 'Auburn', Seed: 6, Offense: 111.433, Defense: 95.555, Tempo: 69.2127},
  {Name: 'Stanford', Seed: 11, Offense: 104.4143, Defense: 90.37, Tempo: 68.3183},
  {Name: 'Maryland', Seed: 3, Offense: 113.518, Defense: 92.422, Tempo: 67.0245},
  {Name: 'Belmont', Seed: 14, Offense: 106.597, Defense: 100.5132, Tempo: 70.565},
  {Name: 'Iowa', Seed: 7, Offense: 117.35, Defense: 98.697, Tempo: 70.277},
  {Name: 'Providence', Seed: 10, Offense: 107.875, Defense: 92.827, Tempo: 68.4171},
  {Name: 'Duke', Seed: 2, Offense: 115.79, Defense: 91.112, Tempo: 72.034},
  {Name: 'North Dakota St.', Seed: 15, Offense: 106.891, Defense: 101.2148, Tempo: 66.0287},

  {Name: 'Dayton', Seed: 1, Offense: 119.12, Defense: 94.138, Tempo: 67.622},
  //TBD
  {Name: 'Florida', Seed: 8, Offense: 112.527, Defense: 95.761, Tempo: 64.9326},
  {Name: 'Colorado', Seed: 9, Offense: 109.154, Defense: 93.432, Tempo: 68.2188},
  {Name: 'West Virginia', Seed: 5, Offense: 108.367, Defense: 87.13, Tempo: 69.4112},
  {Name: 'Wichita St.', Seed: 12, Offense: 105.6117, Defense: 90.48, Tempo: 69.5101},
  {Name: 'Ohio St.', Seed: 4, Offense: 114.313, Defense: 92.019, Tempo: 66.228},
  {Name: 'Akron', Seed: 13, Offense: 108.566, Defense: 98.9103, Tempo: 69.411},
  {Name: 'Michigan', Seed: 6, Offense: 113.220, Defense: 93.028, Tempo: 68.7150},
  //TBD
  {Name: 'Villanova', Seed: 3, Offense: 113.9, Defense: 94.036, Tempo: 66.2275},
  {Name: 'Hofstra', Seed: 14, Offense: 108.762, Defense: 102.6187, Tempo: 67.9202},
  {Name: 'Texas Tech', Seed: 7, Offense: 109.847, Defense: 90.59, Tempo: 67.3236},
  {Name: 'Utah St.', Seed: 10, Offense: 109.549, Defense: 94.648, Tempo: 67.4229},
  {Name: 'Florida St.', Seed: 2, Offense: 111.732, Defense: 91.515, Tempo: 69.989},
  {Name: 'Northern Kentucky', Seed: 15, Offense: 102.0191, Defense: 99.812, Tempo: 65.7304},

  {Name: 'Gonzaga', Seed: 1, Offense: 121.31, Defense: 94.443, Tempo: 71.935},
  //TBD
  {Name: 'Oklahoma', Seed: 8, Offense: 108.858, Defense: 93.129, Tempo: 69.698},
  {Name: 'LSU', Seed: 9, Offense: 118.14, Defense: 102.4179, Tempo: 70.084},
  {Name: 'Seton Hall', Seed: 5, Offense: 112.329, Defense: 92.725, Tempo: 69.893},
  {Name: 'Yale', Seed: 12, Offense: 107.973, Defense: 96.467, Tempo: 67.4227},
  {Name: 'Oregon', Seed: 4, Offense: 117.16, Defense: 97.176, Tempo: 65.0319},
  {Name: 'New Mexico St.', Seed: 13, Offense: 107.68, Defense: 99.4113, Tempo: 63.5343},
  {Name: 'Arizona', Seed: 6, Offense: 111.035, Defense: 91.414, Tempo: 69.3115},
  {Name: 'Richmond', Seed: 11, Offense: 109.253, Defense: 95.354, Tempo: 69.3124},
  {Name: 'Louisville', Seed: 3, Offense: 114.512, Defense: 93.13, Tempo: 67.1242},
  {Name: 'UC Irvine', Seed: 14, Offense: 105.4121, Defense: 99.3109, Tempo: 67.7212},
  {Name: 'Illinois', Seed: 7, Offense: 110.938, Defense: 93.735, Tempo: 66.0288},
  {Name: 'E. Tennessee St.', Seed: 10, Offense: 108.269, Defense: 96.065, Tempo: 66.1281},
  {Name: 'San Diego St.', Seed: 2, Offense: 115.111, Defense: 90.61, Tempo: 64.6332},
  {Name: 'Eastern Washington', Seed: 15, Offense: 105.412, Defense: 101.1142, Tempo: 73.118},
  
  {Name: 'Baylor', Seed: 1, Offense: 113.517, Defense: 88.14, Tempo: 66.2277},
  {Name: 'Winthrop', Seed: 16, Offense: 104.7136, Defense: 102.1169, Tempo: 71.936},
  {Name: 'Marquette', Seed: 8, Offense: 114.014, Defense: 96.973, Tempo: 70.760},
  {Name: 'Rutgers', Seed: 9, Offense: 107.972, Defense: 90.26, Tempo: 67.4231},
  {Name: 'Houston', Seed: 5, Offense: 112.722, Defense: 92.321, Tempo: 65.73},
  {Name: 'Stephen F. Austin', Seed: 12, Offense: 104.1152, Defense: 97.175, Tempo: 71.839},
  {Name: 'BYU', Seed: 4, Offense: 116.37, Defense: 95.66, Tempo: 69.5108},
  {Name: 'Vermont', Seed: 13, Offense: 106.598, Defense: 96.468, Tempo: 66.3273},
  {Name: 'Virginia', Seed: 6, Offense: 99.3234, Defense: 85.11, Tempo: 59.4353},
  //TBD
  {Name: 'Creighton', Seed: 3, Offense: 118.23, Defense: 97.378, Tempo: 68.3178},
  {Name: 'Bradley', Seed: 14, Offense: 106.892, Defense: 100.7134, Tempo: 67.1244},
  {Name: 'Butler', Seed: 7, Offense: 112.625, Defense: 94.242, Tempo: 63.7341},
  {Name: 'Cincinnati', Seed: 10, Offense: 108.859, Defense: 94.751, Tempo: 68.0199},
  {Name: 'Michigan St.', Seed: 2, Offense: 115.21, Defense: 91.213, Tempo: 69.113},
  {Name: 'Little Rock', Seed: 15, Offense: 106.499, Defense: 102.5184, Tempo: 69.3125},
];

class MarchMadness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRound: 1,
      teams: teams2020,
      Games: [],
    };

    this.pointSpread = this.pointSpread.bind(this);
    this.overUnder = this.overUnder.bind(this);
    this.prediction = this.prediction.bind(this);
    this.randomNormal = this.randomNormal.bind(this);
    this.simulateGame = this.simulateGame.bind(this);
    this.SimulateTournament = this.SimulateTournament.bind(this);
    this.SimulateRound = this.SimulateRound.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.initialGameHtml = this.initialGameHtml.bind(this);
    this.gameHtml = this.gameHtml.bind(this);
  }

  handleTeam1(event) {
    this.setState({team1: this.state.teams[event.target.value]});
  }

  handleTeam2(event) {
    this.setState({team2: this.state.teams[event.target.value]});
  }

  pointSpread (team1, team2) {
    let skillGap = 0
    if ((team1.Offense-team1.Defense) - (team2.Offense-team2.Defense) >= 5) {
      skillGap = Math.abs((team1.Offense-team1.Defense) - (team2.Offense-team2.Defense)) * 0.16;
    }
    if ((team1.Offense-team1.Defense) - (team2.Offense-team2.Defense) <= -5) {
      skillGap = Math.abs((team1.Offense-team1.Defense) - (team2.Offense-team2.Defense)) * -0.16;
    }
    
    let isKansas = [team1.Name === 'Kansas', team2.Name === 'Kansas'];

    return (-1 * ((team1.Offense-team1.Defense-isKansas[0]*Math.abs(this.randomNormal()/3))-(team2.Offense-team2.Defense-isKansas[1]*Math.abs(this.randomNormal()/3)))*(team1.Tempo + team2.Tempo)/200) - skillGap;
  }

  overUnder (team1, team2) {
    return (team1.Offense+team1.Defense+team2.Offense+team2.Defense)*(team1.Tempo + team2.Tempo)/400;
  }

  prediction (team1, team2) {
    return Math.round((this.overUnder(team1, team2) - this.pointSpread(team1, team2))/2) + ' to ' + Math.round((this.overUnder(team1, team2) + this.pointSpread(team1, team2))/2);
  }

  randomNormal () {
    let randomNumber = Math.random() * 50;
    let randomSign = Math.random() > 0.5 ? 1 : -1;
    return randomSign * ((6 * Math.pow(10, -8) * Math.pow(randomNumber, 5)) - (7 * Math.pow(10, -6) * Math.pow(randomNumber, 4)) + (0.0003 * Math.pow(randomNumber, 3)) - (0.004* Math.pow(randomNumber, 2)) + (0.0501*randomNumber) - 0.0406)/2;
  }

  simulateGame (team1, team2) {
    let totalPoints = this.overUnder(team1, team2) + this.randomNormal() * 17;
    let margin = this.pointSpread(team1, team2) + this.randomNormal() * 10.5;
    let OT = 0;
    let score = [Math.round((totalPoints - margin)/2), Math.round((totalPoints + margin)/2)]

    while (score[0] === score[1]) {
      OT++;
      let totalPoints = this.overUnder(team1, team2) + this.randomNormal() * 17;
      let margin = this.pointSpread(team1, team2) + this.randomNormal() * 10.5;
      score[0]+= Math.round((totalPoints - margin)/8);
      score[1]+= Math.round((totalPoints + margin)/8);
      score[2] = OT > 1 ? OT + 'OT' : 'OT';
    }
    this.state.Games.push({Team1: team1, Team2: team2, Score: score, Winner: score[0] > score[1] ? team1 : team2});
  }

  SimulateTournament () {
    let round = this.state.currentRound;
      for (let i = round; i <= 7; i++) {
        this.SimulateRound (round);
        round++;
      }
  }

  SimulateRound (round) {
    if (round === 1) {
      for (let i = 0; i <= 3; i++) {
        this.simulateGame(this.state.teams[i*2], this.state.teams[i*2+1], i);
      }
      this.setState(
        () => ({currentRound: 2})
        )
    }

    if (round === 2) {
      let offset = 0;
      for (let i = 4; i <= 32; i++) {
        if (i === 12) {
          this.simulateGame(this.state.teams[i*2], this.state.Games[0].Winner);
          offset++;
        }
        if (i === 15) {
          this.simulateGame(this.state.teams[i*2 + offset], this.state.Games[1].Winner);
          offset++;
        }
        if (i === 18) {
          this.simulateGame(this.state.teams[i*2 + offset], this.state.Games[2].Winner);
          offset++;
        }
        if (i === 29) {
          this.simulateGame(this.state.teams[i*2 + offset], this.state.Games[3].Winner);
          offset--;
        }
        else {
          this.simulateGame(this.state.teams[i*2 + offset], this.state.teams[i*2 + 1 + offset]);
        }
      }
      this.setState(
        () => ({currentRound: 3})
        )
    }

    if (round === 3) {
      for (let i = 4; i <= 34; i++) {
        this.simulateGame(this.state.Games[i].Winner, this.state.Games[i+1].Winner);
        i++;
      }
      this.setState(
        () => ({currentRound: 4})
        )
    }

    if (round === 4) {
      for (let i = 36; i <= 50; i++) {
        this.simulateGame(this.state.Games[i].Winner, this.state.Games[i+1].Winner);
        i++;
      }
      this.setState(
        () => ({currentRound: 5})
        )
    }

    if (round === 5) {
      for (let i = 52; i <= 58; i++) {
        this.simulateGame(this.state.Games[i].Winner, this.state.Games[i+1].Winner);
        i++;
      }
      this.setState(
        () => ({currentRound: 6})
        )
    }

    if (round === 6) {
      for (let i = 60; i <= 62; i++) {
        this.simulateGame(this.state.Games[i].Winner, this.state.Games[i+1].Winner);
        i++;
      }
      this.setState(
        () => ({currentRound: 7})
        )
    }

    if (round === 7) {
        this.simulateGame(this.state.Games[64].Winner, this.state.Games[65].Winner);
        this.setState(
          () => ({currentRound: 8})
          )
    }
  }

  handleReset() {
    this.setState(
      () => ({
        Games: [],
        currentRound: 1
      })
      )
  }

  handleYear = event => {
    event.target.value === '2020' ? this.setState({ teams:  teams2020}) : this.setState({ teams:  teams2021});
    };

  initialGameHtml(team, i, index, offset) {
    return <div className={index === 0 ? "topTeam" : "bottomTeam"} key={i}>
        <div className="teamName">
          ({team.Seed}) {team.Name}
        </div>
        <div className="gameScore">
          {this.state.Games[Math.floor(i/2 + offset)] ? this.state.Games[Math.floor(i/2 + offset)].Score[index] : ''} <small>{this.state.Games[Math.floor(i/2 + offset)] && this.state.Games[Math.floor(i/2 + offset)].Score[2] ? `(${this.state.Games[Math.floor(i/2 + offset)].Score[2]})` : ''}</small>
        </div>
      </div>
  }

  gameHtml(currentGame, nextGame, index) {
    return <div className={index === 0 ? "topTeam" : "bottomTeam"}>
        <div className="teamName">
          {this.state.Games[currentGame] ? `(${this.state.Games[currentGame].Winner.Seed})` : '' } {this.state.Games[currentGame] ? `${this.state.Games[currentGame].Winner.Name}` : '' }
        </div>
        <div className="gameScore">
          {this.state.Games[nextGame] ? this.state.Games[nextGame].Score[index] : ''} <small>{this.state.Games[nextGame] && this.state.Games[nextGame].Score[2] ? `(${this.state.Games[nextGame].Score[2]})` : ''}</small>
        </div>
      </div>
  }
  
  render() {
    const SimulateTournament =
      <button id = "simulateBtn" onClick={this.SimulateTournament} disabled={this.state.currentRound === 8}>Simulate Tournament</button>
      ;

    const SimulateRound =
      <button id = "simulateBtn" onClick={ () => this.SimulateRound(this.state.currentRound)} disabled={this.state.currentRound === 8}>Simulate Round</button>
      ;
    
    const Reset =
      <button id = "resetBtn" onClick={this.handleReset}>Reset</button>
      ;

    const Year =
      <div id = "year">
        <select onChange={this.handleYear} disabled={this.state.currentRound !== 1}>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        </select>
      </div>
      ;

    const FirstFour =
    <div>
      <h3 className="heading">First Four</h3>
      <div id = "FirstFour">
        <ul>
          {this.initialGameHtml(this.state.teams[0], 0, 0, 0)}
          {this.initialGameHtml(this.state.teams[1], 1, 1, 0)}
        </ul>
        <ul>
          <li className="invis4"></li>
        </ul>
        <ul>
          {this.initialGameHtml(this.state.teams[2], 2, 0, 0)}
          {this.initialGameHtml(this.state.teams[3], 3, 1, 0)}
        </ul>
        <ul>
          <li className="invis4"></li>
        </ul>
        <ul>
          {this.initialGameHtml(this.state.teams[4], 4, 0, 0)}
          {this.initialGameHtml(this.state.teams[5], 5, 1, 0)}
        </ul>
        <ul>
          <li className="invis4"></li>
        </ul>
        <ul>
          {this.initialGameHtml(this.state.teams[6], 6, 0, 0)}
          {this.initialGameHtml(this.state.teams[7], 7, 1, 0)}
        </ul>
        
        </div>
      </div>

      const Midwest = 
      <div>
        <h3 className="heading">Midwest </h3>
        <div className = "Quarter">
          <div>
            <ul>
              {this.state.teams.filter((team, i) => i <= 23 && i > 7).map((team, i) =>
              i % 2 === 0 ?
              this.initialGameHtml(team, i, 0, 4)
              : this.initialGameHtml(team, i, 1, 4)
                )}
            </ul>
          </div>
          <div>
            <ul>
              <li className="offset"></li>
              {this.gameHtml(4, 36, 0)}
              <li className="invisSide"></li>
              {this.gameHtml(5, 36, 1)}
              <li className="invis"></li>
              {this.gameHtml(6, 37, 0)}
              <li className="invisSide"></li>
              {this.gameHtml(7, 37, 1)}
              <li className="invis"></li>
              {this.gameHtml(8, 38, 0)}
              <li className="invisSide"></li>
              {this.gameHtml(9, 38, 1)}
              <li className="invis"></li>
              {this.gameHtml(10, 39, 0)}
              <li className="invisSide"></li>
              {this.gameHtml(11, 39, 1)}
            </ul>
          </div>
          <div>
            <ul>
              <li className="offset"></li>
              <li className="invis"></li>
              {this.gameHtml(36, 52, 0)}
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              {this.gameHtml(37, 52, 1)}
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              {this.gameHtml(38, 53, 0)}
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              {this.gameHtml(39, 53, 1)}
            </ul>
          </div>
          <div>
            <ul>
              <li className="offset"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              {this.gameHtml(52, 60, 0)}
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              {this.gameHtml(53, 60, 1)}
            </ul>
          </div>
          <div>
            <ul>
              <li className="offset"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              {this.gameHtml(60, null, 0)}
            </ul>
          </div>
        </div>
      </div>

    const East = 
    <div>
      <h3 className="heading">East </h3>
      <div className = "Quarter">
        
        <div>
          <ul>
            {this.initialGameHtml(this.state.teams[24], 24, 0, 0)}
            {this.state.Games[0] ? this.initialGameHtml(this.state.Games[0].Winner, 25, 1, 0)
            : <li className="bottomTeam">(16) Winner of Game 1</li>}

              {this.state.teams.filter((team, i) => i <= 31 && i > 24).map((team, i) => 
                i % 2 === 0 ?
                this.initialGameHtml(team, i, 0, 13)
                : this.initialGameHtml(team, i, 1, 13)
            )}

            {this.state.Games[1] ? this.initialGameHtml(this.state.Games[1].Winner, 32, 1, 0)
            : <li className="bottomTeam">(11) Winner of Game 2</li>}

            {this.state.teams.filter((team, i) => i <= 37 && i > 31).map((team, i) => 
              i % 2 === 0 ?
                this.initialGameHtml(team, i, 0, 17)
                : this.initialGameHtml(team, i, 1, 17)
            )}
          </ul>
        </div>
        <div>
          <ul>
            <li className="offset"></li>
            {this.gameHtml(12, 40, 0)}
            <li className="invisSide"></li>
            {this.gameHtml(13, 40, 1)}
            <li className="invis"></li>
            {this.gameHtml(14, 41, 0)}
            <li className="invisSide"></li>
            {this.gameHtml(15, 41, 1)}
            <li className="invis"></li>
            {this.gameHtml(16, 42, 0)}
            <li className="invisSide"></li>
            {this.gameHtml(17, 42, 1)}
            <li className="invis"></li>
            {this.gameHtml(18, 43, 0)}
            <li className="invisSide"></li>
            {this.gameHtml(19, 43, 1)}
          </ul>
        </div>
        <div>
          <ul>
            <li className="offset"></li>
            <li className="invis"></li>
            {this.gameHtml(40, 54, 0)}
            <li className="invisSide"></li>
            <li className="invisSide"></li>
            <li className="invisSide"></li>
            {this.gameHtml(41, 54, 1)}
            <li className="invis"></li>
            <li className="invis"></li>
            <li className="invis"></li>
            {this.gameHtml(42, 55, 0)}
            <li className="invisSide"></li>
            <li className="invisSide"></li>
            <li className="invisSide"></li>
            {this.gameHtml(43, 55, 1)}
          </ul>
        </div>
        <div>
          <ul>
            <li className="offset"></li>
            <li className="invis"></li>
            <li className="invis"></li>
            <li className="invis"></li>
            {this.gameHtml(54, 61, 0)}
            <li className="invisSide"></li>
            <li className="invisSide"></li>
            <li className="invisSide"></li>
            <li className="invisSide"></li>
            <li className="invisSide"></li>
            <li className="invisSide"></li>
            <li className="invisSide"></li>
            {this.gameHtml(55, 61, 1)}
          </ul>
        </div>
        <div>
          <ul>
            <li className="offset"></li>
            <li className="invis"></li>
            <li className="invis"></li>
            <li className="invis"></li>
            <li className="invis"></li>
            <li className="invis"></li>
            <li className="invis"></li>
            <li className="invis"></li>
            {this.gameHtml(61, null, 0)}
          </ul>
        </div>
      </div>
    </div>

    const West = 
      <div>
        <h3 className="heading">West</h3>
        <div className = "Quarter">
          <div>
            <ul>
              {this.initialGameHtml(this.state.teams[38], 0, 0, 20)}
              {this.state.Games[0] ? this.initialGameHtml(this.state.Games[2].Winner, 41, 1, 0)
              : <li className="bottomTeam">(16) Winner of Game 3</li>}

              {this.state.teams.filter((team, i) => i <= 52 && i > 38).map((team, i) =>
                i % 2 === 0 ?
                this.initialGameHtml(team, i, 0, 21)
                : this.initialGameHtml(team, i, 1, 21)
                )}
            </ul>
          </div>
          <div>
            <ul>
              <li className="offset"></li>
              {this.gameHtml(20, 44, 0)}
              <li className="invisSide"></li>
              {this.gameHtml(21, 44, 1)}
              <li className="invis"></li>
              {this.gameHtml(22, 45, 0)}
              <li className="invisSide"></li>
              {this.gameHtml(23, 45, 1)}
              <li className="invis"></li>
              {this.gameHtml(24, 46, 0)}
              <li className="invisSide"></li>
              {this.gameHtml(25, 46, 1)}
              <li className="invis"></li>
              {this.gameHtml(26, 47, 0)}
              <li className="invisSide"></li>
              {this.gameHtml(27, 47, 1)}
            </ul>
          </div>
          <div>
            <ul>
              <li className="offset"></li>
              <li className="invis"></li>
              {this.gameHtml(44, 56, 0)}
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              {this.gameHtml(45, 56, 1)}
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              {this.gameHtml(46, 57, 0)}
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              {this.gameHtml(47, 57, 1)}
            </ul>
          </div>
          <div>
            <ul>
              <li className="offset"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              {this.gameHtml(56, 62, 0)}
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              {this.gameHtml(57, 62, 1)}
            </ul>
          </div>
          <div>
            <ul>
              <li className="offset"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              {this.gameHtml(62, null, 0)}
            </ul>
          </div>
        </div>
      </div>

    const South = 
      <div>
        <h3 className="heading">South</h3>
        <div className = "Quarter">
          <div>
            <ul>
              {this.state.teams.filter((team, i) => i <= 61 && i > 52).map((team, i) =>
              i % 2 === 0 ?
                this.initialGameHtml(team, i, 0, 28)
                : this.initialGameHtml(team, i, 1, 28)
                )}

              {this.state.Games[3] ? this.initialGameHtml(this.state.Games[3].Winner, 64, 1, 0)
              : <li className="bottomTeam">(11) Winner of Game 4</li>}

              {this.state.teams.filter((team, i) => i <= 67 && i > 61).map((team, i) =>
              i % 2 === 0 ?
                this.initialGameHtml(team, i, 0, 33)
                : this.initialGameHtml(team, i, 1, 33)
                )}
            </ul>
          </div>
          <div>
            <ul>
              <li className="offset"></li>
              {this.gameHtml(28, 48, 0)}
              <li className="invisSide"></li>
              {this.gameHtml(29, 48, 1)}
              <li className="invis"></li>
              {this.gameHtml(30, 49, 0)}
              <li className="invisSide"></li>
              {this.gameHtml(31, 49, 1)}
              <li className="invis"></li>
              {this.gameHtml(32, 50, 0)}
              <li className="invisSide"></li>
              {this.gameHtml(33, 50, 1)}
              <li className="invis"></li>
              {this.gameHtml(34, 51, 0)}
              <li className="invisSide"></li>
              {this.gameHtml(35, 51, 1)}
            </ul>
          </div>
          <div>
            <ul>
              <li className="offset"></li>
              <li className="invis"></li>
              {this.gameHtml(48, 58, 0)}
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              {this.gameHtml(49, 58, 1)}
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              {this.gameHtml(50, 59, 0)}
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              {this.gameHtml(51, 59, 1)}
            </ul>
          </div>
          <div>
            <ul>
              <li className="offset"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              {this.gameHtml(58, 63, 0)}
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              <li className="invisSide"></li>
              {this.gameHtml(59, 63, 1)}
            </ul>
          </div>
          <div>
            <ul>
              <li className="offset"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              <li className="invis"></li>
              {this.gameHtml(63, null, 0)}
            </ul>
          </div>
        </div>
      </div>

    const FinalFour =
      <div>
        <h3 className="heading">Final Four</h3>
        <div id="finalFour">
          <div>
            <ul>
              {this.gameHtml(60, 64, 0)}
              {this.gameHtml(61, 64, 1)}
              {this.gameHtml(62, 65, 0)}
              {this.gameHtml(63, 65, 1)}
            </ul>
          </div>
          <div>
            <ul>
              <li className="offset"></li>
              {this.gameHtml(64, 66, 0)}
              <li className="invisSide"></li>
              {this.gameHtml(65, 66, 1)}
              <li className="invis"></li>
            </ul>
          </div>
          <div>
              <ul>
                <li className="offset"></li>
                <li className="invis"></li>
                {this.gameHtml(66, null, 0)}
              </ul>
          </div>
          <div>
            <ul>
              <li className="invis"></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="invis"></li>
            </ul>
          </div>
        </div>
      </div> 
    
    return (
      <Styles>
        <div className="main-content">
          <div>
            <header>
              <div id="header">
                <h1>March Madness Simulator</h1>
              </div>
            </header>
          </div>
          <div id = "bracketContainer">
            {SimulateTournament}
            {SimulateRound}
            {Reset}
            {Year}
            {FirstFour}
            {Midwest}
            {East}
            {West}
            {South}
            {FinalFour}
          </div>
        </div>
        <div className="main-content">
          <p>
            This March Madness simulator uses the Kenpom college basketball ratings to determine team strengths and predict how many points a team is favored by. A random number obtained from an equation approximating standard normal distribution
            is applied to the point spread to determine individual game outcomes.
          </p>
          <p>
            Since March Madness did not occur in 2020, teams were (mostly) selected and seeded for the tournament based on an average ranking of 4 separate polls/rankings: AP, coaches, Kenpom, and NET, with some influence from other bracket projections.
          </p>
        </div>
      </Styles>
    );
  }
}

export default MarchMadness;
