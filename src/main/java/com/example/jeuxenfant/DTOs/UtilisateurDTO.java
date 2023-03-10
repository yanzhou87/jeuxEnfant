package com.example.jeuxenfant.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UtilisateurDTO {

    private ChoixDeType type;
    private TypePrincipal typePrincipal;

    private int nombreMax = 10;
    private int nombreMin = 0;
    public UtilisateurDTO(ChoixDeType type) {
        this.type = type;
    }

    public UtilisateurDTO(TypePrincipal typePrincipal) {
        this.typePrincipal = typePrincipal;
    }
}
