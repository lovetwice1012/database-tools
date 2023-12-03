
class ColumnBuilder {
    constructor() {
        this.column = "";
        this.name = "";
    }

    setColumnName(name) {
        this.name = name;
        return this;
    }

    integer() {
        this.column += 'INTEGER';
        return this;
    }

    smallint() {
        this.column += 'SMALLINT';
        return this;
    }

    autoInteger() {
        this.column += 'INTEGER AUTO_INCREMENT';
        return this;
    }

    bigint() {
        this.column += 'BIGINT';
        return this;
    }

    tinyint() {
        this.column += 'TINYINT';
        return this;
    }

    boolean() {
        this.column += 'BOOLEAN';
        return this;
    }

    timestamp() {
        this.column += 'TIMESTAMP';
        return this;
    }

    autoTimestamp() {
        this.column += 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP';
        return this;
    }

    date() {
        this.column += 'DATE';
        return this;
    }

    datetime() {
        this.column += 'DATETIME';
        return this;
    }

    default(value) {
        this.column += ` DEFAULT ${value}`;
        return this;
    }

    text() {
        this.column += 'TEXT';
        return this;
    }

    varchar(length) {
        this.column += `VARCHAR(${length})`;
        return this;
    }

    varbinary(length) {
        this.column += `VARBINARY(${length})`;
        return this;
    }

    blob() {
        this.column += 'BLOB';
        return this;
    }

    binary(length) {
        this.column += `BINARY(${length})`;
        return this;
    }

    decimal(length, decimal) {
        this.column += `DECIMAL(${length},${decimal})`;
        return this;
    }

    float(length, decimal) {
        this.column += `FLOAT(${length},${decimal})`;
        return this;
    }

    double(length, decimal) {
        this.column += `DOUBLE(${length},${decimal})`;
        return this;
    }

    abstract() {
        this.column += 'ABSTRACT';
        return this;
    }

    array() {
        this.column += 'ARRAY';
        return this;
    }

    enum(...values) {
        this.column += `ENUM(${values.join(',')})`;
        return this;
    }

    json() {
        this.column += 'JSON';
        return this;
    }

    jsonb() {
        this.column += 'JSONB';
        return this;
    }

    char(length) {
        this.column += `CHAR(${length})`;
        return this;
    }

    currency(length, decimal) {
        this.column += `CURRENCY(${length},${decimal})`;
        return this;
    }

    current_timestamp() {
        this.column += 'CURRENT_TIMESTAMP';
        return this;
    }

    notNull() {
        this.column += ' NOT NULL';
        return this;
    }

    autoIncrement() {
        this.column += ' AUTO_INCREMENT';
        return this;
    }

    build() {
        if(this.name === '') throw new Error('Column name not set');
        if(this.column === '') throw new Error('Column option not set');
        return `${this.name} ${this.column}`;
    }

}

module.exports = ColumnBuilder;
