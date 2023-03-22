package com.example.jeuxenfant.controllerTest;


import com.example.jeuxenfant.DTOs.ChoixDeType;
import com.example.jeuxenfant.DTOs.MonNombreDTO;
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
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class ControllerTest {
    private static final String PAGE_CHIFFRES_URL = "/menu/{type}";
    private static final String PAGE_PRINCIPAL_URL = "/menu";
    private static final String NOMBRE_URL = "/nombre";
    private static final String REPONDRE_URL = "/repondre";
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
        String type = "chiffres";// CHIFFRES,FRANCAIS,
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
    void testPagePrincipaleUrlNotFound() throws Exception {

        mockMvc.perform(get("/menue"))
                .andExpect(status().isNotFound());
    }
    @Test
    void testPagePrincipalParamettreBadRequest() throws Exception {
        String mauvaisType = "mauvaisType";
        mockMvc.perform(MockMvcRequestBuilders.put(PAGE_PRINCIPAL_URL)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mauvaisType))
                .andExpect(status().isBadRequest());
    }
    @Test
    void testMenuParametreHappyDay()throws Exception{
        // Arrange
        final UtilisateurDTO utilisateurDTO = new UtilisateurDTO(ChoixDeType.APPRENDRE);
        String typeDeChoix = "apprendre";
        when(serviceJeuxEnfant.saveType(typeDeChoix)).thenReturn(utilisateurDTO);

        // Act-Assert
        mockMvc.perform(MockMvcRequestBuilders.get(PAGE_CHIFFRES_URL, typeDeChoix))
                .andExpect(status().isOk());
    }
    @Test
    void testMenuParametreBadRequest()throws Exception{
        String typeDeChoix = "chiffres";
        mockMvc.perform(MockMvcRequestBuilders.get(PAGE_CHIFFRES_URL, typeDeChoix))
                .andExpect(status().isBadRequest());
    }
    @Test
    void testMenuUrlNotFound() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders.get("/menue","dd"))
                .andExpect(status().isNotFound());
    }

    @Test
    void testMonNombreHappyDay()throws Exception{
        // Arrange
        final UtilisateurDTO utilisateurDTO = new UtilisateurDTO();
        final MonNombreDTO monNombreDTO = new MonNombreDTO();
        ObjectMapper objectMapper = new ObjectMapper();
        monNombreDTO.setMax(10);
        monNombreDTO.setMin(0);
        utilisateurDTO.setNombre(monNombreDTO);

        when(serviceJeuxEnfant.changeNombre(10,0)).thenReturn(utilisateurDTO.getNombre());
        // Act-Assert
        mockMvc.perform(
                        MockMvcRequestBuilders.put(NOMBRE_URL)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(objectMapper.writeValueAsString(monNombreDTO)))
                .andExpect(status().isOk());
    }

    @Test
    void testMonNombreBadRequest()throws Exception{
        // Arrange
        final MonNombreDTO monNombreDTO = new MonNombreDTO();
        ObjectMapper objectMapper = new ObjectMapper();
        monNombreDTO.setMax(0);
        monNombreDTO.setMin(9);

        // Act-Assert
        mockMvc.perform(
                        MockMvcRequestBuilders.put(NOMBRE_URL)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(objectMapper.writeValueAsString(monNombreDTO)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void testRepondreHappyDay()throws Exception{
        // Arrange
        final UtilisateurDTO utilisateurDTO = new UtilisateurDTO();
        utilisateurDTO.setRepondre(2);
        when(serviceJeuxEnfant.getRepondre()).thenReturn(utilisateurDTO);
        // Act-Assert
        mockMvc.perform(MockMvcRequestBuilders.get(REPONDRE_URL))
                .andExpect(status().isOk());
    }

    @Test
    void testRepondreUrlNotFound()throws Exception{
        mockMvc.perform(MockMvcRequestBuilders.get("/reponddre"))
                .andExpect(status().isNotFound());
    }
}
