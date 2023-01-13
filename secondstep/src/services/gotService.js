/* eslint-disable require-jsdoc */
export default class GotService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    };

    return await res.json();
  }

  async getAllCharacters() {
    const characters = await this.getResource(`/characters?page=5&pageSize=10`);
    return characters.map(this._transformCharacter);
  }

  async getCharacter(id) {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  }

  getAllHouses() {
    return this.getResource(`/houses/`);
  }

  getHouse(id) {
    return this.getResource(`/houses/${id}`);
  }

  getAllBooks() {
    return this.getResource(`/books/`);
  }

  getBook(id) {
    return this.getResource(`/books/${id}`);
  }

  _transformCharacter(character) {
    return {
      name: character.name,
      gender: character.gender,
      born: character.born,
      died: character.died,
      culture: character.culture,
    };
  }

  _transformHouse(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: overlord.overlord,
      ancestalWeapons: house.ancestalWeapons,
    };
  }

  _transformHouse(book) {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publisher: book.publisher,
      released: book.released,
    };
  }
};
