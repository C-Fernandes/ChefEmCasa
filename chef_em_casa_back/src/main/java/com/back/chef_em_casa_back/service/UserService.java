package com.back.chef_em_casa_back.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.back.chef_em_casa_back.entity.User;
import com.back.chef_em_casa_back.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User save(User user) {
        return userRepository.save(user);
    }


    public Optional<User> findById(String email){
        return userRepository.findById(email);
    }

}
