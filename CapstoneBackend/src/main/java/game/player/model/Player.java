package game.player.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="player")
public class Player {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String teamName;
	private String playerName;
	
	private int playerAge;
	
	public Player() {}
	
	public Player(int id,String teamName, String playerName, int playerAge) {
		super();
		this.id=id;
		this.teamName = teamName;
		this.playerName = playerName;
		this.playerAge = playerAge;
		
	}
	
	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTeamName() {
		return teamName;
	}
	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}
	public String getPlayerName() {
		return playerName;
	}
	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}
	public int getPlayerAge() {
		return playerAge;
	}
	public void setPlayerAge(int playerAge) {
		this.playerAge = playerAge;
	}
	
	

}
