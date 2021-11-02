/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.enbike2.enbike.controllers;

import com.enbike2.enbike.models.Rent;
import com.enbike2.enbike.repositories.RentRepository;
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
@RequestMapping(path = "/rents")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
public class RentController {
    //variable de interfaz con el modelo

    @Autowired
    private RentRepository rentService;
    //procedimiento consultar

    @GetMapping
    public ArrayList<Rent> findAll() {
        return (ArrayList<Rent>) rentService.findAll();
    }
    //procedimiento consultar por id

    @GetMapping("/{id}")
    public Optional<Rent> findById(@PathVariable Integer id) {
        return rentService.findById(id);
    }
    //procedimiento guardar

    @PostMapping
    public Rent save(@RequestBody Rent rent) {
        return rentService.insert(rent);
    }
    //procedimiento eliminar por id

    @DeleteMapping("{id}")
    public void delete(@PathVariable Integer id) {
        rentService.deleteById(id);
    }

}
