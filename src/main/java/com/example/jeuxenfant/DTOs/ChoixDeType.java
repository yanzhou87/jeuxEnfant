package com.example.jeuxenfant.DTOs;

public enum ChoixDeType {
    APPRENDRE,JEUX,DEFAUT;

    public static ChoixDeType findChoixDeType(String type) {
        for(ChoixDeType cdt : ChoixDeType.values()) {
            if (cdt.toString().equals(type.toUpperCase()))
                return cdt;
        }
        return null;
    }
}
