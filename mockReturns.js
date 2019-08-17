// The returns in this file are copies of actual returns given by the trello API (with false IDs etc)

const testCard = {
  'id': '5d29a1bb3bokr2DFVs252f86a0268b',
  'checkItemStates': null,
  'closed': false,
  'dateLastActivity': '2019-08-08T18:47:43.019Z',
  'desc': 'Our test card description',
  'descData': null,
  'dueReminder': null,
  'idBoard': '5b8bfc99gfssfy5Ebdf7cf1db',
  'idList': '5b8bfc99b2a4F52Hij01f7cf1de',
  'idMembersVoted': [],
  'idShort': 2,
  'idAttachmentCover': null,
  'idLabels': [
    '5d4c6e4e96cf4dda2d24vh66'
  ],
  'manualCoverAttachment': false,
  'name': 'Test Card',
  'pos': 131071,
  'shortLink': 'Efd9qD7',
  'badges': {
    'attachmentsByType': {
      'trello': {
        'board': 0,
        'card': 0
      }
    },
    'location': false,
    'votes': 0,
    'viewingMemberVoted': false,
    'subscribed': false,
    'fogbugz': '',
    'checkItems': 0,
    'checkItemsChecked': 0,
    'comments': 0,
    'attachments': 0,
    'description': false,
    'due': null,
    'dueComplete': false
  },
  'dueComplete': false,
  'due': null,
  'idChecklists': [],
  'idMembers': [],
  'labels': [
    {
      'id': '5d4c6e4e96c67dpln2F014499',
      'idBoard': '5b8bfc99gfssfy5Ebdf7cf1db',
      'name': 'labelName',
      'color': 'lime'
    }
  ],
  'shortUrl': 'https://trello.com/c/Efd9qUD7',
  'subscribed': false,
  'url': 'https://trello.com/c/Efd9qUD7/2-pj'
}

const testListsOnBoard = [
  {
    id: '5b8bfc99b2a49e6bdf7cf1dc',
    name: 'To Do',
    closed: false,
    idBoard: '5b8bfc99b2a49e6bdf7cf1db',
    pos: 16384,
    subscribed: false,
    softLimit: null
  },
  {
    id: '5b8bfc99b2a49e6bdf7cf1dd',
    name: 'Doing',
    closed: false,
    idBoard: '5b8bfc99b2a49e6bdf7cf1db',
    pos: 32768,
    subscribed: false,
    softLimit: null
  },
  {
    id: '5b8bfc99b2a49e6bdf7cf1de',
    name: 'Done',
    closed: false,
    idBoard: '5b8bfc99b2a49e6bdf7cf1db',
    pos: 49152,
    subscribed: false,
    softLimit: null
  }]

const testAddCard = {
  id: '5d57f8e1fb5425edwfb72fbbe',
  name: 'Test Card'
}

const testAddBoard = {
  id: '5d57f8e1fdfsjk45425edwGHb72fbbe',
  name: 'Test Board',
  desc: 'Test Board Desc'
}

const testAddList = {
  id: '23rsf9w5eabfd24wef2c',
  name: 'a new list!',
  closed: false,
  idBoard: '4kd8bf99b2a4e6bdf7cF8sdb',
  pos: 8192,
  limits: {}
}

const testMemberCard = {
  id: '5b8bfc95fa1c6d2bc88a808c',
  memberType: 'normal',
  idOrganizations: ['5bcdb79fjokse41e2a27d34rdec'],
}

const testDeleteCard = {
  limits: {}
}

module.exports = {
  testCard,
  testListsOnBoard,
  testAddCard,
  testMemberCard,
  testAddBoard,
  testAddList,
  testDeleteCard
}
