package com.example.jeuxenfant.services;

import com.example.jeuxenfant.DTOs.MonNombreDTO;
import com.example.jeuxenfant.DTOs.TypePrincipal;
import com.example.jeuxenfant.DTOs.UtilisateurDTO;
import com.example.jeuxenfant.DTOs.ChoixDeType;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class ServiceJeuxEnfant {
    UtilisateurDTO utilisateurDTO = new UtilisateurDTO();
    public UtilisateurDTO saveType(String type){
        final ChoixDeType choixDeType = ChoixDeType.findChoixDeType(type);
        if (choixDeType != null) {
            return new UtilisateurDTO(choixDeType);
        }
        return null;
    }

    public UtilisateurDTO saveTypePrincipe(String type){
        final TypePrincipal typePrincipal = TypePrincipal.findTypePrincipal(type);
        if(typePrincipal != null){
            return new UtilisateurDTO(typePrincipal);
        }
        return null;
    }

    public MonNombreDTO changeNombre(int max, int min) {
        this.utilisateurDTO.setNombre(new MonNombreDTO(max, min));
        return utilisateurDTO.getNombre();
    }

    public UtilisateurDTO getRepondre() {
        Random random = new Random();
        utilisateurDTO.setRepondre(random.nextInt(3) + 1);
        return utilisateurDTO;
    }
}
