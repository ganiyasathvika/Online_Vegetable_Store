package com.edubridge.app1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.app1.model.VeggiesHub;
import com.edubridge.app1.repo.VeggiesHubRepository;
@Service
public class VeggiesHubService{
	
	@Autowired
	private VeggiesHubRepository repo;
	
	public VeggiesHub saveVeggie(VeggiesHub veg) {
		 return repo.save(veg);
	}
	
	public List<VeggiesHub> getVeggies(){
	return repo.findAll();
	}
	
	public VeggiesHub getVeggie(Integer id) {
		return repo.findById(id).get();
		}
	
	public void updateVeggies(VeggiesHub veg) {
		repo.save(veg);
	}
	
	public void deleteVeggie(Integer id) {
		repo.deleteById(id);
	}
}