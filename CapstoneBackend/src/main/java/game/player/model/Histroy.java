package game.player.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="history")
public class Histroy {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String teamName;
	private boolean play;
	private int score;
	private Date date;
	
	
	Histroy(){}
	public String getTeamName() {
		return teamName;
	}
	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}
	
	public Histroy(int id,String teamName, boolean play, int score, Date date) {
		super();
		this.id=id;
		this.teamName = teamName;
		this.play = play;
		this.score = score;
		this.date = date;
	}
	public boolean isPlay() {
		return play;
	}
	public void setPlay(boolean play) {
		this.play = play;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	

}
