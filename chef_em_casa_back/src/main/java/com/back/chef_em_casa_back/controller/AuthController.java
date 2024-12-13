package com.back.chef_em_casa_back.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.back.chef_em_casa_back.dto.AuthRequestDTO;
import com.back.chef_em_casa_back.dto.AuthResponseDTO;
import com.back.chef_em_casa_back.utils.JwtUtil;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtTokenUtil;
    private final UserDetailsService userDetailsService;

    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtTokenUtil,
            UserDetailsService userDetailsService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userDetailsService = userDetailsService;
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

            // Retorna o token
            return ResponseEntity.ok(new AuthResponseDTO(token));
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

}
