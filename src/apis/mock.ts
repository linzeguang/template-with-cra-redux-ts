import Mock from 'mockjs'

Mock.setup({
  timeout: '500-4000',
})

Mock.mock(/\/list/, 'post', ({ body }) => {
  const { page, page_size } = JSON.parse(body)

  return Mock.mock({
    code: 200,
    message: 'success',
    data: {
      [`list|${page_size || 10}`]: [
        {
          'id|+1': 1,
          'sex|1': [0, 1],
          userName: '@cname',
          birthday: '@date',
          address: '@county(true)',
        },
      ],
      page: page || 1,
      page_size: page_size || 10,
      total: 100,
    },
  })
})

Mock.mock(/\/test/, 'get', () =>
  Mock.mock({
    code: 200,
    message: 'success',
    data: '@guid',
  }),
)
