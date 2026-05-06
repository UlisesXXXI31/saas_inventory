package com.saas.saas_api.controllers;

import com.saas.saas_api.entities.Producto;
import com.saas.saas_api.services.ProductoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/productos")
@RequiredArgsConstructor
@CrossOrigin(origins = "https://saas-inventory-1.onrender.com") // Permite que React se conecte sin bloqueos de seguridad
public class ProductoController {

    private final ProductoService productoService;

    // Obtener todos los productos de una empresa específica
    @GetMapping("/empresa/{empresaId}")
    public List<Producto> obtenerPorEmpresa(@PathVariable Long empresaId) {
        return productoService.obtenerPorEmpresa(empresaId);
    }

    // Crear un nuevo producto
    @PostMapping
    public Producto guardar(@Valid @RequestBody Producto producto) {
        return productoService.guardar(producto);
    }

    // Opcional: Obtener todos los productos del sistema
    @GetMapping
    public List<Producto> obtenerTodos() {
        Long EmpresaId = 0L;
        return productoService.obtenerPorEmpresa(EmpresaId);
    }
    //EndPoint para borrar: DELETE http://localhost:8080/api/v1/productos/2
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id){
        productoService.eliminarProducto(id);
        return ResponseEntity.noContent().build();
    }

    //Endpoint para actualizar : PUT http://localhost:8080/api/v1/productos/2
    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizar(@PathVariable Long id,@Valid @RequestBody Producto detalles){
        Producto actualizado = productoService.actualizarProducto(id,detalles);
        return ResponseEntity.ok(actualizado);

    }
}