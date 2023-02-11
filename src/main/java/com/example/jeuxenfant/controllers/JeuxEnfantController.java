package com.example.jeuxenfant.controllers;

import com.example.jeuxenfant.models.ChoixDeType;
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

    @GetMapping("/chiffres")
    public ResponseEntity<String> getLaPageChiffres() {
        return new ResponseEntity<>(serviceJeuxEnfant.saveType(ChoixDeType.CHIFFRES).getType(), HttpStatus.OK);
    }

    @GetMapping("/francais")
    public ResponseEntity<String> getLapageFrancais() {
        return new ResponseEntity<>(serviceJeuxEnfant.saveType(ChoixDeType.FRANCAIS).getType(), HttpStatus.OK);
    }
}
