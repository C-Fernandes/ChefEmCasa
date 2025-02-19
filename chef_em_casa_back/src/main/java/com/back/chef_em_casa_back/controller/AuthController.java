package com.back.chef_em_casa_back.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.back.chef_em_casa_back.dto.AuthRequestDTO;
import com.back.chef_em_casa_back.dto.UserDTO;
import com.back.chef_em_casa_back.entity.User;
import com.back.chef_em_casa_back.service.UserService;
import com.back.chef_em_casa_back.utils.JwtUtil;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtTokenUtil;
    private final UserDetailsService userDetailsService;
    @Autowired
    private PasswordEncoder passwordEncoder; // Injeção do PasswordEncoder
    private UserService userService;

    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtTokenUtil,
            UserDetailsService userDetailsService, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userDetailsService = userDetailsService;
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequestDTO authRequest) {
        try {
            System.out.println(authRequest.password() + authRequest.email());
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.email(), authRequest.password()));

            // Carrega os detalhes do usuário
            final UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.email());

            // Gera o token
            final String token = jwtTokenUtil.generateToken(userDetails);
            System.out.println("Token gerado: " + token);

            // Retorna o token e o e-mail do usuário
            Map<String, Object> response = new HashMap<>();
            response.put("token", token);
            response.put("email", authRequest.email());

            return ResponseEntity.ok(response);
        } catch (UsernameNotFoundException e) {
            System.err.println("Erro: Usuário não encontrado");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário não encontrado");
        } catch (BadCredentialsException e) {
            System.err.println("Erro: Credenciais inválidas");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
        } catch (Exception e) {
            System.err.println("Erro desconhecido: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro no servidor");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<User> save(@RequestBody UserDTO userDTO) {
        try {
            User user = new User();
            user.setEmail(userDTO.email());

            user.setPassword(passwordEncoder.encode(userDTO.password()));

            user.setName(userDTO.name());
            user.setBirthDate(userDTO.birthDate());
            User savedUser = userService.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); // ou e.getMessage()
        }
    }

}
