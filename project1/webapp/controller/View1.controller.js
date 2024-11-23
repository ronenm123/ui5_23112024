sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                var oMydata = new sap.ui.model.json.JSONModel();
                oMydata.loadData("./data/student.json","", false);
                debugger;
                console.log(JSON.stringify(oMydata.getData()));

                var oInput = this.getView().byId("inp1");
                oInput.setModel(oMydata);

            }
        });
    });
