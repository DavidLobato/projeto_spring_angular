package br.com.projeto.springboot.angular.api.repositiry;

import org.springframework.data.repository.CrudRepository;
import br.com.projeto.springboot.angular.api.model.Cliente;

public interface Repository  extends CrudRepository<Cliente,Long>{

}
