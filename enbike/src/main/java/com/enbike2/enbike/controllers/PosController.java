/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.enbike2.enbike.controllers;

import com.enbike2.enbike.models.Pos;
import com.enbike2.enbike.repositories.PosRepository;
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
@RequestMapping(path = "/pos")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
public class PosController {
    //variable de interfaz con el modelo
    @Autowired
    private PosRepository posService;
      //procedimiento consultar
    @GetMapping
    public ArrayList<Pos> findAll() {
        return (ArrayList<Pos>) posService.findAll();
    }
   //procedimiento consultar por id
    @GetMapping("/{id}")
    public Optional<Pos> findById(@PathVariable Integer id) {
        return posService.findById(id);
    }
       //procedimiento guardar
    @PostMapping
    public Pos save(@RequestBody Pos pos) {
        return posService.insert(pos);
    }
       //procedimiento eliminar por id
    @DeleteMapping("{id}")
    public void delete(@PathVariable Integer id) {
        posService.deleteById(id);
    }

}
