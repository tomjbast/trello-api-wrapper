const Trello = require('../trello')
const nock = require('nock')

const {
  testCard,
  testListsOnBoard,
  testAddCard,
  testMemberCard,
  testAddBoard,
  testAddList,
  testDeleteCard
} = require('../mockReturns')

const trello = new Trello('Your Key Here', 'Your Token Here')

// GETS
test('getCard', async () => {

  const validCardId = '5d29a1bb3bokr2DFVs252f86a0268b'

  nock('https://api.trello.com')
    .get(uri => uri.includes(`/1/cards/${validCardId}`))
    .reply(200, [testCard])

  const trelloRsp = await trello.getCard(validCardId)
  expect(trelloRsp.length).toBe(1)
  expect(typeof trelloRsp[0].id).toBe('string')
})

test('getCardsOnBoard', async () => {

  const validBoardId = '5b8bfc99gfssfy5Ebdf7cf1db'

  nock('https://api.trello.com')
    .get(uri => uri.includes(`/1/boards/${validBoardId}/cards`))
    .reply(200, [testCard])

  const trelloRsp = await trello.getCardsOnBoard(validBoardId)
  expect(trelloRsp.length).toBeGreaterThanOrEqual(1)
  expect(typeof trelloRsp[0].id).toBe('string')
})

test('getCardsOnList', async () => {

  const validListId = '5b8bfc99gfssfy5Ebdf7cf1db'

  nock('https://api.trello.com')
    .get(uri => uri.includes(`/1/lists/${validListId}/cards`))
    .reply(200, [testCard])

  const trelloRsp = await trello.getCardsOnList(validListId)
  expect(trelloRsp.length).toBeGreaterThanOrEqual(1)
  expect(typeof trelloRsp[0].id).toBe('string')
})

test('getListsOnBoard', async () => {

  const validBoardId = '5b8bfc99b2a49e6bdf7cf1db'

  nock('https://api.trello.com')
    .get(uri => uri.includes(`/1/boards/${validBoardId}/lists`))
    .reply(200, testListsOnBoard)

  const trelloRsp = await trello.getListsOnBoard(validBoardId)
  expect(trelloRsp.length).toBeGreaterThanOrEqual(1)
  expect(typeof trelloRsp[0].id).toBe('string')
})

test('getListsOnBoard', async () => {

  const validBoardId = '5b8bfc99b2a49e6bdf7cf1db'

  nock('https://api.trello.com')
    .get(uri => uri.includes(`/1/boards/${validBoardId}/lists`))
    .reply(200, testListsOnBoard)

  const trelloRsp = await trello.getListsOnBoard(validBoardId)
  expect(trelloRsp.length).toBeGreaterThanOrEqual(1)
  expect(typeof trelloRsp[0].id).toBe('string')
})

test('getMember', async () => {

  const validMemberId = '5dsdf39dj28dD2bb3bokr2DFsb'

  nock('https://api.trello.com')
    .get(uri => uri.includes(`/1/member/${validMemberId}`))
    .reply(200, testMemberCard)

  const trelloRsp = await trello.getMember(validMemberId)
  expect(typeof trelloRsp).toBe('object')
  expect(typeof trelloRsp.id).toBe('string')
  expect(trelloRsp.idOrganizations.length).toBeGreaterThanOrEqual(1)
})

// POSTS
test('addCard', async () => {

  const validListId = '5b8bfc99gfssfy5Ebdf7cf1db'

  nock('https://api.trello.com')
    .post(uri => uri.includes('/1/cards/'))
    .reply(201, testAddCard)

  const trelloRsp = await trello.addCard('Test Card', 'test desc', validListId)
  expect(trelloRsp.id).toBe('5d57f8e1fb5425edwfb72fbbe')
  expect(trelloRsp.name).toBe('Test Card')
})

test('addBoard', async () => {

  const validOrgId = '5b8783ghjsdDw3Ddhddscf1db'

  nock('https://api.trello.com')
    .post(uri => uri.includes(`/1/boards/`))
    .reply(201, testAddBoard)

  const trelloRsp = await trello.addBoard('Test Board', 'Test Board Desc', validOrgId)
  expect(trelloRsp.id).toBe('5d57f8e1fdfsjk45425edwGHb72fbbe')
  expect(typeof trelloRsp).toBe('object')
  expect(trelloRsp.name).toBe('Test Board')
})

test('addListToBoard', async () => {

  const validBoardId = '902hFs283ghjsdDw3Ddhddscf1db'

  nock('https://api.trello.com')
    .post(uri => uri.includes(`/1/boards/${validBoardId}/lists`))
    .reply(201, testAddList)

  const trelloRsp = await trello.addListToBoard(validBoardId, 'List Test Name')
  expect(typeof trelloRsp).toBe('object')
  expect(trelloRsp.id).toBe('23rsf9w5eabfd24wef2c')
  expect(trelloRsp.name).toBe('a new list!')
  expect(trelloRsp.pos).toBeDefined()
})

// PUTS

// DELETES
test('deleteCard', async () => {

  const validCardId = 'h73Fkjd82Fkjdsd1234fd'

  nock('https://api.trello.com')
    .delete(uri => uri.includes(`/1/cards/${validCardId}`))
    .reply(204, testDeleteCard)

  const trelloRsp = await trello.deleteCard(validCardId)
  expect(trelloRsp.limits).toBeDefined()

})
