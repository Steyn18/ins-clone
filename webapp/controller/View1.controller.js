sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("progressindicator.controller.View1", {
      onInit: function () {
        this.getView().byId("password")._getValueHelpIcon().setSrc(null);
      },
      onPassword: function (oEvent) {
        if (oEvent.getSource().getValue().length > 0) {
          var id = oEvent.getSource().getId();
          this.getView().byId(id)._getValueHelpIcon().setSrc("sap-icon://hide");
        } else {
          this.getView().byId(id)._getValueHelpIcon().setSrc(null);
        }
      },
      onValueHelp: function (oEvent) {
        var id = oEvent.getSource().getId();

        if (oEvent.getSource().getValue().length > 0) {
          this.getView().byId(id).setType("Text");
          this.getView().byId(id)._getValueHelpIcon().setSrc("sap-icon://show");
        } else {
          this.getView().byId(id).setType("Password");
          this.getView().byId(id)._getValueHelpIcon().setSrc("sap-icon://hide");
        }

      }
    });
  });
