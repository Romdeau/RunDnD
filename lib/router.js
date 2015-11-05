FlowRouter.route('/', {
  name: "homePage",
  action: function() {
      Meteor.subscribe('characters');
      BlazeLayout.render("homeLayout", { top: "header", main: "homePage", footer: "footer" });
  }
});

var characterRoute = FlowRouter.group({
  prefix: "/characters"
});

characterRoute.route('/', {
  name: "characterList",
  action: function() {
    Meteor.subscribe('characters');
    BlazeLayout.render("charactersLayout", { top: "header", main: "charactersList", footer: "footer" });
  }
})
