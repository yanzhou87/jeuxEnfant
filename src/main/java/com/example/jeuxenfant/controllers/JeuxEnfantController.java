package com.example.jeuxenfant.controllers;

import com.example.jeuxenfant.DTOs.ListChiffreEnMot;
import com.example.jeuxenfant.DTOs.MonNombreDTO;
import com.example.jeuxenfant.models.MonNombre;
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
    public ResponseEntity<UtilisateurDTO> getLaPageApprendre(@PathVariable String type) {
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

    @PutMapping("/nombre")
    public ResponseEntity<MonNombreDTO> getNombreMax(@RequestBody MonNombre nombre) {
        try{
           if (nombre.getMin() < nombre.getMax()){
               MonNombreDTO monNombre = serviceJeuxEnfant.changeNombre(nombre.getMax(), nombre.getMin());
               return new ResponseEntity<>(monNombre, HttpStatus.OK);
           }
        }catch (Exception message){
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/repondre")
    public ResponseEntity<UtilisateurDTO> getRepondre() {
        try{
            UtilisateurDTO utilisateurDTO = serviceJeuxEnfant.getRepondre();
            return new ResponseEntity<>(utilisateurDTO, HttpStatus.OK);
        }catch (Exception message){
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/meschiffreenmot")
    public ResponseEntity<ListChiffreEnMot> getMesChiffreEnMot(@RequestBody MonNombreDTO nombre) {
        System.out.println("mot");
        if (nombre.getMax() < 0 || nombre.getMin() < 0){
            return ResponseEntity.badRequest().build();
        }
        try{
            ListChiffreEnMot listChiffreEnMot = serviceJeuxEnfant.getList(nombre);
            System.out.println(listChiffreEnMot);
            return new ResponseEntity<>(listChiffreEnMot, HttpStatus.OK);
        }catch (Exception message){
            return ResponseEntity.notFound().build();
        }
    }
}
