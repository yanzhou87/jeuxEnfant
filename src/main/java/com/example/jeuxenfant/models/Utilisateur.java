package com.example.jeuxenfant.models;

import com.example.jeuxenfant.DTOs.ChoixDeType;
import com.example.jeuxenfant.DTOs.TypePrincipal;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Utilisateur{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private ChoixDeType type;
    private TypePrincipal typePrincipal;
    private int reponse;

}
