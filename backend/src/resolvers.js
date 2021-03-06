const jsonData = require('./data.json');
const charactersData = jsonData.data.results;

module.exports = {
  Query: {
    characters(_, args, ctx, info) {
      const { offset = 0, limit = -1, search = '' } = args;
      const count = limit > 0 ? limit : charactersData.length;
      const filteredData = charactersData.filter(c => 
        c.name.toLowerCase().includes(search.toLowerCase())
      );
      const pageData = filteredData.slice(offset, offset + count);
      return {
        offset,
        limit,
        total: filteredData.length,
        count: pageData.length,
        results: pageData
      }
    },
    character(_, args, ctx, info) {
      const { id } = args;
      const character = charactersData.find(c => c.id == id);
      if (!character) {
        throw new Error('Character not found');
      }
      return character;
    }
  }
}
