package com.example.jeuxenfant.controllers;

import com.example.jeuxenfant.services.ServiceJeuxEnfant;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.jeuxenfant.DTOs.ChoixDeType;
import com.example.jeuxenfant.DTOs.UtilisateurDTO;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class JeuxEnfantController {

    private ServiceJeuxEnfant serviceJeuxEnfant;

    public JeuxEnfantController(ServiceJeuxEnfant serviceJeuxEnfant) {
        this.serviceJeuxEnfant = serviceJeuxEnfant;
    }

    @GetMapping("/menu/{type}")
    public ResponseEntity<UtilisateurDTO> getLaPageChiffres(@PathVariable String type) {
        try{
            if(type != null && serviceJeuxEnfant.saveType(type) != null){
                UtilisateurDTO utilisateurDTO = serviceJeuxEnfant.saveType(type);
                return ResponseEntity.ok(utilisateurDTO);
            }
            if(serviceJeuxEnfant.saveType(type) == null){
                return ResponseEntity.badRequest().build();
            }
        }catch (Exception message){
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(new UtilisateurDTO(ChoixDeType.DEFAUT), HttpStatus.OK);
    }

    @PutMapping("/menu")
    public ResponseEntity<UtilisateurDTO> getTypePrincipal(@RequestBody String type) {
        try{
            if(type != null && serviceJeuxEnfant.saveTypePrincipe(type) != null){
                UtilisateurDTO utilisateurDTO = serviceJeuxEnfant.saveTypePrincipe(type);
                return ResponseEntity.ok(utilisateurDTO);
            }
            if(serviceJeuxEnfant.saveTypePrincipe(type) == null){
                return ResponseEntity.badRequest().build();
            }
        }catch (Exception message){
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(new UtilisateurDTO(ChoixDeType.DEFAUT), HttpStatus.OK);
    }
}
