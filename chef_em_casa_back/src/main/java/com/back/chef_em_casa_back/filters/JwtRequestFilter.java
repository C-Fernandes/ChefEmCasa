package com.back.chef_em_casa_back.filters;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.back.chef_em_casa_back.service.UserService;
import com.back.chef_em_casa_back.utils.JwtUtil;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService; // Certifique-se de ter um serviço que carregue os usuários

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {
        final String authorizationHeader = request.getHeader("Authorization");

        String username = null;
        String jwt = null;

        // Verifica se o token JWT está no cabeçalho de autorização
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7);
            username = jwtUtil.extractUsername(jwt);
        }

        // Verifica se o username não é nulo e se ainda não há autenticação no contexto
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            // Carrega os detalhes do usuário (UserDetails)
            UserDetails userDetails = userService.loadUserByUsername(username);

            // Valida o token JWT
            if (jwtUtil.validateToken(jwt, userDetails)) {
                // Cria o objeto de autenticação
                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());

                // Configura detalhes adicionais da autenticação
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                // Define a autenticação no contexto de segurança
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
        }

        // Continua o fluxo da cadeia de filtros
        chain.doFilter(request, response);
    }
}
