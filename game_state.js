class GameState {
  constructor(){}
  
  make_game(){
    return {
      "synthType": "AMSynth",
      "synthProperties": {
        "portamento": 0.1,
        "spread": 20,
        "detune": 0,
        "volume": 1
      },
      "players": [
        // {
        //   "name": "",
        // }
      ],
      "turnIndex": 0
    }
  }
  
  make_player(_game, _name, _joined){
    _game.players.push({
      "name": _name,
      "joined": _joined
    })
  }
}
module.exports = GameState
