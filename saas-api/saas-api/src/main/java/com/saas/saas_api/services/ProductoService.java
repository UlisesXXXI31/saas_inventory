package com.saas.saas_api.services;

import com.saas.saas_api.entities.Producto;
import com.saas.saas_api.repositories.ProductoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor//Inyección de dependencias a través del constructor
public class ProductoService {
    private final ProductoRepository productoRepository;

    public List<Producto> obtenerPorEmpresa(Long EmpresaId) {
        return productoRepository.findByEmpresaIdOrderByIdDesc(EmpresaId);
    }

    public Producto guardar(Producto producto) {

        if(producto.getPrecio() != null && producto.getPrecio() < 0) {
            throw new IllegalArgumentException("El precio no puede ser negativo");
        }
        return productoRepository.save(producto);
    }

    //Borrar un Productompor su ID
    public void eliminarProducto(long id){
        productoRepository.deleteById(id);
    }

    //Actualizar un producto existente
    public Producto actualizarProducto(Long id, Producto productoDetalles){

        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Producto no encontrado con ID: " + id));

        producto.setNombre(productoDetalles.getNombre());
        producto.setDescripcion(productoDetalles.getDescripcion());
        producto.setPrecio(productoDetalles.getPrecio());
        producto.setStock(productoDetalles.getStock());

        return productoRepository.save(producto);
    }
}