interface Model<T extends Document> {}

function model<T extends Document>(): Model<T> {
return {} as Model<T>;
}

interface Data extends Document{
  created: Date
}
class Collection<T extends Data> {

}
