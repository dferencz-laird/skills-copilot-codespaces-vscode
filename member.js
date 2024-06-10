function skilsMember() {
  return {
    name: 'member',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        format: 'uuid',
      },
      name: {
        type: 'string',
      },
      role: {
        type: 'string',
      },
      skills: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  };
}