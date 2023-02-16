package com.example.jeuxenfant.controllerTest;


import ch.qos.logback.core.joran.event.SaxEventRecorder;

import com.example.jeuxenfant.DTOs.ChoixDeTypeDTO;
import com.example.jeuxenfant.DTOs.UtilisateurDTO;
import com.example.jeuxenfant.controllers.JeuxEnfantController;
import com.example.jeuxenfant.services.ServiceJeuxEnfant;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class ControllerTest {
    private static final String PAGE_CHIFFRES_URL = "/menu/{type}";
    MockMvc mockMvc;

    @InjectMocks
    JeuxEnfantController jeuxEnfantController;
    @Mock
    ServiceJeuxEnfant serviceJeuxEnfant;

    JacksonTester<UtilisateurDTO> utilisateurDTOJacksonTester ;
    UtilisateurDTO utilisateurDTO = new UtilisateurDTO();
    @BeforeEach
    void setup() {
       // CHIFFRES,FRANCAIS,APPRENDRE,JEUX,DEFAUT
        JacksonTester.initFields(this, new ObjectMapper());
        mockMvc = MockMvcBuilders.standaloneSetup(jeuxEnfantController).build();
    }
    @Test
    void testParametreHappyDay()throws Exception{
       /* utilisateurDTO.setType(ChoixDeTypeDTO.CHIFFRES);
        String typeDeChoix = "chiffres";
        when(serviceJeuxEnfant.saveType("CHIFFRES")).thenReturn(utilisateurDTO);
        mockMvc.perform(MockMvcRequestBuilders.get(PAGE_CHIFFRES_URL,typeDeChoix))
                .andExpect(status().isOk());*/
    }

    @Test
    void testCreateEtudiantBadRequest() throws Exception {

        mockMvc.perform(get("/menu"))
                .andExpect(status().isNotFound());
    }

    @Test
    void testCreateEtudiantUrlNotFound() throws Exception {

        mockMvc.perform(get("/menue"))
                .andExpect(status().isNotFound());
    }
}
