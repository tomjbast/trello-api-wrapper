const request = require('request-promise')

class Trello {
  constructor(key, token) {
    this.uri = 'https://api.trello.com'
    this.key = key
    this.token = token
  }

  createAuth() {
    return { key: this.key, token: this.token }
  }

  makeGETRequest(url, query) {
    return this.makeRequest('GET', url, query)
  }

  makePOSTRequest(url, query) {
    return this.makeRequest('POST', url, query)
  }

  makePUTRequest(url, body, query) {
    return this.makeRequest('PUT', url, query)
  }

  makeDELETERequest(url) {
    return this.makeRequest('DELETE', url)
  }

  async makeRequest(method, url, query) {
    const qs = this.createAuth()
    const options = { method, uri: this.uri + url, json: true, qs }
    if (query) options.qs = Object.assign(query, qs)

    try {
      return await request(options)
    } catch (e) {
      console.log(e.message)
    }
  }

  // GET requests

  getBoards(memberId) {
    return this.makeGETRequest(`/1/members/${memberId}/boards`)
  }

  getOrgBoards(orgId) {
    return this.makeGETRequest(`/1/organizations/${orgId}/boards`)
  }

  getBoardMembers(boardId) {
    return this.makeGETRequest(`/1/boards/${boardId}/members`)
  };

  getListsOnBoard(boardId) {
    return this.makeGETRequest(`/1/boards/${boardId}/lists`)
  };

  getListsOnBoardByFilter(boardId, filter) {
    const query = { filter }
    return this.makeGETRequest(`/1/boards/${boardId}/lists`, query)
  };

  getCardsOnBoard(boardId) {
    return this.makeGETRequest(`/1/boards/${boardId}/cards`)
  };

  getCardsOnBoardWithExtraParams(boardId, extraParams) {
    const query = {}
    Object.assign(query, extraParams)

    return this.makeGETRequest(`/1/boards/${boardId}/cards`, query)
  };

  getLabelsForBoard(boardId) {
    return this.makeGETRequest(`/1/boards/${boardId}/labels`)
  };

  getCard(cardId) {
    return this.makeGETRequest(`/1/cards/${cardId}`)
  }

  getCardsOnList(listId) {
    return this.makeGETRequest(`/1/lists/${listId}/cards`)
  };

  getCardsOnListWithExtraParams(listId, extraParams) {
    const query = {}
    Object.assign(query, extraParams)

    return this.makeGETRequest(`/1/lists/${listId}/cards`, query)
  }

  getChecklistsOnCard(cardId) {
    return this.makeGETRequest(`/1/cards/${cardId}/checklists`)
  };

  getCardStickers(cardId) {
    return this.makeGETRequest(`/1/cards/${cardId}/stickers`)
  };

  getCardsForList(listId) {
    return this.makeGETRequest(`/1/lists/${listId}/cards`)
  };

  getMember(memberId) {
    return this.makeGETRequest(`/1/member/${memberId}`)
  };

  getMemberCards(memberId) {
    return this.makeGETRequest(`/1/members/${memberId}/cards`)
  };

  getOrgMembers(orgId) {
    return this.makeGETRequest(`/1/organizations/${orgId}/members`)
  };

// POST Requests

  addBoard(name, description, organizationId) {
    const query = { name }

    if (description) query.desc = description
    if (organizationId) query.idOrganization = organizationId

    return this.makePOSTRequest(`/1/boards/`, query)

  }

  async addCard(name, listId, description) {
    const query = { name, idList: listId }

    if (description) query.desc = description

    return this.makePOSTRequest(`/1/cards/`, query)
  }

  addCardWithExtraParams(name, extraParams, listId) {
    const query = { name, idList: listId }

    Object.assign(query, extraParams)

    return this.makePOSTRequest(`/1/cards`, query)
  }

  addListToBoard(boardId, name) {
    const query = { name }

    return this.makePOSTRequest(`/1/boards/${boardId}lists`, query)
  }

  addMemberToBoard(boardId, memberId, type) {
    const data = { type } // Valid Values: normal,admin,observer

    return this.makePOSTRequest(`/1/boards/${boardId}/members/${memberId}`, data)
  }

  addCommentToCard(cardId, comment) {
    const query = { text: comment }
    return this.makePOSTRequest(`/1/cards/${cardId}/actions/comments`, query)
  }

  addMemberToCard(cardId, memberId) {
    const query = { memberId }

    return this.makePOSTRequest(`/1/cards/${cardId}/members`, query)
  }

  addChecklistToCard(cardId, name) {
    const query = { name }

    return this.makePOSTRequest(`/1/cards/${cardId}/checklists`, query)
  }

  addItemToChecklist(checkListId, name, pos) {
    const query = {
      name,
      pos
    }

    return this.makePOSTRequest(`/1/checklists/ + checkListId + /checkItems`, query)
  }

  addLabelToCard(cardId, labelId) {
    const query = { value: labelId }

    return this.makePOSTRequest(`/1/cards/${cardId}/idLabels`, query)
  }

  addLabelOnBoard(boardId, name, color) {
    const query = {
      idBoard: boardId,
      color,
      name
    }

    return this.makePOSTRequest(`/1/labels`, query)
  }

  addDueDateToCard(cardId, dateValue) {
    const query = { value: dateValue }

    return this.makePOSTRequest(`/1/cards/${cardId}/due`, query)
  }

  // PUT (update)

  updateCard(cardId, field, value) {
    const query = { value }

    return this.makePUTRequest(`/1/cards/${cardId}/${field}`, query)
  };

  updateChecklist(checklistId, field, value) {
    const query = { value }

    return this.makePUTRequest(`/1/checklists/${checklistId}/${field}`, query)
  };

  updateCardName(cardId, name) {
    return this.updateCard(cardId, 'name', name)
  };

  updateCardDescription(cardId, description) {
    return this.updateCard(cardId, 'desc', description)
  }

  updateCardList(cardId, listId) {
    return this.updateCard(cardId, 'idList', listId)
  }

  updateBoardPref(boardId, field, value) {
    const query = { value }
    return this.makePUTRequest(`/1/boards/${boardId}/prefs/${field}`, query)
  }

  updateListName(listId, name) {
    const query = { value: name }
    return this.makePUTRequest(`/1/lists/${listId}/name`, query)
  }

  updateLabel(labelId, field, value) {
    const query = { value }
    return this.makePUTRequest(`/1/labels/${labelId}/${field}`, query)
  }

  updateLabelName(labelId, name) {
    return this.updateLabel(labelId, 'name', name)
  }

  updateLabelColor(labelId, color) {
    return this.updateLabel(labelId, 'color', color)
  }

  // DELETE

  deleteCard(cardId) {
    return this.makeDELETERequest(`/1/cards/${cardId}`)
  }

  deleteLabel(labelId) {
    return this.makeDELETERequest(`/1/labels/${labelId}`)
  }

  deleteLabelFromCard(cardId, labelId) {
    return this.makeDELETERequest(`/1/cards/${cardId}/idLabels/${labelId}`)
  }

}

module.exports = Trello
