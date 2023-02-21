package com.example.jeuxenfant.DTOs;

public enum TypePrincipal {
    CHIFFRES,FRANCAIS;

    public static TypePrincipal findTypePrincipal(String type) {
        for(TypePrincipal cdt : TypePrincipal.values()) {
            if (cdt.toString().equals(type.toUpperCase()))
                return cdt;
        }
        return null;
    }
}
