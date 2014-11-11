/*
 * Copyright (c) 2011-2014 BlackBerry Limited.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import bb.cascades 1.0
NavigationPane {
    onPushTransitionEnded: {
        Application.menuEnabled = false
    }
    onCreationCompleted: {
        Application.menuEnabled = true;
    }
    id: nav
    Menu.definition: MenuDefinition {
        helpAction: HelpActionItem {

        }
        settingsAction: SettingsActionItem {

        }
    }
    Page {
        titleBar: TitleBar {
            title: qsTr("Dev Tools Pro")
            appearance: TitleBarAppearance.Branded

        }
        Container {
            ListView {
                id: mainlist
                dataModel: XmlDataModel {
                    source: "features.xml"
                }
                onTriggered: {
                    var item = dataModel.data(indexPath);
                    console.log("Pushing:" + item.target)
                    var t = Qt.createComponent(item.target).createObject(nav);
                    nav.push(t)
                }
                listItemComponents: [
                    ListItemComponent {
                        type: "item"
                        StandardListItem {
                            title: ListItemData.title
                            //                            status: ListItemData.version
                            imageSource: ListItemData.icon
                            imageSpaceReserved: true
                        }
                    }
                ]
            }

        }

    }
    onPopTransitionEnded: {
        page.destroy();
        Application.menuEnabled = true
    }
}
