package game.player.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import game.player.model.Leaderboard;
import game.player.repository.LeaderboardRepo;

@Service
public class LeaderService implements LeaderboardRepo {
	
	@Autowired
	public LeaderboardRepo sv;
//	public LeaderService() {
//		// TODO Auto-generated constructor stub
//	}
//	
//	
//	public LeaderService(LeaderboardRepo sv) {
//		super();
//		this.sv = sv;
//	}


	


	public void saveScore(Leaderboard ld) {
		sv.save(ld);
		
	}


	@Override
	public <S extends Leaderboard> S save(S entity) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public <S extends Leaderboard> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public Optional<Leaderboard> findById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public boolean existsById(Integer id) {
		// TODO Auto-generated method stub
		return false;
	}


	@Override
	public Iterable<Leaderboard> findAll() {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public Iterable<Leaderboard> findAllById(Iterable<Integer> ids) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}


	@Override
	public void deleteById(Integer id) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public void delete(Leaderboard entity) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public void deleteAll(Iterable<? extends Leaderboard> entities) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}


	public Iterable<Leaderboard> getAll() {
		return sv.findAll();
	}


}
