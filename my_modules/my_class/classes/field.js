/**
 * Field class for embed
 */
class fields {
    constructor() {
        this.fields = []
    }

    addField(name, value) {
        let field = {
            name: name,
            value: value
        };
        this.fields.push(field)
    }

    getFields() {
        return this.fields;
    }
}

module.exports = fields;