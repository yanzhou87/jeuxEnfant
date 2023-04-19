package com.example.jeuxenfant.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ListChiffreEnMot {
    private List<String> maListChiffreEnMot = new ArrayList<>();
}
