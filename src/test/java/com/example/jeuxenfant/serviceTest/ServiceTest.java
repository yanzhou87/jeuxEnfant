package com.example.jeuxenfant.serviceTest;


import com.example.jeuxenfant.DTOs.*;
import com.example.jeuxenfant.services.ServiceJeuxEnfant;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@ExtendWith(MockitoExtension.class)
public class ServiceTest {

    @InjectMocks
    ServiceJeuxEnfant serviceJeuxEnfant;
    String typeFransais;
    String typeChiffres;
    String typeApprendre;

    String typeJeux;
    UtilisateurDTO utilisateurAvecTypeFrancais;
    UtilisateurDTO utilisateurAvecTypeChiffres;
    UtilisateurDTO utilisateurAvecTypeApprendre;

    @BeforeEach
    void setup() {
        typeFransais = "FRANCAIS";
        typeChiffres = "CHIFFRES";
        typeApprendre = "APPRENDRE";
        typeJeux = "JEUX";

        utilisateurAvecTypeFrancais = serviceJeuxEnfant.saveTypePrincipe(typeFransais);
        utilisateurAvecTypeChiffres = serviceJeuxEnfant.saveTypePrincipe(typeChiffres);
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
    @Test
    void typeDeChoixBadTest() throws Exception {
        // Arrange
        // Act
        UtilisateurDTO utilisateurAvecTypeJeux = serviceJeuxEnfant.saveType(typeJeux);
        // Assert
        assertThat(utilisateurAvecTypeFrancais.getType()).isNotEqualTo("");
        assertThat(utilisateurAvecTypeApprendre.getType()).isEqualTo(ChoixDeType.APPRENDRE);
    }

    @Test
    void changeNombreHappyDayTest() throws Exception {
        // Arrange
        UtilisateurDTO utilisateurDTO = new UtilisateurDTO();
        // Act
        MonNombreDTO monNombreDTO = serviceJeuxEnfant.changeNombre(30,10);
        utilisateurDTO.setNombre(monNombreDTO);
        // Assert
        assertThat(utilisateurDTO.getNombre().getMax()).isEqualTo(30);
        assertThat(utilisateurDTO.getNombre().getMin()).isEqualTo(10);
    }

    @Test
    void changeNombreBadTest() throws Exception {
        // Arrange
        UtilisateurDTO utilisateurDTO = new UtilisateurDTO();
        // Act
        MonNombreDTO monNombreDTO = serviceJeuxEnfant.changeNombre(30,10);
        utilisateurDTO.setNombre(monNombreDTO);
        // Assert
        assertThat(utilisateurDTO.getNombre().getMax()).isNotEqualTo(10);
        assertThat(utilisateurDTO.getNombre().getMin()).isNotEqualTo(30);
    }


    @Test
    void getRepondreHappyDayTest() throws Exception {
        // Arrange
        UtilisateurDTO utilisateurDTO = new UtilisateurDTO();
        // Act
        utilisateurDTO = serviceJeuxEnfant.getRepondre();

        // Assert
        if(utilisateurDTO.getRepondre() == 1){
            assertThat(utilisateurDTO.getRepondre()).isEqualTo(1);
        }
        if(utilisateurDTO.getRepondre() == 2){
            assertThat(utilisateurDTO.getRepondre()).isEqualTo(2);
        }
        if(utilisateurDTO.getRepondre() == 3){
            assertThat(utilisateurDTO.getRepondre()).isEqualTo(3);
        }
    }

    @Test
    void getRepondreBadTest() throws Exception {
        // Arrange
        UtilisateurDTO utilisateurDTO = new UtilisateurDTO();
        // Act
        utilisateurDTO = serviceJeuxEnfant.getRepondre();

        // Assert
        assertThat(utilisateurDTO.getRepondre()).isNotEqualTo(4);


    }

    @Test
    void getListChiffreEnMotHappyDayTest() throws Exception {
        // Arrange
        final MonNombreDTO monNombreDTO = new MonNombreDTO();
        monNombreDTO.setMax(0);
        monNombreDTO.setMin(0);

        // Act
        ListChiffreEnMot listChiffreEnMot = serviceJeuxEnfant.getList(monNombreDTO);

        // Assert
        assertThat(listChiffreEnMot.getMaListChiffreEnMot().size()).isEqualTo(20);
    }

    @Test
    void getListChiffreEnMotBadTest() throws Exception {
        final MonNombreDTO monNombreDTO = new MonNombreDTO();
        monNombreDTO.setMax(-1);
        monNombreDTO.setMin(0);
        // Act
        ListChiffreEnMot listChiffreEnMot = serviceJeuxEnfant.getList(monNombreDTO);

        // Assert
        assertThat(listChiffreEnMot.getMaListChiffreEnMot().size()).isNotEqualTo(20);
    }
}

