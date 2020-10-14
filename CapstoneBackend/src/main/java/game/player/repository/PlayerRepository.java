package game.player.repository;

import org.springframework.data.repository.CrudRepository;

import game.player.model.Player;

public interface PlayerRepository extends CrudRepository<Player, Integer>{
	
public Iterable<Player> deleteByPlayerName(String username);
	public Player searchByPlayerName(String name);

}
