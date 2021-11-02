/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.enbike2.enbike.controllers;

import com.enbike2.enbike.models.BillingAddress;
import com.enbike2.enbike.repositories.BillingAddressRepository;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author adrim
 */
@RestController
@RequestMapping(path = "/bill")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
public class BillingAddressController {
    //variable de interfaz con el modelo
    @Autowired
    private BillingAddressRepository billingAddressService;
    //procedimiento consultar
    @GetMapping
    public ArrayList<BillingAddress> findAll() {
        return (ArrayList<BillingAddress>) billingAddressService.findAll();
    }
     //procedimiento consultar por id
    @GetMapping("/{id}")
    public Optional<BillingAddress> findById(@PathVariable Integer id) {
        return billingAddressService.findById(id);
    }
    //procedimiento guardar
    @PostMapping
    public BillingAddress save(@RequestBody BillingAddress billingAddress) {
        return billingAddressService.insert(billingAddress);
    }
    //procedimiento eliminar por id
    @DeleteMapping("{id}")
    public void delete(@PathVariable Integer id) {
        billingAddressService.deleteById(id);
    }
}
            
            
