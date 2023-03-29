package br.alisson.poc.config.graphql;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import br.ufsc.bridge.pec.backend.app.config.graphql.types.GraphQLInstantCoercing;

import graphql.schema.GraphQLScalarType;

@Configuration
public class GraphQLScalarsConfiguration {

	@Bean
	public GraphQLScalarType graphQLInstant() {
		return GraphQLScalarType.newScalar()
				.name("Instant").description("Instant type").coercing(new GraphQLInstantCoercing()).build();
	}
}