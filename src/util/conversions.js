export default {
  formdataToObject: function (formData) {
    const o = {};
    for (var pair of formData.entries()) {
      o[pair[0]] = pair[1]
      console.log(pair)
    }
    return o

  }
}
