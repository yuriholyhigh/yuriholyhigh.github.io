var indexView = {
    init: function () {
        this.pageName = "index";
        this.render();
    },
    render: function () {
        window.console.log(this.pageName);
    }
};
indexView.init();