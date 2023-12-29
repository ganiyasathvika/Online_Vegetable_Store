package com.edubridge.app1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.app1.model.VeggiesHub;
import com.edubridge.app1.service.VeggiesHubService;
@CrossOrigin(origins="http://localhost:4200/")
@RestController
@RequestMapping("/api")
public class VeggiesHubController{
	
	@Autowired
	private VeggiesHubService service;
	
	
	@PostMapping("/veggieshub")
	public ResponseEntity<VeggiesHub> save(@RequestBody VeggiesHub veg){
		VeggiesHub savedVeggiesHub = service.saveVeggie(veg);
		return new ResponseEntity<>(savedVeggiesHub,HttpStatus.CREATED);
	}
	
	@GetMapping("/veggieshub")
	public ResponseEntity<?> getAllVeggies(){
		List<VeggiesHub> vegList = service.getVeggies();
		return new ResponseEntity<> (vegList,HttpStatus.OK);
	}
	
	@GetMapping("/veggieshub/{id}")
	public ResponseEntity<?> getSingleVeggie(@PathVariable Integer id){
		VeggiesHub veg = service.getVeggie(id);
		return new ResponseEntity<> (veg,HttpStatus.OK);
	}
	
	@PutMapping("/veggieshub")
	public ResponseEntity<VeggiesHub> update(@RequestBody VeggiesHub veg){
		 service.saveVeggie(veg);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/veggieshub/{id}")
	public ResponseEntity<VeggiesHub> delete(@PathVariable Integer id){
		 service.deleteVeggie(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}