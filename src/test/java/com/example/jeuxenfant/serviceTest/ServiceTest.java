package com.example.jeuxenfant.serviceTest;


import com.example.jeuxenfant.DTOs.ChoixDeType;
import com.example.jeuxenfant.DTOs.TypePrincipal;
import com.example.jeuxenfant.DTOs.UtilisateurDTO;
import com.example.jeuxenfant.services.ServiceJeuxEnfant;
import com.fasterxml.jackson.databind.type.TypeParser;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import java.lang.reflect.Type;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
public class ServiceTest {

    @InjectMocks
    ServiceJeuxEnfant serviceJeuxEnfant;
    String typeFransais;
    String typeChiffres;
    String typeApprendre;

    UtilisateurDTO utilisateurAvecTypeFrancais;
    UtilisateurDTO utilisateurAvecTypeApprendre;
    @BeforeEach
    void setup() {
        typeFransais = "FRANCAIS";
        typeChiffres = "CHIFFRES";
        typeApprendre = "APPRENDRE";

        utilisateurAvecTypeFrancais = serviceJeuxEnfant.saveTypePrincipe(typeFransais);
        utilisateurAvecTypeApprendre = serviceJeuxEnfant.saveType(typeApprendre);
    }

    @Test
    void typePrincipeHappyDayTest() throws Exception {
        // Arrange
        // Act
        // Assert
         assertThat(utilisateurAvecTypeFrancais.getTypePrincipal()).isEqualTo(TypePrincipal.FRANCAIS);
    }
    @Test
    void typeDeChoixHappyDayTest() throws Exception {
        // Arrange
        // Act
        // Assert
        assertThat(utilisateurAvecTypeApprendre.getType()).isEqualTo(ChoixDeType.APPRENDRE);
    }

    @Test
    void typePrincipeBadTest() throws Exception {
        // Arrange

        // Act
        UtilisateurDTO utilisateurAvecTypeChiffres = serviceJeuxEnfant.saveTypePrincipe(typeChiffres);
        // Assert
        assertThat(utilisateurAvecTypeFrancais.getTypePrincipal()).isNotEqualTo("");
        assertThat(utilisateurAvecTypeChiffres).isNotEqualTo(typeFransais);

    }

}

