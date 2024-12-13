package com.back.chef_em_casa_back.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.back.chef_em_casa_back.entity.User;
import com.back.chef_em_casa_back.repository.UserRepository;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public Optional<User> findById(String email) {
        return userRepository.findById(email);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Aqui buscamos o usuário no banco de dados usando o email (username)
        User user = ((Optional<User>) userRepository.findByEmail(username))
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));

        // Criamos um objeto UserDetails com a classe User do Spring Security
        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getEmail()) // Define o email como username
                .password(user.getPassword()) // Define a senha
                .roles("USER") // Atribui o papel "USER", já que todos são usuários comuns
                .build();
    }

}
