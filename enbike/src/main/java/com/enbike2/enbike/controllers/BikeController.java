/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.enbike2.enbike.controllers;

import com.enbike2.enbike.models.Bike;
import com.enbike2.enbike.repositories.BikeRepository;
import java.util.ArrayList;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author adrim
 */
@RestController
@RequestMapping(path = "/bikes")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class BikeController {
    
    //variable de interfaz con el modelo
    @Autowired
    private BikeRepository bikeService;
    
    //procedimiento guardar
    @PostMapping
    public Bike save(@RequestBody Bike bike) {
        return bikeService.insert(bike);
    }
      //procedimiento consultar
     @GetMapping
    public ArrayList<Bike> findAll() {
        return (ArrayList<Bike>) bikeService.findAll();
    }
    //procedimiento consultar por id
    @GetMapping("/{id}")
    public Optional<Bike> findById(@PathVariable String id) {
        return bikeService.findById(id);
    }
    //procedimiento eliminar por id
     @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        bikeService.deleteById(id);
    }
    //procedimiento alctualizar por id
    @PutMapping ("/{id}")
    public Bike modify(@PathVariable String id, @RequestBody Bike bike) {
        return bikeService.save(bike);
    }

}
