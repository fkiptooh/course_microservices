package com.example.apigateway.controller;

import com.example.apigateway.model.Role;
import com.example.apigateway.repository.UserRepository;
import com.example.apigateway.security.UserPrincipal;
import com.example.apigateway.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/user")
public class UserController
{
    private final UserService userService;

    @Autowired
    private UserRepository userRepository;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PutMapping("change/{role}")
    public ResponseEntity<?> changeRole(@AuthenticationPrincipal UserPrincipal userPrincipal, @PathVariable Role role)
    {
        userService.updateUserRole(role, userPrincipal.getUsername());

        return ResponseEntity.ok(true);
    }

    @GetMapping()
    public ResponseEntity<?> getAllUsers()
    {
        return ResponseEntity.ok(userRepository.findAll());
    }
}
