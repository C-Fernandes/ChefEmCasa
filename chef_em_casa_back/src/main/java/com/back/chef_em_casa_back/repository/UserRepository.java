package com.back.chef_em_casa_back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.back.chef_em_casa_back.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User
        , String>{}
