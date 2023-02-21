package com.example.jeuxenfant.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class UtilisateurDTO {

    private ChoixDeType type;
    private TypePrincipal typePrincipal;

    public UtilisateurDTO(ChoixDeType type) {
        this.type = type;
    }

    public UtilisateurDTO(TypePrincipal typePrincipal) {
        this.typePrincipal = typePrincipal;
    }
}
