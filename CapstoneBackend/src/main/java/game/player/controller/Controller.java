package game.player.controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import game.player.model.Leaderboard;
import game.player.model.Player;
import game.player.service.LeaderService;
import game.player.service.playerService;

@RestController
@CrossOrigin
public class Controller{
	
	
	@Autowired
	private playerService service;
	@Autowired
	private LeaderService sv;
	
	@PostMapping("/save-player")
	@Transactional
	public String registerPlayer(@RequestBody Player player) {
	service.savePlayer(player);
		
		return "dear "+player.getPlayerName() +" you are added successfully!!";
		
	}
	
	@GetMapping("/players")
	public Iterable<Player> getAllplayers(){
	
		return service.getAll();
	}
	
//	for leaderboard
	
	@PostMapping("/save-score")
	@Transactional
	public String leaderboardScore(@RequestBody Leaderboard ld) {
		
	sv.saveScore(ld);
		return "leaderboard updated";
		
	}
// for history
	@PostMapping("/save-status")
	public String hostory() {
		
		return "history-updated";
		
	}
	
	@GetMapping("/game-players")
	public Iterable<Leaderboard>getTournament(){
		return sv.getAll();
	}
	
	
	@GetMapping("/players/{username}")
	@Transactional
	public Iterable<Player> getRemaining(@PathVariable String username){
		return service.deleteByUsername(username);
	}
	
	@GetMapping("/search/{name}")
	public Player searchPlayer(@PathVariable String name) {
		return service.searchByPlayerName(name);
		
	}

}
