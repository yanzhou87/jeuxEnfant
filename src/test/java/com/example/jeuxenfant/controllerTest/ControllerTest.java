package com.example.jeuxenfant.controllerTest;


import com.example.jeuxenfant.DTOs.ChoixDeType;
import com.example.jeuxenfant.DTOs.TypePrincipal;
import com.example.jeuxenfant.DTOs.UtilisateurDTO;
import com.example.jeuxenfant.controllers.JeuxEnfantController;
import com.example.jeuxenfant.services.ServiceJeuxEnfant;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class ControllerTest {
    private static final String PAGE_CHIFFRES_URL = "/menu/{type}";
    private static final String PAGE_PRINCIPAL_URL = "/menu";
    MockMvc mockMvc;

    @InjectMocks
    JeuxEnfantController jeuxEnfantController;
    @Mock
    ServiceJeuxEnfant serviceJeuxEnfant;

    JacksonTester<UtilisateurDTO> utilisateurDTOJacksonTester ;

    @BeforeEach
    void setup() {
       // CHIFFRES,FRANCAIS,APPRENDRE,JEUX,DEFAUT
        JacksonTester.initFields(this, new ObjectMapper());
        mockMvc = MockMvcBuilders.standaloneSetup(jeuxEnfantController).build();
    }
    @Test
    void testPagePrincipeHappyDay()throws Exception{
        // Arrange
        String type = "chiffres";
        UtilisateurDTO utilisateurDTO = new UtilisateurDTO();
        utilisateurDTO.setType(ChoixDeType.DEFAUT);
        when(serviceJeuxEnfant.saveTypePrincipe(type)).thenReturn(utilisateurDTO);

        // Act
        ResponseEntity<UtilisateurDTO> response = jeuxEnfantController.getTypePrincipal(type);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(utilisateurDTO, response.getBody());

    }
    @Test
    void testParametreHappyDay()throws Exception{
        // Arrange
        final UtilisateurDTO utilisateurDTO = new UtilisateurDTO(TypePrincipal.CHIFFRES);
        String typeDeChoix = "chiffres";
        when(serviceJeuxEnfant.saveType("chiffres")).thenReturn(utilisateurDTO);

        // Act-Assert
        mockMvc.perform(MockMvcRequestBuilders.get(PAGE_CHIFFRES_URL, typeDeChoix))
                .andExpect(status().isOk());
    }

    @Test
    void testCreateEtudiantBadRequest() throws Exception {

        mockMvc.perform(get("/menus"))
                .andExpect(status().isNotFound());
    }

    @Test
    void testCreateEtudiantUrlNotFound() throws Exception {

        mockMvc.perform(get("/menue"))
                .andExpect(status().isNotFound());
    }
}
