import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs';
import { formatJSONResponse, middyfy } from '@libs';

import { schema } from './schema';
import { products } from '../../dbMock';

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async ({ pathParameters }) => {
	try {
		const product = products.find(({ id }) => id === pathParameters.id);

		if (!product) {
			return formatJSONResponse({
				name: 'No content',
				message: 'Product not found',
			}, 404);
		}

		return formatJSONResponse(product);
	} catch ({ statusCode, name, message }) {
		return formatJSONResponse({ name, message }, statusCode);
	}
};

export const getProductById = middyfy(handler);
