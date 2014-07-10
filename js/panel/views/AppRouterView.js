define(["backbone", "underscore", "jquery", "views/AppComponentView",
        "handlebars", "text!templates/appRouter.html"],
function(Backbone, _, $, AppComponentView, Handlebars, template) {

    var AppRouterView = AppComponentView.extend({

        template: Handlebars.compile(template),

    });
    return AppRouterView;
});
