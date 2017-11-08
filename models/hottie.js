// module.exports = [
//   {
//     name: "bird1",
//     age: 2,
//     image: "https://files.allaboutbirds.net/wp-content/uploads/2015/06/prow-featured.jpg"
//   },
//   {
//     name: "bird2",
//     age: 2,
//     image: "https://files.allaboutbirds.net/wp-content/uploads/2015/06/prow-featured.jpg"
//   },
//   {
//     name: "bird2",
//     age: 2,
//     image: "https://files.allaboutbirds.net/wp-content/uploads/2015/06/prow-featured.jpg"
//   }
// ]

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hottieSchema = new Schema({
  name: String,
  age: Number,
  image: String
});

var hottieModel = mongoose.model("hottie",hottieSchema);

module.exports = hottieModel;
