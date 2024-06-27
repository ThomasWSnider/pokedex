export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName || ''
    this.img = data.sprites?.front_default || data.img
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
  }

  get activePokeHTMLTemplate() {
    return `
        <div class="col-12">
          <h2 class="text-center text-capitalize my-3">${this.name}</h2>
        </div>
        <div class="col-12">
          <div class=" text-center mb-3">
            <img class="img-fluid poke-img rounded" src="${this.img}" alt="${this.name} hanging out"
              title="${this.name}">
          </div>
        </div>
        <div class="col-10 bg-grey rounded px-4 py-1">
          <div class="bg-danger text-light rounded p-3">
            <div class="row">
              <div class="col-6">
                <h5>Height: ${this.height}</h5>
                <h5 class="text-capitalize">Types: ${this.pokeType}</h5>
              </div>
              <div class="col-6">
                <h5>Weight: ${this.weight}</h5>
              </div>
              <div class="col-12">
                <div class="text-end">
                  <button onclick="app.SandboxPokemonsController.catchPokemon()" class="btn btn-outline-light"><i class="mdi mdi-pokeball"></i> Catch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
  }

  get pokeType() {
    let typeText = ``
    this.types.forEach((type) => typeText += `${type.type.name}, `)
    return typeText
  }
}


// name: String, required
// nickName: String,
// img: String, required
// weight: String,
// height: String,
// types: undefined,
// creatorId: SchemaObjectId, required