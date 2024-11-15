package com.back.chef_em_casa_back.controller;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.back.chef_em_casa_back.dto.UserDTO;
import com.back.chef_em_casa_back.entity.User;
import com.back.chef_em_casa_back.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<List<User>> findAll() {
        try {
            List<User> users = userService.findAll();
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Collections.emptyList());
        }
    }

    @PostMapping("/registrar")
    public ResponseEntity<User> save(@RequestBody UserDTO userDTO) {
        try {
            User user = new User();
            user.setEmail(userDTO.email());
            user.setPassword(userDTO.password());
            user.setName(userDTO.name());
            User savedUser = userService.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); // ou e.getMessage()
        }
    }

    @GetMapping("/{email}")
    public ResponseEntity<Optional<User>> findById(@RequestParam String email) {
        try {
            Optional<User> user = userService.findById(email);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Optional.empty());
        }
    }
}
