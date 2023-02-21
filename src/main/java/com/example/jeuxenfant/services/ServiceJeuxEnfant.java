package com.example.jeuxenfant.services;

import com.example.jeuxenfant.DTOs.TypePrincipal;
import com.example.jeuxenfant.DTOs.UtilisateurDTO;
import com.example.jeuxenfant.DTOs.ChoixDeType;
import org.springframework.stereotype.Service;

@Service
public class ServiceJeuxEnfant {
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
}
