var app = new Vue({
  el: "#app",
  data: {
    info: [],
	
  },
  methods: {
	getPic(id) {
		let urlInfo = `url(https://www.punjabkingsipl.in/static-assets/images/teams/${id}.png?v=2.3)`
 return urlInfo;
}
}
,
  created() {
    fetch("./data.json", { mode: "no-cors" })
      .then((res) => res.json())
      .then(
        (data) =>
          (this.info = data.standings.stages.stage[0].group[0].entities.entity)
      );
  },
});
