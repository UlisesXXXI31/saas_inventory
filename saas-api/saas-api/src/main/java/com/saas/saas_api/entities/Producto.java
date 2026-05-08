package com.saas.saas_api.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "productos")
@Data
@NoArgsConstructo
@AllArgsConstructor
@Builder
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)

    @NotBlank(message = "El nombre del producto es obligatorio")
    @Size(min =3, message = "El nombre del producto debe tener al menos 3 caracteres")
    private String nombre;

    @NotBlank(message = "La descripción del producto es obligatoria")
    private String descripcion;

    @NotNull(message = "El precio del producto es obligatorio")
    @Min(value = 1, message = "El precio del producto no puede ser negativo")
    private Double precio;

    @NotNull(message = "El stock del producto es obligatorio")
    @Min(value = 0, message = "El stock del producto debe ser al menos 1")
    private Integer stock;

    // Relación con la empresa propietaria del producto
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "empresa_id", nullable = false)
    @JsonBackReference // Evita que al serializar el producto se vuelva a serializar la empresa
    private Empresa empresa; // Relación con la empresa propietaria del producto
}