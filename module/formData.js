let formData = {};

function setFormData(data) {
  formData = { ...formData, ...data };
}

function getFormData() {
  return formData;
}

module.exports = { setFormData, getFormData };
