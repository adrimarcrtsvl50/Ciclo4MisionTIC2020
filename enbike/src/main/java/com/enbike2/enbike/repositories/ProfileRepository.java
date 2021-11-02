/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.enbike2.enbike.repositories;

import com.enbike2.enbike.models.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author adrim
 */
@Repository
public interface ProfileRepository extends MongoRepository<Profile, Integer> {
    
}
