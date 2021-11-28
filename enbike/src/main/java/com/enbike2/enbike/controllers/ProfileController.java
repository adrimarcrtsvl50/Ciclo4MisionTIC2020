/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.enbike2.enbike.controllers;

import com.enbike2.enbike.models.Profile;
import com.enbike2.enbike.repositories.ProfileRepository;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author adrim
 */
@RestController
@RequestMapping(path = "/profiles")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
public class ProfileController {
    //variable de interfaz con el modelo
     @Autowired
    private ProfileRepository profileService;
     //procedimiento consultar
    @GetMapping
    public ArrayList<Profile> findAll() {
        return (ArrayList<Profile>) profileService.findAll();
    }
 //procedimiento consultar por id
    @GetMapping("{id}")
    public Optional<Profile> findById(@PathVariable String id) {
        return profileService.findById(id);
    }
     //procedimiento guardar
    @PostMapping
    public Profile save(@RequestBody Profile profile) {
        return profileService.insert(profile);
    }
 //procedimiento eliminar por id
    @DeleteMapping("{id}")
    public void delete(@PathVariable String id) {
        profileService.deleteById(id);
    }
    
    @PutMapping ("/{id}")
    public Profile modify(@PathVariable String id, @RequestBody Profile profile) {
        return profileService.save(profile);
    }
}
