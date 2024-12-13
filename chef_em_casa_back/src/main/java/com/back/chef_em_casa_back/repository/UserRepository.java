package com.back.chef_em_casa_back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.back.chef_em_casa_back.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

        public Object findByEmail(String email);
}
