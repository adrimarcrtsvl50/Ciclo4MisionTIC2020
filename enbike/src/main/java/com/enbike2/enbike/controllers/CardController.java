/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.enbike2.enbike.controllers;

import com.enbike2.enbike.models.Card;
import com.enbike2.enbike.repositories.CardRepository;
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
@RequestMapping(path = "/cards")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
public class CardController {
    
    //variable de interfaz con el modelo
    @Autowired
    private CardRepository cardService;
    //procedimiento consultar
    @GetMapping
    public ArrayList<Card> findAll() {
        return (ArrayList<Card>) cardService.findAll();
    }
 //procedimiento consultar por id
    @GetMapping("/{id}")
    public Optional<Card> findById(@PathVariable String id) {
        return cardService.findById(id);
    }
     //procedimiento guardar
    @PostMapping
    public Card save(@RequestBody Card card) {
        return cardService.insert(card);
    }
     //procedimiento eliminar por id
    @DeleteMapping("{id}")
    public void delete(@PathVariable String id) {
        cardService.deleteById(id);
    }
    
    @PutMapping ("/{id}")
    public Card modify(@PathVariable String id, @RequestBody Card card) {
        return cardService.save(card);
    }

}
