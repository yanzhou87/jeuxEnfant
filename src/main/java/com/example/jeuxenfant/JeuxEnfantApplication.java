package com.example.jeuxenfant;

import com.example.jeuxenfant.services.ServiceJeuxEnfant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JeuxEnfantApplication implements CommandLineRunner {

    @Autowired
    private ServiceJeuxEnfant serviceJeuxEnfant;
    public static void main(String[] args) {
        SpringApplication.run(JeuxEnfantApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

    }
}
