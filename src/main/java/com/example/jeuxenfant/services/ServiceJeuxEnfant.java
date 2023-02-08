package com.example.jeuxenfant.services;

import com.example.jeuxenfant.DTOs.UtilisateurDTO;
import com.example.jeuxenfant.models.Utilisateur;
import org.springframework.stereotype.Service;

@Service
public class ServiceJeuxEnfant {
    private UtilisateurDTO utilisateurCourrant;

    public UtilisateurDTO saveType(String type){
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setType(type);
        this.utilisateurCourrant.setType(utilisateur.getType());
        this.utilisateurCourrant.setReponse(utilisateur.getReponse());
        return utilisateurCourrant;
    }

}
