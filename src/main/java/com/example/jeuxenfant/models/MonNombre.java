package com.example.jeuxenfant.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MonNombre {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private int max;
    private int min;
}
