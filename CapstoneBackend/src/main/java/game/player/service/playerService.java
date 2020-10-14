package game.player.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import game.player.model.Player;
import game.player.repository.PlayerRepository;


@Service
public class playerService implements PlayerRepository{
	
	
	@Autowired
	private PlayerRepository repo;
	
	public playerService() {}

	public playerService(PlayerRepository repo) {
		super();
		this.repo = repo;
	}
	
	public void savePlayer(Player player) {
		repo.save(player);
	}
	public Iterable<Player>getAll(){
	return repo.findAll();
	}
	public Iterable<Player> deleteByUsername(String username){
		repo.deleteByPlayerName(username);
		return repo.findAll();
	}
	public Player searchByPlayerName(String playerName) {
		return repo.searchByPlayerName(playerName);
	}

	@Override
	public <S extends Player> S save(S entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Player> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Player> findById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean existsById(Integer id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<Player> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<Player> findAllById(Iterable<Integer> ids) {
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
	public void delete(Player entity) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll(Iterable<? extends Player> entities) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Iterable<Player> deleteByPlayerName(String username) {
		// TODO Auto-generated method stub
		return null;
	}


}
