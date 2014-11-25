module DashboardSelection { export var html = '<div class="tab-pane" id="dashboardSelection">                      <h3 class="leftpanel-header" style="width: 100%">Dashboards                    <div class="leftpanel-header-button-container">                      <button ng-show="editMode" ng-click="editMode = false; vm.stopEdit()" class="button fa fa-check leftpanel-header-button" />                         <button ng-show="editMode" class="button fa fa-plus leftpanel-header-button" ng-click="vm.addDashboard()"/>                        <button ng-hide="editMode" ng-click="editMode = true; vm.startEdit()" class="button fa fa-pencil leftpanel-header-button" />                                          </div>                                   </h3>                <style>                                    </style>                <ul style="padding:0" data-ng-repeat="(key, value) in vm.$dashboardService.dashboards">                    <li >                        <div ng-class="{\'dashboard-selected\' : value == vm.$dashboardService.mainDashboard}" class="dashboard-item" >                            <span ng-click="vm.selectDashboard(key)" class="dashboard-name">{{value.name}}</span>                            <div ng-show="$parent.editMode" class="leftpanel-header-button-container" >                            <button ng-click="vm.removeDashboard(key)" class="button fa fa-trash leftpanel-header-button" />                            <button ng-hide="value.editMode" ng-click="value.editMode = true; vm.startDashboardEdit(key)" class="button fa fa-pencil leftpanel-header-button" />                                <button ng-show="value.editMode" ng-click="value.editMode = false" class="button fa fa-check leftpanel-header-button" />                                </div>                            </div>                        <div style="margin-top:0" ng-show="value.editMode" >                            <label class="control-label" for="dashboardTitle">Title</label>                            <div class="controls">                                <input id="dashboardTitle" name="textinput" type="text" ng-model="value.name" placeholder="placeholder" class="input-xlarge">                                </div>                            <label class="control-label" for="dashboardMap">Show Map</label>                            <div class="controls">                                <input id="dashboardMap" name="textinput" ng-click="vm.toggleMap()" type="checkbox" ng-model="value.showMap" placeholder="placeholder" class="input-xlarge">                                </div>                        </div>                    </li>                </ul>      </div>'; }