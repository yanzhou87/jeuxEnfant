package com.example.jeuxenfant.services;

import com.example.jeuxenfant.DTOs.*;
import com.example.jeuxenfant.models.MonNombre;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
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

    public ListChiffreEnMot getList(MonNombreDTO nombre){

        List<String> maListChiffreEnMot = new ArrayList<>();
        maListChiffreEnMot.add("Un");
        maListChiffreEnMot.add("Deux");
        maListChiffreEnMot.add("Trois");
        maListChiffreEnMot.add("Quatre");
        maListChiffreEnMot.add("Cinq");
        maListChiffreEnMot.add("Six");
        maListChiffreEnMot.add("Sept");
        maListChiffreEnMot.add("Huit");
        maListChiffreEnMot.add("Neuf");
        maListChiffreEnMot.add("Dix");
        maListChiffreEnMot.add("Onze");
        maListChiffreEnMot.add("Douze");
        maListChiffreEnMot.add("Treize");
        maListChiffreEnMot.add("Quatorze");
        maListChiffreEnMot.add("Quinze");
        maListChiffreEnMot.add("Seize");
        maListChiffreEnMot.add("Dix-sept");
        maListChiffreEnMot.add("Dix-huit");
        maListChiffreEnMot.add("Dix-neuf");
        maListChiffreEnMot.add("Vingt");

        if (nombre.getMin() == 0 && nombre.getMax() == 0){
            return new ListChiffreEnMot(maListChiffreEnMot);
        }

        if(nombre.getMax() > maListChiffreEnMot.size()-1 || nombre.getMin() < 0){
            return new ListChiffreEnMot(maListChiffreEnMot);
        } else {
            List<String> nouvelList = new ArrayList<>();
            for(int i = nombre.getMin(); i <= nombre.getMax(); i++){
                nouvelList.add(maListChiffreEnMot.get(i));
            }
            return new ListChiffreEnMot(nouvelList);
        }
    }
}
