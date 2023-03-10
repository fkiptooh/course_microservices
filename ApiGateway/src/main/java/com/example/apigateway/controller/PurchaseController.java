package com.example.apigateway.controller;

import com.example.apigateway.request.PurchaseServiceRequest;
import com.example.apigateway.security.UserPrincipal;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("gateway/purchase")
public class PurchaseController
{
    private final PurchaseServiceRequest purchaseServiceRequest;

    public PurchaseController(PurchaseServiceRequest purchaseServiceRequest) {
        this.purchaseServiceRequest = purchaseServiceRequest;
    }

    @PostMapping
    public ResponseEntity<?> savePurchase(@RequestBody Object purchase)
    {
        return new ResponseEntity<>(purchaseServiceRequest.savePurchase(purchase), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getAllPurchasesOfAuthorizedUser(@AuthenticationPrincipal UserPrincipal userPrincipal)
    {
        return ResponseEntity.ok(purchaseServiceRequest.getAllPurchasesOfUser(userPrincipal.getId()));
    }
}
