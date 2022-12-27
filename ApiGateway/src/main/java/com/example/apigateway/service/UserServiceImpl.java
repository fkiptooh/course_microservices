package com.example.apigateway.service;

import com.example.apigateway.model.Role;
import com.example.apigateway.model.User;
import com.example.apigateway.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService
{
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    private final PasswordEncoder passwordEncoder;

    @Override
    public User saveUser(User user)
    {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        user.setCreatedTime(LocalDateTime.now());

        return userRepository.save(user);
    }


    @Override
    public Optional<User> findByUsername(String username)
    {
        return userRepository.findAllByUsername(username);
    }

    @Override
    @Transactional
    public void updateUserRole(Role newRole, String username)
    {
        userRepository.updateUserRole(username, newRole);
    }
}
