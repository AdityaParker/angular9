package game.player.repository;

import org.springframework.data.repository.CrudRepository;

import game.player.model.Leaderboard;

public interface LeaderboardRepo extends CrudRepository<Leaderboard, Integer> {


}
