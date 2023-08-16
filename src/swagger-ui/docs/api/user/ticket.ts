export default {
  '/api/user/ticket': {
    post: {
      tags: ['User Ticket'],
      summary: '티켓 생성',
      description: '티켓 생성',
      requestBody: {
        content: {
          'multipart/form-data': {
            schema: {
              type: 'object',
              properties: {
                categoryId: {
                  type: 'int',
                  description: '카테고리 id',
                  example: 1,
                },
                title: {
                  type: 'string',
                  description: '타이틀',
                  example: '영화제목',
                },
                showDate: {
                  type: 'date',
                  description: '관람일',
                  example: '2023-08-14',
                },
                place: {
                  type: 'string',
                  description: '장소',
                  example: '성수 메가박스',
                },
                price: {
                  type: 'int',
                  description: '금액',
                  example: 100000,
                },
                rating: {
                  type: 'int',
                  description: '별점',
                  example: 3,
                },
                review: {
                  type: 'string',
                  description: '리뷰',
                  example: '오늘 영화봄',
                },
                file: {
                  type: 'array',
                  items: {
                    type: 'string',
                    format: 'binary',
                  },
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: '생성한 ticket id',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  artsyData: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'int',
                        description: '티켓 id',
                        example: 1,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  '/api/user/ticket/{ticketId}': {
    get: {
      tags: ['User Ticket'],
      summary: '티켓 상세 조회',
      description: '티켓 상세 조회',
      parameters: [
        {
          name: 'ticketId',
          in: 'path',
          description: '티켓 ID',
          schema: {
            type: 'int',
          },
        },
      ],
      responses: {
        200: {
          description: '티켓 상세',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  artsyData: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'int',
                        description: '티켓 id',
                        example: 1,
                      },
                      categoryId: {
                        type: 'int',
                        description: '카테고리 id',
                        example: 1,
                      },
                      categoryName: {
                        type: 'string',
                        description: '카테고리 명',
                        example: '영화',
                      },
                      categoryColor: {
                        type: 'string',
                        description: '카테고리 색상',
                        example: '#A888FF',
                      },
                      title: {
                        type: 'string',
                        description: '타이틀',
                        example: '영화제목',
                      },
                      showDate: {
                        type: 'date',
                        description: '관람일',
                        example: '2023-08-14',
                      },
                      place: {
                        type: 'string',
                        description: '장소',
                        example: '성수 메가박스',
                      },
                      price: {
                        type: 'int',
                        description: '금액',
                        example: 100000,
                      },
                      rating: {
                        type: 'int',
                        description: '별점',
                        example: 3,
                      },
                      review: {
                        type: 'string',
                        description: '리뷰',
                        example: '오늘 영화봄',
                      },
                      createDate: {
                        type: 'Timestamp',
                        description: '등록일',
                      },
                      updateDate: {
                        type: 'Timestamp',
                        description: '수정일',
                      },
                      files: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            id: {
                              type: 'int',
                              description: '이미지 id',
                              example: 1,
                            },
                            imageUrl: {
                              type: 'string',
                              description: '이미지 url',
                              example: 'http://localhost:5000/api/api-docs/',
                            },
                            originalName: {
                              type: 'string',
                              description: '오리진 파일명',
                              example: '원래이름.jpg',
                            },
                            fileName: {
                              type: 'string',
                              description: '파일명',
                              example: '변경된이름.jpg',
                            },
                            width: {
                              type: 'int',
                              description: '가로 사이즈',
                              example: 100,
                            },
                            height: {
                              type: 'int',
                              description: '세로 사이즈',
                              example: 100,
                            },
                            extension: {
                              type: 'string',
                              description: '확장자',
                              example: 'jpg',
                            },
                            fileSize: {
                              type: 'int',
                              description: '이미지 파일 크기',
                              example: 1000,
                            },
                            isPrimary: {
                              type: 'boolean',
                              description: '대표 이미지 여부',
                              example: true,
                            },
                            createDate: {
                              type: 'Timestamp',
                              description: '등록일',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
