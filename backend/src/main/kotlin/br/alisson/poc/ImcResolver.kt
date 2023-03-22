package br.alisson.poc

import br.alisson.poc.model.Imc
import br.alisson.poc.util.ImcUtils
import br.alisson.poc.util.ImcUtils.Companion.formatDate
import graphql.kickstart.tools.GraphQLResolver
import org.springframework.stereotype.Component

@Component
class ImcResolver: GraphQLResolver<Imc> {

    fun altura(imc: Imc): String {
        return ImcUtils.formatUsToBr(imc.altura)
    }

    fun peso(imc: Imc): String {
        return ImcUtils.formatUsToBr(imc.peso)
    }

    fun imc(imc: Imc): String {
        return ImcUtils.formatUsToBr(imc.imc)
    }

    fun dt_calculo(imc: Imc): String {
        return formatDate(imc.data)
    }
}