package com.saas.saas_api.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "empresas")
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Empresa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String nombre;

    private String cif; // Código de Identificación Fiscal

    // AÑADE ESTO:
    @OneToMany(mappedBy = "empresa", cascade = CascadeType.ALL)
    @JsonIgnore //  Esto evita que Swagger entre en bucle infinito
    private List<Producto> productos;

}