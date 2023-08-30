export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      // = 사용자의 id 역할을 할 username
      title: 'Username', // 스튜디오 UI에서 보는 이름
      name: 'username', // 실제 DB(백엔드)에서 접근할 때 쓰는 이름(=key)
      type: 'string',
    },
    {
      // 사용자의 실제 이름
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    {
      title: 'Following',
      name: 'following',
      type: 'array',
      of: [
        // 어떤 배열인지
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(), // 배열 안에 중복된 데이터가 오지 못하게 됨
    },
    {
      title: 'Followers',
      name: 'followers',
      type: 'array',
      of: [
        // 어떤 배열인지
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(), // 배열 안에 중복된 데이터가 오지 못하게 됨
    },
    {
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
  ],
}
