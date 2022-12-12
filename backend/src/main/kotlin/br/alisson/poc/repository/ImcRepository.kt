package br.alisson.poc.repository

import br.alisson.poc.model.Imc
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface ImcRepository: CrudRepository<Imc, Long> {

    // fun findWithQuantity(quantity: Int): MutableIterable<Imc> {
    //     val all  = findAll()
    //     val list = mutableListOf<Imc>()
    //     for (i in count()-1 downTo 0) {
    //         list.add(all.elementAt(i.toInt()))
    //     }
    //     return list
    // }
}