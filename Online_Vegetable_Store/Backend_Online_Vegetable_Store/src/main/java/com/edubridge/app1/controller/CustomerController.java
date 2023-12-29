package com.edubridge.app1.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.app1.model.Customer;
import com.edubridge.app1.service.CustomerService;

import jakarta.annotation.PostConstruct;

@CrossOrigin(origins="http://localhost:4200/")
@RestController
@RequestMapping("/api")
public class CustomerController{
	
	@Autowired
	private CustomerService customerService;
	
	@PostConstruct
    public void initRoleAndUser() {
        customerService.initCustomer();
    }

    @PostMapping({"/customer"})
    public ResponseEntity<Customer> registerNewUser(@RequestBody Customer customer) {
        Customer newCustomer=customerService.registerNewUser(customer);
		return new ResponseEntity<>(newCustomer,HttpStatus.CREATED);
    }

    @GetMapping("/customer")
	public ResponseEntity<?> getAllCustomers(){
		List<Customer> custList = customerService.getCustomers();
		return new ResponseEntity<> (custList,HttpStatus.OK);
	}
	
	
	
	
	
}