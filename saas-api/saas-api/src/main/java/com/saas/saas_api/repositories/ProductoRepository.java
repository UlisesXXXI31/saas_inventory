package com.saas.saas_api.repositories;

import com.saas.saas_api.entities.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    //Modelo personalizado para filtrar productos por empresa
    List<Producto> findByEmpresaIdOrderByIdDesc(Long empresaId);
}
