export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName || ''
  }
}


// name: String, required
// nickName: String,
// img: String, required
// weight: String,
// height: String,
// types: undefined,
// creatorId: SchemaObjectId, required