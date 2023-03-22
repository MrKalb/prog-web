export class TestClass {

    constructor(id, name, description) {
        this.id = id
        this.name = name
        this.description = description
    }

    _id() {
      return this.id 
    }

    _id(id) {
        this.id = id
    }

    _name() {
        return this.name; 
    }

    _name(name) {
        this.name = name
    }

    _description() {
        return this.description
    }

    _description(description) {
        this.description = description
    }
 }