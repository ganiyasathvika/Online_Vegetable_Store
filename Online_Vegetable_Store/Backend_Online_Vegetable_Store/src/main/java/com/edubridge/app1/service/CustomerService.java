package com.edubridge.app1.service;


import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.edubridge.app1.model.Customer;
import com.edubridge.app1.repo.CustomerRepository;

@Service
public class CustomerService{
	
	@Autowired
	private CustomerRepository customerRepo;
	

    public void initCustomer() {

        Customer adminCustomer = new Customer();
        adminCustomer.setCustomerName("admin123");
        adminCustomer.setCustomerEmail("admin@gmail.com");
        adminCustomer.setCustomerMobile(6789065436L);
        adminCustomer.setCustomerPassword("admin@123");
        customerRepo.save(adminCustomer);
    }

    public Customer registerNewUser(Customer customer) {

        return customerRepo.save(customer);
    }
    
    public List<Customer> getCustomers(){
    	return customerRepo.findAll();
    	}
	
	
}