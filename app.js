let app = new Vue({
  el: "#app",
  data: {
    nomeInput: "",
    lista: [],
  },
  methods: {
    add: function (e) {
      e.preventDefault();

      if (this.nomeInput.length > 0) {
        this.lista.push(this.nomeInput);
        this.nomeInput = "";
      }
    },
  },
});
