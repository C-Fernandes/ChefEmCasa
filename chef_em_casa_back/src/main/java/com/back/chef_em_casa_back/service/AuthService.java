package com.back.chef_em_casa_back.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.back.chef_em_casa_back.entity.User;
import com.back.chef_em_casa_back.repository.UserRepository;
@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    public boolean authenticate(String email, String password) {
        Optional<User> user = userRepository.findById(email);
        return user.isPresent() && user.get().getPassword().equals(password);
    }
}