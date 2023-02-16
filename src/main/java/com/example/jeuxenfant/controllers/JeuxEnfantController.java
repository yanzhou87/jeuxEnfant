package com.example.jeuxenfant.controllers;

import com.example.jeuxenfant.services.ServiceJeuxEnfant;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class JeuxEnfantController {

    private ServiceJeuxEnfant serviceJeuxEnfant;

    public JeuxEnfantController(ServiceJeuxEnfant serviceJeuxEnfant) {
        this.serviceJeuxEnfant = serviceJeuxEnfant;
    }

    @GetMapping("/menu/{type}")
    public ResponseEntity<String> getLaPageChiffres(@PathVariable String type) {
        try{
            if(type != null){
                String typeRetourne = serviceJeuxEnfant.saveType(type.toLowerCase()).getType().toString();
                return ResponseEntity.ok(typeRetourne);
            }
        }catch (Exception message){
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>("DEFAUT", HttpStatus.OK);
    }
}
