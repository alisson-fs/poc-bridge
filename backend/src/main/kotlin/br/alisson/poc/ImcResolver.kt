package br.alisson.poc

import br.alisson.poc.model.Imc
import br.alisson.poc.util.ImcUtils
import graphql.kickstart.tools.GraphQLResolver
import org.springframework.stereotype.Component
import java.time.Instant
import java.time.format.DateTimeFormatter
import java.time.format.FormatStyle

@Component
class ImcResolver: GraphQLResolver<Imc> {

    fun altura(altura: Double): String {
        return ImcUtils.formatUsToBr(altura)
    }

    fun peso(peso: Double): String {
        return ImcUtils.formatUsToBr(peso)
    }

    fun imc(imc: Double): String {
        return ImcUtils.formatUsToBr(imc)
    }

    fun dt_calculo(dt_calculo: Instant): String {
        return DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT).format(dt_calculo)
    }
}