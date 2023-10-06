package br.alisson.poc.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import graphql.schema.GraphQLScalarType;

@Configuration
public class GraphQLScalarsConfiguration {

	@Bean
	public GraphQLScalarType graphQLInstant() {
		return GraphQLScalarType.newScalar()
				.name("Instant").description("Instant type").coercing(new GraphQLInstantCoercing()).build();
	}
}
