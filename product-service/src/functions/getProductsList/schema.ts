export const schema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      count: { type: 'integer' },
      description: { type: 'string' },
      id: { type: 'string' },
      price: { type: 'number' },
      title: { type: 'string' },
      image: { type: 'string' },
    },
  },
  minItems: 0,
  uniqueItems: true,
};
