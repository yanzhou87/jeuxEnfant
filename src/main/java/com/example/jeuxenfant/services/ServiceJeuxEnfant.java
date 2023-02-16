package com.example.jeuxenfant.services;

import com.example.jeuxenfant.DTOs.ChoixDeTypeDTO;
import com.example.jeuxenfant.DTOs.UtilisateurDTO;
import com.example.jeuxenfant.models.ChoixDeType;
import org.springframework.stereotype.Service;

@Service
public class ServiceJeuxEnfant {
    private UtilisateurDTO utilisateurCourrant = new UtilisateurDTO();

    public ServiceJeuxEnfant() {
    }

    public UtilisateurDTO saveType(String type){
        if(type.equals(ChoixDeTypeDTO.DEFAUT.toString())){
            this.utilisateurCourrant.setType(ChoixDeTypeDTO.DEFAUT);
        }
        if(type.equals(ChoixDeType.CHIFFRES.toString())){
            this.utilisateurCourrant.setType(ChoixDeTypeDTO.CHIFFRES);
        }
        if(type.equals(ChoixDeType.FRANCAIS.toString())){
            this.utilisateurCourrant.setType(ChoixDeTypeDTO.FRANCAIS);
        }
        if(type.equals(ChoixDeType.APPRENDRE.toString())){
            this.utilisateurCourrant.setType(ChoixDeTypeDTO.APPRENDRE);
        }
        if(type.equals(ChoixDeType.JEUX.toString())){
            this.utilisateurCourrant.setType(ChoixDeTypeDTO.JEUX);
        }

        return utilisateurCourrant;
    }
}
