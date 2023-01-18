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
    return characters.map((character) => {
      return this._transformCharacter(character);
    });
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
      name: character.name ? character.name : 'No name info',
      gender: character.gender ? character.gender : 'No gender info',
      born: character.born ? character.born : 'No born info',
      died: character.died ? character.died : 'No death info',
      culture: character.culture ? character.culture : 'No culture info',
    };
  }

  _transformHouse(house) {
    return {
      name: house.name ? house.name : 'No name info',
      region: house.region ? house.region : 'No region info',
      words: house.words ? house.words : 'No words info',
      titles: house.titles ? house.titles : 'No titles info',
      overlord: house.overlord ? house.overlord : 'No overlord info',
      ancestalWeapons: house.ancestalWeapons ?
      house.ancestalWeapons : 'No ancestal weapons info',
    };
  }

  _transformHouse(book) {
    return {
      name: book.name ? book.name : 'No name info',
      numberOfPages: book.numberOfPages ?
      book.numberOfPages : 'No number of pages info',
      publisher: book.publisher ? book.publisher : 'No publisher info',
      released: book.released ? book.released : 'No release info',
    };
  }
};
