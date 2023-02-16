package com.example.jeuxenfant.serviceTest;


import com.example.jeuxenfant.DTOs.ChoixDeTypeDTO;
import com.example.jeuxenfant.DTOs.UtilisateurDTO;
import com.example.jeuxenfant.services.ServiceJeuxEnfant;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
public class ServiceTest {

    @InjectMocks
    ServiceJeuxEnfant serviceJeuxEnfant;
    String typeFransais;
    String typeChiffres;

    UtilisateurDTO utilisateurAvecTypeFrancais;
    @BeforeEach
    void setup() {
        typeFransais = "FRANCAIS";
        typeChiffres = "CHIFFRES";
        utilisateurAvecTypeFrancais = serviceJeuxEnfant.saveType(typeFransais);
    }

    @Test
    void typeDeChoixHappyDayTest() throws Exception {
        // Arrange
        // Act
        // Assert
        assertThat(utilisateurAvecTypeFrancais.getType()).isEqualTo(ChoixDeTypeDTO.FRANCAIS);
    }

    @Test
    void typeDeChoixBadTest() throws Exception {
        // Arrange

        // Act
        UtilisateurDTO utilisateurAvecTypeChiffres = serviceJeuxEnfant.saveType(typeChiffres);
        // Assert
        assertThat(utilisateurAvecTypeFrancais.getType()).isNotEqualTo("");
        assertThat(utilisateurAvecTypeChiffres).isNotEqualTo(typeFransais);

    }

}

