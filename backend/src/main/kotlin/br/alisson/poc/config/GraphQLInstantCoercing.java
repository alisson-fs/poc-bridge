package br.alisson.poc.config;

import java.math.BigInteger;
import java.time.Instant;

import graphql.language.IntValue;
import graphql.schema.Coercing;

public class GraphQLInstantCoercing implements Coercing<Instant, Long> {

	@Override
	public Long serialize(Object input) {
		if (input instanceof Instant) {
			return ((Instant) input).toEpochMilli();
		}
		return null;
	}

	@Override
	public Instant parseValue(Object input) {
		if (input instanceof Long) {
			return Instant.ofEpochMilli((Long) input);
		}
		return null;
	}

	@Override
	public Instant parseLiteral(Object input) {
		if (!(input instanceof IntValue)) {
			return null;
		}

		BigInteger istant = ((IntValue) input).getValue();
		return this.parseValue(istant.longValueExact());
	}
}
