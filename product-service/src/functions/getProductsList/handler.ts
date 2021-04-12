import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs';
import { formatJSONResponse, middyfy } from '@libs';

import { schema } from './schema';
import { products } from '../../dbMock';

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
	try {
		if (!products || products.length === 0) {
			return formatJSONResponse([], 204);
		}

		return formatJSONResponse(products);
	} catch ({ statusCode, name, message }) {
		return formatJSONResponse({ name, message }, statusCode);
	}
};

export const getProductsList = middyfy(handler);
